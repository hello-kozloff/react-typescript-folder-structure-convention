import { Theme } from './types';

const theme: Theme = {
  dark: {
    color: {
      white: 'rgb(255, 255, 255)',
      white_80: 'rgba(255, 255, 255, .80)',
      white_40: 'rgba(255, 255, 255, .40)',
      white_30: 'rgba(255, 255, 255, .30)',
      white_20: 'rgba(255, 255, 255, .20)',
      white_15: 'rgba(255, 255, 255, .15)',
      white_08: 'rgba(255, 255, 255, .08)',
      //
      primary: 'rgb(50, 100, 239)',
      //
      black: 'rgb(35, 35, 35)',
      black_90: 'rgba(35, 35, 35, .90)',
      black_70: 'rgba(35, 35, 35, .70)',
      black_40: 'rgba(35, 35, 35, .40)',
      black_30: 'rgba(35, 35, 35, .30)',
      black_15: 'rgba(35, 35, 35, .15)',
      black_07: 'rgba(35, 35, 35, .07)',
      black_05: 'rgba(35, 35, 35, .05)',
      //
      dark: 'rgb(48, 48, 48)',
      dark_90: 'rgba(48, 48, 48, .90)',
      dark_40: 'rgba(48, 48, 48, .40)',
      dark_30: 'rgba(48, 48, 48, .30)',
      dark_15: 'rgba(48, 48, 48, .15)',
      dark_05: 'rgba(48, 48, 48, .05)',
    },
    transition: {
      fast: '.15s ease-out',
      default: '.25s ease-out',
      long: '.35s ease-out',
    }
  }
};

export default theme;