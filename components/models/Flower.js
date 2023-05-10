
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { animated } from "@react-spring/three";

export default function Flower(props) {
  const { nodes, materials } = useGLTF("/Flower.glb");
  return (
    <animated.group {...props} dispose={null}>
      <group
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.3}
      >
        <group position={[0.03, -0.85, -2.62]} scale={0.61}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_0.geometry}
            material={materials["Material.016"]}
            position={[0.01, -0.02, -1.87]}
            scale={1.54}
          />
        </group>
        <group
          position={[0.1, -0.82, 0.54]}
          rotation={[0, 0, 2.73]}
          scale={[0.05, 0.05, 0.75]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder000_0.geometry}
            material={materials["Material.007"]}
          />
        </group>
        <group
          position={[0.06, -0.91, -1.68]}
          rotation={[0, 0, 3.09]}
          scale={[0.09, 0.09, 1.4]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_0.geometry}
            material={materials["Material.013"]}
            position={[-0.28, 0.49, -0.45]}
            scale={1.54}
          />
        </group>
        <group
          position={[0.1, -0.82, 0.54]}
          rotation={[0, 0, 2.73]}
          scale={[0.05, 0.05, 0.75]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_0.geometry}
            material={materials["Material.007"]}
          />
        </group>
        <group position={[0.03, -0.85, -3.45]} scale={0.71}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009_0.geometry}
            material={materials["Material.015"]}
            position={[0.01, -0.02, -2.24]}
            scale={1.54}
          />
        </group>
        <group
          position={[-0.07, -1.15, 0.83]}
          rotation={[0.35, 0.06, -0.32]}
          scale={[0.07, 0.07, 0.06]}
        >
          <group
            position={[0.94, 3.85, -6.74]}
            rotation={[-0.28, -0.04, 3.06]}
            scale={[0.67, 0.69, 13.36]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_0.geometry}
              material={materials["Material.007"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere000_0.geometry}
            material={materials["Material.009"]}
          />
        </group>
        <group
          position={[-0.07, -1.15, 0.83]}
          rotation={[0.35, -0.08, -0.32]}
          scale={[0.07, 0.07, 0.06]}
        >
          <group
            position={[0.94, 3.85, -6.74]}
            rotation={[-0.28, -0.04, 3.06]}
            scale={[0.67, 0.69, 13.36]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder002_0.geometry}
              material={materials["Material.007"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere001_0.geometry}
            material={materials["Material.009"]}
          />
        </group>
        <group
          position={[0.58, -1.49, 0]}
          rotation={[-0.11, -0.05, -2.74]}
          scale={[0.77, 1.07, 0.26]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere002_0.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          position={[0.05, -0.66, 0.85]}
          rotation={[0.2, 0.05, 0.08]}
          scale={[0.07, 0.07, 0.06]}
        >
          <group
            position={[1.87, -3.35, -5.25]}
            rotation={[-0.28, -0.04, 3.06]}
            scale={[0.67, 0.69, 13.36]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_0.geometry}
              material={materials["Material.007"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere003_0.geometry}
            material={materials["Material.009"]}
          />
        </group>
        <group
          position={[-0.07, -1.15, 0.83]}
          rotation={[0.19, -0.12, -0.33]}
          scale={[0.07, 0.07, 0.06]}
        >
          <group
            position={[0.94, 3.85, -6.74]}
            rotation={[-0.28, -0.04, 3.06]}
            scale={[0.67, 0.69, 13.36]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder004_0.geometry}
              material={materials["Material.007"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere004_0.geometry}
            material={materials["Material.009"]}
          />
        </group>
        <group
          position={[-0.13, -1.11, 0.83]}
          rotation={[0.24, -0.17, -0.33]}
          scale={[0.07, 0.07, 0.06]}
        >
          <group
            position={[0.94, 3.85, -6.74]}
            rotation={[-0.28, -0.04, 3.06]}
            scale={[0.67, 0.69, 13.36]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder005_0.geometry}
              material={materials["Material.007"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere005_0.geometry}
            material={materials["Material.009"]}
          />
        </group>
        <group
          position={[0.21, -0.69, 0.63]}
          rotation={[0.22, -0.04, -0.33]}
          scale={[0.07, 0.07, 0.06]}
        >
          <group
            position={[-0.8, -2.69, -0.9]}
            rotation={[-0.28, -0.04, 3.06]}
            scale={[0.67, 0.69, 13.36]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder006_0.geometry}
              material={materials["Material.007"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere006_0.geometry}
            material={materials["Material.009"]}
          />
        </group>
        <group
          position={[0, -1.15, 0.83]}
          rotation={[0.3, 0.01, -0.32]}
          scale={[0.07, 0.07, 0.06]}
        >
          <group
            position={[0.94, 3.85, -6.74]}
            rotation={[-0.28, -0.04, 3.06]}
            scale={[0.67, 0.69, 13.36]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder007_0.geometry}
              material={materials["Material.007"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere007_0.geometry}
            material={materials["Material.009"]}
          />
        </group>
        <group
          position={[-0.07, -1.15, 0.83]}
          rotation={[0.27, -0.06, -0.32]}
          scale={[0.07, 0.07, 0.06]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere008_0.geometry}
            material={materials["Material.009"]}
          />
        </group>
        <group
          position={[-0.07, -1.15, 0.83]}
          rotation={[0.27, -0.06, -0.32]}
          scale={[0.07, 0.07, 0.06]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere012_0.geometry}
            material={materials["Material.009"]}
          />
        </group>
        <group
          position={[-0.05, -0.7, -2.27]}
          rotation={[2.44, 0.31, -1.92]}
          scale={[0.07, 0.16, 0.31]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere023_0.geometry}
            material={materials["Material.013"]}
            position={[10.25, -0.01, 2.09]}
            scale={1.54}
          />
        </group>
      </group>
    </animated.group>
  );
}

useGLTF.preload("/Flower.glb");
