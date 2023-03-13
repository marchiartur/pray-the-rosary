import { shaderMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

import vertex from "../shaders/glsl/vertex.glsl";
import frag from "../shaders/glsl/frag.glsl";
import { useRef, useState } from "react";
import { Mesh } from "three";

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

interface BeadProps {
    color: string;
    hoverColor: string;
    position: THREE.Vector3;
}

const Bead = (props: BeadProps) => {
    const color = props.color;
    const hoverColor = props.hoverColor;
    // This reference will give us direct access to the mesh
    const mesh = useRef<Mesh>(null);

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false);

    return (
        <mesh
            ref={mesh}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <Sphere position={props.position} />
            <meshStandardMaterial color={hovered ? hoverColor : color} />
        </mesh>
    );
};

export default Bead;