import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { componentClassNames } from '../../shared/class-util';
import { CheckBox } from '../checkbox/checkbox';
import './table.scss';

export interface TableColumn {
  title?: string;
  key?: string;
  width?: number;
  fixed?: 'none' | 'left' | 'right';
  multiline?: boolean;
  sortable?: boolean;
  customCell?: (rowData: any) => React.ReactNode;
}

export interface TableProps {
  /* 类名 */
  className?: string;
  /* 样式 */
  style?: CSSProperties;

  /* 列属性 */
  columns: TableColumn[];

  /* 数据 */
  data: any[];

  /* 可选定行 */
  selectable?: boolean;

  /* 排序事件 */
  onSort?: (columnName: string) => void;

  /* 选定事件 */
  onSelect?: (selectedRowData: any[]) => void;
}

/**
 * Primary UI component for user interaction
 */
const Table = ({
  className,
  style,
  columns,
  data,
  onSort,
  onSelect,
  selectable = false
}: TableProps) => {
  const middleColumns: TableColumn[] = [];
  const leftColumns: TableColumn[] = [];
  const rightColumns: TableColumn[] = [];

  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  useEffect(() => {
    setSelectedRows([]);
  }, [data]);

  columns.forEach(col => {
    if (col.fixed === 'left') {
      leftColumns.push(col);
    } else if (col.fixed === 'right') {
      rightColumns.push(col);
    } else if (col.fixed === 'none' || !col.fixed) {
      middleColumns.push(col);
    }
  });

  const [isScrollLeft, setIsScrollLeft] = useState(false);
  const [isScrollRight, setIsScrollRight] = useState(false);

  const headRef = useRef<any>(null);
  const bodyRef = useRef<any>(null);

  const wheelMove = (tableContainer: HTMLDivElement) => {
    if (tableContainer) {
      tableContainer.onwheel = (evt: any) => {
        const variationX = parseInt(evt.deltaX);
        const variationY = parseInt(evt.deltaY);

        headRef.current.scrollLeft += variationX;
        bodyRef.current.scrollLeft = headRef.current.scrollLeft;
        bodyRef.current.scrollTop += variationY;

        const scrollXPercentage =
          headRef.current.scrollLeft /
          (bodyRef.current.children[0].offsetWidth - bodyRef.current.offsetWidth);

        setIsScrollLeft(scrollXPercentage > 0.02);
        setIsScrollRight(scrollXPercentage < 0.98);

        const scrollYPercentage =
          bodyRef.current.scrollTop /
          (bodyRef.current.children[0].offsetHeight - bodyRef.current.offsetHeight);

        if (scrollYPercentage > 0.01 && scrollYPercentage < 0.99) {
          evt.preventDefault();
        }

        if (
          (scrollXPercentage === 0 && variationX < 0) ||
          (scrollXPercentage === 1 && variationX > 0)
        ) {
          evt.preventDefault();
        }
      };
    }
  };

  const tableBodyRefLoaded = (elem: HTMLDivElement) => {
    if (elem) {
      bodyRef.current = elem;
      elem.onscroll = (evt: any) => {
        if (headRef.current) {
          headRef.current.scrollLeft = evt.target.scrollLeft;
        }
      };
    }
  };

  const defaultWidth = 200;
  const selectColumnWidth = 50;
  const tableWidth =
    middleColumns.length * defaultWidth + (selectable ? selectColumnWidth : 0) + 'px';
  const tableHeight = 60 * 10 + 'px';

  const renderMeasureCell = (column: TableColumn, inx: number) => {
    return (
      <td
        key={'measure' + inx}
        className={'pui-table-measure'}
        style={{ width: column.width || defaultWidth + 'px' }}
      />
    );
  };

  const renderTitleCell = (
    column: TableColumn,
    inx: number,
    fixed: 'left' | 'right' | null,
    style: CSSProperties
  ) => {
    return (
      <td key={'head' + inx} className={fixed ? 'pui-table-fixed-' + fixed : ''} style={style}>
        {column.title || ''}
      </td>
    );
  };

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
        {column.customCell ? column.customCell(rowData) : column.key && rowData[column.key]}
      </td>
    );
  };

  const fixColumnLeft: number[] = [0];
  let accumulateLeft = 0;
  if (selectable) {
    accumulateLeft += selectColumnWidth;
    fixColumnLeft.push(accumulateLeft);
  }
  leftColumns.forEach(col => {
    accumulateLeft += col.width || defaultWidth;
    fixColumnLeft.push(accumulateLeft);
  });

  const fixColumnRight: number[] = [0];
  let accumulateRight = 0;
  rightColumns.forEach(col => {
    accumulateRight += col.width || defaultWidth;
    fixColumnRight.push(accumulateRight);
  });
  fixColumnRight.reverse().splice(0, 1);

  const selectCallback = (sRows: number[]) => {
    const rowData: any[] = [];
    sRows.forEach(rowInx => {
      rowData.push(JSON.parse(JSON.stringify(data[rowInx])));
    });
    setSelectedRows([...sRows]);
    onSelect && onSelect(rowData);
  };

  return (
    <div
      className={componentClassNames(
        'pui-table',
        { scrollLeft: isScrollLeft + '', scrollRight: isScrollRight + '' },
        className
      )}
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
                  <td className="pui-table-fixed-left pui-table-selectable" style={{ left: 0 }}>
                    <CheckBox
                      size="small"
                      onCheckedChange={checked => {
                        if (checked) {
                          const fullSelectedRows: number[] = [];
                          for (let i = 0; i < data.length; i++) {
                            fullSelectedRows.push(i);
                          }
                          setSelectedRows(fullSelectedRows);
                          selectCallback(fullSelectedRows);
                        } else {
                          setSelectedRows([]);
                          selectCallback([]);
                        }
                      }}
                    />
                  </td>
                )}
                {leftColumns.map((column, inx) => {
                  return renderTitleCell(column, inx, 'left', {
                    left: fixColumnLeft[inx + (selectable ? 1 : 0)] + 'px'
                  });
                })}
                {middleColumns.map((column, inx) => renderTitleCell(column, inx, null, {}))}
                {rightColumns.map((column, inx) =>
                  renderTitleCell(column, inx, 'right', { right: fixColumnRight[inx] + 'px' })
                )}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pui-table-body" ref={tableBodyRefLoaded} style={{ height: tableHeight }}>
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
                  className={selectedRows.includes(inx) ? 'pui-table-selected-row' : ''}
                >
                  {selectable && (
                    <td className="pui-table-fixed-left pui-table-selectable" style={{ left: 0 }}>
                      <CheckBox
                        size="small"
                        onCheckedChange={checked => {
                          if (checked) {
                            selectedRows.push(inx);
                          } else {
                            selectedRows.splice(selectedRows.indexOf(inx), 1);
                          }
                          selectCallback(selectedRows);
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
  );
};

export { Table };
