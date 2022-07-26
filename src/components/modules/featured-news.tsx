//Components
import { Divider, Stack } from "@chakra-ui/react";
import { FeaturedNewsCard } from "components/elements/featured-news-card";

//Mocks
import { featuredNews } from "../../constants/";

export const FeaturedNews = () => {
  return (
    <>
      <Divider orientation="horizontal" borderColor="#707070" marginY="30px" />
      <Stack
        direction={{ base: "column", lg: "row" }}
        gap="10px"
        paddingX="20px"
      >
        {featuredNews.map((item) => (
          <FeaturedNewsCard key={item.title} content={item} variant="regular" />
        ))}
      </Stack>
      <Divider
        orientation="horizontal"
        marginTop="30px"
        marginBottom="60px"
        borderColor="#707070"
      />
    </>
  );
};
