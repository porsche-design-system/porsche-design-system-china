import Schema, { ErrorList, Rules } from 'async-validator'

export type { RuleItem } from 'async-validator'

export const validate = (
  descriptor: Rules,
  data: any,
  callback: (errorList: ErrorList) => void
) => {
  if (Object.keys(descriptor).length === 0) {
    return
  }
  const validator = new Schema(descriptor)

  validator.validate(data, {}, errors => {
    callback(errors)
  })
}
