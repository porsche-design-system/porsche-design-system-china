import React, {
  CSSProperties,
  Fragment,
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react'
import classNames from 'classnames'
import { renderToString } from 'react-dom/server'
import { IconDown, IconArrowHeadRight, IconArrowHeadDown } from '@pui/icons'
import { componentClassNames } from '../../shared/class-util'
import { CheckBox } from '../checkbox/checkbox'
import { useDefaultSize } from '../../shared/hooks'
import './table.scss'

export enum SortType {
  ASC = 'asc',
  DESC = 'desc'
}

const ORDER_QUEUE = [undefined, SortType.DESC, SortType.ASC]

export interface Sorter {
  key?: string
  sortType?: SortType
}

export interface TableColumn<T = any> {
  title?: ReactNode
  key?: keyof T
  width?: number
  fixed?: 'none' | 'left' | 'right'
  multiline?: boolean
  sortable?: boolean
  ignoreUnsortedState?: boolean
  sortIconPlace?: 'left' | 'right'
  headCellStyle?: CSSProperties
  rowCellStyle?: CSSProperties
  customCell?: (
    rowData: T,
    rowIndex: number,
    rowAction: { isExpand: boolean; setExpand: (b: boolean) => void }
  ) => React.ReactNode
  colSpan?: number
  cellMerge?: (
    rowData: T,
    rowIndex?: number
  ) => Record<'rowSpan' | 'colSpan', number> | {}
}

export interface TableProps<T = any, K = any> {
  /** 类名 */
  className?: string

  /** 样式 */
  style?: CSSProperties

  /** 列属性 */
  columns: TableColumn<T>[]

  /** 数据 */
  data: T[]

  /** 可选定行 */
  selectable?: boolean

  /** 表格高度 */
  height?: string

  /** 大小 */
  size?: 'medium' | 'small'

  /** 排序事件 */
  onSort?: (sorter: Sorter) => void

  /** 选定事件 */
  onSelect?: (selectedRowData: T[], allSelected?: boolean) => void

  /** 默认排序方式 */
  defaultSorter?: Sorter

  /** 可展开行 */
  rowExpandable?: boolean

  /** 可展开行数据 */
  expandData?: K[]

  /** 可展开行渲染 */
  expandCell?: (expandRowData: K) => React.ReactNode

  /** 行展开事件 */
  onExpand?: (rowData: T, index: number) => void

  /** 行收起事件 */
  onCollapse?: (rowData: T, index: number) => void

  /** 扩展箭头样式 */
  expandArrowStyle?: CSSProperties

  /** 单元纵向对齐方式 */
  cellVerticalAlign?: 'middle' | 'top' | 'bottom'

  /** 行样式 */
  rowClassName?: (rowData: T, rowNumber?: number) => string

  /** 行样式 */
  rowStyle?: (rowData: T, rowNumber?: number) => CSSProperties

  /** 行点击事件 */
  onRowClick?: (rowData: T, rowNumber?: number) => void
}

const Table = <T, K>({
  className,
  style,
  columns,
  data = [],
  onSort,
  onSelect,
  height = 'auto',
  size,
  selectable = false,
  rowExpandable = false,
  defaultSorter = {},
  cellVerticalAlign = 'middle',
  expandArrowStyle,
  expandData = [],
  onExpand,
  onCollapse,
  expandCell,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  rowClassName = (rowDate: T, inx?: number) => '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  rowStyle = (rowDate: T, inx?: number) => ({}),
  onRowClick
}: TableProps<T, K>) => {
  const middleColumns: TableColumn[] = []
  const leftColumns: TableColumn[] = []
  const rightColumns: TableColumn[] = []
  const [allChecked, setAllChecked] = useState(false)
  const [partChecked, setPartChecked] = useState(false)
  const [selectedRows, setSelectedRows] = useState<number[]>([])
  const [expandRows, setExpandRows] = useState<number[]>([])
  const [defaultSize] = useDefaultSize()
  size = size || defaultSize

  useEffect(() => {
    setExpandRows([])
    setSelectedRows([])
    setPartChecked(false)
    setAllChecked(false)
  }, [data])

  const [sorter, setSorter] = useState<Sorter>(defaultSorter)

  columns.forEach(col => {
    if (col.fixed === 'left') {
      leftColumns.push(col)
    } else if (col.fixed === 'right') {
      rightColumns.push(col)
    } else if (col.fixed === 'none' || !col.fixed) {
      middleColumns.push(col)
    }
  })

  const tableRef = useRef<any>(null)
  const headRef = useRef<any>(null)
  const bodyRef = useRef<any>(null)
  const isWheelMove = useRef(false)

  const updateShadow = () => {
    if (tableRef.current) {
      const scrollXPercentage =
        bodyRef.current.scrollLeft /
        (bodyRef.current.children[0].offsetWidth - bodyRef.current.offsetWidth)
      const cname =
        (scrollXPercentage > 0.02 ? 'pui-table-scrollLeft-true ' : '') +
        (scrollXPercentage < 0.98 ? 'pui-table-scrollRight-true' : '')
      if (tableRef.current.className !== cname) {
        tableRef.current.className = cname
      }
    }
  }

  const wheelMove = (tableContainer: HTMLDivElement) => {
    if (tableContainer) {
      tableRef.current = tableContainer
      tableContainer.onwheel = (evt: any) => {
        isWheelMove.current = true

        const variationX = parseInt(evt.deltaX)
        const variationY = parseInt(evt.deltaY)

        const scrollMaxX =
          bodyRef.current.children[0].offsetWidth - bodyRef.current.offsetWidth
        const scrollXPercentage = headRef.current.scrollLeft / scrollMaxX
        if (
          (bodyRef.current.scrollTop !== 0 &&
            Math.abs(
              bodyRef.current.scrollTop -
                (bodyRef.current.children[0].offsetHeight -
                  bodyRef.current.offsetHeight)
            ) > 1) ||
          variationY === 0
        ) {
          evt.preventDefault()
        }

        if (
          (scrollXPercentage === 0 && variationX < 0) ||
          (scrollXPercentage === 1 && variationX > 0)
        ) {
          evt.preventDefault()
        }

        if (Math.abs(variationX) > Math.abs(variationY)) {
          const finalX = headRef.current.scrollLeft + variationX
          headRef.current.scrollLeft = finalX
          bodyRef.current.scrollLeft = finalX
        } else {
          bodyRef.current.scrollTop += variationY
        }

        updateShadow()
      }
    }
  }

  const tableBodyRefLoaded = (elem: HTMLDivElement) => {
    if (elem) {
      bodyRef.current = elem
      updateShadow()
    }
  }

  const getByteLength = (str: string) => {
    let count = str.length
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) > 255) {
        count++
      }
    }
    return count
  }

  const removeHtml = (str: string) => {
    return str.replace(/<\/.+>/g, '\n').replace(/<[^>]+>/g, '')
  }

  const defaultWidth = 150
  const charWidth = 8
  const selectColumnWidth = 40
  const expandColumnWidth = size === 'medium' ? 35 : 30
  const paddingLeftRight = 40
  let columnsTableWidth = 0
  const columnCount =
    columns.length + (selectable ? 1 : 0) + (rowExpandable ? 1 : 0)

  columns.forEach(col => {
    if (col.width === undefined) {
      col.width = 0
      if (col.customCell) {
        data.forEach((d, inx) => {
          const textLines = removeHtml(
            renderToString(
              col.customCell!(d, inx, {
                isExpand: false,
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                setExpand: (b: boolean) => {}
              }) as any
            )
          ).split('\n')
          textLines.forEach(lineText => {
            const dataColWidth = getByteLength(lineText) * charWidth
            col.width =
              (col.width || 0) < dataColWidth ? dataColWidth : col.width
          })
        })
      } else if (!col.key) {
        col.width = defaultWidth
      } else {
        data.forEach(d => {
          if (d[col.key!]) {
            const dataColWidth =
              getByteLength(d[col.key! as string]) * charWidth
            col.width =
              (col.width || 0) < dataColWidth ? dataColWidth : col.width
          }
        })
      }
      const headColWidth =
        getByteLength(removeHtml((col.title || '').toString())) * charWidth
      col.width = col.width < headColWidth ? headColWidth : col.width
      col.width += paddingLeftRight
    }
    columnsTableWidth += col.width
  })

  columnsTableWidth += selectable ? selectColumnWidth : 0
  columnsTableWidth += rowExpandable ? expandColumnWidth : 0
  const tableWidth = columnsTableWidth + 'px'

  const renderMeasureCell = (column: TableColumn, inx: number) => {
    return (
      <td
        key={'measure' + inx}
        className="pui-table-measure"
        style={{ width: column.width + 'px' }}
      />
    )
  }

  const sortIcon = (isAscend: boolean, isDescend: boolean) => {
    return (
      <span className="sort-btn">
        <IconDown className={`asc-btn ${isAscend ? 'sort-active' : ''}`} />
        <IconDown className={`des-btn ${isDescend ? 'sort-active' : ''}`} />
      </span>
    )
  }

  const renderTitleCell = (
    column: TableColumn,
    inx: number,
    fixed: 'left' | 'right' | null,
    style: CSSProperties
  ) => {
    if (column.colSpan !== undefined && column.colSpan <= 0) {
      return null
    }
    const classNameArr = [
      fixed ? 'pui-table-fixed-' + fixed : '',
      column.sortable ? 'sortable' : ''
    ]
    const isAscend =
      sorter.key === column.key && sorter.sortType === SortType.ASC
    const isDescend =
      sorter.key === column.key && sorter.sortType === SortType.DESC
    return (
      <td
        key={'head' + inx}
        className={classNameArr.filter(item => !!item).join(' ')}
        style={style}
        onClick={() => sortCallback(column)}
        colSpan={column.colSpan}
      >
        <div className="title-content" style={column.headCellStyle}>
          {column.sortable &&
            column.sortIconPlace === 'left' &&
            sortIcon(isAscend, isDescend)}
          <span className="title-text">{column.title || ''}</span>
          {column.sortable &&
            (column.sortIconPlace === 'right' || !column.sortIconPlace) &&
            sortIcon(isAscend, isDescend)}
        </div>
      </td>
    )
  }

  const renderDataCell = (
    column: TableColumn,
    inx: number,
    rowIndex: number,
    fixed: 'left' | 'right' | null,
    rowData: any,
    style: CSSProperties
  ) => {
    if (column.cellMerge) {
      const cellMerge = column.cellMerge(rowData, rowIndex) as Record<
        'rowSpan' | 'colSpan',
        number
      >
      if (
        (cellMerge && cellMerge.rowSpan <= 0) ||
        (cellMerge && cellMerge.colSpan <= 0)
      ) {
        return null
      }
    }

    const isExpandRow = expandRows.includes(rowIndex)

    return (
      <td
        key={'col' + inx}
        className={
          (column.multiline ? 'pui-table-cell-multiline' : '') +
          ' ' +
          (fixed ? 'pui-table-fixed-' + fixed : '')
        }
        style={style}
        {...(column.cellMerge ? column.cellMerge(rowData, rowIndex) : {})}
      >
        <div className="cell-wrap" style={column.rowCellStyle}>
          {column.customCell
            ? column.customCell(rowData, rowIndex, {
                isExpand: isExpandRow,
                setExpand: (expand: boolean) => {
                  if (expand) {
                    if (!expandRows.includes(rowIndex)) {
                      setExpandRows([...expandRows, rowIndex])
                      onExpand && onExpand(rowData, rowIndex)
                    }
                  } else {
                    const rInx = expandRows.findIndex(elem => elem === rowIndex)
                    expandRows.splice(rInx, 1)
                    setExpandRows([...expandRows])
                    onCollapse && onCollapse(rowData, rowIndex)
                  }
                }
              })
            : column.key && rowData[column.key]}
        </div>
      </td>
    )
  }

  const fixColumnLeft: number[] = [0]
  let accumulateLeft = 0
  if (selectable) {
    accumulateLeft += selectColumnWidth
    fixColumnLeft.push(accumulateLeft)
  }
  if (rowExpandable) {
    accumulateLeft += expandColumnWidth
    fixColumnLeft.push(accumulateLeft)
  }
  leftColumns.forEach(col => {
    accumulateLeft += col.width!
    fixColumnLeft.push(accumulateLeft)
  })

  const fixColumnRight: number[] = [0]
  let accumulateRight = 0
  rightColumns.forEach(col => {
    accumulateRight += col.width!
    fixColumnRight.push(accumulateRight)
  })
  fixColumnRight.reverse().splice(0, 1)

  const selectCallback = (sRows: number[]) => {
    const rowData: any[] = []
    sRows.forEach(rowInx => {
      rowData.push(JSON.parse(JSON.stringify(data[rowInx])))
    })
    setSelectedRows([...sRows])
    onSelect && onSelect(rowData, rowData.length === data.length)
  }

  const sortCallback = (column: TableColumn) => {
    if (!column.sortable) {
      return
    }
    const prevOrder = sorter.key === column.key ? sorter.sortType : undefined
    let order = ORDER_QUEUE[ORDER_QUEUE.indexOf(prevOrder) + 1]
    if (column.ignoreUnsortedState && order === undefined) {
      order = ORDER_QUEUE[ORDER_QUEUE.indexOf(order) + 1]
    }
    setSorter({ key: column.key as string, sortType: order })
    onSort && onSort({ key: column.key as string, sortType: order })
  }

  return (
    <div
      className={componentClassNames('pui-table', { size }, className)}
      style={style}
    >
      <div ref={wheelMove}>
        <div ref={headRef} className="pui-table-head">
          <table style={{ width: tableWidth }}>
            <tbody>
              <tr>
                {selectable && (
                  <td
                    className="pui-table-fixed-left pui-table-measure"
                    style={{ width: selectColumnWidth + 'px' }}
                  />
                )}
                {rowExpandable && (
                  <td
                    className="pui-table-fixed-left pui-table-measure"
                    style={{ width: expandColumnWidth + 'px' }}
                  />
                )}
                {leftColumns
                  .concat(middleColumns)
                  .concat(rightColumns)
                  .map((column, inx) => renderMeasureCell(column, inx))}
              </tr>
              <tr>
                {selectable && (
                  <td
                    className="pui-table-fixed-left"
                    style={{
                      left: 0
                    }}
                  >
                    <CheckBox
                      size="small"
                      checked={allChecked}
                      partChecked={partChecked}
                      onCheckedChange={checked => {
                        if (checked) {
                          const fullSelectedRows: number[] = []
                          for (let i = 0; i < data.length; i++) {
                            fullSelectedRows.push(i)
                          }
                          setSelectedRows(fullSelectedRows)
                          selectCallback(fullSelectedRows)
                        } else {
                          setSelectedRows([])
                          selectCallback([])
                        }
                        setAllChecked(checked)
                        setPartChecked(false)
                      }}
                    />
                  </td>
                )}
                {rowExpandable && (
                  <td
                    style={{
                      left: (selectable ? selectColumnWidth : 0) + 'px'
                    }}
                  />
                )}
                {leftColumns.map((column, inx) => {
                  return renderTitleCell(column, inx, 'left', {
                    left:
                      fixColumnLeft[
                        inx + (selectable ? 1 : 0) + (rowExpandable ? 1 : 0)
                      ] + 'px'
                  })
                })}
                {middleColumns.map((column, inx) =>
                  renderTitleCell(column, inx, null, {})
                )}
                {rightColumns.map((column, inx) =>
                  renderTitleCell(column, inx, 'right', {
                    right: fixColumnRight[inx] + 'px'
                  })
                )}
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className="pui-table-body"
          ref={tableBodyRefLoaded}
          style={{ height }}
          onScroll={(evt: any) => {
            if (isWheelMove.current) {
              setTimeout(() => {
                isWheelMove.current = false
              }, 100)
              return
            }
            if (headRef.current) {
              headRef.current.scrollLeft = evt.target.scrollLeft
            }
            updateShadow()
          }}
        >
          <table
            style={{ width: tableWidth }}
            className={'pui-table-va-' + cellVerticalAlign}
          >
            <tbody>
              <tr>
                {selectable && (
                  <td
                    className="pui-table-fixed-left  pui-table-measure"
                    style={{ width: selectColumnWidth + 'px' }}
                  />
                )}
                {rowExpandable && (
                  <td
                    className="pui-table-measure"
                    style={{ width: expandColumnWidth + 'px' }}
                  />
                )}
                {leftColumns
                  .concat(middleColumns)
                  .concat(rightColumns)
                  .map((column, inx) => renderMeasureCell(column, inx))}
              </tr>
              {data.map((rowData, inx) => {
                const isExpandRow = expandRows.includes(inx)

                return (
                  <Fragment key={'rowf' + inx}>
                    <tr
                      key={'row' + inx}
                      className={classNames(
                        {
                          'pui-table-selected-row': selectedRows.includes(inx),
                          'pui-table-expand-row': isExpandRow,
                          'pui-table-expand-row-active':
                            rowExpandable && isExpandRow
                        },
                        rowClassName(rowData, inx)
                      )}
                      style={rowStyle(rowData, inx)}
                      onClick={() => {
                        onRowClick && onRowClick(rowData, inx)
                      }}
                    >
                      {selectable && (
                        <td
                          className="pui-table-fixed-left pui-table-selectable"
                          style={{ left: 0 }}
                        >
                          <CheckBox
                            size="small"
                            onCheckedChange={checked => {
                              if (checked) {
                                selectedRows.push(inx)
                              } else {
                                selectedRows.splice(
                                  selectedRows.indexOf(inx),
                                  1
                                )
                              }
                              selectCallback(selectedRows)
                              setAllChecked(
                                selectedRows.length === data.length &&
                                  selectedRows.length > 0
                              )
                              setPartChecked(
                                selectedRows.length < data.length &&
                                  selectedRows.length > 0
                              )
                            }}
                            checked={selectedRows.includes(inx)}
                          />
                        </td>
                      )}
                      {rowExpandable && (
                        <td
                          className="pui-table-selectable "
                          style={{ left: 0 }}
                        >
                          {isExpandRow && (
                            <IconArrowHeadDown
                              className="pui-table-expand-button"
                              style={expandArrowStyle}
                              onClick={() => {
                                const rInx = expandRows.findIndex(
                                  elem => elem === inx
                                )
                                expandRows.splice(rInx, 1)
                                setExpandRows([...expandRows])
                                onCollapse && onCollapse(rowData, inx)
                              }}
                            />
                          )}
                          {!isExpandRow && (
                            <IconArrowHeadRight
                              className="pui-table-expand-button"
                              style={expandArrowStyle}
                              onClick={() => {
                                setExpandRows([...expandRows, inx])
                                onExpand && onExpand(rowData, inx)
                              }}
                            />
                          )}
                        </td>
                      )}
                      {leftColumns.map((column, colInx) =>
                        renderDataCell(column, colInx, inx, 'left', rowData, {
                          left:
                            fixColumnLeft[
                              colInx +
                                (selectable ? 1 : 0) +
                                (rowExpandable ? 1 : 0)
                            ] + 'px'
                        })
                      )}
                      {middleColumns.map((column, colInx) =>
                        renderDataCell(column, colInx, inx, null, rowData, {})
                      )}
                      {rightColumns.map((column, colInx) =>
                        renderDataCell(column, colInx, inx, 'right', rowData, {
                          right: fixColumnRight[colInx] + 'px'
                        })
                      )}
                    </tr>
                    {rowExpandable && expandRows.includes(inx) && (
                      <tr
                        key={'rowe' + inx}
                        className={isExpandRow ? ' pui-table-expand-row' : ''}
                      >
                        <td
                          className="pui-table-expand-cell pui-table-expand-cell-row"
                          colSpan={columnCount}
                        >
                          {expandCell && expandData[inx]
                            ? expandCell(expandData[inx])
                            : ''}
                        </td>
                      </tr>
                    )}
                  </Fragment>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export { Table }
