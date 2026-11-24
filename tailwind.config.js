/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f8ff',
          100: '#d1efff', // Signature Marketing2Student Pastel Sky Blue
          200: '#bae0ff',
          300: '#7cc7ff',
          400: '#467ff7', // Elementor Royal Blue Accent
          500: '#1b84e7',
          600: '#046bd2', // Signature Astra Royal Blue
          700: '#045cb4',
          800: '#1c3a7a',
          900: '#1c244b', // Signature Deep Navy Heading
          950: '#101733',
        },
        support: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
        },
        surface: {
          50: '#ffffff',
          100: '#f8fafc',
          200: '#f3f5f8',
          300: '#e2e8f0',
        },
        ink: {
          900: '#1c244b', // Deep Navy Primary
          800: '#1e293b',
          700: '#324a6d', // Marketing2Student Slate Blue-Gray
          600: '#475569',
          500: '#64748b',
          400: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'Roboto', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgba(28, 36, 75, 0.05), 0 1px 2px -1px rgba(28, 36, 75, 0.05)',
        'card': '0 0 0 1px rgba(226, 232, 240, 0.8), 0 2px 8px -2px rgba(28, 36, 75, 0.04)',
        'card-hover': '0 0 0 1px rgba(4, 107, 210, 0.28), 0 10px 25px -5px rgba(4, 107, 210, 0.1)',
      }
    },
  },
  plugins: [],
}
