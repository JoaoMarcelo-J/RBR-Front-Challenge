import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { NavBarItem } from "components/elements/nav-bar-item";
import React from "react";

export const NavBar = () => {
  return (
    <Flex justifyContent="space-between">
      <HStack paddingX="20px" gap="90px">
        <NavBarItem content="LATEST" />
        <NavBarItem content="COVID 19" />
        <NavBarItem content="LAW" />
        <NavBarItem content="TECNOLOGY" />
        <NavBarItem content="POLICY" />
        <NavBarItem content="VACCINE" />
      </HStack>
      <InputGroup
        width="300px"
        transition="opacity 0.2s"
        _hover={{ opacity: "0.6" }}
        borderBottom="1px"
        borderStyle="solid"
        sx={{
          borderImage: "linear-gradient(to right, white, #3F2957) 1",
        }}
      >
        <InputLeftElement children={<SearchIcon color="#3F2957" />} />
        <Input
          fontWeight="400"
          placeholder="SEARCH"
          variant="unstyled"
          _placeholder={{
            color: "#3F2957",
            fontFamily: "Rubik",
            fontSize: "14px",
          }}
        />
      </InputGroup>
    </Flex>
  );
};
