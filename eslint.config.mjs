import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  rules: {
    'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'style/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
  },
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
})
