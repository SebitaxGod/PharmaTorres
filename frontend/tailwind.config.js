/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pharma-green': '#16a34a',
        'pharma-blue': '#3b82f6',
        'pharma-dark': '#1f2937',
      },
    },
  },
  plugins: [],
  important: true,
}
