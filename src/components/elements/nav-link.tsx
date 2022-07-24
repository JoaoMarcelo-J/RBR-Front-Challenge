import { ChevronDownIcon } from "@chakra-ui/icons";
import { Text, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import React from "react";

interface NavLinkProps {
  isDropDown?: boolean;
  content: string;
  fontSize?: string;
  onClick?: () => void;
}

export const NavLink = ({
  isDropDown = false,
  content,
  onClick,
  fontSize,
}: NavLinkProps) => (
  <>
    {!isDropDown ? (
      <Text
        as="a"
        fontSize={fontSize || "1.rem"}
        color="#000"
        cursor="pointer"
        _hover={{ opacity: "0.6" }}
        transition="opacity 0.2s"
        onClick={onClick}
      >
        {content}
      </Text>
    ) : (
      <Menu isLazy>
        <MenuButton fontSize={fontSize} _hover={{ opacity: "0.6" }}>
          {content} <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>Teste</MenuItem>
        </MenuList>
      </Menu>
    )}
  </>
);
