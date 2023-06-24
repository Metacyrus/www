module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'selector-pseudo-element-colon-notation': 'single',
    'font-family-no-missing-generic-family-keyword': false,
  },
}
