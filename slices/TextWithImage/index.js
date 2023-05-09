import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";

import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";

const TextWithImage = ({ slice }) => {
  return (
    <Bounded as="section" className="bg-transparent">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-16 lg:gap-28">
        <div className="relative max-w-xs md:col-span-5 md:max-w-none">
          <div className="absolute -left-6 -top-6 w-2/3">
            <div className="aspect-h-1 aspect-w-1 bg-lightSlate" />
          </div>
          {slice.variation === "default" &&
            prismicH.isFilled.image(slice.primary.image) && (
              <PrismicNextImage
                field={slice.primary.image}
                sizes="100vw"
                className="relative w-full"
              />
            )}
          {slice.variation === "textWithVideo" && (
            <video
              src={slice.primary.video.url}
              autoplay="autoplay"
              muted
              loop
              type={slice.video?.url}
              className="relative w-full rounded-md"
            ></video>
          )}
        </div>
        <div className="max-w-prose self-end leading-relaxed md:col-span-7">
          <PrismicRichText
            field={slice.primary.text}
            components={{
              heading1: ({ children }) => (
                <Heading as="h2" size="6xl" className="mb-8 last:mb-0">
                  {children}
                </Heading>
              ),
              heading2: ({ children }) => (
                <Heading as="h3" size="2xl" className="mb-2 last:mb-0">
                  {children}
                </Heading>
              ),
            }}
          />
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithImage;
