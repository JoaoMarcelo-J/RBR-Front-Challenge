import { CarrouselNews } from "components/modules/carrousel-news";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export const Home = () => {
  return (
    <div>
      <Splide
        aria-label="My Favorite Images"
        options={{
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
    </div>
  );
};
