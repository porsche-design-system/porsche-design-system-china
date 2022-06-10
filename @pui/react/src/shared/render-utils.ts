import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'

const IsReact18 = React.version.split('.')[0] === '18'

const renderRootMap = {}
export const renderNode = (node: any, container: any) => {
  if (IsReact18) {
    // eslint-disable-next-line no-inner-declarations
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

    if (!(container as any).id) {
      ;(container as any).id =
        '$Root-' + Date.now() + Math.floor(Math.random() * 1000)
    }

    const { createRoot } = ReactDOM as any
    toggleWarning(true)
    const root = createRoot(container)
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
    unmountComponentAtNode(container)
  }
}
