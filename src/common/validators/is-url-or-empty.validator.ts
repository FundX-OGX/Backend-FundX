
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  isURL,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsUrlOrEmptyConstraint implements ValidatorConstraintInterface {
  validate(value: any) {
    if (typeof value !== 'string') {
      return false;
    }
    return value === '' || isURL(value);
  }

  defaultMessage() {
    return 'The value must be a valid URL or an empty string.';
  }
}

export function IsUrlOrEmpty(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUrlOrEmptyConstraint,
    });
  };
}
