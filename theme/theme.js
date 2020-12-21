import { rgba, lighten, darken } from 'polished';

const fonts = {
  primary: '"Mada", sans-serif',
  secondary: '"Overpass Mono", sans-serif'
};

const colors = {
  white: '#ffffff',
  black: '#000000',
  grayLight: '#c0c0c0',
  anthracite: '#191c23',
  primary: '#f1c40f',
  blue: '#54a0ff',
  green: '#2caf90',
  gray: '#888888'
};

export const lightTheme = {
  fonts: {
    primary: fonts.primary,
    secondary: fonts.secondary
  },
  colors: {
    primary: colors.primary,
    anthracite: colors.anthracite,
    black: colors.black,
    white: colors.white
  },
  main: {
    text: colors.anthracite,
    secondaryText: rgba(colors.anthracite, 0.8),
    background: colors.white,
    selection: 'rgba(0, 0, 0, 0.1)'
  },
  header: {
    jobTitle: darken(0.05, colors.primary),
  },
  link: {
    boxShadow: rgba(colors.anthracite, 0.8),
    boxShadowHover: rgba(colors.primary, 0.8),
  },
  swipeLink: {
    bgHover: lighten(0.1, colors.primary),
  },
  toggle: {
    gradient: 'linear-gradient(#eeeeee, #fafafa)',
    border: '#eee',
    background: '#eee',
  },
  list: {
    text: rgba(colors.anthracite, 0.8),
    background: rgba(colors.anthracite, 0.4),
  },
  copyEmail: {
    text: colors.anthracite,
    bgHover: '#eeeeee'
  }
};

export const darkTheme = {
  ...lightTheme,
  main: {
    text: colors.white,
    secondaryText: colors.grayLight,
    background: colors.anthracite,
    selection: '#4d4426'
  },
  header: {
    jobTitle: colors.primary,
  },
  link: {
    boxShadow: colors.white,
    boxShadowHover: rgba(colors.primary, 0.8),
  },
  swipeLink: {
    bgHover: darken(0.1, colors.primary),
  },
  toggle: {
    gradient: 'linear-gradient(#091236, #1E215D)',
    border: colors.anthracite,
    background: '#101319',
  },
  list: {
    text: colors.grayLight,
    background: colors.grayLight,
  },
  copyEmail: {
    text: colors.grayLight,
    bgHover: colors.anthracite
  }
};
