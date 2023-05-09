import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { components } from "../slices/";
import { Layout } from "../components/Layout";
import useWindowSize from "../functions/useWindowSize";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import CameraModel from "../components/models/CameraModel";
import { OrbitControls, Plane, Stage } from "@react-three/drei";
import ItemsModel from "../components/models/ItemsModel";
import useMousePosition from "../functions/useMousePosition";
import { animated } from "@react-spring/three";
import { useSpring } from "react-spring";

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += delta));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}
const Landing = () => {
  const mousePosition = useMousePosition();
  const rotation = [mousePosition[1] / 5, mousePosition[0] / 5, 0];
  const { rotation: easedRotation } = useSpring({ rotation });
  return (
    <div className="relative h-[100vh]">
      <h1 className="absolute top-1/2 text-[10vw]">PES DESIGN</h1>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
        <Stage
          preset="rembrandt"
          intensity={1}
          environment="city"
          adjustCamera={false}
        >
          <Suspense fallback={null}>
            <animated.group rotation={easedRotation}>
              <ItemsModel
                castShadow
                rotation={[0, -Math.PI / 2, 0]}
                position={[0, -1, 0]}
              />
              <CameraModel
                position={[0, -0.5, 0]}
                rotation={[0, -Math.PI / 2, 0]}
              />
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <mesh
                receiveShadow
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -3, 0]}
              >
                <planeBufferGeometry attach="geometry"  args={[100, 100]} />
                <shadowMaterial attach="material" opacity={0.3} color="blue" />
              </mesh>
            </animated.group>
          </Suspense>
        </Stage>
      </Canvas>
    </div>
  );
};

const Index = ({ page, navigation, settings }) => {
  const { width, height } = useWindowSize();
  /*   const items = [
    {
      text: "Weby",
      video: {
        url: "https://www.leaf-animation.cz/frontend/videos/grafika@hp.mp4",
      },
    },
    {
      text: "Animace",
      video: {
        url: "https://www.leaf-animation.cz/frontend/videos/grafika@hp.mp4",
      },
    },
    {
      text: "Modely",
      video: {
        url: "https://www.leaf-animation.cz/frontend/videos/grafika@hp.mp4",
      },
      link: "",
    },
  ];
  const maxSlidesPerView = items.length; */
  return (
    <Layout
      alternateLanguages={page.alternate_languages}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>{prismicH.asText(page.data.title)}</title>
      </Head>
      <div className="w-full">
        <Landing />
      </div>
      {/*< ul className="m-0 p-0">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard]}
          // controller={{ control: controlledSwiper }}
          className="m-0 mx-auto w-full"
          // spaceBetween={50}
          navigation={{}}
          pagination
          controller
          slidesPerView={Math.floor(
            width / 400 > maxSlidesPerView ? maxSlidesPerView : width / 400
          )}
          // slidesPerView={3}
          keyboard={{ enabled: true, onlyInViewport: true }}
          autoplay={{ delay: 5000 }}
        >
          {items.map((item, i) => {
            console.log();
            return (
              <SwiperSlide key={i}>
                <li className="relative h-[80vh] brightness-75 transition-all hover:z-10 hover:scale-105 hover:brightness-100">
                  <video
                    className="h-full w-auto min-w-full max-w-none"
                    src={item.video.url}
                    autoplay="autoplay"
                    muted
                    loop
                    type="video/mp4"
                  ></video>
                  <h2 className="absolute left-2/4 top-2/4">{item.text}</h2>
                </li>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ul>
      <div className="w-full text-center">
        <p>Zjistit více</p>
      </div> */}
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "home", { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  return {
    props: {
      page,
      navigation,
      settings,
    },
  };
}
