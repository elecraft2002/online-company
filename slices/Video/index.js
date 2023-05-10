import { PrismicRichText } from "@prismicio/react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { getColorVariation } from "../../pages/_app";

/**
 * @typedef {import("@prismicio/client").Content.VideoSlice} VideoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VideoSlice>} VideoProps
 * @param {VideoProps}
 */
const Video = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={"realative h-screen " + getColorVariation(slice)}
    >
      {/* <div className="fixed h-screen  w-screen overflow-hidden">
        <div className="absolute top-0 h-screen w-screen">
        xddsadasdsa
        </div>
      </div> */}
      <ParallaxBanner className="relative h-full">
        <ParallaxBannerLayer translateY={["-20vh", "20vh"]}>
          <video
            src={slice.primary.video.url}
            autoplay="autoplay"
            muted
            loop
            type="video/mp4"
            className={slice.variation === "videoWithText" && "brightness-50"}
          ></video>
          <div className="absolute top-0  flex h-full w-full flex-col content-center justify-center text-white">
            {slice.variation === "videoWithText" && (
              <span className="mx-auto max-w-6xl">
                <PrismicRichText field={slice.primary.text} />
              </span>
            )}
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </section>
  );
};

export default Video;
