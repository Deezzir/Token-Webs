/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        first: "url('/bg-1.png')",
        second: "url('/bg-2.png')",
        third: "url('/bg-3.png')",
        fourth: "url('/bg-4.png')"
      })
    }
  },
  plugins: []
}
