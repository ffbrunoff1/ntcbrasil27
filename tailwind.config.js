/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#58B0E5', // Blue from logo
        secondary: '#FFFFFF', // White from logo
        accent: '#1E3A8A', // Darker blue for contrast
        'text-dark': '#0D2436', // A very dark, almost black blue
        'text-light': '#F7FAFC', // Off-white
        'background-light': '#F0F8FF', // A very light blue, almost white
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 30px -10px rgba(88, 176, 229, 0.4)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
