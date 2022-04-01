module.exports = {
  content: ['./index.html', './src/**/*.{html,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dark'],
  },
};
