import { CalendarIcon, LinkIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Img,
  Text,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export const CarrouselNews = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex w="100%" flexDirection={isWideVersion ? "row" : "column"}>
      <Box w={isWideVersion ? "50%" : "100%"} position="relative">
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
        <Img
          h={isWideVersion ? "455px" : "370px"}
          w="100%"
          src="/pictures/carrousel-img.png"
        />
      </Box>
      <Flex
        position="relative"
        gap="20px"
        w={isWideVersion ? "50%" : "100%"}
        maxH="454px"
        bg="#000"
        flexDirection="column"
        padding={isWideVersion ? "40px 80px" : "30px 16px"}
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
          LATEST
        </Text>
        <Text
          as="h2"
          fontSize={isWideVersion ? "2.5rem" : "1.8rem"}
          lineHeight="1.2"
        >
          Report: More vaccine deaths last week than COVID-19 deaths
        </Text>
        <Text as="p" fontSize={isWideVersion ? "1rem" : "0.875rem"}>
          In a span of one week, the number of deaths due to COVID-19 vaccines
          reported to the government’s database outnumbered the official count
          of deaths due to the virus.
        </Text>

        <HStack gap="30px">
          <Flex
            gap="10px"
            align="center"
            fontSize={isWideVersion ? "1rem" : "0.75rem"}
          >
            <TimeIcon /> 4 min
          </Flex>
          <Flex
            gap="10px"
            align="center"
            fontSize={isWideVersion ? "1rem" : "0.75rem"}
          >
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
          size={isWideVersion ? "md" : "sm"}
        >
          READ MORE
        </Button>
      </Flex>
    </Flex>
  );
};
