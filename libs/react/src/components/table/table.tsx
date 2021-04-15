import React, { CSSProperties } from 'react';
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

  return (
    <div className={componentClassNames('pui-table', {}, className)} style={style}>
      <table className="pui-table-fixed-left">
        <tr>
          <th>选定</th>
        </tr>
        {ddd.map(() => (
          <tr>
            <td>
              <CheckBox size="small" />
            </td>
          </tr>
        ))}
      </table>
      <div className="pui-table-middle">
        <table className="pui-table-main">
          <thead>
            <tr>
              <th>经销商</th>
              <th>营业额</th>
            </tr>
          </thead>
          <tbody style={{ height: '200px', overflow: 'auto', display: 'block' }}>
            {ddd.map(() => (
              <tr>
                <td>上海浦东经销商</td>
                <td>12000</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <table className="pui-table-fixed-right">
        <tr>
          <th>操作</th>
        </tr>
        {ddd.map(() => (
          <tr>
            <td>删除</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export { Table };
