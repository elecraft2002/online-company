import { PrismicRichText } from "@prismicio/react";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function Horizontal({ slice }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const distance = useTransform(
    scrollYProgress,
    [0, 1],
    [-slice.items.length * 100 + "vw", "0vw"]
  );
  return (
    <div
      ref={ref}
      style={{
        height: slice.items.length * 100 + "vw",
      }}
    >
      <div className="sticky top-0 ">
        <motion.ul className="" style={{}}>
          <motion.div
            className="absolute flex h-[100vh] w-full"
            style={{ width: slice.items.length * 100 + "vw", left: distance }}
          >
            {slice.items.map((item, i) => {
              return (
                <li key={i} className=" w-[100vw]">
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
              );
            })}
          </motion.div>
        </motion.ul>
      </div>
    </div>
  );
}
