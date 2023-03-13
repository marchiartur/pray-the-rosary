import React, { useRef, useState } from "react";
import { useFrame, extend } from "@react-three/fiber";
import type { Mesh } from "three";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

import vertex from "../shaders/glsl/vertex.glsl";
import frag from "../shaders/glsl/frag.glsl";


const ColorShiftMaterial = shaderMaterial(
    {
        time: 0,
        color: new THREE.Color(0.05, 0.0, 0.025),
    },
    vertex,
    frag
);

// This is the 🔑 that HMR will renew if this file is edited
// It works for THREE.ShaderMaterial as well as for drei/shaderMaterial
ColorShiftMaterial.key = THREE.MathUtils.generateUUID();

extend({ ColorShiftMaterial });

interface BoxProps {
    color: string;
    hoverColor: string;
}

const Box = (props: BoxProps) => {
    const color = props.color;
    const hoverColor = props.hoverColor;
    // This reference will give us direct access to the mesh
    const mesh = useRef<Mesh>(null);

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        if (mesh.current)
            mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    });

    return (
        <mesh
            ref={mesh}
            scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? hoverColor : color} />
        </mesh>
    );
};

export default Box;
