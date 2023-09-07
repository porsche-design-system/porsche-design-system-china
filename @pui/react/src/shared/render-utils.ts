import React from 'react'
// eslint-disable-next-line react/no-deprecated
import ReactDOM, { unmountComponentAtNode } from 'react-dom'

const IsReact18 = React.version.split('.')[0] === '18'

const renderRootMap: Record<string, any> = {}
const rootMap = new WeakMap()

function toggleWarning(skip: boolean) {
  const { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } =
    ReactDOM as any

  if (
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED &&
    typeof __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === 'object'
  ) {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint =
      skip
  }
}

export const renderNode = (node: any, container: any) => {
  if (IsReact18) {
    if (!(container as any).id) {
      ;(container as any).id =
        '$Root-' + Date.now() + Math.floor(Math.random() * 1000)
    }

    const { createRoot } = ReactDOM as any
    toggleWarning(true)
    let root = rootMap.get(container)
    if (!root) {
      root = createRoot(container)
    }
    rootMap.set(container, root)
    root.render(node)
    renderRootMap[(container as any).id] = root
    toggleWarning(false)
  } else {
    ReactDOM.render(node, container)
  }
}

export const unmountNode = (container: Element | DocumentFragment) => {
  if (IsReact18) {
    renderRootMap[(container as any).id].unmount()
  } else {
    // eslint-disable-next-line react/no-deprecated
    unmountComponentAtNode(container)
  }
}
