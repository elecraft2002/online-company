import Image from "next/image";

import { PrismicRichText } from "@prismicio/react";
import Carousel from "./Carousel";
import Horizontal from "./Horizontal";
import GalleryComponent from "./GalleryComponent";
import { getColorVariation } from "../../pages/_app";

/**
 * @typedef {import("@prismicio/client").Content.GallerySlice} GallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GallerySlice>} GalleryProps
 * @param {GalleryProps}
 */

const Gallery = ({ slice }) => {
  return (
    <section
      className={" px-6 py-20  md:py-32  " + getColorVariation(slice)}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        /* className={
          slice.variation === "horizontal" && "sticky top-0 flex h-[100vh]"
        } */
      >
        <span className="my-7 block min-w-[50vw] text-center">
          <PrismicRichText field={slice.primary.text} />
        </span>
        {slice.variation === "carousel" && <Carousel slice={slice} />}
        {slice.variation === "default" && <GalleryComponent slice={slice} />}
        {slice.variation === "horizontal" && <Horizontal slice={slice} />}
      </div>
    </section>
  );
};

export default Gallery;
