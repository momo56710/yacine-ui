import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
  } from '@chakra-ui/react';
  
  export default function HeroSection() {
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Manage School Access and Safety with the {' '}
            <Text as={'span'} color={'orange.400'}>
            School Security System
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
          The School Security System provides a secure and efficient way to manage school access, track attendance, and respond to emergencies. Our system ensures that only authorized personnel are allowed on site, students are safe at all times, and emergency response protocols are in place to quickly alert staff and authorities.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'orange.400'}
              _hover={{ bg: 'orange.500' }}>
              Get started
            </Button>
            <Button rounded={'full'} px={6}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
    );
  }
  
