import { useFrame } from '@react-three/fiber'
import { FC, ReactNode, useRef } from 'react'
import * as THREE from 'three'

type LayoutProps = {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const outer = useRef<THREE.Group>(null!)
  const inner = useRef<THREE.Group>(null!)
  let time = 0
  useFrame(({ clock, camera }) => {
    time += 0.1

    outer.current.position.y = THREE.MathUtils.lerp(
      outer.current.position.y,
      0,
      0.05
    )
    outer.current.position.z = THREE.MathUtils.lerp(
      outer.current.position.z,
      0,
      0.05
    )
    // camera.rotation.y = Math.sin(clock.getElapsedTime() / 8) * Math.PI
  })
  return (
    <group ref={outer} position={[0, -50, -10]}>
      <group ref={inner}>{children}</group>
    </group>
  )
}

export default Layout
