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
      margin: {
        1.5: '0.4rem',
      },
      maxHeight: {
        48: '12rem',
      },
      inset: {
        '-8': '-2rem',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {},
  plugins: [],
};
