import { FC, useRef } from 'react'
import * as THREE from 'three'
import { DDSLoader } from 'three-stdlib'
import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

type GuitarType = {
  position?: [number, number, number]
}

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader())

// const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) =>
//   (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)

const Guitar: FC<GuitarType> = ({ position }) => {
  const { scene } = useGLTF('/object/sg_gltf/sg.gltf')
  const ref: any = useRef()
  const scroll = useScroll()
  useFrame(state => {
    const r1 = scroll.range(0, 1 / 7)
    const r2 = scroll.range(1 / 7, 1 / 7, 0.1)
    const r3 = scroll.range(2 / 7, 1 / 7)
    const r4 = scroll.range(3 / 7, 1 / 7, 0.1)
    const r5 = scroll.range(4 / 7, 1 / 7)
    const r6 = scroll.range(5 / 7, 1 / 7, 0.1)
    const r7 = scroll.range(6 / 7, 1 / 7)

    ref.current.rotation.y = (state.mouse.x as number) * 0.5
    ref.current.rotation.x = (state.mouse.y as number) * -0.2
  })

  return (
    <mesh ref={ref} position={position}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Guitar
