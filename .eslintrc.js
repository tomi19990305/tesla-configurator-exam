module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'angular'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:angular/johnpapa',
  ],
  rules: {
    // Additional rules or overrides can be added here
  },
};
