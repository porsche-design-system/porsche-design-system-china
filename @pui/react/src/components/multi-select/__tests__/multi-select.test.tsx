import React, { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MultiSelect } from '../multi-select'
import { Form } from '../../form/form'

describe('multi-select', () => {
  const user = userEvent.setup()

  async function toggleOpen(trigger?: HTMLElement) {
    await user.click(trigger || screen.getByRole('button', { name: '请选择' }))
  }

  // afterEach(async () => {
  //   await user.click(document.body)
  // })

  it('should multi-select component render correct', async () => {
    render(
      <MultiSelect
        options="狗:dog,猫,狮子,老虎,鲸鱼"
        label="动物"
        placeholder="请选择"
        width="200px"
      />
    )

    expect(screen.getByText('动物')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '请选择' })).toBeTruthy()

    await toggleOpen()

    expect(document.querySelector('.pui-multi-select-list')).toBeTruthy()
    expect(document.querySelectorAll('.pui-multi-select-option')).toHaveLength(
      6
    )

    await toggleOpen()

    expect(document.querySelector('.pui-multi-select-list')).toBeFalsy()
    expect(document.querySelectorAll('.pui-multi-select-option')).toHaveLength(
      0
    )
  })

  it('should string array work', async () => {
    const stringArrayOptions = ['狗', '猫', '狮子', '老虎']

    render(
      <MultiSelect
        options={stringArrayOptions}
        label="动物"
        placeholder="请选择"
        showCheckAll={false}
      />
    )

    await toggleOpen()

    document
      .querySelectorAll('.pui-multi-select-option')
      .forEach((optionItem, index) => {
        expect(optionItem).toHaveTextContent(stringArrayOptions[index])
      })
  })

  it('should disabled work', async () => {
    render(
      <MultiSelect
        options="狗:dog,猫,狮子,老虎,鲸鱼"
        label="动物"
        placeholder="请选择"
        width="200px"
        disabled
      />
    )

    expect(screen.getByRole('button', { name: '请选择' })).toBeDisabled()

    await toggleOpen()

    expect(document.querySelector('.pui-multi-select-list')).toBeFalsy()
  })

  it('should defaultValue work', async () => {
    render(
      <MultiSelect
        options={[
          { text: <h3 style={{ color: 'red' }}>老虎</h3>, value: '老虎' },
          {
            text: <h3 style={{ color: 'green' }}>兔子</h3>,
            value: '兔子'
          }
        ]}
        label="动物"
        placeholder="请选择"
        defaultValue={['老虎']}
        width="200px"
      />
    )

    await user.click(screen.getByRole('button', { name: '老虎' }))

    const customOption = screen.getByRole('heading', { name: '老虎' })

    expect(customOption.parentElement).toHaveClass(
      'pui-multi-select-option-selected'
    )
    expect(
      customOption.parentElement?.querySelector('input[type="checkbox"]')
    ).toBeChecked()

    // 取消选中的option
    await user.click(customOption)

    expect(customOption.parentElement).not.toHaveClass(
      'pui-multi-select-option-selected'
    )
    expect(
      customOption.parentElement?.querySelector('input[type="checkbox"]')
    ).not.toBeChecked()
  })

  it('should component onValueChange work', async () => {
    let returnValue: string[] = []

    render(
      <MultiSelect
        options="狗:dog,猫,狮子,老虎,鲸鱼"
        label="动物"
        placeholder="请选择"
        onValueChange={values => {
          returnValue = values
        }}
        width="200px"
      />
    )

    await toggleOpen()

    expect(document.querySelector('.pui-multi-select-list')).toBeTruthy()

    await user.click(screen.getByText(/狗/))
    await user.click(screen.getByText(/猫/))

    expect(returnValue).toEqual(['dog', '猫'])
  })

  it('should component trigger work', async () => {
    const App = () => {
      const [val, setVal] = useState<string[]>(['dog'])

      return (
        <Form>
          <MultiSelect
            value={val}
            options="狗:dog,猫,狮子,老虎,鲸鱼"
            label="动物"
            placeholder="请选择"
            onValueChange={setVal}
            width="200px"
          />
        </Form>
      )
    }

    render(<App />)

    expect(screen.getByRole('button', { name: '狗' })).toBeTruthy()

    await user.click(screen.getByRole('button', { name: '狗' }))

    expect(document.querySelector('.pui-multi-select-list')).toBeTruthy()

    const optionItem = screen.getByText(/猫/)

    await user.click(optionItem)

    expect(optionItem).toHaveClass('pui-multi-select-option-selected')
    expect(optionItem.querySelector('input[type="checkbox"]')).toBeChecked()

    // await user.click(document.body)

    expect(screen.getByRole('button', { name: '狗, 猫' })).toBeTruthy()
  })

  it('should filter work', async () => {
    render(
      <MultiSelect
        options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger,动物1, 动物2"
        placeholder="请选择"
        filterInput
        filterInputPlaceholder="查找动物"
      />
    )

    await toggleOpen()

    const filterInput = screen.getByPlaceholderText('查找动物')
    expect(filterInput).toBeTruthy()

    await user.type(filterInput, '动物')

    const allFilterOptions = document.querySelectorAll(
      '.pui-multi-select-option-wrap .pui-multi-select-option'
    )

    expect(allFilterOptions).toHaveLength(2)
    expect(allFilterOptions[0]).toHaveTextContent('动物1')
    expect(allFilterOptions[1]).toHaveTextContent('动物2')

    // 触发全选
    const allCheckedTrigger = screen.getByText(/全选/)
    await user.click(allCheckedTrigger)

    expect(
      allCheckedTrigger?.querySelector('input[type="checkbox"]')
    ).toBeChecked()

    const allCheckedOptions = document.querySelectorAll(
      '.pui-multi-select-option-wrap .pui-multi-select-option.pui-multi-select-option-selected'
    )

    expect(allCheckedOptions).toHaveLength(2)
    expect(allCheckedOptions[0]).toHaveTextContent('动物1')
    expect(
      allCheckedOptions[0].querySelector('input[type="checkbox"]')
    ).toBeChecked()
    expect(allCheckedOptions[1]).toHaveTextContent('动物2')
    expect(
      allCheckedOptions[1].querySelector('input[type="checkbox"]')
    ).toBeChecked()

    // 筛选不存在的关键词 “驴”
    await user.type(filterInput, '驴')
    expect(screen.getByText('暂无数据')).toBeTruthy()
  })

  it('should allowClear work', async () => {
    render(
      <MultiSelect
        options="狗:dog,猫,狮子,老虎,鲸鱼"
        label="动物"
        placeholder="请选择"
        showClearButton
        keepClearButton
      />
    )

    await toggleOpen()
    await user.click(screen.getByText(/猫/))

    expect(screen.getByRole('button', { name: '猫' })).toBeTruthy()

    await user.click(screen.getByRole('img', { name: 'icon_-errorFilled' }))

    expect(screen.queryByRole('button', { name: '猫' })).toBeNull()
    expect(screen.getByRole('button', { name: '请选择' })).toBeTruthy()
  })

  it('should filterMode work', () => {
    render(
      <MultiSelect
        options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger"
        filterMode
        defaultValue={['狗', '猫']}
        label="动物"
        maxWidth="300px"
      />
    )

    const button = screen.getByRole('button', { name: /狗, 猫/ })

    expect(
      button.querySelector('.pui-multi-select-input-placeholder')
    ).toHaveTextContent('动物')
  })

  it('should custom select content work', async () => {
    render(
      <MultiSelect
        options={[
          { text: <h3 style={{ color: 'red' }}>老虎</h3>, value: '老虎' },
          {
            text: <h3 style={{ color: 'green' }}>兔子</h3>,
            value: '兔子'
          }
        ]}
        placeholder="请选择"
        showCheckAll={false}
      />
    )

    await toggleOpen()

    const customOption1 = screen.getByRole('heading', { name: '老虎' })
    const customOption2 = screen.getByRole('heading', { name: '兔子' })

    expect(customOption1).toBeTruthy()
    expect(customOption1).toHaveStyle({ color: 'red' })

    expect(customOption2).toBeTruthy()
    expect(customOption2).toHaveStyle({ color: 'green' })
  })

  it('should custom disable option work', async () => {
    render(
      <MultiSelect
        label="动物"
        options={[
          { text: '老虎', value: '老虎' },
          { text: '兔子', value: '兔子', disabled: true },
          { text: '老鹰', value: '老鹰' }
        ]}
        placeholder="请选择"
        showCheckAll={false}
      />
    )

    await toggleOpen()

    const disabledOption = screen.getByText(/兔子/)

    expect(disabledOption).toHaveClass('pui-multi-select-option-disabled')
    expect(
      disabledOption.querySelector('input[type="checkbox"]')
    ).toBeDisabled()

    await user.click(disabledOption)

    expect(screen.queryByRole('button', { name: '兔子' })).toBeNull()
    expect(screen.getByRole('button', { name: '请选择' })).toBeTruthy()
  })

  it('should popup open work', async () => {
    const App = () => {
      const [open, setOpen] = useState<boolean | undefined>()

      return (
        <>
          <button
            type="button"
            onClick={() => {
              setOpen(prevOpen => !prevOpen)
            }}
          >
            toggle button
          </button>
          <Form>
            <MultiSelect
              open={open}
              options="狗:dog,猫,狮子,老虎,鲸鱼"
              label="动物"
              placeholder="请选择"
            />
          </Form>
        </>
      )
    }

    render(<App />)

    expect(document.querySelector('.pui-multi-select-list')).toBeNull()
    await user.click(screen.getByRole('button', { name: 'toggle button' }))
    expect(document.querySelector('.pui-multi-select-list')).toBeInTheDocument()
  })
})
