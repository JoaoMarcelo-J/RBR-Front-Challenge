//Components
import { Grid, GridItem, VStack } from "@chakra-ui/react";
import { FeaturedNewsCard } from "components/elements/featured-news-card";
import { Popular } from "./popular";

//Mocks
import { news, headerNews } from "../../constants/";

export const Feed = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
      mt="3rem"
      paddingX={{ base: "20px", lg: "0px" }}
      templateRows={{ base: "1fr 1fr", lg: "400px auto" }}
      columnGap="60px"
      rowGap="80px"
    >
      {headerNews.map((item) => (
        <GridItem key={item.title}>
          <FeaturedNewsCard variant="vertical" content={item} />
        </GridItem>
      ))}
      <GridItem colSpan={{ base: 1, lg: 2 }}>
        <VStack gap="40px">
          {news.map((item) => (
            <FeaturedNewsCard key={item.title} content={item} variant="big" />
          ))}
        </VStack>
      </GridItem>
      <GridItem colSpan={1}>
        <Popular />
      </GridItem>
    </Grid>
  );
};
