import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEvent,
  MouseEventHandler,
  useState,
} from 'react'
import { Button } from './Button'
import { FiCoffee } from 'react-icons/fi'
interface SearchBarProps {
  onChange?: (
    event: ChangeEvent<HTMLInputElement>
  ) => ChangeEventHandler<HTMLInputElement>
  onClick?: (
    event: MouseEvent<HTMLButtonElement>
  ) => MouseEventHandler<HTMLButtonElement>
  value?: string
}
//TODO: integrate dropdown suggestions
export const SearchBar = (props: SearchBarProps) => {
  const [focus, setFocus] = useState(false)
  return (
    <Flex direction="row" w="100%">
      <InputGroup onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}>
        <InputLeftElement pointerEvents="none" pl="4">
          <Icon
            as={FiCoffee}
            color={focus ? 'brand.500' : 'gray.400'}
            transition="all 0.15s ease"
            transform="scaleX(-1)"
          />
        </InputLeftElement>
        <Input
          pl="12"
          type="text"
          placeholder="Nome da startup"
          value={props.value}
          onChange={props.onChange}
          focusBorderColor="none"
          _placeholder={{ color: 'gray.400' }}
          bgColor="white"
        />
      </InputGroup>
      <Button ml="2" onClick={props.onClick}>
        Pesquisar
      </Button>
    </Flex>
  )
}
