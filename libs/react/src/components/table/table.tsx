import React, { CSSProperties, useRef } from 'react';
import { componentClassNames } from '../../shared/class-util';
import { CheckBox } from '../checkbox/checkbox';
import './table.scss';

export interface TableProps {
  /* 类名 */
  className?: string;
  /* 样式 */
  style?: CSSProperties;

  /* 列属性 */
  columns?: {
    key?: string;
    name?: string;
    width?: string;
    fixed?: 'none' | 'left' | 'right';
    sortable?: boolean;
    customCell: (rowData: any) => React.ReactNode;
  }[];

  /* 数据 */
  data?: any[];

  /* 可选定行 */
  pickable?: boolean;

  /* 排序事件 */
  onSort?: (columnName: string) => void;
}

/**
 * Primary UI component for user interaction
 */
const Table = ({ className, style, columns, data, onSort, pickable = false }: TableProps) => {
  const ddd = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1];

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
      };
    }
  };

  return (
    <div className={componentClassNames('pui-table', {}, className)} style={style}>
      <div ref={wheelMove}>
        <div ref={headRef} className="pui-table-head">
          <table>
            <tr>
              <td className="measure"></td>
              <td className="measure" style={{ width: '1000px' }}></td>
              <td className="measure" style={{ width: '1000px' }}></td>
              <td className="measure"></td>
            </tr>
            <tr>
              <td className="fixed">选定</td>
              <td>经销商</td>
              <td>营业额</td>
              <td>操作</td>
            </tr>
          </table>
        </div>
        <div
          className="pui-table-body"
          ref={bodyRef}
          onScroll={(evt: any) => {
            if (headRef.current) {
              headRef.current.scrollLeft = evt.target.scrollLeft;
            }
          }}
        >
          <table>
            <tr>
              <td className="measure"></td>
              <td className="measure" style={{ width: '1000px' }}></td>
              <td className="measure" style={{ width: '1000px' }}></td>
              <td className="measure"></td>
            </tr>
            {ddd.map(() => (
              <tr>
                <td className="fixed">
                  <CheckBox size="small" />
                </td>
                <td>上海浦东经销商</td>
                <td>12000</td>
                <td>操作</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export { Table };
