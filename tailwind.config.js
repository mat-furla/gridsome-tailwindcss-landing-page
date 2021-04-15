module.exports = {
  purge: {
    mode: 'all',
    layers: ['base', 'components', 'utilities'],
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.html',
      './src/**/*.pug',
      './src/**/*.md'
    ]
  },
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      }
    },
    fontFamily: {
      display: ['Poppins', 'sans'],
      sans: ['"DM Sans"', 'sans']
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      blue: {
        500: '#007FFF',
        700: '#0065cc'
      },
      gray: {
        50: '#fdfdfd',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#D1D5DB',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#363636',
        700: '#2D2D2D',
        800: '#1E1E1E',
        900: '#121212'
      }
    },
    extend: {
      typography(theme) {
        return {
          dark: {
            css: {
              color: theme('colors.gray.300'),
              '[class~="lead"]': { color: theme('colors.gray.400') },
              a: { color: theme('colors.gray.100') },
              strong: { color: theme('colors.gray.100') },
              'ul > li::before': { backgroundColor: theme('colors.gray.700') },
              hr: { borderColor: theme('colors.gray.800') },
              blockquote: {
                color: theme('colors.gray.100'),
                borderLeftColor: theme('colors.gray.800')
              },
              h1: { color: theme('colors.gray.100') },
              h2: { color: theme('colors.gray.100') },
              h3: { color: theme('colors.gray.100') },
              h4: { color: theme('colors.gray.100') },
              h5: { color: theme('colors.gray.100') },
              h6: { color: theme('colors.gray.100') },
              code: { color: theme('colors.gray.100') },
              'a code': { color: theme('colors.gray.100') },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800')
              },
              thead: {
                color: theme('colors.gray.100'),
                borderBottomColor: theme('colors.gray.700')
              },
              'tbody tr': { borderBottomColor: theme('colors.gray.800') }
            }
          }
        }
      }
    }
  },
  variants: {
    extend: { typography: ['dark'] }
  },
  plugins: [require('@tailwindcss/typography')]
}
