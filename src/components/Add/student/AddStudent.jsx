import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function AddStudent() {
  const [payload,setPayload] = useState(
    {
        firstName : '',
        lastName : '',
        card_id : '',
        fatherFirstName : '',
        fatherLastName : '',
        number : '',
        parentsEmail : '',
        address : '',
    }
    )

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Add Student
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" onChange={e => {setPayload({...payload,firstName : e.target.value})}
                    }/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" onChange={e => {setPayload({...payload,lastName : e.target.value})}
                    }/>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="card_id" isRequired>
              <FormLabel>Card ID</FormLabel>
              <InputGroup>
                <Input type="text" onChange={e => {setPayload({...payload,card_id : e.target.value})}
                    }/>
              </InputGroup>
            </FormControl>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Father First Name</FormLabel>
                  <Input type="text" onChange={e => {setPayload({...payload,fatherFirstName : e.target.value})}
                    }/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Father Last Name</FormLabel>
                  <Input type="text" onChange={e => {setPayload({...payload,fatherLastName : e.target.value})}
                    }/>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="number" isRequired>
              <FormLabel>Number</FormLabel>
              <Input type="text" onChange={e => {setPayload({...payload,number : e.target.value})}
                    }/>
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Parents Email</FormLabel>
              <Input type="email" onChange={e => {setPayload({...payload,parentsEmail : e.target.value})}
                    }/>
            </FormControl>
            <FormControl id="address" isRequired>
              <FormLabel>Address</FormLabel>
              <InputGroup>
                <Textarea onChange={e => {setPayload({...payload,address : e.target.value})}
                    }></Textarea>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={e =>{console.log(payload)}}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
