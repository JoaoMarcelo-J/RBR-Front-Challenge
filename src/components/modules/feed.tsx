import { Grid, GridItem, VStack } from "@chakra-ui/react";
import { FeaturedNewsCard } from "components/elements/featured-news-card";

export const Feed = () => {
  const content = {
    title: "COVID-19",
    description:
      "In a span of one week, the number of deaths due to COVID-19 vaccines reported to the government’s database outnumbered the official count of deaths due to the virus.",
    image: "/pictures/covid.png",
  };

  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
      mt="4rem"
      paddingX={{ base: "20px", lg: "0px" }}
      templateRows={{ base: "1fr 1fr", lg: "400px 1200px" }}
      columnGap="60px"
      rowGap="80px"
    >
      <GridItem>
        <FeaturedNewsCard variant="vertical" />
      </GridItem>
      <GridItem>
        <FeaturedNewsCard variant="vertical" />
      </GridItem>
      <GridItem>
        <FeaturedNewsCard variant="vertical" />
      </GridItem>
      <GridItem colSpan={{ base: 1, lg: 2 }}>
        <VStack gap="40px">
          <FeaturedNewsCard content={content} variant="big" />
          <FeaturedNewsCard content={content} variant="big" />
          <FeaturedNewsCard content={content} variant="big" />
        </VStack>
      </GridItem>
      <GridItem colSpan={1}>
        <FeaturedNewsCard />
      </GridItem>
    </Grid>
  );
};
