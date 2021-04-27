import React, { useState } from 'react';
import { Pagination, Row, Col } from '../../';
import './pagination.stories.scss';

export default {
  title: 'Navigation/Pagination',
  component: Pagination
}

export const PaginationStoryBook = () => {
  const [current, setCurrent] = useState(3)
  const onChange = (page: number) => {
    console.log(page);
    setCurrent(page);
  }
  return (
    <>
      <Row className='row-cls'>
        <Col span={12}>
          <div className='title'>页面数=1时</div>
          <Pagination total={2} />
        </Col>
        <Col span={12}>
          <div className='title'>页面数2~7时</div>
          <Pagination defaultCurrent={3} total={67} />
        </Col>
      </Row>
      <Row className='row-cls'>
        <Col span={12}>
          <div className='title'>页面数&gt;7，选中页&lt;5</div>
          <Pagination total={2220} />
        </Col>
        <Col span={12}>
          <div className='title'>页面数&gt;7，选中页&gt;4</div>
          <Pagination total={2220} />
        </Col>
      </Row>
      <Row className='row-cls'>
        <Col span={12}>
          <div className='title'>页面数&gt;7，选中页为倒数4个页面内</div>
          <Pagination defaultCurrent={219} total={2220} />
        </Col>
        <Col span={12}>
          <div className='title'>受控制的页码</div>
          <Pagination current={current} total={2220} onChange={onChange} />
        </Col>
      </Row>
    </>
  )
}

PaginationStoryBook.storyName = 'Pagination';