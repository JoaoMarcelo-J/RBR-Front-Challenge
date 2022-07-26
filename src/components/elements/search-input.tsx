//Components
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

//Icons
import { SearchIcon } from "@chakra-ui/icons";

export const SearchInput = () => {
  return (
    <InputGroup
      width="100px"
      transition="opacity 0.2s"
      _hover={{ opacity: "0.6" }}
    >
      <Input
        placeholder="Search"
        variant="unstyled"
        _placeholder={{ color: "#000", fontFamily: "Rubik" }}
      />
      <InputRightElement mt="8px" children={<SearchIcon color="#000" />} />
    </InputGroup>
  );
};
