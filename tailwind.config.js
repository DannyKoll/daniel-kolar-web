/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f5fb",
          100: "#dde8f4",
          200: "#b9d0e8",
          300: "#8ab1d6",
          400: "#588dc0",
          500: "#3872a8",
          600: "#295a8c",
          700: "#1f466e",
          800: "#132f4e",
          900: "#0c2340",
          950: "#07172b",
        },
        gold: {
          50: "#fbf7ea",
          100: "#f5ebc5",
          200: "#ead48a",
          300: "#dfba50",
          400: "#d4a635",
          500: "#c9a961",
          600: "#b08c3a",
          700: "#8c6d2e",
          800: "#6e5522",
          900: "#4d3a17",
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 60px -10px rgba(201,169,97,0.25)',
        'glow-strong': '0 0 80px -5px rgba(201,169,97,0.45)',
        'card': '0 20px 50px -20px rgba(7,23,43,0.8)',
      },
      backgroundImage: {
        'radial-navy': 'radial-gradient(ellipse at top, #132f4e 0%, #07172b 60%)',
        'radial-gold': 'radial-gradient(circle, rgba(201,169,97,0.15) 0%, transparent 70%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
