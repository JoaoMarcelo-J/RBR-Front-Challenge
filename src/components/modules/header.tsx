import {
  Box,
  Flex,
  HStack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useBreakpointValue,
  IconButton,
  useDisclosure,
  DrawerCloseButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Img } from "@chakra-ui/image";
import { NavLink } from "components/elements/nav-link";
import { SearchInput } from "components/elements/search-input";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Header = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      right="0"
      mb="60px"
      paddingY={isWideVersion ? "2.3rem" : "1rem"}
      left="0"
      top="0"
      bg="#fff"
      boxShadow="0px 0px 4px rgba(0, 0, 0, 0.135216);"
      w="100%"
    >
      {isWideVersion ? (
        <Flex justify="space-between" margin="0 auto" maxW="1480px">
          <Img src="/pictures/logo.png" />

          <HStack gap="2.4rem">
            <NavLink content="Videos" />
            <NavLink content="Legal briefs/filings" isDropDown />
            <NavLink content="About" />
            <NavLink content="Latest" />
            <NavLink content="Contact" />
          </HStack>
          <SearchInput />
        </Flex>
      ) : (
        <Box p={"0 20px"}>
          <Flex justify="space-between" align="center">
            <Flex alignItems="center">
              <Img src="/pictures/logo.png" alt="Aztra" width="110px" />
            </Flex>
            <IconButton
              colorScheme="#000"
              color="#000"
              aria-label="Search database"
              icon={<HamburgerIcon />}
              size="lg"
              onClick={onOpen}
              fontSize={24}
              outline="0"
            />
          </Flex>
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent bg="#fff">
              <DrawerCloseButton onClick={onClose} />
              <DrawerHeader>
                <Flex alignItems="center">
                  <Img src="/pictures/logo.png" alt="Logo" width="250px " />
                </Flex>
              </DrawerHeader>
              <DrawerBody>
                <VStack align="start" mt="1rem" gap="1rem">
                  <NavLink content="Videos" fontSize="1.4rem" />
                  <NavLink
                    content="Legal briefs/filings"
                    fontSize="1.4rem"
                    isDropDown
                  />
                  <NavLink content="About" fontSize="1.4rem" />
                  <NavLink content="Latest" fontSize="1.4rem" />
                  <NavLink content="Contact" fontSize="1.4rem" />
                </VStack>
              </DrawerBody>

              <DrawerFooter>
                <HStack spacing="20px">
                  <Text as="a" href="" target="_blank">
                    <Img
                      src="/pictures/twitter.png"
                      cursor="pointer"
                      _hover={{
                        transform: "scale(1.2)",
                        transition: "0.2s",
                      }}
                      alt="Twitter"
                    />
                  </Text>
                  <Img
                    src="/pictures/telegram.png"
                    cursor="pointer"
                    _hover={{ transform: "scale(1.2)", transition: "0.2s" }}
                    alt="Discord"
                  />
                </HStack>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Box>
      )}
    </Box>
  );
};
