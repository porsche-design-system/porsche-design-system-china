import React, { ReactNode } from 'react';
import cn from 'classnames';

export const componentClassNames = (
  prefix: string,
  classNames: { [key: string]: string },
  overideClassName: string = ''
) => {
  const args: string[] = [prefix];
  for (const k in classNames) {
    args.push(prefix + '-' + k + '-' + classNames[k]);
  }
  if (overideClassName) {
    args.push(overideClassName);
  }
  return cn(...args);
};

export const overrideChildren = (
  children: ReactNode,
  overrideProps: (elementType: string, elementProps: any, elementIndex?: number) => any
) => {
  if (!children) {
    return null;
  }
  const newChildrenArray: any = [];
  const childrenArray = React.Children.toArray(children);

  childrenArray.forEach((node: any, index: number) => {
    if (node.type) {
      const type: string = node.type.name || node.type;
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
      );
    }
    newChildrenArray.push(node);
  });

  return newChildrenArray;
};
