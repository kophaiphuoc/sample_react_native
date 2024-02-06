module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['react-native'],
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'react-native/no-unused-styles': 'warn',
    'react-native/split-platform-components': 'error',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'warn',
    'react-native/no-raw-text': 'error',
    'react-native/no-single-element-style-arrays': 'warn',
  },
};
