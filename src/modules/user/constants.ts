export const ERROR_MESSAGES = {
  USERNAME_MIN_LENGTH: 'Username must have at least {minLength} characters',
  USERNAME_ALPHA_NUMERIC:
    'Username does not allow other than alpha numeric chars.',
  FIRST_NAME_REQUIRED: 'First Name must have at least 2 characters.',
  LAST_NAME_REQUIRED: 'Last Name must have at least 2 characters.',
  VALID_EMAIL: 'Please provide valid Email.',
  PASSWORD_VALIDATION: `Password must contain Minimum 8 and maximum 25 characters, at least one uppercase letter, one lowercase letter, one number and one special character`,
};

export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/;

export const DATE_FORMAT = 'DD/MM/YYYY';
