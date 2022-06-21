import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: 'Montserrat, sans-serif',
    subHeading: 'Montserrat, sans-serif',
    body: 'Montserrat, sans-serif',
  },
  colors: {
    brand: {
      100: '#E5D4F5',
      200: '#CCAAEA',
      300: '#B280E0',
      400: '#9856D5',
      500: '#7F2CCB',
      600: '#6523A2',
      700: '#4C1A7A',
      800: '#331151',
      900: '#190829',
    },
  },
})
