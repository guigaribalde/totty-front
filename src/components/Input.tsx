import React from 'react'
import { Input as Inpt, InputProps } from '@chakra-ui/react'

export const Input = (props: InputProps) => {
  return (
    <Inpt
      {...props}
      focusBorderColor="none"
      _placeholder={{ color: 'gray.400' }}
      bgColor="white"
    />
  )
}
