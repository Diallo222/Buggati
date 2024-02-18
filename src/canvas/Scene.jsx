import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  PerspectiveCamera,
  OrbitControls,
  MeshReflectorMaterial,
  CubeCamera,
  Environment,
} from "@react-three/drei";
import { LinearEncoding, RepeatWrapping, TextureLoader } from "three";
import { Bugatti } from "./Buggati";
import { Lights } from "./Lights";
import Effects from "./Effects";

const Ground = () => {
  const [roughness, normal] = useLoader(TextureLoader, [
    "https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/rough_plasterbrick_05/rough_plasterbrick_05_rough_1k.jpg",
    "https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/rough_plasterbrick_05/rough_plasterbrick_05_nor_dx_1k.jpg",
  ]);
  // useEffect(()=>{
  //   [normal , roughness].forEach((t)=>{
  //       t.wrapS =RepeatWrapping;
  //       t.wrapT =RepeatWrapping;
  //       t.repeat.set(5,5);
  //   });
  //   normal.encoding = LinearEncoding;
  // },[normal , roughness])

  // useFrame((state, delta) => {
  //   let t = -state.clock.getElapsedTime() * 0.128;
  //   roughness.offset.set(0, t % 1);
  //   normal.offset.set(0, t % 1);
  // });
  return (
    <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial
        // attach="material"
        color="#343434"
        normalMap={normal}
        dithering
        envMapIntensity={0}
        roughnessMap={roughness}
        roughness={0.7}
        normalScale={[0.015, 0.015]}
      />
      {/* <MeshReflectorMaterial
        normalMap={normal}
        roughnessMap={roughness}
        normalScale={[0.015 , 0.015]}
        envMapIntensity={0}
        dithering
        color={[0.015, 0.015, 0.015]}
        roughness={0.7}
        blur={[1000, 400]}
        mixBlur={30}
        mixStrength={80}
        mixContrast={1}
        resolution={1024}
        mirror={0}
        depthScale={0.01}
        minDepthThreshold={0.9}
        maxDepthThreshold={1}
        depthToBlurRatioBias={0.25}
        reflectorOffset={0.2}
      /> */}
    </mesh>
  );
};
function Scene() {
  return (
    <Canvas shadows>
      <OrbitControls autoRotate target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <color args={["#000000"]} attach="background" />
      {/* <ambientLight intensity={1} /> */}
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={6}
        angle={3}
        penumbra={0.5}
        position={[5, 4, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={6}
        angle={3}
        penumbra={0.5}
        position={[-5, 4, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      {/* <spotLight
          angle={3}
          position={[0, 4, 0]}
          intensity={4}
          color={"#ffffff"}
          castShadow
        /> */}
      {/* <hemisphereLight  intensity={0.1} /> */}
      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <Bugatti scale={1.5} rotation-y={-1.57} />
          </>
        )}
      </CubeCamera>
      <Lights />
      <Ground />
      <Effects />
    </Canvas>
  );
}

export default Scene;
