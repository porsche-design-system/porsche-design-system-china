import { RefObject, useEffect, useState, useRef, EffectCallback } from 'react'

const useEffectOnce = (effect: EffectCallback) => {
  useEffect(effect, [])
}

const useUnmount = (fn: () => any): void => {
  const fnRef = useRef(fn)
  fnRef.current = fn

  useEffectOnce(() => () => fnRef.current())
}

const allSetPopStates: any[] = []
export const usePopShowState = (): [boolean, (val: boolean) => void] => {
  const popState = useState(false)
  const [popShow, setPopShow] = popState

  if (!allSetPopStates.includes(setPopShow)) {
    allSetPopStates.push(setPopShow)
  }

  useEffect(() => {
    const docClick = () => {
      if (popShow) {
        setPopShow(false)
      }
      allSetPopStates.forEach(setPopState => {
        if (setPopState !== setPopShow) {
          setPopState(false)
        }
      })
    }
    document.addEventListener('click', docClick)
    return () => {
      document.removeEventListener('click', docClick)
    }
  }, [popShow])

  useEffect(() => {
    return () => {
      allSetPopStates.splice(allSetPopStates.indexOf(setPopShow), 1)
    }
  }, [])

  return [
    popShow,
    (val: boolean) => {
      setPopShow(val)
      if (val) {
        allSetPopStates.forEach(setPopState => {
          if (setPopState !== setPopShow) {
            setPopState(false)
          }
        })
      }
    }
  ]
}

export const useDebounce = (value: any, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const handler = window.setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  return debouncedValue
}

export const useThrottle = <T, U extends any[]>(
  fn: (...args: U) => T,
  ms: number = 200,
  args: U
) => {
  const [state, setState] = useState<T | null>(null)
  const timeout = useRef<ReturnType<typeof setTimeout>>()
  const nextArgs = useRef<U>()

  useEffect(() => {
    if (!timeout.current) {
      setState(fn(...args))
      const timeoutCallback = () => {
        if (nextArgs.current) {
          setState(fn(...nextArgs.current))
          nextArgs.current = undefined
          timeout.current = setTimeout(timeoutCallback, ms)
        } else {
          timeout.current = undefined
        }
      }
      timeout.current = setTimeout(timeoutCallback, ms)
    } else {
      nextArgs.current = args
    }
  }, args)

  useUnmount(() => {
    timeout.current && clearTimeout(timeout.current)
  })

  return state
}

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: Function
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return
      }
      handler(event)
    }
    document.addEventListener('click', listener)
    return () => {
      document.removeEventListener('click', listener)
    }
  }, [ref, handler])
}
