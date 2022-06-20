import React from 'react'
import { Button as Btn, ButtonProps } from '@chakra-ui/react'

export const Button = (props: ButtonProps) => {
  return (
    <Btn colorScheme="brand" px="28px" {...props}>
      {props.children}
    </Btn>
  )
}
