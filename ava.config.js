export default {
  files: ['!test/utils'],
  require: [
    '@babel/register', // Allows for ES6 in source files
    'jsdom-global/register' // Needed for @testing-library/react
  ]
};
