import Schema, { ErrorList, Rules } from 'async-validator';

export { RuleItem } from 'async-validator';

export const validate = (
  descriptor: Rules,
  data: any,
  callback: (errorList: ErrorList) => void
) => {
  const validator = new Schema(descriptor);
  validator.validate(data, {}, (errors, fields) => {
    callback(errors);
  });
};
