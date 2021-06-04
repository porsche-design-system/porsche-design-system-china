import React, { ReactNode } from 'react'
import cn from 'classnames'

export const componentClassNames = (
  prefix: string,
  classNames: { [key: string]: string },
  overrideClassName: string = ''
) => {
  const args: string[] = [prefix]
  for (const k in classNames) {
		let value = classNames[k] ? `-${classNames[k]}` : '';
		let itemName = `${prefix}-${k}${value}`;
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
