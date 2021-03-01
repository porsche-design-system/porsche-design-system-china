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
