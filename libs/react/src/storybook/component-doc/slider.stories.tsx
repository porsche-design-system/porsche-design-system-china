import React,{useState} from 'react'
import { Slider,Row,Col,InputNumber } from '../..'
import './slider.stories.scss'

export default {
  title: 'Data Entry/Slider',
  component: Slider
}

export const SliderStoryBook = () => {
  const [value,setValue] = useState(60);
  const marks = [
    {value:0,label:'0%'},
    {value:25,label:'25%'},
    {value:50,label:'50%'},
    {value:75,label:'75%'},
    {value:100,label:'100%'},
  ]
  const tipFormatter = (value:number|Array<number>) => {
    if(Array.isArray(value)){
      return [value[0]+'%',value[1]+'%'];
    }else{
      return value+'%';
    }
  };
  return (
    <div className="slider-story">
      <div className="group">
        <div className="title">基本-单滑块与双滑块模式</div>
        <div className="show-case">
          <Row>
            <Col span={11}>
              <Slider defaultValue={30}/>
            </Col>
            <Col span={2}></Col>
            <Col span={11}>
              <Slider range defaultValue={[10,60]}/>
            </Col>
          </Row>
        </div>
      </div>
      <div className="group">
        <div className="title">禁用状态</div>
        <div className="show-case">
          <Row>
            <Col span={11}>
              <Slider defaultValue={30} disabled/>
            </Col>
            <Col span={2}></Col>
            <Col span={11}>
              <Slider range defaultValue={[10,60]} disabled/>
            </Col>
          </Row>
        </div>
      </div>
      <div className="group">
        <div className="title">数字加减器+滑块</div>
        <div className="show-case">
          <Row>
            <Col span={5}>
              <InputNumber
                type="arrow"
                value={value+''}
                min={0}
                max={100}
                onValueChange={val => {
                  setValue(Number(val));
                }}
              />
            </Col>
            <Col span={11}>
              <Slider value={value} onValueChange={value => {
                setValue(value as number);
              }}/>
            </Col>
          </Row>
        </div>
      </div>
      <div className="group" style={{marginBottom:40}}>
        <div className="title">节点区间滑块</div>
        <div className="show-case">
          <Row>
            <Col span={11}>
              <Slider defaultValue={30} marks={marks} tipFormatter={tipFormatter}/>
            </Col>
            <Col span={2}></Col>
            <Col span={11}>
              <Slider defaultValue={[30,60]} marks={marks} tipFormatter={tipFormatter} range/>
            </Col>
          </Row>
        </div>
      </div>
      <div className="group" style={{marginBottom:40}}>
        <div className="title">节点区间滑块-滑块仅可置于节点上</div>
        <div className="show-case">
          <Row>
            <Col span={11}>
              <Slider defaultValue={25} marks={marks} tipFormatter={tipFormatter} step={null}/>
            </Col>
            <Col span={2}></Col>
            <Col span={11}>
              <Slider defaultValue={[25,50]} marks={marks} tipFormatter={tipFormatter} step={null} range/>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

SliderStoryBook.storyName = 'Slider'
