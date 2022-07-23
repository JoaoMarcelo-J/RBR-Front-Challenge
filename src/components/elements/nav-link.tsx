import { ChevronDownIcon } from "@chakra-ui/icons";
import { Text, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import React from "react";

interface NavLinkProps {
  isDropDown?: boolean;
  content: string;
  onClick?: () => void;
}

export const NavLink = ({
  isDropDown = false,
  content,
  onClick,
}: NavLinkProps) => (
  <>
    {!isDropDown ? (
      <Text
        as="a"
        fontSize="1rem"
        color="#000"
        cursor="pointer"
        _hover={{ opacity: "0.6" }}
        transition="opacity 0.2s"
        onClick={onClick}
      >
        {content}
      </Text>
    ) : (
      <Menu
        // _hover={{ opacity: "0.6" }}
        // variant="unstyled"
        isLazy
      >
        <MenuButton>
          {content} <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>Teste</MenuItem>
        </MenuList>
      </Menu>
    )}
  </>
);
