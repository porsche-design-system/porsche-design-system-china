import RuleType from 'async-validator';

export interface ValidationRule {
  type: RuleType;
  message: string;
}

export const validate = () => {};
