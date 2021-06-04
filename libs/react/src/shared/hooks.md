# hooks 函数使用文档

## useDebounce 丐版防抖

Arguments

- `value`: 防抖值
- `delay`: 截流时间 默认 200

Demo

```ts
/**
 * 	value: 输入值
 *  delay: 延迟时间
 */
const [inputValue, setInputValue] = useState(value as string)
const value = useDebounce(inputValue, 300) // 300 毫秒后返回值
```

## useThrottle 截流

Arguments

- `fn` : 截流函数
- `delay`: 截流时间 默认 200
- `args`: [参数]

Demo

```ts
import React, { useState } from 'react'
import { useThrottle } from '../../shared/hooks'
import { Input } from './'

const Demo = () => {
  const [status, setStatus] = React.useState('更新')
  const [value, setValue] = React.useState('')
  const [throttledValue, setThrottledValue] = React.useState('')

  useThrottle(
    () => {
      setStatus('等待输入...')
      setThrottledValue(value)
    },
    2000,
    [value]
  )

  return (
    <div>
      <Input
        type="text"
        value={value}
        placeholder="请输入"
        onChange={({ currentTarget }) => {
          setStatus('更新')
          setValue(currentTarget.value)
        }}
      />
      <div>{status}</div>
      <div>Throttled value: {throttledValue}</div>
    </div>
  )
}
```
