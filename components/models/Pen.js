import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { animated } from "@react-spring/three";

export default function Pen(props) {
  const { nodes, materials } = useGLTF("/Pen.glb");
  return (
    <animated.group {...props} dispose={null}>
      <group
        rotation={[Math.PI, -1.07, Math.PI / 2]}
        scale={0.09}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials.CRAYON_Bois_Vernis}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.CRAYON_Bois_Naturel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials["CRAYON_Mine de plomb"]}
        />
      </group>
    </animated.group>
  );
}

useGLTF.preload("/Pen.glb");
