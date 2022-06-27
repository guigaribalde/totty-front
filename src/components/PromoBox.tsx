import { Flex, Text } from '@chakra-ui/react'

interface PromoBoxProps {
  color: string
  title: string
  button?: React.ReactNode
}

export const PromoBox = (props: PromoBoxProps) => {
  return (
    <Flex
      justify="space-between"
      direction="column"
      px="6"
      py="8"
      w="360px"
      h="200px"
      bgColor={props.color}
      borderRadius="10"
    >
      <Text color="white" fontSize="3xl" fontWeight="semibold">
        {props.title}
      </Text>
      {props.button}
    </Flex>
  )
}
