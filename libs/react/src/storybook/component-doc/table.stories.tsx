import { IconMenuDotsHorizontal } from '@pui/icons'
import React from 'react'
import { Table, Button, TableColumn, Modal } from '../..'

export const TableStoryBook = () => {
  const rowData = {
    dealerName: '上海浦东保时捷中心',
    dealerCode: '1000000',
    phoneNumber: '021-22211111',
    address: '上海市东方路123号',
    avgPrice: '￥1000000',
    workingTime: '10:00AM - 10:30PM',
    saleModel: '911 718 Taycan Panamera Macan Cayenne'
  }

  const tableData: any[] = []
  for (let i = 0; i < 10; i++) {
    tableData.push(rowData)
  }

  const columns: TableColumn[] = [
    { title: '经销商', key: 'dealerName', fixed: 'left' },
    {
      title: '号码',
      customCell: (rowData: any) => <u>{rowData.dealerCode}</u>
    },
    { title: '联系号码', key: 'phoneNumber' },
    { title: '地址', key: 'address' },
    { title: '工作时间', key: 'workingTime', sortable: true },
    { title: '在售车型', key: 'saleModel' },
    {
      title: '平均售价',
      key: 'avgPrice',
      sortable: true,
      sortIconPlace: 'left',
      rowCellStyle: { textAlign: 'right' },
      headCellStyle: { textAlign: 'right' }
    },
    {
      title: '操作',
      fixed: 'right',
      width: 140,
      customCell: rowData => (
        <>
          <Button type="link" marginRight="12px">
            修改
          </Button>
          <Button
            type="link"
            marginRight="12px"
            onClick={() => {
              Modal.confirm('警告', '确认要删除吗?', () => {
                Modal.alert(
                  '提示信息',
                  <div>
                    <b>{rowData.dealerName}</b> 已删除！
                  </div>
                )
              })
            }}
          >
            删除
          </Button>
          <Button icon={IconMenuDotsHorizontal} type="link" />
        </>
      )
    }
  ]
  return (
    <div>
      <Table
        data={tableData}
        columns={columns}
        selectable
        onSelect={data => {
          console.log(data)
        }}
        onSort={sorter => console.log(sorter)}
      />
    </div>
  )
}

TableStoryBook.storyName = 'Table'

export const TableStoryBook2 = () => {
  const rowData = {
    dealerName: '上海浦东保时捷中心',
    dealerCode: '1000000',
    phoneNumber: '021-22211111',
    address: '上海市东方路123号',
    avgPrice: '￥1000000',
    workingTime: '10:00AM - 10:30PM',
    saleModel: '911 718 Taycan Panamera Macan Cayenne'
  }

  const tableData: any[] = []
  for (let i = 0; i < 5; i++) {
    tableData.push(rowData)
  }

  const columns: TableColumn[] = [
    { title: '经销商', key: 'dealerName', fixed: 'left' },
    { title: '联系号码', key: 'phoneNumber' },
    { title: '地址', key: 'address' },
    { title: '工作时间', key: 'workingTime', sortable: true },
    {
      title: '操作',
      fixed: 'right',
      width: 140,
      customCell: rowData => (
        <>
          <Button type="link" marginRight="12px">
            修改
          </Button>
          <Button
            type="link"
            marginRight="12px"
            onClick={() => {
              Modal.confirm('警告', '确认要删除吗?', () => {
                Modal.alert(
                  '提示信息',
                  <div>
                    <b>{rowData.dealerName}</b> 已删除！
                  </div>
                )
              })
            }}
          >
            删除
          </Button>
          <Button icon={IconMenuDotsHorizontal} type="link" />
        </>
      )
    }
  ]
  return (
    <div>
      <Table
        data={tableData}
        columns={columns}
        onSelect={data => {
          console.log(data)
        }}
        onSort={sorter => console.log(sorter)}
        rowExpandable
        expandCell={rowData => {
          return (
            <div style={{ padding: '10px 0', paddingLeft: '35px' }}>
              <div style={{ display: 'inline-block', marginRight: '24px' }}>
                经销商号码: {rowData.dealerCode}
                <br />
                <div style={{ color: '#999', fontSize: '12px' }}>
                  其他信息其他信息其他信息其他信息其他信息
                </div>
              </div>
              <div style={{ display: 'inline-block' }}>
                经销商号码: {rowData.dealerCode}
                <br />
                <div style={{ color: '#999', fontSize: '12px' }}>
                  其他信息其他信息其他信息其他信息其他信息
                </div>
              </div>
            </div>
          )
        }}
      />
    </div>
  )
}

TableStoryBook2.storyName = 'Row Expandable Table'

export const TableStoryBook3 = () => {
  const rowData = {
    dealerName: '上海浦东保时捷中心',
    dealerCode: '1000000',
    phoneNumber: '021-22211111',
    address: '上海市东方路123号',
    avgPrice: '￥1000000',
    workingTime: '10:00AM - 10:30PM',
    saleModel: '911 718 Taycan Panamera Macan Cayenne'
  }

  const tableData: any[] = []
  for (let i = 0; i < 5; i++) {
    tableData.push(rowData)
  }

  const renderCell = (key: string) => (rowData: any) =>
    (
      <div style={{ padding: '10px 0' }}>
        <div>{rowData[key]}</div>
        <div style={{ color: '#999', fontSize: '12px' }}>第二行文字</div>
      </div>
    )

  const columns: TableColumn[] = [
    {
      title: '经销商',
      customCell: renderCell('dealerName')
    },
    {
      title: '联系号码',
      customCell: renderCell('phoneNumber')
    },
    { title: '地址', customCell: renderCell('address') },
    {
      title: '工作时间',
      sortable: true,
      customCell: renderCell('workingTime')
    },
    {
      title: '操作',
      fixed: 'right',
      width: 140,
      customCell: rowData => (
        <div style={{ padding: '2px 0' }}>
          <Button type="link" marginRight="12px">
            修改
          </Button>
          <Button
            type="link"
            marginRight="12px"
            onClick={() => {
              Modal.confirm('警告', '确认要删除吗?', () => {
                Modal.alert(
                  '提示信息',
                  <div>
                    <b>{rowData.dealerName}</b> 已删除！
                  </div>
                )
              })
            }}
          >
            删除
          </Button>
          <Button icon={IconMenuDotsHorizontal} type="link" />
        </div>
      )
    }
  ]
  return (
    <div>
      <Table
        data={tableData}
        columns={columns}
        rowExpandable
        onSelect={data => {
          console.log(data)
        }}
        expandArrowStyle={{ marginTop: '11px' }}
        cellVerticalAlign="top"
        onSort={sorter => console.log(sorter)}
        expandCell={rowData => {
          return (
            <div style={{ padding: '10px 0', paddingLeft: '35px' }}>
              <div style={{ display: 'inline-block', marginRight: '24px' }}>
                经销商号码: {rowData.dealerCode}
                <br />
                <div style={{ color: '#999', fontSize: '12px' }}>
                  其他信息其他信息其他信息其他信息其他信息
                </div>
              </div>
              <div style={{ display: 'inline-block' }}>
                经销商号码: {rowData.dealerCode}
                <br />
                <div style={{ color: '#999', fontSize: '12px' }}>
                  其他信息其他信息其他信息其他信息其他信息
                </div>
              </div>
            </div>
          )
        }}
      />
    </div>
  )
}

TableStoryBook3.storyName = 'Multi Row Line Table'

export default {
  title: 'Data Display/Table',
  component: Table
}
