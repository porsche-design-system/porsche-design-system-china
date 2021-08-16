// global-state.ts
import { useEffect, useState } from 'react'

declare const process: any
export const GLOBAL_STATE = {
  DEBUG: false
}
const stateSetters = {}
export const getGlobalStateSetter = (name: string) => {
  return stateSetters[name]
}

export const makeGlobalState = <T extends unknown>(
  initValue: T,
  name?: string,
  filter?: (val: T) => T
) => {
  const globalStates: any[] = []
  let currentValue = initValue

  return (): [T, (val: T) => void] => {
    const [value, setValue] = useState(currentValue)
    if (!globalStates.includes(setValue)) {
      globalStates.push(setValue)
    }

    useEffect(
      () => () => {
        if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
          globalStates.splice(globalStates.indexOf(setValue) - 1, 2)
        } else {
          globalStates.splice(globalStates.indexOf(setValue), 1)
        }
      },
      []
    )

    const setAllStateValue = (value: T) => {
      if (filter) {
        value = filter(value)
      }
      if (GLOBAL_STATE.DEBUG) {
        console.log('SET ' + name, value)
      }
      currentValue = value
      globalStates.forEach(setVal => {
        setVal(value)
      })
    }
    if (name) {
      stateSetters[name] = setAllStateValue
    }
    return [value, setAllStateValue]
  }
}
