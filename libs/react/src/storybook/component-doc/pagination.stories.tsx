import React, { useState } from 'react'
import { Pagination, Row, Col } from '../..'
import './pagination.stories.scss'

export default {
  title: 'Navigation/Pagination',
  component: Pagination
}

export const PaginationStoryBook = () => {
  const [current, setCurrent] = useState(3)
  const [pageSize, setPageSize] = useState(10)
  const handleCurrentChange = (page: number) => {
    console.log(page)
    setCurrent(page)
  }

  const handlePageSizeChange = (pageSize: number) => {
    setPageSize(pageSize)
  }
  return (
    <>
      <Row className="row-cls">
        <Col span={12}>
          <div className="title">页面数=1时</div>
          <Pagination total={1} />
        </Col>
        <Col span={12}>
          <div className="title">页面数2~7时</div>
          <Pagination defaultCurrent={3} total={7} />
        </Col>
      </Row>
      <Row className="row-cls">
        <Col span={12}>
          <div className="title">页面数&gt;7，选中页&lt;5</div>
          <Pagination total={222} />
        </Col>
        <Col span={12}>
          <div className="title">页面数&gt;7，选中页&gt;4</div>
          <Pagination total={222} />
        </Col>
      </Row>
      <Row className="row-cls">
        <Col span={12}>
          <div className="title">页面数&gt;7，选中页为倒数4个页面内</div>
          <Pagination defaultCurrent={219} total={222} />
        </Col>
        <Col span={12}>
          <div className="title">受控制的页码</div>
          <Pagination
            current={current}
            total={222}
            onCurrentChange={handleCurrentChange}
          />
        </Col>
      </Row>
      <div>
        页面数&gt;7 ，设置一页显示多少数据
        <Pagination
          align="left"
          simple={false}
          pageSize={pageSize}
          total={222}
          onPageSizeChange={handlePageSizeChange}
        />
      </div>
      <div>
        对齐方式（靠左）
        <Pagination total={100} pageSize={10} align="left" />
        对齐方式（居中）
        <Pagination total={100} pageSize={10} align="center" />
        对齐方式（靠右）
        <Pagination total={100} pageSize={10} align="right" />
      </div>
    </>
  )
}

PaginationStoryBook.storyName = 'Pagination'
