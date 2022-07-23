import { CarrouselNews } from "components/modules/carrousel-news";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";

export const Home = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Splide
        aria-label="My Favorite Images"
        options={{
          height: isWideVersion ? "454px" : "auto",
          arrows: false,
          type: "loop",
          autoplay: true,
        }}
      >
        <SplideSlide>
          <CarrouselNews />
        </SplideSlide>
        <SplideSlide>
          <CarrouselNews />
        </SplideSlide>
      </Splide>
    </Box>
  );
};
