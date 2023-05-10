import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { animated } from "@react-spring/three";

export default function Laptop(props) {
  const { nodes, materials } = useGLTF("/Laptop.glb");
  return (
    <animated.group {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Cube001_3"
                position={[0.5, 0.03, 0.74]}
                rotation={[-1.31, 0, -Math.PI]}
                scale={[0.11, 0.05, 0.11]}
              >
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials["case"]}
                />
                <mesh
                  name="Object_11"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11.geometry}
                  material={materials.display}
                >
                  <meshStandardMaterial color="blue" />
                </mesh>
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.bezel}
                />
              </group>
              <group
                name="Cube007_4"
                position={[0.52, 0.04, 0.54]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={0.11}
              >
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.keyboard}
                />
              </group>
              <group
                name="Cube_0"
                position={[0.5, 0.02, 0.45]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={0.11}
              >
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials["case"]}
                />
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.touchpad}
                />
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.ports}
                />
                <mesh
                  name="Object_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials.holes}
                />
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.ethernet_port}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </animated.group>
  );
}

useGLTF.preload("/Laptop.glb");
