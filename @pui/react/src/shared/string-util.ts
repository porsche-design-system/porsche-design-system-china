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

export const containText = (text: string, searchText: string) => {
  return (
    text.toLocaleLowerCase().indexOf(searchText.trim().toLocaleLowerCase()) >= 0
  )
}

export const valueOfKeys = (object: any, keys: string) => {
  const nameParts = keys.trim().split('.')
  let val = object
  nameParts.forEach(key => {
    if (val) {
      val = val[key]
    }
  })
  return val
}

export const assignValidatorValue = (object: any, keys: string, value: any) => {
  if (keys.trim() === '') {
    return
  }
  const nameParts = keys.trim().split('.')
  let val = object
  nameParts.forEach((key, inx) => {
    if (inx === nameParts.length - 1) {
      if (nameParts.length === 1) {
        val[key] = value
      } else {
        val.fields[key] = value
      }
    } else {
      if (inx !== 0) {
        val = val.fields
      }
      if (!val[key]) {
        val[key] = {}
      }
      val = val[key]
      val.type = 'object'
      if (!val.fields) {
        val.fields = {}
      }
    }
  })
}

export const assignValue = (object: any, keys: string, value: any) => {
  const nameParts = keys.trim().split('.')
  let val = object
  nameParts.forEach((key, inx) => {
    if (inx === nameParts.length - 1) {
      val[key] = value
    } else {
      if (!val[key]) {
        val[key] = {}
      }
      val = val[key]
    }
  })
}
