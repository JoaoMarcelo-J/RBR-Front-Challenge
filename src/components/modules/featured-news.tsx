import { Flex, HStack } from "@chakra-ui/react";
import { FeaturedNewsCard } from "components/elements/featured-news-card";
import React from "react";

export const FeaturedNews = () => {
  return (
    <HStack mt="2rem" gap="10px">
      <FeaturedNewsCard />
      <FeaturedNewsCard />
      <FeaturedNewsCard />
    </HStack>
  );
};
