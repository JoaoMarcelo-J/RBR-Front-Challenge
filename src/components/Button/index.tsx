import { Button as ChakraButton } from "@chakra-ui/react";

export default function Button({ children, ...rest }) {
  return (
    <ChakraButton
      bgColor="primary.500"
      color="white"
      border="0"
      borderRadius="0"
      fontSize="18px"
      py="25px"
      _hover={{
        bgColor: "primary.300"
      }}
      _active={{
        bgColor: "primary.600"
      }}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
}
