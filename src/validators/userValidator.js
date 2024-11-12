// src/validators/userValidator.js
const { body, validationResult } = require('express-validator');

// Validation rules
const validateUser = [
  body('name')
    .isString()
    .withMessage('Name must be a string.')
    .notEmpty()
    .withMessage('Name is required.'),
  
  body('email')
    .isEmail()
    .withMessage('Must be a valid email address.')
    .notEmpty()
    .withMessage('Email is required.'),
  
  body('birth_date')
    .isDate()
    .withMessage('Birth date must be a valid date.')
    .notEmpty()
    .withMessage('Birth date is required.'),
  
  // Additional constraints can be added here as needed
];

// Error handling middleware
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validateUser, validate };