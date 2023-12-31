import { RefObject, useEffect, useState, useRef, EffectCallback } from 'react'
import { makeGlobalState } from './global-state'
import { PUI } from '../components/pui/pui'

const useEffectOnce = (effect: EffectCallback) => {
  useEffect(effect, [])
}

const useUnmount = (fn: () => any): void => {
  const fnRef = useRef(fn)
  fnRef.current = fn

  useEffectOnce(() => () => fnRef.current())
}

export const useDefaultSize = makeGlobalState((): 'medium' | 'small' => {
  return PUI['_defaultSize'] || 'medium'
}, 'DEFAULT_SIZE')

export const useTheme = makeGlobalState((): 'light' | 'dark' => {
  return PUI['_themeName'] || 'light'
}, 'THEME_NAME')

export const useScrollBarHide = makeGlobalState(
  (): 'move' | 'never' | 'leave' | 'scroll' => {
    return PUI['_scrollBarAutoHide'] || 'scroll'
  },
  'SCROLLBAR_AUTO_HIDE'
)

const allSetPopStates: any[] = []
export const usePopShowState = (
  documentClickCallback?: () => void
): [boolean, (val: boolean) => void, HTMLElement] => {
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
      documentClickCallback && documentClickCallback()
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

  let puiPopupWrap = document.getElementById('pui-pop-wrap')
  if (!puiPopupWrap) {
    const div = document.createElement('div')
    div.id = 'pui-pop-wrap'
    div.style.position = 'absolute'
    div.style.zIndex = '99999'
    div.style.width = '100%'
    div.style.top = '0px'
    div.style.left = '0px'
    document.body.appendChild(div)
    puiPopupWrap = div
  }

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
      } else {
        allSetPopStates.forEach(setPopState => {
          setPopState(false)
        })
      }
    },
    puiPopupWrap
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
  args: U = undefined as any
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

const getWindowScroll = () => {
  const left = window.pageXOffset || document.documentElement.scrollLeft
  const top = window.pageYOffset || document.documentElement.scrollTop
  return { left, top }
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

export const useElementPos = (
  elemRef: {
    current: HTMLElement | null
  },
  popElemRef: {
    current: HTMLElement | null
  } | null = null,
  popMinWidth = 0
): [any, () => void] => {
  const [, setRefresh] = useState(0)
  const [, setPopState] = usePopShowState()
  const originalElem = elemRef.current
  const windowResizeEventAdded = useRef(false)
  let elem = originalElem!
  let position = 'absolute'

  const updatePos = () => {
    setRefresh(Math.random())
  }

  const resizeEvent = () => {
    setRefresh(Math.random())
  }

  if (!windowResizeEventAdded.current) {
    window.addEventListener('resize', resizeEvent)
    windowResizeEventAdded.current = true
  }

  useEffect(() => {
    setTimeout(() => {
      setRefresh(Math.random())
    }, 500)
    return () => {
      window.removeEventListener('resize', resizeEvent)
    }
  }, [])

  if (!elemRef.current) {
    return [{ left: 0, top: 0 }, updatePos]
  }
  let offsetLeft = 0
  let offsetTop = 0

  do {
    if (!Number.isNaN(elem.offsetLeft)) {
      offsetLeft += elem.offsetLeft
      offsetTop += elem.offsetTop
    }
    // eslint-disable-next-line no-cond-assign
  } while ((elem = elem.offsetParent as any))

  elem = originalElem!
  let elemsScrollLeft = 0
  let elemsScrollTop = 0
  const scrollElements: any[] = []
  do {
    if (!Number.isNaN(elem.offsetLeft)) {
      const style = window.getComputedStyle(elem, null)
      if (style.position === 'fixed') {
        position = 'fixed'
      }
      if (elem.tagName !== 'BODY' && elem.tagName !== 'HTML') {
        elemsScrollLeft += elem.scrollLeft
        elemsScrollTop += elem.scrollTop

        if (
          elem.style.overflow === '' ||
          elem.style.overflow === 'auto' ||
          elem.style.overflow === 'scroll'
        ) {
          scrollElements.push(elem)
        }
      }
    }
    // eslint-disable-next-line no-cond-assign
  } while ((elem = elem.parentElement as any))

  if (scrollElements.length) {
    scrollElements.forEach(se => {
      se.onscroll = () => {
        setRefresh(Math.random())
        setPopState(false)
      }
    })
  }

  const pos = {
    left: offsetLeft - elemsScrollLeft,
    top: offsetTop - elemsScrollTop,
    position,
    minWidth:
      !!popMinWidth && originalElem!.offsetWidth < popMinWidth
        ? popMinWidth
        : originalElem!.offsetWidth
  }

  let popContentWidth = 0
  let popContentHeight = 0
  if (popElemRef) {
    if (popElemRef.current) {
      popContentWidth = popElemRef.current?.offsetWidth || 0
      popContentHeight = popElemRef.current?.offsetHeight || 0
    }
  }

  const docScroll = getWindowScroll()

  if (position === 'fixed') {
    docScroll.left = 0
    docScroll.top = 0
  }

  if (pos.left + popContentWidth + 10 - docScroll.left > window.innerWidth) {
    pos.left = window.innerWidth - popContentWidth - 10 + docScroll.left
  }

  if (pos.top + popContentHeight + 60 - docScroll.top > window.innerHeight) {
    pos.top = window.innerHeight - popContentHeight - 60 + docScroll.top
  }

  if (pos.left < 10) {
    pos.left = 10
  }

  if (pos.top < 10) {
    pos.top = 10
  }

  return [pos, updatePos]
}
