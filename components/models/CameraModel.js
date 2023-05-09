import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function CameraModel(props) {
  const { nodes, materials } = useGLTF("/Camera.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.56, 0.74]} scale={0.28}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          material={materials["Material.005"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.objective.geometry}
        material={materials.plastic}
        position={[-0.08, -0.17, 0.71]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.36}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buton.geometry}
        material={materials.plastic}
        position={[0.07, 0.32, 1.47]}
        scale={0.07}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buton001.geometry}
        material={materials.plastic}
        position={[0.08, 0.34, 1.3]}
        scale={[0.07, 0.11, 0.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buton002.geometry}
        material={materials["Material.003"]}
        position={[0, 0.33, 1.1]}
        scale={0.11}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buton003.geometry}
        material={materials.plastic}
        position={[0.01, 0.34, 0.31]}
        scale={0.13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buton004.geometry}
        material={materials["Material.004"]}
        position={[0.3, -0.41, 1.11]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buton005.geometry}
        material={materials["Material.004"]}
        position={[0.3, -0.21, 1.13]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buton006.geometry}
        material={materials["Material.004"]}
        position={[0.3, -0.13, 0.3]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buton007.geometry}
        material={materials["plastic.001"]}
        position={[0.26, 0.13, 1.22]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buton008.geometry}
        material={materials["Material.002"]}
        position={[0.24, -0.15, 0.72]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.31}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buton009.geometry}
        material={materials["plastic.003"]}
        position={[0.26, 0.04, 0.26]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buton010.geometry}
        material={materials["plastic.004"]}
        position={[0.07, 0.09, 0.11]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[-0.03, -0.04, -0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buton011.geometry}
        material={materials["plastic.005"]}
        position={[0.09, -0.39, 0.11]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[-0.03, -0.04, -0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.plastic}
        position={[0, 0.22, 0.71]}
        scale={[0.26, 0.27, 0.27]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cameramainscreen.geometry}
        material={materials["Material.001"]}
        position={[-0.28, -0.2, 0.86]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.19, -0.27, -0.27]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buton012.geometry}
        material={materials["plastic.002"]}
        position={[-0.29, 0.04, 1.36]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[-0.04, -0.05, -0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buton013.geometry}
        material={materials["plastic.006"]}
        position={[-0.27, -0.02, 0.39]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[-0.12, -0.05, -0.12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.plastic}
        position={[0.25, 0.12, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buton014.geometry}
        material={materials["Material.008"]}
        position={[0.77, -0.17, 0.71]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.31, 0.12, 0.31]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buton015.geometry}
        material={materials["plastic.008"]}
        position={[0.28, 0.25, 1.46]}
        rotation={[1.6, 0.92, -1.6]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.plastic}
        position={[-0.16, -0.14, 0.72]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.34, 0.33, 0.33]}
      />
    </group>
  );
}

useGLTF.preload("/Camera.gltf");
