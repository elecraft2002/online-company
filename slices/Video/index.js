import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

/**
 * @typedef {import("@prismicio/client").Content.VideoSlice} VideoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VideoSlice>} VideoProps
 * @param {VideoProps}
 */
const Video = ({ slice }) => {
  console.log(slice.primary.video.url);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="realative h-screen  bg-slate-100"
    >
      {/* <div className="fixed h-screen  w-screen overflow-hidden">
        <div className="absolute top-0 h-screen w-screen">
        xddsadasdsa
        </div>
      </div> */}
      <ParallaxBanner className="h-full">
        <ParallaxBannerLayer translateY={["-20vh", "20vh"]}>
          <video
            src={slice.primary.video.url}
            autoplay="autoplay"
            muted=""
            loop=""
            type="video/mp4"
          ></video>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </section>
  );
};

export default Video;
