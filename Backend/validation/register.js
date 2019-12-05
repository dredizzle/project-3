const Validator = require('validator')

module.exports = function (data) {
  let errors = {}

  // Validation scenarious 
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required'
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid'
  }

  if (Validator.isEmpty(data.login)) {
    errors.login = 'Login field is required'
  }

  if (!Validator.isLength(data.login, { min: 5, max: 30 })) {
    errors.login = 'Login must be between 5 and 30 characters'
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required'
  }

  if (!Validator.isLength(data.password, { min: 8, max: 32 })) {
    errors.password = 'Password must between 8 and 32 characters'
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm password is required'
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}