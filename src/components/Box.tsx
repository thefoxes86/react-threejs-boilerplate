import { MeshProps, useFrame } from '@react-three/fiber'
import { FC, useRef, useState } from 'react'

const Box: FC<MeshProps> = props => {
  const ref = useRef<any>()
  const [active, setActive] = useState<boolean>(false)
  const [hovered, setHovered] = useState<boolean>(false)

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.02
  })
  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 1.5 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={`${hovered ? 'red' : 'green'}`} />
    </mesh>
  )
}

export default Box
