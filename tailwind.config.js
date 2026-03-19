/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'yt-red': '#FF1A1A',
        'yt-body': '#F5F5F5',
        'yt-text': '#141414',
        'yt-dark': '#232323',
        'yt-mid': '#323232',
        'yt-muted': '#7A7A7A',
      },
      borderRadius: {
        'yt-card': '1.875rem',
        'yt-pill': '2rem',
        'yt-input': '1.25rem',
      },
      fontFamily: {
        headline: ['"Yango Headline"', 'Helvetica', 'Arial', 'sans-serif'],
        body: ['"Yango Group Text"', '"YS Text"', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
