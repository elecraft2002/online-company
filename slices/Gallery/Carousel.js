import { useEffect, useState } from "react";
import {
  A11y,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { PrismicRichText } from "@prismicio/react";
import useWindowSize from "../../functions/useWindowSize";
const Carousel = ({ slice }) => {
  const {width, height}  = useWindowSize();
  const maxSlidesPerView =
    slice.items.length - 2 < 3 ? slice.items.length - 2 : 3;
  return (
    <ul className="m-0 p-0">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard]}
        // controller={{ control: controlledSwiper }}
        className="mx-auto w-full max-w-6xl"
        // spaceBetween={50}
        navigation={{}}
        pagination
        controller
        loop
        slidesPerView={Math.floor(
          width / 400 > maxSlidesPerView ? maxSlidesPerView : width / 400
        )}
        keyboard={{ enabled: true, onlyInViewport: true }}
        autoplay={{ delay: 5000 }}
      >
        {slice.items.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <li className="m-2">
                <figure>
                  <img
                    className="w-full rounded-md"
                    loading="lazy"
                    alt={item.image.Small?.alt}
                    src={item.image.Small?.url}
                    width={item.image.Small.dimensions.width}
                    height={item.image.Small.dimensions.height}
                  />
                  <figcaption className="my-2 block text-center">
                    <PrismicRichText field={item.text} />
                  </figcaption>
                </figure>
              </li>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ul>
  );
};
export default Carousel;
