import { extendTheme } from '@chakra-ui/react'
const env = process.env.NODE_ENV

export const theme = extendTheme({
  fonts: {
    heading: 'Montserrat, sans-serif',
    subHeading: 'Montserrat, sans-serif',
    body: 'Montserrat, sans-serif',
  },
  colors:
    env === 'development'
      ? {
          brand: {
            50: '#EDFAF7',
            100: '#E6F8F4',
            200: '#CEF1E8',
            300: '#B5EADD',
            400: '#9CE3D1',
            500: '#84DCC6',
            600: '#71B9AB',
            700: '#609692',
            800: '#4E7377',
            900: '#3C505E',
          },
        }
      : {
          brand: {
            50: '#F4EDF7',
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
