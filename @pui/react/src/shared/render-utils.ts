import React from 'react'
import { unmountComponentAtNode } from 'react-dom'

const IsReact18 = React.version.split('.')[0] === '18'

const renderRootMap = {}
export const renderNode = (node: any, container: any) => {
  if (IsReact18) {
    if (!(container as any).id) {
      ;(container as any).id =
        '$Root-' + Date.now() + Math.floor(Math.random() * 1000)
    }
    // @ts-ignore
    import('react-dom/client')
      .then(module => {
        const root = module.default.createRoot(container)
        root.render(node)
        renderRootMap[(container as any).id] = root
      })
      .catch(e => {
        console.log(e)
      })
  } else {
    renderNode(node, container)
  }
}

export const unmountNode = (container: Element | DocumentFragment) => {
  if (IsReact18) {
    renderRootMap[(container as any).id].unmount()
  } else {
    unmountComponentAtNode(container)
  }
}
