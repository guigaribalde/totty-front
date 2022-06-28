import { Flex, HStack, Text } from '@chakra-ui/react'
import { useBusiness } from '@hooks/useBusiness'

export default function BusinessStats() {
  const { business } = useBusiness()
  return (
    <HStack gap="4" justify="center" mt="5">
      <Flex
        align="center"
        direction={{
          base: 'column',
          md: 'row',
        }}
      >
        <Text fontWeight="semibold" mr="2">
          {business.employees.min} - {business.employees.max}
        </Text>
        <Text color="gray.500">funcionários</Text>
      </Flex>
      <Flex
        align="center"
        direction={{
          base: 'column',
          md: 'row',
        }}
      >
        <Text fontWeight="semibold" mr="2">
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(business.valuation.min)}
        </Text>
        <Text color="gray.500">valuation</Text>
      </Flex>
      <Flex
        align="center"
        direction={{
          base: 'column',
          md: 'row',
        }}
      >
        <Text fontWeight="semibold" mr="2">
          {business.growth}%
        </Text>{' '}
        <Text color="gray.500">crescimento</Text>
      </Flex>
    </HStack>
  )
}
