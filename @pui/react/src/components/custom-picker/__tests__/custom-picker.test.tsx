import React, { useState } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { createCustomPicker } from '../custom-picker'

const colors = ['red', 'blue', 'green', 'yellow']

const ColorPicker = createCustomPicker({
  label: '颜色选择',
  placeHolder: '请选择',
  width: '300px',
  displayRender(value: string, onValueChange, size) {
    if (value) {
      return (
        <div style={{ display: 'inline-block' }}>
          <div
            style={{
              backgroundColor: value,
              width: size === 'small' ? '15px' : '20px',
              height: size === 'small' ? '15px' : '20px',
              float: 'left',
              marginTop: size === 'small' ? '9px' : '13px',
              marginRight: '5px'
            }}
          />{' '}
          {value.toUpperCase()}
        </div>
      )
    }
    return null
  },
  popRender(value, onValueChange, hide) {
    return (
      <div style={{ padding: '10px' }}>
        <div>车身颜色：</div>
        <div style={{ marginTop: '5px' }}>
          {colors.map(c => (
            <div
              key={c}
              onClick={() => {
                onValueChange(c)
                hide()
              }}
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: c,
                display: 'inline-block',
                marginRight: '5px',
                cursor: 'pointer',
                border: value === c ? '3px solid black' : ''
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    )
  }
})

describe('test ColorPicker component', () => {
  it('should render the correct CustomPicker', async () => {
    const picker = render(<ColorPicker />)
    picker.getByText('颜色选择')
    picker.getByText('请选择')
  })

  it('should popup/close menu', async () => {
    const picker = render(<ColorPicker />)
    fireEvent.click(picker.getByText('请选择'))
    screen.getByText('车身颜色：')
    fireEvent.click(picker.getByText('red'))
    expect(picker.queryByText('red')).toBeNull()
  })

  it('test state value binding', async () => {
    const Comp = () => {
      const [color, setColor] = useState('red')
      return (
        <div>
          颜色:{color}
          <ColorPicker value={color} onValueChange={setColor} />
        </div>
      )
    }

    render(<Comp />)
    fireEvent.click(screen.getByText('RED'))
    screen.getByText('车身颜色：')
    fireEvent.click(screen.getByText('blue'))
    screen.getByText('颜色:blue')
  })
})
