import { CalendarIcon, TimeIcon } from "@chakra-ui/icons";
import { Flex, HStack, Img, Text } from "@chakra-ui/react";

interface FeaturedNewsCardProps {
  variant?: "vertical" | "big" | "regular";
  content?: {
    title: string;
    description: string;
    image: string;
  };
}

export const FeaturedNewsCard = ({
  variant,
  content,
}: FeaturedNewsCardProps) => {
  return (
    <Flex
      h={{ base: "auto", lg: variant === "big" ? "250px" : "277px" }}
      gap="24px"
      direction={{
        base: "column",
        lg: variant === "vertical" ? "column" : "row",
      }}
      transition="box-shadow 0.2s"
      _hover={{ boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.135216);" }}
    >
      <Img
        src={content?.image ? content.image : "/pictures/news-img.png"}
        h="100%"
        w="100%"
      />
      <Flex flexDirection="column" gap={variant === "big" ? "20px" : "10px"}>
        {variant !== "vertical" && (
          <Text
            display="flex"
            w="110px"
            _before={{
              content: '""',
              alignSelf: "center",
              flex: 1,
              height: "2px",
              marginRight: "16px",
              background: "linear-gradient(to right, white, black)",
            }}
            fontSize="1rem"
            as="h4"
          >
            {content?.title ? content.title : "LATEST"}
          </Text>
        )}
        <Text fontSize={{ base: "1rem", lg: "1.2rem" }} as="p">
          Parents sue Sisolak, CCSD over mask order in schools
        </Text>
        {content?.description && (
          <Text fontSize="0.875rem" as="p">
            {content?.description}
          </Text>
        )}
        <Flex
          gap="10px"
          align="center"
          fontSize={{ lg: "0.875rem", base: "0.75rem" }}
        >
          <CalendarIcon /> Saturday, July 17, 2021
        </Flex>
      </Flex>
    </Flex>
  );
};
