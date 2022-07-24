import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import { NavBarItem } from "components/elements/nav-bar-item";
import React from "react";

export const NavBar = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex justifyContent="space-between" paddingX="30px">
      {isWideVersion ? (
        <HStack paddingX="20px" gap={{ lg: "30px", xl: "80px" }}>
          <NavBarItem content="LATEST" />
          <NavBarItem content="COVID 19" />
          <NavBarItem content="LAW" />
          <NavBarItem content="TECNOLOGY" />
          <NavBarItem content="POLICY" />
          <NavBarItem content="VACCINE" />
        </HStack>
      ) : (
        <Menu>
          <MenuButton
            as={Button}
            aria-label="Options"
            rightIcon={<ChevronDownIcon />}
            variant="outline"
          >
            Menu
          </MenuButton>
          <MenuList>
            <MenuItem>
              <NavBarItem content="LATEST" />
            </MenuItem>
            <MenuItem>
              <NavBarItem content="COVID 19" />
            </MenuItem>
            <MenuItem>
              <NavBarItem content="LAW" />
            </MenuItem>
            <MenuItem>
              <NavBarItem content="TECNOLOGY" />
            </MenuItem>
            <MenuItem>
              <NavBarItem content="POLICY" />
            </MenuItem>
            <MenuItem>
              <NavBarItem content="VACCINE" />
            </MenuItem>
          </MenuList>
        </Menu>
      )}

      <InputGroup
        width={{ base: "150px", lg: "300px" }}
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
