/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'projectImg': '0 4px 3px 0px rgba(0, 0, 0, 0.1), 0 10px 8px 0px rgba(0, 0, 0, 0.04)',
        'projectCard': '0 4px 3px 0px rgba(0, 0, 0, 0.07), 0 2px 2px 0px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
