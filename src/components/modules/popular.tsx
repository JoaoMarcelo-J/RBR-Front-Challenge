//Components
import { VStack, Text, Divider, Box } from "@chakra-ui/react";
import { FeaturedNewsCard } from "components/elements/featured-news-card";

//Mocks
import { featuredNews } from "../../constants/";

export const Popular = () => {
  return (
    <VStack bg="#EFEFEF" align="start" gap="20px" pb="30px">
      <Text as="h1" fontSize="1.5rem" padding="30px 30px 0px 30px">
        <Text as="strong" fontWeight="bold">
          Popular
        </Text>{" "}
        on Blog
      </Text>
      <Divider borderColor="#707070" />
      {featuredNews.map((item, index) => (
        <Box key={item.title} paddingX="30px">
          <FeaturedNewsCard content={item} variant="regular" />
          {index !== featuredNews.length - 1 && (
            <Divider borderColor="#707070" mt="30px" />
          )}
        </Box>
      ))}
    </VStack>
  );
};
