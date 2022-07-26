import { EmailIcon, InfoIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Img,
  Flex,
  Text,
  HStack,
  Input,
  Button,
  Divider,
  VStack,
  Center,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      as="footer"
      position="relative"
      mt="150px"
      w="calc(100vw - 10px)"
      sx={{
        "@media (min-width: 1480px)": {
          marginLeft: "calc(((100vw - 1480px) / 2) * -1)",
        },
      }}
    >
      <Flex>
        <Img src="/pictures/footer.png" objectFit="contain" w="100%" h="100%" />
      </Flex>
      <Box bg="#281937" h="1400px">
        <Flex
          m="0 auto"
          maxW="1480px"
          position="relative"
          direction="column"
          gap="66px"
        >
          <Flex
            align="center"
            w="100%"
            justify="space-between"
            flexDirection={{ base: "column", lg: "row" }}
            paddingX={{ base: "20px", lg: "0px" }}
            gap={{ base: "20px", lg: "0px" }}
          >
            <Box color="#fff" mt="20px" maxW="530px">
              <Text fontSize="1.25rem">SUBSCRIBE</Text>
              <Text fontSize={{ base: "3rem", lg: "4rem" }}>
                Get on the list
              </Text>
              <Text fontSize="1.5rem">
                Join our newsletter to receive the latest news and updates. No
                spam.
              </Text>
            </Box>
            <HStack>
              <Input placeholder="Your name" size="lg" borderRadius="0" />
              <Input placeholder="Your Email" size="lg" borderRadius="0" />
              <Button
                _hover={{ bg: "#fff", color: "#281937" }}
                transition="all 0.2s"
                borderRadius="0"
                padding="24px 40px"
                bg="#3F2957"
                color="#fff"
              >
                SUBMIT
              </Button>
            </HStack>
          </Flex>
          <Divider color="#fff" />
          {isWideVersion ? (
            <Flex>
              <Box mr="200px">
                <Img src="/pictures/logo-white.png" />
                <HStack gap="10px" mt="30px">
                  <Img cursor="pointer" src="/pictures/telegram.png" />
                  <Img cursor="pointer" src="/pictures/twitter.png" />
                  <Img cursor="pointer" src="/pictures/telegram.png" />
                  <Img cursor="pointer" src="/pictures/twitter.png" />
                </HStack>
              </Box>
              <VStack color="#fff" gap="22px" align="start" mr="60px">
                <Text mb="12px" fontSize="1.25rem">
                  LAw USEFUL LINKS
                </Text>
                <HStack gap="80px" align="center">
                  <Text>Dui defense</Text>
                  <Text>Immigration</Text>
                </HStack>
                <HStack gap="40px">
                  <Text>Criminal defense</Text>
                  <Text>Estate planning</Text>
                </HStack>
                <HStack gap="56px">
                  <Text>Personal injury</Text>
                  <Text>Business law</Text>
                </HStack>
                <Text>Family law</Text>
              </VStack>
              <Center height="240px" mt="10px">
                <Divider orientation="vertical" />
              </Center>
              <VStack color="#fff" marginX="60px" gap="22px" align="start">
                <Text mb="18px" fontSize="1.25rem" marginBottom="12px">
                  Freedom for nevada
                </Text>
                <Text>Videos</Text>
                <Text>Freedom</Text>
                <Text>Américas Frontline Doctors</Text>
              </VStack>
              <Center height="240px" mt="10px">
                <Divider orientation="vertical" />
              </Center>
              <VStack color="#fff" marginX="60px" gap="18px" align="start">
                <Text mb="18px" fontSize="1.25rem" marginBottom="12px">
                  Contact
                </Text>
                <Flex align="start" gap="20px">
                  <InfoIcon mt="5px" />
                  <Text maxW="150px">405 Marsh Ave. Reno, NV 89509</Text>
                </Flex>
                <Flex align="center" gap="20px">
                  <EmailIcon />
                  <Text>media@joeygilbertlaw.com</Text>
                </Flex>
                <Flex gap="20px">
                  <PhoneIcon />
                  <Text>775-284-7700</Text>
                </Flex>
              </VStack>
            </Flex>
          ) : (
            <Flex direction="column" align="start" paddingX="20px">
              <Box alignSelf="center" mb="40px">
                <Img src="/pictures/logo-white.png" />
                <HStack gap="25px" mt="30px">
                  <Img cursor="pointer" src="/pictures/telegram.png" />
                  <Img cursor="pointer" src="/pictures/twitter.png" />
                  <Img cursor="pointer" src="/pictures/telegram.png" />
                  <Img cursor="pointer" src="/pictures/twitter.png" />
                </HStack>
              </Box>
              <VStack
                w="100%"
                fontSize="0.75rem"
                gap="5px"
                color="#fff"
                align="start"
                mb="20px"
              >
                <Text mb="4px" fontSize="1rem" fontWeight="bold">
                  LAw USEFUL LINKS
                </Text>
                <HStack w="100%" justify="space-between" align="center">
                  <Text>Dui defense</Text>
                  <Text>Immigration</Text>
                </HStack>
                <HStack w="100%" justify="space-between">
                  <Text>Criminal defense</Text>
                  <Text>Estate planning</Text>
                </HStack>
                <HStack w="100%" justify="space-between">
                  <Text>Personal injury</Text>
                  <Text>Business law</Text>
                </HStack>
                <Text>Family law</Text>
              </VStack>
              <Divider color="#fff" w="100%" />
              <VStack
                color="#fff"
                gap="5px"
                align="start"
                fontSize="0.75rem"
                marginY="20px"
              >
                <Text mb="4px" fontSize="1rem">
                  Freedom for nevada
                </Text>
                <Text>Videos</Text>
                <Text>Freedom</Text>
                <Text>Américas Frontline Doctors</Text>
              </VStack>
              <Divider color="#fff" w="100%" />
              <VStack
                color="#fff"
                gap="5px"
                align="start"
                fontSize="0.75rem"
                marginY="20px"
              >
                <Text mb="5px" fontSize="1rem">
                  Contact
                </Text>
                <Flex align="start" gap="20px">
                  <InfoIcon mt="5px" />
                  <Text maxW="150px">405 Marsh Ave. Reno, NV 89509</Text>
                </Flex>
                <Flex align="center" gap="20px">
                  <EmailIcon />
                  <Text>media@joeygilbertlaw.com</Text>
                </Flex>
                <Flex gap="20px">
                  <PhoneIcon />
                  <Text>775-284-7700</Text>
                </Flex>
              </VStack>
            </Flex>
          )}
          <Text align="center" color="#fff" mt="20px">
            © COPYRIGHT 2021. ALL RIGHTS RESERVED.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
