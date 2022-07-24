import { Divider, HStack, Stack } from "@chakra-ui/react";
import { FeaturedNewsCard } from "components/elements/featured-news-card";
import React from "react";

export const FeaturedNews = () => {
  return (
    <>
      <Divider orientation="horizontal" borderColor="#707070" marginY="30px" />
      <Stack
        direction={{ base: "column", lg: "row" }}
        gap="10px"
        paddingX="20px"
      >
        <FeaturedNewsCard />
        <FeaturedNewsCard />
        <FeaturedNewsCard />
      </Stack>
      <Divider orientation="horizontal" marginY="30px" borderColor="#707070" />
    </>
  );
};
