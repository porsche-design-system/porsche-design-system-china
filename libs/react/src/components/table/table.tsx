import React, { CSSProperties, useRef, useState } from 'react';
import { componentClassNames } from '../../shared/class-util';
import { CheckBox } from '../checkbox/checkbox';
import './table.scss';

export interface TableColumn {
  title?: string;
  key?: string;
  width?: string;
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
  pickable?: boolean;

  /* 排序事件 */
  onSort?: (columnName: string) => void;
}

/**
 * Primary UI component for user interaction
 */
const Table = ({ className, style, columns, data, onSort, pickable = false }: TableProps) => {
  const middleColumns = columns;
  const leftColumns = [];
  const rightColumns = [];

  const [isScrollLeft, setIsScrollLeft] = useState(false);

  const headRef = useRef<any>(null);
  const bodyRef = useRef<any>(null);

  const wheelMove = (tableContainer: HTMLDivElement) => {
    if (tableContainer) {
      tableContainer.onwheel = (evt: any) => {
        if (headRef.current.scrollLeft === 0 && evt.deltaX < 0) {
          evt.preventDefault();
        }
        const variation = parseInt(evt.deltaX);
        headRef.current.scrollLeft = headRef.current.scrollLeft + variation;
        bodyRef.current.scrollLeft = headRef.current.scrollLeft;
        setIsScrollLeft(bodyRef.current.scrollLeft !== 0);
      };
    }
  };

  const tableBodyRefLoaded = (elem: HTMLDivElement) => {
    if (elem) {
      bodyRef.current = elem;
      elem.onscroll = (evt: any) => {
        if (headRef.current) {
          headRef.current.scrollLeft = evt.target.scrollLeft;
          setIsScrollLeft(bodyRef.current.scrollLeft !== 0);
        }
      };
    }
  };

  const tableWidth = (middleColumns.length + 1) * 200 + 'px';
  const tableHeight = 60 * 10 + 'px';

  return (
    <div
      className={componentClassNames('pui-table', { scrollLeft: isScrollLeft + '' }, className)}
      style={style}
    >
      <div ref={wheelMove}>
        <div ref={headRef} className="pui-table-head">
          <table style={{ width: tableWidth }}>
            <tbody>
              <tr>
                <td className="measure" style={{ width: '80px' }} />
                {middleColumns.map((column, inx) => (
                  <td
                    key={'measure' + inx}
                    className="measure"
                    style={{ width: column.width || '200px' }}
                  />
                ))}
              </tr>
              <tr>
                <td className="fixed">选定</td>
                {middleColumns.map((column, inx) => (
                  <td key={'head' + inx}>{column.title}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pui-table-body" ref={tableBodyRefLoaded} style={{ height: tableHeight }}>
          <table style={{ width: tableWidth }}>
            <tbody>
              <tr>
                <td className="measure" style={{ width: '80px' }} />
                {middleColumns.map((column, inx) => (
                  <td
                    key={'measure' + inx}
                    className="measure"
                    style={{ width: column.width || '200px' }}
                  />
                ))}
              </tr>
              {data.map((rowData, inx) => (
                <tr key={'row' + inx}>
                  <td className="fixed">
                    <CheckBox size="small" />
                  </td>
                  {middleColumns.map((column, inx) => (
                    <td
                      key={'col' + inx}
                      className={column.multiline ? 'pui-table-cell-multiline' : ''}
                    >
                      {column.customCell
                        ? column.customCell(rowData)
                        : column.key && rowData[column.key]}
                    </td>
                  ))}
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
