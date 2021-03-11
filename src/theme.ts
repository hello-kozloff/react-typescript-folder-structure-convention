import { Theme } from './types';

const theme: Theme = {
  dark: {
    color: {
      white: 'rgb(255, 255, 255)',
      white_80: 'rgba(255, 255, 255, .8)',
      white_40: 'rgba(255, 255, 255, .4)',
      white_30: 'rgba(255, 255, 255, .3)',
      white_15: 'rgba(255, 255, 255, .15)',
      white_08: 'rgba(255, 255, 255, .8)',
      //
      primary: 'rgb(50, 100, 239)',
      //
      black: 'rgb(35, 35, 35)',
      black_05: 'rgba(35, 35, 35, .5)',
      //
      dark: 'rgb(48, 48, 48)',
      dark_05: 'rgba(48, 48, 48, .5)',
    },
    transition: {
      fast: '.15s ease-out',
      default: '.25s ease-out',
      long: '.35s ease-out',
    }
  }
};

export default theme;