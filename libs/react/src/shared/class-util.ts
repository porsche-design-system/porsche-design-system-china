import React, { ReactNode } from 'react'
import cn from 'classnames'

export const componentClassNames = (
  prefix: string,
  classNames: { [key: string]: string },
  overrideClassName: string = ''
) => {
  const args: string[] = [prefix]
  for (const k in classNames) {
    const value = classNames[k] ? `-${classNames[k]}` : ''
    const itemName = `${prefix}-${k}${value}`
    args.push(itemName)
  }
  if (overrideClassName) {
    args.push(overrideClassName)
  }
  return cn(...args)
}

export const overrideChildren = (
  children: ReactNode,
  overrideProps: (
    elementType: string,
    elementProps: any,
    elementIndex?: number
  ) => any
) => {
  if (!children) {
    return null
  }
  const newChildrenArray: any = []
  const childrenArray = React.Children.toArray(children)
  childrenArray.forEach((node: any, index: number) => {
    if (node.type) {
      const type: string = node.type.displayName || node.type
      node = React.cloneElement(
        node,
        overrideProps(
          type,
          {
            ...node.props,
            children: overrideChildren(node.props.children, overrideProps)
          },
          index
        )
      )
    }
    newChildrenArray.push(node)
  })

  return newChildrenArray
}

export const getPos = (elem: HTMLElement | null) => {
  const originalElem = elem
  if (!elem) {
    return { left: 0, top: 0 }
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
  return {
    left: offsetLeft,
    top: offsetTop,
    minWidth: originalElem!.offsetWidth
  }
}
