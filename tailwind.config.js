/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lab: {
          bg: "#F8F9FA",
          surface: "#FFFFFF",
          container: "#EDEEEF",
          low: "#F3F4F5",
          dark: "#1A1A1B",
          text: "#191C1D",
          muted: "#46474A",
          border: "#E5E7EB",
          blue: "#0057FF",
          cyan: "#00D2FF",
          orange: "#FF5500",
          emerald: "#00AA66"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        heading: ['Inter', 'sans-serif'],
      },
      spacing: {
        'margin-desktop': '64px',
        'max-width': '1280px',
        'gutter': '24px'
      }
    },
  },
  plugins: [],
}
