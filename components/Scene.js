import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import { easing } from "maath";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  RandomizedLight,
  PerformanceMonitor,
  AccumulativeShadows,
} from "@react-three/drei";
import Flower from "./models/Flower";
import Pen from "./models/Pen";
import CameraModel from "./models/CameraModel";
import useWindowSize from "../functions/useWindowSize";
import Laptop from "./models/Laptop";
import useScroll from "../functions/useScroll";
import { animated } from "@react-spring/three";
import { useSpring } from "react-spring";

export default function App() {
  const ref = useRef(null);
  const [perfSucks, degrade] = useState(false);
  const { width, height } = useWindowSize();
  const scroll = useScroll();
  const scrollY = scroll > 1 ? 1 : scroll;
  const { pen, flower, camera, laptop } = useSpring({
    pen: [0, scrollY, 0],
    flower: [0, scrollY * 2, 0],
    laptop: [0, scrollY / 2, 0],
    camera: [0, scrollY, 0],
  });

  return (
    <Canvas
      // shadows
      ref={ref}
      dpr={[1, perfSucks ? 1.5 : 2]}
      // eventSource={document.getElementById('root')}
      eventPrefix="client"
      className="select-none"
      camera={{ position: [20, 0.9, 20], fov: 26 }}
    >
      {/** PerfMon will detect performance issues */}
      <PerformanceMonitor onDecline={() => degrade(true)} />
      <color attach="background" args={["#f0f0f0"]} />
      <group position={[0, 0, 0]} rotation={[0, -0.75, 0]}>
        {/* <Scene /> */}
        <Suspense fallback={null}>
          <animated.group position={pen}>
            <Pen scale={1} position={[width / 600, 0, 0]} />
          </animated.group>
          <animated.group position={flower}>
            <Flower scale={1.5} position={[-width / 600, 0, 1]} />
          </animated.group>
          <animated.group position={camera}>
            <CameraModel
              position={[width / 600, 0, -2]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.8}
            />
          </animated.group>
          <animated.group position={laptop}>
            <Laptop
              scale={
                width / 800 > 2 ? width / 600 : 2
              } /* rotation={easedRotation}  */
              position={[0, -0.2, 0]}
              rotation={[0, -Math.PI / 2, 0]}
            />
          </animated.group>
          <AccumulativeShadows
            frames={100}
            alphaTest={0.85}
            opacity={0.8}
            color="red"
            scale={20}
            position={[0, -0.005, 0]}
          >
            <RandomizedLight
              amount={8}
              radius={6}
              ambient={0.5}
              intensity={1}
              position={[-1.5, 2.5, -2.5]}
              bias={0.001}
            />
          </AccumulativeShadows>
        </Suspense>
      </group>
      <Env perfSucks={perfSucks} />
    </Canvas>
  );
}

/*
Kit-bash auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 scene.glb --transform
Licenses: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Authors:
  matousekfoto (https://sketchfab.com/matousekfoto) (Fruit Cake Slice)
    https://sketchfab.com/3d-models/fruit-cake-slice-7b9a33386eab4dd986aa0980054ead3c
  Felix Yadomi (https://sketchfab.com/felixyadomi) (Cute milkshake)
    https://sketchfab.com/3d-models/cute-milkshake-3ba52a41b4b248df953684861d9e7a20
  Second Studio (https://sketchfab.com/kayaaku) (Dry flower)
    https://sketchfab.com/3d-models/dry-flower-ff0005d6eb4d4077bd08b8992299c45c
  CDcruz (https://sketchfab.com/cdcruz) (Ikea - Pokal Glass Cups)
    https://sketchfab.com/3d-models/ikea-pokal-glass-cups-21837e54a14346aa900e1ae719779b86
*/

function Env({ perfSucks }) {
  const ref = useRef();
  useFrame((state, delta) => {
    // Animate the environment as well as the camera
    if (!perfSucks) {
      easing.damp3(
        ref.current.rotation,
        [Math.PI / 2, 0, state.clock.elapsedTime / 5 + state.pointer.x],
        0.2,
        delta
      );
      easing.damp3(
        state.camera.position,
        [
          Math.sin(state.pointer.x / 4) * 9,
          1.25 + state.pointer.y,
          Math.cos(state.pointer.x / 4) * 9,
        ],
        0.5,
        delta
      );
      state.camera.lookAt(0, 0, 0);
    }
  });
  // Runtime environments can be too slow on some systems, better safe than sorry with PerfMon
  return (
    <Environment
      frames={perfSucks ? 1 : Infinity}
      preset="city"
      resolution={256}
      background
      blur={0.8}
    >
      <Lightformer
        intensity={4}
        rotation-x={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[10, 10, 1]}
      />
      <Lightformer
        intensity={4}
        rotation-x={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[10, 10, 1]}
      />
      <group rotation={[Math.PI / 2, 1, 0]}>
        {[2, -2, 2, -4, 2, -5, 2, -9].map((x, i) => (
          <Lightformer
            key={i}
            intensity={1}
            rotation={[Math.PI / 4, 0, 0]}
            position={[x, 4, i * 4]}
            scale={[4, 1, 1]}
          />
        ))}
        <Lightformer
          intensity={0.5}
          rotation-y={Math.PI / 2}
          position={[-5, 1, -1]}
          scale={[50, 2, 1]}
        />
        <Lightformer
          intensity={0.5}
          rotation-y={Math.PI / 2}
          position={[-5, -1, -1]}
          scale={[50, 2, 1]}
        />
        <Lightformer
          intensity={0.5}
          rotation-y={-Math.PI / 2}
          position={[10, 1, 0]}
          scale={[50, 2, 1]}
        />
      </group>
      <group ref={ref}>
        <Lightformer
          intensity={5}
          form="ring"
          color="red"
          rotation-y={Math.PI / 2}
          position={[-5, 2, -1]}
          scale={[10, 10, 1]}
        />
      </group>
    </Environment>
  );
}
