import { Flex } from '@chakra-ui/react'
import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEvent,
  MouseEventHandler,
} from 'react'
import { Button } from './Button'
import { Input } from './Input'

interface SearchBarProps {
  onChange?: (
    event: ChangeEvent<HTMLInputElement>
  ) => ChangeEventHandler<HTMLInputElement>
  onClick?: (
    event: MouseEvent<HTMLButtonElement>
  ) => MouseEventHandler<HTMLButtonElement>
  value?: string
}

export const SearchBar = (props: SearchBarProps) => {
  return (
    <Flex direction="row">
      <Input
        type="text"
        placeholder="Pesquisar startup"
        value={props.value}
        onChange={props.onChange}
      />
      <Button ml="2" onClick={props.onClick}>
        Pesquisar
      </Button>
    </Flex>
  )
}
