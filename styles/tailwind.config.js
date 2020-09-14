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
      body: ['Ubuntu Mono', 'sans-serif'],
    },
    extend: {
      colors: {
        yellow: '#fff1a5',
        black: '#444',
      },
    },
  },
  variants: {},
  plugins: [],
};
