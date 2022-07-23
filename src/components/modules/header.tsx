import { Box, Flex, HStack } from "@chakra-ui/react";
import { Img } from "@chakra-ui/image";
import { NavLink } from "components/elements/nav-link";
import { SearchInput } from "components/elements/search-input";

export const Header = () => {
  return (
    <Box
      right="0"
      mb="60px"
      paddingY="2.3rem"
      left="0"
      top="0"
      bg="#fff"
      boxShadow="0px 0px 4px rgba(0, 0, 0, 0.135216);"
      w="100%"
    >
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
    </Box>
  );
};
