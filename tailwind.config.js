/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['MonaSansExpanded', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#10B981', // Emerald green
          dark: '#059669',
          light: '#34D399',
        },
        secondary: {
          blue: '#3B82F6',
          yellow: '#F59E0B',
          orange: '#F97316',
          red: '#EF4444',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          card: '#1a1a1a',
          lighter: '#2a2a2a',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#E5E7EB',
          muted: '#9CA3AF',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(16, 185, 129, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
