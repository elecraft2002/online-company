import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.PillarsSlice} PillarsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PillarsSlice>} PillarsProps
 * @param {PillarsProps}
 */
const Pillars = ({ slice }) => {
  console.log(slice);
  return (
    <section
      className="bg-transparent px-6 py-20  md:py-32"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <span className="text-center">
        <PrismicRichText field={slice.primary.text} />
      </span>
      <div className="flex flex-wrap justify-center">
        {slice.items.map((item, i) => {
          return (
            <div key={i} className="m-2 flex max-w-xl">
              <PrismicLink field={item.link || ""} className="flex-col">
                <PrismicNextImage
                  field={item.image}
                  className="aspect-1 w-3/5 rounded-lg object-cover"
                />
                <span className="my-5 block">
                  <PrismicRichText field={item.text} />
                </span>
              </PrismicLink>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pillars;
