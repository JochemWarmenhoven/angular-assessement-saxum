import { AbstractControl, ValidationErrors } from '@angular/forms';

export const PasswordStrengthValidator = function (
  control: AbstractControl
): ValidationErrors | null {
  let value: string = control.value || '';
  if (!value) {
    return null;
  }

  let upperCaseCharacters = /[A-Z]+/g;
  let lowerCaseCharacters = /[a-z]+/g;
  if (
    upperCaseCharacters.test(value) === false ||
    lowerCaseCharacters.test(value) === false
  ) {
    return {
      passwordStrength:
        'Password must contain at least 1 lowercase letter and 1 uppercase letters',
    };
  }
};
