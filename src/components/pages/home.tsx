//Components
import { CarrouselNews } from "components/modules/carrousel-news";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { FeaturedNews } from "components/modules/featured-news";
import { NavBar } from "components/modules/navbar";
import { Feed } from "components/modules/feed";

//Styles
import "@splidejs/react-splide/css";

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
      <FeaturedNews />
      <NavBar />
      <Feed />
    </Box>
  );
};
