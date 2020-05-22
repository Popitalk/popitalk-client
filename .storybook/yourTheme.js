import { create } from '@storybook/theming/create';
import logo from '../src/assets/dev-logo.png'

export default create({
  base: 'light',

  colorPrimary: '#1DA4FE',
  colorSecondary: '#1DA4FE',

  // UI
  appBg: 'white',
  appContentBg: '#F5F5F5',
  appBorderColor: 'transparent',
  appBorderRadius: 10,

  // Typography
  fontBase: '"Noto Sans"',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'black',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'white',
  barBg: '#1DA4FE',

  // Form colors
  inputBg: 'transparent',
  inputBorder: 'transparent',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Popitalk Dev',
  brandUrl: 'https://popitalk.com',
  brandImage: logo,
});