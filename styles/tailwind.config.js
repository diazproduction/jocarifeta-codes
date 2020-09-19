module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ['_site/**/*.html'],
    options: {
      whitelist: [],
    },
  },
  theme: {
    fontFamily: {
      mono: ['Major Mono Display', 'monospace'],
      body: ['Nunito', 'sans-serif'],
    },
    extend: {
      colors: {
        yellow: '#fff1a5',
        black: '#444',
      },
      maxHeight: {
        48: '12rem',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {},
  plugins: [],
};
