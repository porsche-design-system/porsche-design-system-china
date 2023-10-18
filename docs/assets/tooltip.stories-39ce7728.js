import{j as l,a as t}from"./jsx-runtime-e43ccb36.js";import{r as b}from"./index-1b03fe98.js";/* empty css              */import{G as e,h as s,i as o,B as n,H as B}from"./custom-picker-1a2c1035.js";import"./index-6fd5a17b.js";import"./iframe-fcb08ef7.js";import"../sb-preview/runtime.js";import"./inheritsLoose-de3cf643.js";const S={title:"Data Display/Tooltip",component:e},p=l("div",{children:[t("h3",{className:"title",children:"标题"}),t(B,{type:"horizontal",contrast:"medium"}),t("p",{children:"提供按钮、操作的文案解释"})]}),a=()=>l("div",{className:"tooltip-story",children:[l("div",{className:"group",children:[t("div",{className:"title",children:"基本-最简单的用法，浮层大小由内容自动撑开，默认最大宽度250px"}),t("div",{className:"show-case",children:t(e,{content:"this is test text",children:"Tooltip will show on mouse enter."})})]}),l("div",{className:"group",children:[t("div",{className:"title",children:"位置-12种位置"}),l("div",{className:"show-case",children:[l(s,{children:[t(o,{span:5}),t(o,{span:3,children:t(e,{content:"prompt text",placement:"topLeft",children:t(n,{size:"small",className:"demo-button",children:"topLeft"})})}),t(o,{span:3,children:t(e,{content:"prompt text",placement:"topCenter",children:t(n,{size:"small",className:"demo-button",children:"topCenter"})})}),t(o,{span:3,children:t(e,{content:"prompt text",placement:"topRight",children:t(n,{size:"small",className:"demo-button",children:"topRight"})})})]}),t("br",{}),l(s,{children:[t(o,{span:2}),t(o,{span:3,children:t(e,{content:"prompt text",placement:"leftTop",children:t(n,{size:"small",className:"demo-button",children:"leftTop"})})}),t(o,{span:9}),t(o,{span:3,children:t(e,{content:"prompt text",placement:"rightTop",children:t(n,{size:"small",className:"demo-button",children:"rightTop"})})})]}),t("br",{}),l(s,{children:[t(o,{span:2}),t(o,{span:3,children:t(e,{content:"prompt text",placement:"leftCenter",children:t(n,{size:"small",className:"demo-button",children:"leftCenter"})})}),t(o,{span:9}),t(o,{span:3,children:t(e,{content:"prompt text",placement:"rightCenter",children:t(n,{size:"small",className:"demo-button",children:"rightCenter"})})})]}),t("br",{}),l(s,{children:[t(o,{span:2}),t(o,{span:3,children:t(e,{content:"prompt text",placement:"leftBottom",children:t(n,{size:"small",className:"demo-button",children:"leftBottom"})})}),t(o,{span:9}),t(o,{span:3,children:t(e,{content:"prompt text",placement:"rightBottom",children:t(n,{size:"small",className:"demo-button",children:"rightBottom"})})})]}),t("br",{}),l(s,{children:[t(o,{span:5}),t(o,{span:3,children:t(e,{content:"prompt text",placement:"bottomLeft",children:t(n,{size:"small",className:"demo-button",children:"bottomLeft"})})}),t(o,{span:3,children:t(e,{content:"prompt text",placement:"bottomCenter",children:t(n,{size:"small",className:"demo-button",children:"bottomCenter"})})}),t(o,{span:3,children:t(e,{content:"prompt text",placement:"bottomRight",children:t(n,{size:"small",className:"demo-button",children:"bottomRight"})})})]})]})]}),l("div",{className:"group",children:[t("div",{className:"title",children:"注意"}),t("div",{className:"show-case",children:t("p",{children:"请确保 Tooltip 的子元素能接受 onMouseEnter、onMouseLeave、onClick 事件。"})})]})]});a.storyName="Tooltip";const i=()=>t("div",{className:"tooltip-story",children:l("div",{className:"group",children:[t("div",{className:"title",children:"触发方式-鼠标移入、点击"}),t("div",{className:"show-case",children:l(s,{children:[t(o,{span:2}),t(o,{span:3,children:t(e,{content:"prompt text",trigger:"click",children:t(n,{size:"small",className:"demo-button",onClick:()=>{console.log("clicked!")},children:"click me"})})}),t(o,{span:3,children:t(e,{content:"prompt text",trigger:"hover",children:t(n,{size:"small",className:"demo-button",children:"hover me"})})})]})})]})});i.storyName="Tooltip Trigger Mode";const r=()=>{const c=b.useRef(null);return t("div",{className:"tooltip-story",children:l("div",{className:"group",children:[t("div",{className:"title",children:"复杂结构示例-含标题文字提示"}),t("div",{className:"show-case",children:l(s,{children:[t(o,{span:2}),t(o,{span:6,children:t(e,{content:p,trigger:"hover",children:t(n,{size:"small",className:"demo-button",children:"hover me"})})})]})}),t("br",{}),t("div",{className:"title",ref:c,children:"使用getPopupContainer指定浮层的渲染父节点"}),t("div",{className:"show-case",children:l(s,{children:[t(o,{span:2}),t(o,{span:6,children:t(e,{content:p,trigger:"hover",getPopupContainer:()=>c.current,children:t(n,{size:"small",className:"demo-button",children:"hover me"})})})]})})]})})};r.storyName="Tooltip Example";var m,d,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <div className="tooltip-story">
      <div className="group">
        <div className="title">
          基本-最简单的用法，浮层大小由内容自动撑开，默认最大宽度250px
        </div>
        <div className="show-case">
          <Tooltip content="this is test text">
            Tooltip will show on mouse enter.
          </Tooltip>
        </div>
      </div>
      <div className="group">
        <div className="title">位置-12种位置</div>
        <div className="show-case">
          <Row>
            <Col span={5} />
            <Col span={3}>
              <Tooltip content="prompt text" placement="topLeft">
                <Button size="small" className="demo-button">
                  topLeft
                </Button>
              </Tooltip>
            </Col>
            <Col span={3}>
              <Tooltip content="prompt text" placement="topCenter">
                <Button size="small" className="demo-button">
                  topCenter
                </Button>
              </Tooltip>
            </Col>
            <Col span={3}>
              <Tooltip content="prompt text" placement="topRight">
                <Button size="small" className="demo-button">
                  topRight
                </Button>
              </Tooltip>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={2} />
            <Col span={3}>
              <Tooltip content="prompt text" placement="leftTop">
                <Button size="small" className="demo-button">
                  leftTop
                </Button>
              </Tooltip>
            </Col>
            <Col span={9} />
            <Col span={3}>
              <Tooltip content="prompt text" placement="rightTop">
                <Button size="small" className="demo-button">
                  rightTop
                </Button>
              </Tooltip>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={2} />
            <Col span={3}>
              <Tooltip content="prompt text" placement="leftCenter">
                <Button size="small" className="demo-button">
                  leftCenter
                </Button>
              </Tooltip>
            </Col>
            <Col span={9} />
            <Col span={3}>
              <Tooltip content="prompt text" placement="rightCenter">
                <Button size="small" className="demo-button">
                  rightCenter
                </Button>
              </Tooltip>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={2} />
            <Col span={3}>
              <Tooltip content="prompt text" placement="leftBottom">
                <Button size="small" className="demo-button">
                  leftBottom
                </Button>
              </Tooltip>
            </Col>
            <Col span={9} />
            <Col span={3}>
              <Tooltip content="prompt text" placement="rightBottom">
                <Button size="small" className="demo-button">
                  rightBottom
                </Button>
              </Tooltip>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={5} />
            <Col span={3}>
              <Tooltip content="prompt text" placement="bottomLeft">
                <Button size="small" className="demo-button">
                  bottomLeft
                </Button>
              </Tooltip>
            </Col>
            <Col span={3}>
              <Tooltip content="prompt text" placement="bottomCenter">
                <Button size="small" className="demo-button">
                  bottomCenter
                </Button>
              </Tooltip>
            </Col>
            <Col span={3}>
              <Tooltip content="prompt text" placement="bottomRight">
                <Button size="small" className="demo-button">
                  bottomRight
                </Button>
              </Tooltip>
            </Col>
          </Row>
        </div>
      </div>
      <div className="group">
        <div className="title">注意</div>
        <div className="show-case">
          <p>
            请确保 Tooltip 的子元素能接受 onMouseEnter、onMouseLeave、onClick
            事件。
          </p>
        </div>
      </div>
    </div>;
}`,...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var u,v,N;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const onClick = () => {
    console.log('clicked!');
  };
  return <div className="tooltip-story">
      <div className="group">
        <div className="title">触发方式-鼠标移入、点击</div>
        <div className="show-case">
          <Row>
            <Col span={2} />
            <Col span={3}>
              <Tooltip content="prompt text" trigger="click">
                <Button size="small" className="demo-button" onClick={onClick}>
                  click me
                </Button>
              </Tooltip>
            </Col>
            <Col span={3}>
              <Tooltip content="prompt text" trigger="hover">
                <Button size="small" className="demo-button">
                  hover me
                </Button>
              </Tooltip>
            </Col>
          </Row>
        </div>
      </div>
    </div>;
}`,...(N=(v=i.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var C,T,g;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const fatherRef = useRef(null);
  return <div className="tooltip-story">
      <div className="group">
        <div className="title">复杂结构示例-含标题文字提示</div>
        <div className="show-case">
          <Row>
            <Col span={2} />
            <Col span={6}>
              <Tooltip content={cardContent} trigger="hover">
                <Button size="small" className="demo-button">
                  hover me
                </Button>
              </Tooltip>
            </Col>
          </Row>
        </div>
        <br />
        <div className="title" ref={fatherRef}>
          使用getPopupContainer指定浮层的渲染父节点
        </div>
        <div className="show-case">
          <Row>
            <Col span={2} />
            <Col span={6}>
              <Tooltip content={cardContent} trigger="hover" getPopupContainer={() => fatherRef.current}>
                <Button size="small" className="demo-button">
                  hover me
                </Button>
              </Tooltip>
            </Col>
          </Row>
        </div>
      </div>
    </div>;
}`,...(g=(T=r.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};const E=["TooltipStoryBook","TooltipStoryBook1","TooltipStoryBook2"];export{a as TooltipStoryBook,i as TooltipStoryBook1,r as TooltipStoryBook2,E as __namedExportsOrder,S as default};
//# sourceMappingURL=tooltip.stories-39ce7728.js.map
