import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Table, TableColumn } from '../table'

describe('Table', () => {
  Object.defineProperty(window, 'getComputedStyle', {
    value: jest.fn()
  })

  const columns: TableColumn[] = [
    { title: 'Name', key: 'name' },
    { title: 'Age', key: 'age' },
    { title: 'Email', key: 'email' }
  ]

  const data = [
    { name: 'John Doe', age: 25, email: 'john@example.com' },
    { name: 'Jane Smith', age: 30, email: 'jane@example.com' }
  ]

  it('renders table with correct columns and data', () => {
    render(<Table columns={columns} data={data} />)

    const columnHeaders = document.querySelectorAll('.title-text')
    expect(columnHeaders).toHaveLength(columns.length)
    columns.forEach((column, index) => {
      expect(columnHeaders[index]).toHaveTextContent(column.title as string)
    })

    const dataCells = document.querySelectorAll('.cell-wrap')
    expect(dataCells).toHaveLength(columns.length * data.length)
    data.forEach((rowData: any, rowIndex) => {
      columns.forEach((column, columnIndex) => {
        const cellIndex = rowIndex * columns.length + columnIndex
        expect(dataCells[cellIndex]).toHaveTextContent(rowData[column.key!])
      })
    })
  })

  describe('Table Cell Attributes', () => {
    it('renders table with fixed columns', () => {
      const testColumns: TableColumn[] = [
        { title: 'Name', key: 'name', fixed: 'left' },
        { title: 'Age', key: 'age' },
        { title: 'Email', key: 'email', fixed: 'right' }
      ]

      const { container } = render(
        <Table columns={testColumns} data={data} rowExpandable />
      )
      expect(container.querySelector('.pui-table-fixed-left')).toBeTruthy()
      expect(container.querySelector('.pui-table-fixed-right')).toBeTruthy()

      expect(
        container.querySelector<HTMLElement>('.pui-table-fixed-right')?.style
          .right
      ).toEqual('0px')
    })

    it('renders table with merge columns', () => {
      const testColumns: TableColumn[] = [
        {
          title: 'Name',
          key: 'name',
          cellMerge: (rowData, inx) => {
            if (inx === 0) {
              return { rowSpan: 2 }
            } else if (inx === 1) {
              return { rowSpan: 0 }
            }
            return {}
          }
        },
        { title: 'Age', key: 'age' },
        { title: 'Email', key: 'email' }
      ]

      const { container } = render(
        <Table
          columns={testColumns}
          data={data}
          rowClassName={(rowData, row) => 'table-row' + row}
        />
      )

      expect(
        (
          container.querySelector('.table-row0')?.querySelectorAll('td')[0]
            .attributes as any
        ).rowspan.value
      ).toBe('2')
    })

    it('renders table with colSpan columns', () => {
      const testColumns: TableColumn[] = [
        { title: 'Name', key: 'name', colSpan: 2 },
        { title: 'Age', key: 'age', colSpan: 0 },
        { title: 'Email', key: 'email' }
      ]
      const { container } = render(<Table columns={testColumns} data={data} />)

      expect(
        (
          container
            .querySelector('.pui-table-head')
            ?.querySelectorAll('tr')[1]
            .querySelectorAll('td')[0].attributes as any
        ).colspan.value
      ).toBe('2')
    })
  })

  it('triggers onSort callback when column header is clicked', () => {
    const handleSort = jest.fn()
    const testColumns: TableColumn[] = [
      { title: 'Name', key: 'name', sortable: true },
      { title: 'Age', key: 'age' },
      { title: 'Email', key: 'email' }
    ]
    const { getByText } = render(
      <Table columns={testColumns} data={data} onSort={handleSort} />
    )
    const sortBtn = document.querySelector('.sortable')
    fireEvent.click(sortBtn!)
    expect(handleSort).toHaveBeenCalledWith({ key: 'name', sortType: 'desc' })

    const unorderedBtn = getByText('Age')
    fireEvent.click(unorderedBtn!)
    expect(handleSort).toHaveBeenCalledTimes(1)
  })

  describe('Table.select', () => {
    it('click to select or unselect a row', () => {
      const handleSelect = jest.fn()
      render(
        <Table
          columns={columns}
          data={data}
          selectable
          rowKey="id"
          onSelect={handleSelect}
        />
      )
      const checkbox = document.querySelectorAll('.pui-checkbox')[1]
      fireEvent.click(checkbox)
      expect(handleSelect).toHaveBeenCalledWith([data[0]], false)

      fireEvent.click(checkbox)
      expect(document.querySelector('.pui-table-selected-row')).toBeFalsy()
    })

    it('click to select or unselect all', () => {
      const handleSelect = jest.fn()
      render(
        <Table
          columns={columns}
          data={data}
          rowKey="id"
          selectable
          onSelect={handleSelect}
        />
      )
      const checkbox = document.querySelectorAll('.pui-checkbox')[0]
      fireEvent.click(checkbox)
      expect(handleSelect).toHaveBeenCalledWith(data, true)

      fireEvent.click(checkbox)
      expect(handleSelect).toHaveBeenCalledWith([], false)
    })
  })

  describe('Table.expand', () => {
    it('click to expand or collapse', async () => {
      const handleExpand = jest.fn()
      const handleCollapse = jest.fn()

      const { container } = render(
        <Table
          columns={columns}
          data={data}
          rowExpandable
          onExpand={handleExpand}
          onCollapse={handleCollapse}
        />
      )
      const expandArrow = document.querySelectorAll(
        '.pui-table-expand-button'
      )[0]

      fireEvent.click(expandArrow)
      expect(handleExpand).toHaveBeenCalledWith(data[0], 0)
      expect(container.querySelector('.pui-table-expand-row')).toBeTruthy()

      const collapseArrow = document.querySelectorAll(
        '.pui-table-expand-button'
      )[0]
      fireEvent.click(collapseArrow)
      expect(handleCollapse).toHaveBeenCalledWith(data[0], 0)
    })

    it('a expandable row click to expand or collapse', () => {
      const handleExpand = jest.fn()
      const handleCollapse = jest.fn()

      const testColumns: TableColumn[] = [
        { title: 'Name', key: 'name' },
        { title: 'Age', key: 'age' },
        { title: 'Email', key: 'email' },
        {
          title: '操作',
          customCell: (rowData, rowIndex, { isExpand, setExpand }) => {
            return (
              <div
                onClick={() => {
                  setExpand(!isExpand)
                }}
              >
                展开
              </div>
            )
          }
        }
      ]

      const { getAllByText } = render(
        <Table
          columns={testColumns}
          data={data}
          rowExpandable
          onExpand={handleExpand}
          onCollapse={handleCollapse}
        />
      )
      const expandArrow = getAllByText('展开')[0]
      fireEvent.click(expandArrow)
      expect(handleExpand).toHaveBeenCalledWith(data[0], 0)

      fireEvent.click(expandArrow)
      expect(handleCollapse).toHaveBeenCalledWith(data[0], 0)
    })
  })
})
