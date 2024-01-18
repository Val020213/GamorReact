/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        bgBase: 'var(--bg-base)',
        bgMiddle: 'var(--bg-middle)',
        bgTop: 'var(--bg-top)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        textDef: 'var(--text-default)',
        textInactive: 'var(--text-inactive)',
        btnPrimary: 'var(--btn-primary)',
        btnPrimaryBorder: 'var(--btn-primary-border)',
        btnPrimaryText: 'var(--btn-primary-text)',
        btnSecondary: 'var(--btn-secondary)',
        btnSecondaryText: 'var(--btn-secondary-text)',
        btnPlatform: 'var(--platform-btn)',
        btnTernary: 'var(--btn-ternary)',
        btnTernaryText: 'var(--btn-ternary-text)',
        auxialiar: 'var(--auxialiar)',
        promo: 'var(--promo)',
        layerGradient: 'linear - gradient(180deg,rgba(255, 255, 255, 0) 0.13 %, rgba(255, 255, 255, 0.64) 92.08 %)',
      },
      backgroundImage: {
        elipse: 'var(--elipse)',
        elipse2: 'var(--elipse2)',
        heroImg: 'var(--hero-img)',
        categoryImg: 'var(--category-img)',
      },
      keyframes: {
        'stroke-transition': {
          '0%': {
            stroke: 'var(--primary)',
          },
          '50%': {
            stroke: 'var(--secondary)',
          },
          '100%': {
            stroke: 'var(--primary)',
          }
        },
        'box-shadow-pulsate': {
          '0%': {
            boxShadow: 'none',
          },
          '50%': {
            boxShadow: '0 0 1.5rem var(--primary)',
          },
          '100%': {
            boxShadow: 'none',
          }
        },
        'box-shadow-transition': {
          '0%': {
            boxShadow: '0 0  1.5rem var(--primary)',
          },
          '50%': {
            boxShadow: '0 0  1.5rem var(--secondary)',
          },
          '100%': {
            boxShadow: '0 0  1.5rem var(--primary)',
          }
        },
        'text-shadow-transition': {
          '0%': {
            textShadow: '0 0 0.25rem var(--primary)',
          },
          '50%': {
            textShadow: '0 0 0.25rem var(--secondary)',
          },
          '100%': {
            textShadow: '0 0 0.25rem var(--primary)',
          }
        },
        'box-shadow-illumination': {
          '0%': {
            boxShadow: 'none',
          },
          '100%': {
            boxShadow: '0 0  1.5rem var(--primary)',
          }
        },
      }
    },
    animation: {
      'stroke-transition': 'stroke-transition 2s infinite',
      'box-shadow-pulsate': 'box-shadow-pulsate 1.5s infinite',
      'box-shadow-transition': 'box-shadow-transition 2s infinite',
      'text-shadow-transition': 'text-shadow-transition 2s infinite',
      'box-shadow-illumination': 'box-shadow-illumination 1.5s forwards',
    },
  },
  plugins: [],
}
