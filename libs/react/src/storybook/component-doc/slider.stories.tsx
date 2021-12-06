import React, { useState,useEffect } from 'react'
import { Slider, Row, Col, InputNumber, Tabs, TabPane } from '../..'
import './slider.stories.scss'

export default {
  title: 'Data Entry/Slider',
  component: Slider
}

export const SliderStroyBook = () => {
  useEffect(() => {
    const mainStory = document.getElementById(
      'anchor--data-entry-slider--slider-stroy-book'
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
  return <></>
}

SliderStroyBook.storyName = 'Slider'

export const SliderStoryBook1 = () => {
  const Tab1 = () => {
    return (
      <Slider defaultValue={30} />
    )
  }
  const Tab2 = () => {
    return (
      <Slider range defaultValue={[10, 60]} />
    )
  }
  return (
    <div>
      <Tabs size="small" hasLine>
        <TabPane tabKey="single" title="Single" >
          <Tab1 />
        </TabPane>
        <TabPane tabKey="double" title="Double">
          <Tab2 />
        </TabPane>
      </Tabs>
    </div>
  )
}

SliderStoryBook1.storyName = 'Basic'

export const SliderStoryBook2 = () => {
  const Tab1 = () => {
    return <Slider defaultValue={30} disabled />
  }
  const Tab2 = () => {
    return <Slider range defaultValue={[10, 60]} disabled />
  }
  return (
    <div>
      <Tabs size="small" hasLine>
        <TabPane tabKey="single" title="Single" >
          <Tab1 />
        </TabPane>
        <TabPane tabKey="double" title="Double">
          <Tab2 />
        </TabPane>
      </Tabs>
    </div>
  )
}

SliderStoryBook2.storyName = 'Disabled'

export const SliderStoryBook3 = () => {
  const [value, setValue] = useState(60)
  return (
    <div style={{margin: '25px 0'}}>
      <Row style={{alignItems:'center'}}>
        <Col span={5}>
          <InputNumber
            type="arrow"
            value={value + ''}
            min={0}
            max={100}
            onValueChange={val => {
              setValue(Number(val))
            }}
          />
        </Col>
        <Col span={1} />
        <Col span={11}>
          <Slider
            value={value}
            onValueChange={value => {
              setValue(value as number)
            }}
          />
        </Col>
      </Row>
    </div>
  )
}

SliderStoryBook3.storyName = 'Slider And InputNumber'

export const SliderStoryBook4 = () => {
  const marks = [
    { value: 0, label: '0%' },
    { value: 25, label: '25%' },
    { value: 50, label: '50%' },
    { value: 75, label: '75%' },
    { value: 100, label: '100%' }
  ]
  const tipFormatter = (value: number | Array<number>) => {
    if (Array.isArray(value)) {
      return [value[0] + '%', value[1] + '%']
    } else {
      return value + '%'
    }
  }
  const Tab1 = () => {
    return (
      <>
        <div className="title">节点区间滑块</div>
        <Slider
          defaultValue={30}
          marks={marks}
          tipFormatter={tipFormatter}
        />
        <div className="title" style={{marginTop: '50px'}}>节点区间滑块-滑块仅可置于节点上</div>
        <Slider
          defaultValue={25}
          marks={marks}
          tipFormatter={tipFormatter}
          step={null}
        />
      </>
    )
  }
  const Tab2 = () => {
    return (
      <>
        <div className="title">节点区间滑块</div>
        <Slider
          defaultValue={[30, 60]}
          marks={marks}
          tipFormatter={tipFormatter}
          range
        />
        <div className="title" style={{marginTop: '50px'}}>节点区间滑块-滑块仅可置于节点上</div>
        <Slider
          defaultValue={[25, 50]}
          marks={marks}
          tipFormatter={tipFormatter}
          step={null}
          range
        />
      </>
    )
  }
  return (
    <div style={{marginBottom: '30px'}}>
      <Tabs size="small" hasLine>
        <TabPane tabKey="single" title="Single" >
          <Tab1 />
        </TabPane>
        <TabPane tabKey="double" title="Double">
          <Tab2 />
        </TabPane>
      </Tabs>
    </div>
  )
}

SliderStoryBook4.storyName = 'Node Interval Slider'
