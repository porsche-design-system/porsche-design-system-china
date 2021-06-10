import React, { CSSProperties, useEffect, useRef, useState } from 'react'
import { renderToString } from 'react-dom/server'
import { componentClassNames } from '../../shared/class-util'
import { CheckBox } from '../checkbox/checkbox'
import './table.scss'

export interface TableColumn {
  title?: string
  key?: string
  width?: number
  fixed?: 'none' | 'left' | 'right'
  multiline?: boolean
  sortable?: boolean
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

  /* 最大行数 */
  maxRows?: number

  /* 排序事件 */
  // onSort?: (columnName: string) => void

  /* 选定事件 */
  onSelect?: (selectedRowData: any[]) => void
}

const Table = ({
  className,
  style,
  columns,
  data,
  // onSort,
  onSelect,
  maxRows,
  selectable = false
}: TableProps) => {
  const middleColumns: TableColumn[] = []
  const leftColumns: TableColumn[] = []
  const rightColumns: TableColumn[] = []
  const [allChecked, setAllChecked] = useState(false)

  const [selectedRows, setSelectedRows] = useState<number[]>([])
  useEffect(() => {
    setSelectedRows([])
  }, [data])

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

        const finalX = headRef.current.scrollLeft + variationX
        headRef.current.scrollLeft = finalX
        bodyRef.current.scrollLeft = finalX
        bodyRef.current.scrollTop += variationY
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
    return str.replace(/<[^>]+>/g, '')
  }

  const defaultWidth = 150
  const charWidth = 8
  const selectColumnWidth = 50
  const paddingLeftRight = 40
  let columnsTableWidth = 0
  columns.forEach(col => {
    if (col.width === undefined) {
      col.width = 0

      if (col.customCell) {
        data.forEach(d => {
          const dataColWidth =
            getByteLength(
              removeHtml(renderToString(col.customCell!(d) as any))
            ) * charWidth
          col.width = (col.width || 0) < dataColWidth ? dataColWidth : col.width
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
  const tableWidth = columnsTableWidth + 'px'
  const tableHeight = maxRows ? 60 * maxRows + 'px' : 'auto'

  const renderMeasureCell = (column: TableColumn, inx: number) => {
    return (
      <td
        key={'measure' + inx}
        className="pui-table-measure"
        style={{ width: column.width + 'px' }}
      />
    )
  }

  const renderTitleCell = (
    column: TableColumn,
    inx: number,
    fixed: 'left' | 'right' | null,
    style: CSSProperties
  ) => {
    return (
      <td
        key={'head' + inx}
        className={fixed ? 'pui-table-fixed-' + fixed : ''}
        style={style}
      >
        {column.title || ''}
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
        {column.customCell
          ? column.customCell(rowData)
          : column.key && rowData[column.key]}
      </td>
    )
  }

  const fixColumnLeft: number[] = [0]
  let accumulateLeft = 0
  if (selectable) {
    accumulateLeft += selectColumnWidth
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

  return (
    <div
      className={componentClassNames('pui-table', {}, className)}
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
                {leftColumns
                  .concat(middleColumns)
                  .concat(rightColumns)
                  .map((column, inx) => renderMeasureCell(column, inx))}
              </tr>
              <tr>
                {selectable && (
                  <td
                    className="pui-table-fixed-left pui-table-selectable"
                    style={{ left: 0 }}
                  >
                    <CheckBox
                      size="small"
                      checked={allChecked}
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
                      }}
                    />
                  </td>
                )}
                {leftColumns.map((column, inx) => {
                  return renderTitleCell(column, inx, 'left', {
                    left: fixColumnLeft[inx + (selectable ? 1 : 0)] + 'px'
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
          <table style={{ width: tableWidth }}>
            <tbody>
              <tr>
                {selectable && (
                  <td
                    className="pui-table-fixed-left  pui-table-measure"
                    style={{ width: selectColumnWidth + 'px' }}
                  />
                )}
                {leftColumns
                  .concat(middleColumns)
                  .concat(rightColumns)
                  .map((column, inx) => renderMeasureCell(column, inx))}
              </tr>
              {data.map((rowData, inx) => (
                <tr
                  key={'row' + inx}
                  className={
                    selectedRows.includes(inx) ? 'pui-table-selected-row' : ''
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
                            selectedRows.splice(selectedRows.indexOf(inx), 1)
                          }
                          selectCallback(selectedRows)
                          setAllChecked(selectedRows.length === data.length)
                        }}
                        checked={selectedRows.includes(inx)}
                      />
                    </td>
                  )}
                  {leftColumns.map((column, inx) =>
                    renderDataCell(column, inx, 'left', rowData, {
                      left: fixColumnLeft[inx + (selectable ? 1 : 0)] + 'px'
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export { Table }
