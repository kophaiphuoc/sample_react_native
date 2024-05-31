module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      },
    ],
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.js',
          '.ts',
          'tsx',
          '.ios.js',
          '.ios.ts',
          '.android.js',
          '.android.ts',
          '.json',
        ],
        alias: {
          '@baseelement': './src/components/baseelement',
          '@datadisplay': './src/components/datadisplay',
          '@features': './src/components/features',
          '@feedback': './src/components/feedback',
          '@general': './src/components/general',
          '@layout': './src/components/layout',
          '@navigation': './src/components/navigation',
          '@auth': './src/features/auth',
          '@file': './src/features/file',
          '@scan': './src/features/scan',
          '@stacks': './src/navigation/stacks',
          '@allStack': './src/navigation/AllStackNavigation',
          '@screens': './src/screens',
          '@funcfeature': './src/utils/funcfeature',
          '@functionnetwork': './src/utils/functionnetwork',
          '@functionsystem': './src/utils/functionsystem',
          // '@image': '.src/common/constans',
        },
      },
    ],
  ],
};
