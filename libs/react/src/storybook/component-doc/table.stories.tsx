import { IconEdit } from '@pui/icons';
import React from 'react';
import { Table, Button, TableColumn } from '../..';

export default {
  title: 'Data Display/Table',
  component: Table
};

const rowData = {
  dealerName: '上海浦东保时捷中心',
  dealerCode: '1000000',
  phoneNumber: '021-22211111',
  address: '上海市东方路123号',
  workingTime: '10:00AM - 10:30PM',
  saleModel: '911 718 Taycan Panamera Macan Cayenne'
};

const tableData: any[] = [];
for (let i = 0; i < 15; i++) {
  tableData.push(rowData);
}

const columns: TableColumn[] = [
  { title: '经销商', key: 'dealerName', fixed: 'left' },
  { title: '号码', customCell: (rowData: any) => <u>{rowData.dealerCode}</u> },
  { title: '联系号码', key: 'phoneNumber' },
  { title: '地址', key: 'address' },
  { title: '工作时间', key: 'workingTime' },
  { title: '在售车型', key: 'saleModel' },
  {
    title: '操作',
    fixed: 'right',
    width: 150,
    customCell: () => (
      <>
        <Button type="text">修改</Button> <Button type="text">删除</Button>
        <Button icon={IconEdit} type="text"></Button>
      </>
    )
  }
];

export const TableStoryBook = () => {
  return (
    <div>
      <Table
        data={tableData}
        columns={columns}
        selectable
        onSelect={data => {
          console.log(data);
        }}
      />
    </div>
  );
};

TableStoryBook.storyName = 'Table';
