import React from 'react'
import { render } from '@testing-library/react'
import { LoadingWrap, LoadingWrapProps } from './loading-wrap'

const defaultProps: LoadingWrapProps = {
  visible: true
}

describe('test loadingWrap component', () => {
  it('should render the correct default loadingWrap', () => {
    render(<LoadingWrap {...defaultProps} />)
  })

  it('should render the correct loadingWrap with blurContent', () => {
    render(
      <LoadingWrap {...defaultProps} blurContent>
        Thee were little things that she simply could not stand. The sound of
        someone tapping their nails on the table. A person chewing with their
        mouth open. Another human imposing themselves into her space. She couldn
        stand any of these things, but none of them compared to the number one
        thing she couldn stand which topped all of them
      </LoadingWrap>
    )
    const element = document
      .getElementsByClassName('pui-loading-wrap')[0]
      .children[0].getAttribute('style')
    expect(element).toEqual('filter: blur(2px);')
  })

  it('should render the correct loadingWrap with small size icon', () => {
    render(
      <LoadingWrap {...defaultProps} size={30}>
        <div className="para">
          Thee were little things that she simply could not stand. The sound of
          someone tapping their nails on the table. A person chewing with their
          mouth open. Another human imposing themselves into her space. She
          couldn stand any of these things, but none of them compared to the
          number one thing she couldn stand which topped all of them combined.
        </div>
      </LoadingWrap>
    )

    const element = document
      .getElementsByClassName('pui-loading-svg')[0]
      .children[0].getAttribute('height')
    expect(element).toEqual('30')
  })

  it('should render the correct loadingWrap with big size icon', () => {
    render(
      <LoadingWrap {...defaultProps} size={60}>
        <div className="para">
          Thee were little things that she simply could not stand. The sound of
          someone tapping their nails on the table. A person chewing with their
          mouth open. Another human imposing themselves into her space. She
          couldn stand any of these things, but none of them compared to the
          number one thing she couldn stand which topped all of them combined.
        </div>
      </LoadingWrap>
    )

    const element = document
      .getElementsByClassName('pui-loading-svg')[0]
      .children[0].getAttribute('height')
    expect(element).toEqual('60')
  })
})
