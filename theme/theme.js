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
    body: colors.white,
    text: colors.anthracite,
    background: colors.white,
  },
  toggle: {
    gradient: 'linear-gradient(#eeeeee, #fafafa)',
    border: '#eee',
    background: '#eee',
  },
  copyEmail: {
    text: colors.anthracite,
    bgHover: '#eeeeee'
  }
};

export const darkTheme = {
  ...lightTheme,
  main: {
    body: colors.anthracite,
    text: colors.white,
    background: colors.anthracite,
  },
  toggle: {
    gradient: 'linear-gradient(#091236, #1E215D)',
    border: colors.anthracite,
    background: '#282e38',
  },
  copyEmail: {
    text: colors.grayLight,
    bgHover: colors.anthracite
  }
};
