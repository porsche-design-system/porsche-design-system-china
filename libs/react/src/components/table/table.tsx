import React, {
  CSSProperties,
  Fragment,
  useEffect,
  useRef,
  useState
} from 'react'
import { renderToString } from 'react-dom/server'
import { IconDown, IconArrowHeadRight, IconArrowHeadDown } from '@pui/icons'
import { componentClassNames } from '../../shared/class-util'
import { CheckBox } from '../checkbox/checkbox'
import { useDefaultSize } from '../../shared/hooks'
import './table.scss'

export enum SortType {
  ASC = 'asc',
  DES = 'des'
}

const ORDER_QUEUE = [undefined, SortType.DES, SortType.ASC]

export interface Sorter {
  key?: string
  sortType?: SortType
}

export interface TableColumn {
  title?: string
  key?: string
  width?: number
  fixed?: 'none' | 'left' | 'right'
  multiline?: boolean
  sortable?: boolean
  sortIconPlace?: 'left' | 'right'
  headCellStyle?: CSSProperties
  rowCellStyle?: CSSProperties
  customCell?: (rowData: any) => React.ReactNode
}

export interface TableProps {
  /* 类名 */
  className?: string

  /* 样式 */
  style?: CSSProperties

  /* 列属性 */
  columns: TableColumn[]

  /* 数据 */
  data: any[]

  /* 可选定行 */
  selectable?: boolean

  /* 表格高度 */
  tableHeight?: string

  /* 大小 */
  size?: 'medium' | 'small'

  /* 排序事件 */
  onSort?: (sorter: Sorter) => void

  /* 选定事件 */
  onSelect?: (selectedRowData: any[]) => void

  /* 默认排序方式 */
  defaultSorter?: Sorter

  /* 可展开行 */
  rowExpandable?: boolean

  /* 可展开行渲染 */
  expandCell?: (rowData: any) => React.ReactNode

  /* 扩展箭头样式 */
  expandArrowStyle?: CSSProperties

  /* 单元纵向对齐方式 */
  cellVerticalAlign?: 'middle' | 'top' | 'bottom'
}

const Table = ({
  className,
  style,
  columns,
  data,
  onSort,
  onSelect,
  tableHeight = 'auto',
  size,
  selectable = false,
  rowExpandable = false,
  defaultSorter = {},
  cellVerticalAlign = 'middle',
  expandArrowStyle,
  expandCell
}: TableProps) => {
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
            bodyRef.current.scrollTop !==
              bodyRef.current.children[0].offsetHeight -
                bodyRef.current.offsetHeight) ||
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
      elem.onscroll = (evt: any) => {
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
      }
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
  const expandColumnWidth = 30
  const paddingLeftRight = 40
  let columnsTableWidth = 0
  const columnCount =
    columns.length + (selectable ? 1 : 0) + (rowExpandable ? 1 : 0)

  columns.forEach(col => {
    if (col.width === undefined) {
      col.width = 0
      if (col.customCell) {
        data.forEach(d => {
          const textLines = removeHtml(
            renderToString(col.customCell!(d) as any)
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
            const dataColWidth = getByteLength(d[col.key!]) * charWidth
            col.width =
              (col.width || 0) < dataColWidth ? dataColWidth : col.width
          }
        })
      }
      const headColWidth = getByteLength(col.title || '') * charWidth
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
    const classNameArr = [
      fixed ? 'pui-table-fixed-' + fixed : '',
      column.sortable ? 'sortable' : ''
    ]
    const isAscend =
      sorter.key === column.key && sorter.sortType === SortType.ASC
    const isDescend =
      sorter.key === column.key && sorter.sortType === SortType.DES
    return (
      <td
        key={'head' + inx}
        className={classNameArr.filter(item => !!item).join(' ')}
        style={style}
        onClick={() => sortCallback(column)}
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
    fixed: 'left' | 'right' | null,
    rowData: any,
    style: CSSProperties
  ) => {
    return (
      <td
        key={'col' + inx}
        className={
          (column.multiline ? 'pui-table-cell-multiline' : '') +
          ' ' +
          (fixed ? 'pui-table-fixed-' + fixed : '')
        }
        style={style}
      >
        <div className="cell-wrap" style={column.rowCellStyle}>
          {column.customCell
            ? column.customCell(rowData)
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
    onSelect && onSelect(rowData)
  }

  const sortCallback = (column: TableColumn) => {
    if (!column.sortable) {
      return
    }
    const prevOrder = sorter.key === column.key ? sorter.sortType : undefined
    const order = ORDER_QUEUE[ORDER_QUEUE.indexOf(prevOrder) + 1]
    setSorter({ key: column.key, sortType: order })
    onSort && onSort({ key: column.key, sortType: order })
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
                    className="pui-table-fixed-left"
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
          style={{ height: tableHeight }}
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
                    className="pui-table-fixed-left pui-table-measure"
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
                  <Fragment key={'row' + inx}>
                    <tr
                      className={
                        (selectedRows.includes(inx)
                          ? 'pui-table-selected-row'
                          : '') +
                        (isExpandRow ? ' pui-table-expand-row' : '') +
                        (rowExpandable && expandRows.includes(inx)
                          ? ' pui-table-expand-row-active'
                          : '')
                      }
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
                          className="pui-table-fixed-left pui-table-selectable "
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
                              }}
                            />
                          )}
                          {!isExpandRow && (
                            <IconArrowHeadRight
                              className="pui-table-expand-button"
                              style={expandArrowStyle}
                              onClick={() => {
                                setExpandRows([...expandRows, inx])
                              }}
                            />
                          )}
                        </td>
                      )}
                      {leftColumns.map((column, inx) =>
                        renderDataCell(column, inx, 'left', rowData, {
                          left:
                            fixColumnLeft[
                              inx +
                                (selectable ? 1 : 0) +
                                (rowExpandable ? 1 : 0)
                            ] + 'px'
                        })
                      )}
                      {middleColumns.map((column, inx) =>
                        renderDataCell(column, inx, null, rowData, {})
                      )}
                      {rightColumns.map((column, inx) =>
                        renderDataCell(column, inx, 'right', rowData, {
                          right: fixColumnRight[inx] + 'px'
                        })
                      )}
                    </tr>
                    {rowExpandable && expandRows.includes(inx) && (
                      <tr
                        className={isExpandRow ? ' pui-table-expand-row' : ''}
                      >
                        <td
                          className="pui-table-expand-cell"
                          colSpan={columnCount}
                        >
                          {expandCell ? expandCell(rowData) : ''}
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
