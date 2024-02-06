module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '~': './src',
          '~sc': './src/screens',
          '~dl': './src/components/common',
        },
      },
    ],
  ],
};
