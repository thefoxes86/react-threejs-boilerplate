import { Cloud } from '@react-three/drei'
import { FC } from 'react'

const CloudMesh: FC = () => {
  return (
    <Cloud
      opacity={0.08}
      speed={1} // Rotation speed
      width={15} // Width of the full cloud
      depth={0.5} // Z-dir depth
      segments={50} // Number of particles
    />
  )
}

export default CloudMesh
