/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'urbanist': ['Urbanist'],
      },
      spacing: {
        '55': '3.438rem',
        '336': '21rem',
      },
      colors: {
        'muted': '#F5F9FC',
        'dark-blue':'#0F172A',
        'grey_icon':'#64748B',
        'muted-foreground':'#64748b',
      },
    },
  },
  plugins: [],
}

