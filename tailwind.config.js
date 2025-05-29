/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E9F2F5',
          200: '#C2D9DF',
          300: '#9CBFC9',
          400: '#547C8D', // fondo base
          500: '#2E4756',
          600: '#253845',
          700: '#1A2A35',
          800: '#111E26'
        },
        secondary: {
          100: '#FFFFF1',
          200: '#FEFAE0',
          300: '#F7F2C2',
          400: '#EFE8A4',
          500: '#E6DE87',
          600: '#D6CE6F',
          700: '#B7B35B',
          800: '#989749'
        },
        accent: {
          100: '#F5F5F5',
          200: '#E3E3E3',
          300: '#C7C7C7',
          400: '#A1A1A1',
          500: '#7D7D7D',
          600: '#5A5A5A',
          700: '#3A3A3A',
          800: '#212121'
        },
        warning: {
          100: '#FFF7ED',
          200: '#FFE2C3',
          300: '#FFCC99',
          400: '#F6BD60',
          500: '#DBA34F',
          600: '#BF8A3E',
          700: '#A4712D',
          800: '#7D5421'
        },
        success: {
          100: '#EFFAF6',
          200: '#C7EBD8',
          300: '#A0DDBA',
          400: '#76C893',
          500: '#5EA576',
          600: '#4A835D',
          700: '#366145',
          800: '#24402C'
        },
        error: {
          100: '#FFE9EC',
          200: '#FFCCD1',
          300: '#FFA0A8',
          400: '#EF233C',
          500: '#D11D34',
          600: '#B2172B',
          700: '#89111F',
          800: '#601016'
        },
        gray: {
          100: '#FAFAFB',
          200: '#F0F1F3',
          300: '#E0E2E5',
          400: '#C6C9CD',
          500: '#A2A6AC',
          600: '#7A7E86',
          700: '#555A63',
          800: '#2F3339'
        },
        white: {
          100: '#FFFFFF',
          200: '#FDFDFD'
        },
        black: {
          100: '#1A1A1A'
        }
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        secondary: ['Roboto Mono', 'monospace']
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.1' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.5' }],
        lg: ['1.125rem', { lineHeight: '1.5' }],
        xl: ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.5' }],
        '3xl': ['1.875rem', { lineHeight: '1.5' }]
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        bold: '700'
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem'
      }
    }
  },
  plugins: []
}

