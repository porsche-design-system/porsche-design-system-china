export const getNodeText = (node: any) => {
  if (typeof node === 'string') {
    return node
  }
  let text = ''
  if (node.props && node.props.children) {
    if (typeof node.props.children === 'string') {
      text += node.props.children
    } else {
      node.props.children.forEach((c: any) => {
        if (typeof c === 'string') {
          text += c
        } else {
          text += getNodeText(c)
        }
      })
    }
  }
  return text
}
