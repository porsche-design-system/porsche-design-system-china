import React, { useEffect, useState } from 'react'
import { Pagination, Row, Col, Tabs, TabPane } from '../..'
import './pagination.stories.scss'

export default {
  title: 'Navigation/Pagination',
  component: Pagination
}

export const ModalStoryBook = () => {
  useEffect(() => {
    const mainStory = document.getElementById(
      'anchor--navigation-pagination--modal-story-book'
    )
    if (mainStory) {
      mainStory.style.display = 'none'
    }
    const mainTitles = document.getElementsByClassName('sbdocs-title')
    if (mainTitles.length > 0) {
      const mainTitle = mainTitles[0] as HTMLElement
      mainTitle.style.marginBottom = '48px'
    }
  })
  return <div />
}

ModalStoryBook.storyName = 'Pagination'

export const PaginationStoryBook1 = () => {
  const [current, setCurrent] = useState(3)
  const [pageSize, setPageSize] = useState(20)
  const handleCurrentChange = (page: number) => {
    setCurrent(page)
  }

  const handlePageSizeChange = (pageSize: number) => {
    setPageSize(pageSize)
  }

  const Tab1 = () => {
    return (
      <>
        <div className="row-cls">
          <div className="title">选中页≤5时</div>
          <Pagination defaultCurrent={2} total={222} align="right" />
        </div>
        <div className="row-cls">
          <div className="title">选中页&gt;5时</div>
          <Pagination total={222} defaultCurrent={6} align="right" />
        </div>
        <div className="row-cls">
          <div className="title">选中页为倒数5个页面内</div>
          <Pagination total={222} defaultCurrent={219} align="right" />
        </div>
        <div className="row-cls">
          <div className="title">受控制的页码</div>
          <Pagination
            current={current}
            total={222}
            onCurrentChange={handleCurrentChange}
            align="right"
          />
        </div>
        <div className="row-cls">
          <div className="title">设置一页显示多少数据</div>
          <Pagination
            align="right"
            simple={false}
            pageSize={pageSize}
            total={1225}
            onPageSizeChange={handlePageSizeChange}
          />
        </div>
      </>
    )
  }
  const Tab2 = () => {
    return <Pagination defaultCurrent={3} total={7} />
  }

  const Tab3 = () => {
    return <Pagination total={1} />
  }

  return (
    <div>
      <Tabs size="small" hasLine>
        <TabPane title="Pages≥7">
          <Tab1 />
        </TabPane>
        <TabPane title="Pages2-7">
          <Tab2 />
        </TabPane>
        <TabPane title="Pages=1">
          <Tab3 />
        </TabPane>
      </Tabs>
    </div>
  )
}

PaginationStoryBook1.storyName = 'Type'

export const PaginationStoryBook2 = () => {
  const Tab1 = () => {
    return <Pagination total={100} pageSize={10} align="right" />
  }
  const Tab2 = () => {
    return <Pagination total={100} pageSize={10} align="center" />
  }

  const Tab3 = () => {
    return <Pagination total={100} pageSize={10} align="left" />
  }

  return (
    <div>
      <Tabs size="small" hasLine>
        <TabPane title="Right (Default)">
          <Tab1 />
        </TabPane>
        <TabPane title="Middle">
          <Tab2 />
        </TabPane>
        <TabPane title="Left">
          <Tab3 />
        </TabPane>
      </Tabs>
    </div>
  )
}

PaginationStoryBook2.storyName = 'Position'
