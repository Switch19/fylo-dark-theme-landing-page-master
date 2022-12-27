/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '760px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        // Primary
        darkBlueIntro: 'hsl(217, 28%, 15%)',
        darkBlueMain: 'hsl(218, 28%, 13%)',
        darkBlueFooter: 'hsl(216, 53%, 9%)',
        darkBlueTestimonials: 'hsl(219, 30%, 18%)',

        // images background
        curvyImageDesktop: './images/bg-curvy-desktop.svg',
        curvyImageMobile: './images/bg-curvy-mobile.svg',

        // Accent
        cyan: 'hsl(176, 68%, 64%)',
        normalBlue: 'hsl(198, 60%, 50%)',
        lightRed: 'sl(0, 100%, 63%)'

      }
    },
  },
  plugins: [],
}
