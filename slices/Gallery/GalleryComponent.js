import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { PrismicRichText } from "@prismicio/react";

const GalleryComponent = ({ slice }) => {
  return (
    <div className="mx-auto  w-full max-w-6xl flex-wrap ">
      <ul>
        <LightGallery
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="flex flex-wrap justify-around"
        >
          {slice.items.map((item, i) => {
            return (
              <a
                className="gallery-item m-2 "
                data-src={item.image.url}
                href={item.image.url}
              >
                <figure>
                  <img
                    className="w-full rounded-md drop-shadow-md transition-transform hover:scale-105 "
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
              </a>
            );
          })}
        </LightGallery>
      </ul>
    </div>
  );
};
export default GalleryComponent;
