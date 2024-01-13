import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'copy-light': 'rgba(var(--copy-light))',
        'copy-lighter': 'rgba(var(--copy-lighter))',
        'borderr': 'rgba(var(--borderr))',
        'primary-inactive': 'rgba(var(--primary-inactive))',
        'card-bg': 'rgba(var(--card-bg))',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      layout: {
        radius: {
          small: '2px', // rounded-small
          medium: '4px', // rounded-medium
          large: '6px',
        },
      },
      themes: {
        dark: {
          // extend: 'dark',
          colors: {
            background: '#18151e', // Light green background
            foreground: '#fbfbfc', // Black text

            primary: {
              100: '#EBD7FE',
              200: '#D5B0FD',
              300: '#BA88F9',
              400: '#A269F4',
              500: '#7C3AED',
              600: '#5F2ACB',
              700: '#461DAA',
              800: '#301289',
              900: '#210B71',
              DEFAULT: '#7c3aed', // Default green
              foreground: '#ffffff', // Black text
            },

            secondary: {
              100: '#D7F9FE',
              200: '#B0EFFD',
              300: '#88DDF9',
              400: '#69C9F4',
              500: '#3AABED',
              600: '#2A86CB',
              700: '#1D65AA',
              800: '#124789',
              900: '#0B3271',
              DEFAULT: '#3aabed',
              foreground: '#ffffff',
            },

            focus: '#5f14e0', // Focus color
          },
        },
        light: {
          // extend: 'light',
          colors: {
            background: '#FBFCFC', // Light green background
            foreground: '#24202d', // Black text

            primary: {
              100: '#EBD7FE',
              200: '#D5B0FD',
              300: '#BA88F9',
              400: '#A269F4',
              500: '#7C3AED',
              600: '#5F2ACB',
              700: '#461DAA',
              800: '#301289',
              900: '#210B71',
              DEFAULT: '#7c3aed', // Default green
              foreground: '#ffffff', // Black text
            },

            secondary: {
              100: '#D7F9FE',
              200: '#B0EFFD',
              300: '#88DDF9',
              400: '#69C9F4',
              500: '#3AABED',
              600: '#2A86CB',
              700: '#1D65AA',
              800: '#124789',
              900: '#0B3271',
              DEFAULT: '#3aabed',
              foreground: '#031825',
            },

            focus: '#5f14e0', // Focus color
          },
        },
        // 'green-dark': {
        //   extend: 'dark', // <- inherit default values from dark theme
        //   colors: {
        //     background: '#0A1F0A', // Dark green background
        //     foreground: '#ffffff', // White text

        //     primary: {
        //       50: '#0D6814', // Light green shades
        //       100: '#127C18',
        //       200: '#1AA327',
        //       300: '#1DB82B',
        //       400: '#21CE2F',
        //       500: '#25E733', // Default green
        //       600: '#36F944',
        //       700: '#47FC55',
        //       800: '#5AFD68',
        //       900: '#6BFE79',
        //       DEFAULT: '#25E733', // Default green
        //       foreground: '#ffffff', // White text
        //     },

        //     focus: '#36F944', // Focus color
        //   },
        // },
        // 'purple-dark': {
        //   extend: 'dark', // <- inherit default values from dark theme
        //   colors: {
        //     background: '#0D001A',
        //     foreground: '#ffffff',
        //     primary: {
        //       50: '#3B096C',
        //       100: '#520F83',
        //       200: '#7318A2',
        //       300: '#9823C2',
        //       400: '#c031e2',
        //       500: '#DD62ED',
        //       600: '#F182F6',
        //       700: '#FCADF9',
        //       800: '#FDD5F9',
        //       900: '#FEECFE',
        //       DEFAULT: '#DD62ED',
        //       foreground: '#ffffff',
        //     },
        //     focus: '#F182F6',
        //   },
        // },
        // 'orange-dark': {
        //   extend: 'dark',
        //   colors: {
        //     background: '#1F100A', // Dark orange background
        //     foreground: '#ffffff', // White text

        //     primary: {
        //       50: '#7C4314', // Light orange shades
        //       100: '#91531A',
        //       200: '#B06A1E',
        //       300: '#D08223',
        //       400: '#EE9A27',
        //       500: '#FFB131', // Default orange
        //       600: '#FFC732',
        //       700: '#FFDB4E',
        //       800: '#FFEE68',
        //       900: '#FFF880',
        //       DEFAULT: '#FFB131', // Default orange
        //       foreground: '#ffffff', // White text
        //     },

        //     focus: '#FFC732', // Focus color
        //   },
        // },
        // 'green-light': {
        //   extend: 'light',
        //   colors: {
        //     background: '#E7FBE7', // Light green background
        //     foreground: '#000000', // Black text

        //     primary: {
        //       50: '#C7FFC7', // Light green shades
        //       100: '#A6FFA6',
        //       200: '#85FF85',
        //       300: '#64FF64',
        //       400: '#43FF43',
        //       500: '#25E733', // Default green
        //       600: '#1ACD1A',
        //       700: '#16B316',
        //       800: '#119011',
        //       900: '#0D7C0D',
        //       DEFAULT: '#1ACD1A', // Default green
        //       foreground: '#000000', // Black text
        //     },

        //     focus: '#16B316', // Focus color
        //   },
        // },
        // 'my-light': {
        //   extend: 'light',
        //   colors: {
        //     background: '#FBFCFC', // Light green background
        //     foreground: '#24202d', // Black text

        //     primary: {
        //       100: '#EBD7FE',
        //       200: '#D5B0FD',
        //       300: '#BA88F9',
        //       400: '#A269F4',
        //       500: '#7C3AED',
        //       600: '#5F2ACB',
        //       700: '#461DAA',
        //       800: '#301289',
        //       900: '#210B71',
        //       DEFAULT: '#7c3aed', // Default green
        //       foreground: '#ffffff', // Black text
        //     },

        //     secondary: {
        //       100: '#D7F9FE',
        //       200: '#B0EFFD',
        //       300: '#88DDF9',
        //       400: '#69C9F4',
        //       500: '#3AABED',
        //       600: '#2A86CB',
        //       700: '#1D65AA',
        //       800: '#124789',
        //       900: '#0B3271',
        //       DEFAULT: '#3aabed',
        //       foreground: '#031825',
        //     },

        //     focus: '#5f14e0', // Focus color
        //   },
        // },
        // 'my-dark': {
        //   extend: 'dark',
        //   colors: {
        //     background: '#18151e', // Light green background
        //     foreground: '#fbfbfc', // Black text

        //     primary: {
        //       100: '#EBD7FE',
        //       200: '#D5B0FD',
        //       300: '#BA88F9',
        //       400: '#A269F4',
        //       500: '#7C3AED',
        //       600: '#5F2ACB',
        //       700: '#461DAA',
        //       800: '#301289',
        //       900: '#210B71',
        //       DEFAULT: '#7c3aed', // Default green
        //       foreground: '#ffffff', // Black text
        //     },

        //     secondary: {
        //       100: '#D7F9FE',
        //       200: '#B0EFFD',
        //       300: '#88DDF9',
        //       400: '#69C9F4',
        //       500: '#3AABED',
        //       600: '#2A86CB',
        //       700: '#1D65AA',
        //       800: '#124789',
        //       900: '#0B3271',
        //       DEFAULT: '#3aabed',
        //       foreground: '#ffffff',
        //     },

        //     focus: '#5f14e0', // Focus color
        //   },
        // },
      },
    }),
    require('tailwind-scrollbar'),
  ],
}
export default config
