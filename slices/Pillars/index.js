import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { getColorVariation } from "../../pages/_app";

/**
 * @typedef {import("@prismicio/client").Content.PillarsSlice} PillarsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PillarsSlice>} PillarsProps
 * @param {PillarsProps}
 */

const Pillars = ({ slice }) => {
  console.log(slice);
  return (
    <section
      className={" px-6 py-20  md:py-32" + getColorVariation(slice)}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <span className="text-center">
        <PrismicRichText field={slice.primary.text} />
      </span>
      <div className="my-6 flex flex-wrap justify-center">
        {slice.items.map((item, i) => {
          console.log(item);
          return (
            <div key={i} className="m-2 flex max-w-md">
              <figure>
                <div className="aspect-1 w-3/5 rounded-lg object-cover overflow-hidden">
                  <PrismicNextImage
                    field={item.image}
                    className="w-full h-full object-contain"
                  />
                </div>
                <figcaption className="my-5 block">
                  <PrismicRichText field={item.text} />
                </figcaption>
                <PrismicLink field={item.link} className="flex-col">
                  Více
                </PrismicLink>
              </figure>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pillars;
