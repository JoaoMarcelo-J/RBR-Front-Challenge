import { CalendarIcon, LinkIcon, TimeIcon } from "@chakra-ui/icons";
import { Box, Flex, Img, Text, HStack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

export const CarrouselNews = () => {
  return (
    <Flex w="100%">
      <Box w="50%" position="relative">
        <Button
          color="white"
          top="5"
          left="5"
          boxShadow="8px 8px 10px rgba(0, 0, 0, 0.135216);"
          _hover={{ opacity: 0.8 }}
          position="absolute"
          borderRadius="0"
          backgroundColor="transparent"
          leftIcon={<LinkIcon />}
        >
          Share
        </Button>
        <Img src="/pictures/carrousel-img.png" />
      </Box>
      <Flex
        position="relative"
        gap="20px"
        w="50%"
        maxH="454px"
        bg="#000"
        flexDirection="column"
        padding="80px 126px"
        color="#fff"
      >
        <Text
          display="flex"
          w="140px"
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
          Latest
        </Text>
        <Text as="h2" fontSize="2.5rem" lineHeight="1.2">
          Report: More vaccine deaths last week than COVID-19 deaths
        </Text>
        <Text as="p" fontSize="1rem">
          In a span of one week, the number of deaths due to COVID-19 vaccines
          reported to the government’s database outnumbered the official count
          of deaths due to the virus.
        </Text>

        <HStack gap="30px">
          <Flex gap="10px" align="center">
            <TimeIcon /> 4 min
          </Flex>
          <Flex gap="10px" align="center">
            <CalendarIcon /> Saturday, July 17, 2021
          </Flex>
        </HStack>
        <Button
          backgroundColor="#fff"
          p="1rem 2rem"
          color="#000"
          borderRadius="0"
          position="absolute"
          bottom="0"
          right="0"
          size="md"
        >
          READ MORE
        </Button>
      </Flex>
    </Flex>
  );
};
