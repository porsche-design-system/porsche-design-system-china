import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'

const IsReact18 = React.version.split('.')[0] === '18'

const renderRootMap = {}
export const renderNode = (node: any, container: ReactDOM.Container) => {
  if (IsReact18) {
    const react18Renderer = 'react-dom/client'
    if (!(container as any).id) {
      ;(container as any).id =
        '$Root-' + Date.now() + Math.floor(Math.random() * 1000)
    }
    import(react18Renderer).then(({ createRoot }) => {
      const root = createRoot(container)
      root.render(node)
      renderRootMap[(container as any).id] = root
    })
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
