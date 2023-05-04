import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";
import clsx from "clsx";

import { Bounded } from "../../components/Bounded";

const Image = ({ slice }) => {
  console.log(slice.variation);
  return (
    <Bounded
      as="section"
      className={clsx(
        slice.variation === "lightSlate" && "bg-" + slice.variation,
        slice.variation === "white" && "bg-lightSlate"
      )}
    >
      <div className="relative">
        {slice.primary.withAccent && (
          <div className="absolute -left-4 -top-4 w-1/3">
            <div className="bg-slate-200/50 aspect-h-1 aspect-w-1" />
          </div>
        )}
        {prismicH.isFilled.image(slice.primary.image) && (
          <PrismicNextImage
            field={slice.primary.image}
            sizes="100vw"
            className="relative w-full"
          />
        )}
      </div>
    </Bounded>
  );
};

export default Image;
