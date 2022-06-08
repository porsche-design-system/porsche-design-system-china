export function findIndexes(data: any, active: string) {
  const arrs: string[] = []
  const getNodeRoute = (data: any, active: string) => {
    for (let i = 0; i < data.length; i++) {
      const children = data[i].props.children
      const index = data[i].props.index
      if (Array.isArray(children) && children) {
        const endLoop = getNodeRoute(children, active)
        if (endLoop) {
          arrs.push(index)
          return true
        }
      }
      if (index === active) {
        arrs.push(index)
        return true
      }
    }
    return false
  }
  getNodeRoute(data, active)
  return arrs
}
