module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        base: ['Roboto'],
        roboto: ['Roboto'],
        vcr: ['VCR'],
      },
      colors: {
        yellow: '#E7E247',
        blue: {
          light: '#A9C9E0',
          dark: '#529ACE',
        },
        gray: {
          light: '#E5E5E5',
          medium: '#8E8E8E',
          dark: '#2E2D2B',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
