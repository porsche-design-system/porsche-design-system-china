import { IconMenuDotsHorizontal } from '@pui/icons'
import React from 'react'
import { Table, Button, TableColumn, Modal, SortType, Select } from '../..'

export default {
  title: 'Data Display/Table',
  component: Table
}

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

  type DataType = typeof rowData

  const tableData: DataType[] = []
  for (let i = 0; i < 10; i++) {
    tableData.push(rowData)
  }

  const columns: TableColumn<DataType>[] = [
    { title: '经销商', key: 'dealerName', fixed: 'left' },
    {
      title: '号码',
      customCell: rowData => <u>{rowData.dealerCode}</u>
    },
    { title: '联系号码', key: 'phoneNumber' },
    { title: '地址', key: 'address' },
    { title: '工作时间', key: 'workingTime', sortable: true },
    { title: '在售车型', key: 'saleModel' },
    {
      title: '经销商等级',
      width: 200,
      customCell() {
        return (
          <div>
            <Select
              options="普通经销商,卓越经销商,普通经销商,卓越经销商,普通经销商,卓越经销商,普通经销商,卓越经销商,普通经销商,卓越经销商,普通经销商,卓越经销商,普通经销商,卓越经销商"
              defaultValue="普通经销商"
            />
          </div>
        )
      }
    },
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
        height="300px"
        onSelect={(data, allChecked) => {
          console.log('选定数据', data)
          console.log('是否全选（选传）', allChecked)
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

  type DataType = typeof rowData

  const tableData: any[] = []
  for (let i = 0; i < 5; i++) {
    tableData.push(rowData)
  }

  const columns: TableColumn<DataType>[] = [
    { title: '经销商', key: 'dealerName' },
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
        onSort={sorter => console.log(sorter)}
        rowExpandable
        expandData={tableData}
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

  type DataType = typeof rowData

  const tableData: DataType[] = []
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

  const columns: TableColumn<DataType>[] = [
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
        expandData={tableData}
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

export const TableStoryBook4 = () => {
  const rowData = {
    id: 0,
    dealerName: '上海浦东保时捷中心',
    dealerCode: 1000000,
    phoneNumber: '021-22211111',
    address: '上海市东方路123号',
    avgPrice: '￥1000000',
    workingTime: '10:00AM - 10:30PM',
    saleModel: '911 718 Taycan Panamera Macan Cayenne'
  }

  type DataType = typeof rowData

  const tableData: DataType[] = []
  for (let i = 0; i < 5; i++) {
    rowData.id = i + 1
    rowData.dealerCode = Math.floor(Math.random() * 10000)
    tableData.push({ ...rowData })
  }

  const columns: TableColumn<DataType>[] = [
    {
      title: 'Id',
      key: 'id',
      sortable: true,
      ignoreUnsortedState: true
    },
    {
      title: '经销商',
      key: 'dealerName'
    },
    {
      title: '经销商号码',
      key: 'dealerCode',
      sortable: true
    },
    { title: '地址', key: 'address' },
    {
      title: '工作时间',
      key: 'workingTime'
    }
  ]
  return (
    <div>
      <Table
        data={tableData}
        columns={columns}
        defaultSorter={{ key: 'id', sortType: SortType.DESC }}
        onSort={sorter => console.log(sorter)}
      />
    </div>
  )
}

TableStoryBook4.storyName = 'Multi Column Sort'

export const TableStoryBook5 = () => {
  const rowData = {
    id: 0,
    dealerName: '上海浦东保时捷中心',
    dealerCode: 1000000,
    phoneNumber: '021-22211111',
    address: '上海市东方路123号',
    avgPrice: '￥1000000',
    workingTime: '10:00AM - 10:30PM',
    saleModel: '911 718 Taycan Panamera Macan Cayenne'
  }

  type DataType = typeof rowData

  const tableData: DataType[] = []
  for (let i = 0; i < 5; i++) {
    rowData.id = i + 1
    rowData.dealerCode = Math.floor(Math.random() * 10000)
    tableData.push({ ...rowData })
  }

  const columns: TableColumn<DataType>[] = [
    {
      title: 'Id',
      key: 'id',
      sortable: true,
      ignoreUnsortedState: true
    },
    {
      title: '经销商',
      key: 'dealerName'
    },
    {
      title: '经销商号码',
      key: 'dealerCode',
      sortable: true
    },
    { title: '地址', key: 'address' },
    {
      title: '工作时间',
      key: 'workingTime'
    }
  ]

  return (
    <div>
      <div>通过 rowClassName 或 rowStyle 改变行样式 onRowClick 行点击事件</div>
      <br />
      <Table
        data={tableData}
        columns={columns}
        rowClassName={(rowData, row) => 'table-row' + row}
        onRowClick={rowData => {
          console.log(rowData)
        }}
        rowStyle={(rowData, row) => {
          if (row === 1) {
            return { color: 'red' }
          }
          return {}
        }}
      />
    </div>
  )
}

TableStoryBook5.storyName = 'Row Style'

export const TableStoryBook6 = () => {
  const rowData = {
    id: 0,
    dealerName: '上海浦东保时捷中心',
    dealerCode: 1000000,
    phoneNumber: '021-22211111',
    address: '上海市东方路123号',
    avgPrice: '￥1000000',
    workingTime: '10:00AM - 10:30PM',
    saleModel: '911 718 Taycan Panamera Macan Cayenne'
  }

  type DataType = typeof rowData

  const tableData: DataType[] = []
  for (let i = 0; i < 5; i++) {
    rowData.id = i + 1
    rowData.dealerCode = Math.floor(Math.random() * 10000)
    tableData.push({ ...rowData })
  }

  const columns: TableColumn<DataType>[] = [
    {
      title: '序号',
      customCell(_, inx) {
        return inx + 1
      }
    },
    {
      title: '经销商',
      key: 'dealerName',
      cellMerge: (rowData, inx) => {
        if (inx === 0) {
          return { rowSpan: 2 }
        } else if (inx === 1) {
          return { rowSpan: 0 }
        }
        return {}
      }
    },
    {
      title: '经销商号码',
      key: 'dealerCode',
      sortable: true
    },
    { title: '地址与工作时间', colSpan: 2, key: 'address' },
    {
      colSpan: 0,
      key: 'workingTime'
    }
  ]

  return (
    <div>
      <br />
      <Table
        data={tableData}
        columns={columns}
        onRowClick={rowData => {
          console.log(rowData)
        }}
      />
    </div>
  )
}

TableStoryBook6.storyName = 'Row Number and Cell Attributes'

export const TableStoryBook7 = () => {
  const rowData = {
    id: 0,
    dealerName: '上海浦东保时捷中心',
    dealerCode: 1000000,
    phoneNumber: '021-22211111',
    address: '上海市东方路123号',
    avgPrice: '￥1000000',
    workingTime: '10:00AM - 10:30PM',
    saleModel: '911 718 Taycan Panamera Macan Cayenne'
  }

  type DataType = typeof rowData

  const tableData: DataType[] = []
  for (let i = 0; i < 5; i++) {
    rowData.id = i + 1
    rowData.dealerCode = Math.floor(Math.random() * 10000)
    tableData.push({ ...rowData })
  }

  const columns: TableColumn<DataType>[] = [
    {
      title: '序号',
      customCell(_, inx) {
        return inx + 1
      }
    },
    {
      title: '经销商',
      key: 'dealerName'
    },
    {
      title: '操作',
      customCell: (rowData, rowIndex, { isExpand, setExpand }) => {
        return (
          <Button
            type="link"
            onClick={() => {
              setExpand(!isExpand)
            }}
          >
            {isExpand ? '收起' : '展开'}
          </Button>
        )
      }
    }
  ]

  return (
    <div>
      <br />
      <Table
        rowExpandable
        data={tableData}
        columns={columns}
        onRowClick={rowData => {
          console.log(rowData)
        }}
      />
    </div>
  )
}

TableStoryBook7.storyName = 'Expand Action'
