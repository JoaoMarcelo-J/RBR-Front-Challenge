import { CalendarIcon, TimeIcon } from "@chakra-ui/icons";
import { Flex, HStack, Img, Text } from "@chakra-ui/react";

export const FeaturedNewsCard = () => {
  return (
    <Flex
      gap="24px"
      transition="box-shadow 0.2s"
      _hover={{ boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.135216);" }}
    >
      <Img src="/pictures/news-img.png" h="160px" w="160px" />
      <Flex flexDirection="column" gap="20px">
        <Text
          display="flex"
          w="110px"
          _before={{
            content: '""',
            alignSelf: "center",
            flex: 1,
            height: "2px",
            marginRight: "16px",
            background: "linear-gradient(to right, black, white)",
          }}
          fontSize="1rem"
          as="h4"
        >
          LATEST
        </Text>
        <Text fontSize="1.25rem" as="p">
          Parents sue Sisolak, CCSD over mask order in schools
        </Text>
        <Flex
          gap="10px"
          align="center"
          fontSize={{ lg: "0.875rem", sm: "0.75rem" }}
        >
          <CalendarIcon /> Saturday, July 17, 2021
        </Flex>
      </Flex>
    </Flex>
  );
};
