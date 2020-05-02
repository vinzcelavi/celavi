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
  colors: {
    body: colors.white,
    text: colors.anthracite
  },
  toggle: {
    gradient: 'linear-gradient(#eeeeee, #fafafa)',
    border: '#eeeeee'
  },
  copyEmail: {
    text: colors.anthracite,
    bgHover: '#eeeeee'
  }
};

export const darkTheme = {
  colors: {
    body: colors.anthracite,
    text: colors.grayLight
  },
  toggle: {
    gradient: 'linear-gradient(#091236, #1E215D)',
    border: colors.anthracite
  },
  copyEmail: {
    text: colors.grayLight,
    bgHover: colors.anthracite
  }
};
