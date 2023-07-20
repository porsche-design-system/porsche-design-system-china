import Schema, { ErrorList, RuleItem, Rules } from 'async-validator'

export type { RuleItem } from 'async-validator'

export const validate = (
  descriptor: Rules,
  data: any,
  callback: (errorList: ErrorList) => void
) => {
  const field = Object.keys(descriptor)[0]
  if (Array.isArray(descriptor[field])) {
    const newDescriptor = (descriptor[field] as RuleItem[]).map(
      (item: RuleItem) => {
        if (item.required && item.whitespace === undefined) {
          item.whitespace = true
        }
        return item
      }
    )
    descriptor[field] = newDescriptor
  } else if (
    (descriptor[field] as RuleItem).required &&
    (descriptor[field] as RuleItem).whitespace === undefined
  ) {
    ;(descriptor[field] as RuleItem).whitespace = true
  }
  const validator = new Schema(descriptor)
  validator.validate(data, {}, errors => {
    callback(errors)
  })
}
