import * as THREE from 'three'
import { useState, useRef, useEffect, ReactNode, FC } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

type fontStyle =
  | 'Bold'
  | 'BoldItalic'
  | 'ExtraLight'
  | 'ExtraLightItalic'
  | 'Italic'
  | 'Light'
  | 'LightItalic'
  | 'Medium'
  | 'MediumItalic'
  | 'Regular'
  | 'SemiBold'
  | 'SemiBoldItalic'
  | 'Thin'
  | 'ThinItalic'

type WordType = {
  children?: ReactNode
  position?: [number, number, number]
  rotation?: [number, number, number]
  fontSize?: number
  fontStyle?: fontStyle
  colorText?: string
  opacity?: number
  move?: boolean
  dumping?: { x?: number; y?: number }
}

const Word: FC<WordType> = ({
  children,
  colorText = 'white',
  fontStyle = 'Regular',
  opacity = 1,
  move = false,
  dumping = { x: 0.005, y: 0.005 },
  ...props
}) => {
  const color = new THREE.Color()
  const fontProps = {
    font: `/fonts/IBM_Plex_Serif/IBMPlexSerif-${fontStyle}.ttf`,
    fontSize: props.fontSize,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false,
  }
  const ref: any = useRef()
  const meshRef: any = useRef()
  const [hovered, setHovered] = useState<boolean>(false)
  const over: void | any = (e: Event) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)

  useFrame(({ camera, mouse }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
    // Animate font color
    ref.current.material.color.lerp(color.set(colorText), 0.1)
    if (move) {
      meshRef.current.position.x = (dumping.x as number) * mouse.x
      meshRef.current.position.y = (dumping.y as number) * mouse.y
    }
  })
  return (
    <mesh ref={meshRef} rotation={props.rotation}>
      <Text
        ref={ref}
        fillOpacity={opacity}
        onPointerOver={over}
        onPointerOut={out}
        onClick={() => console.log('clicked')}
        {...props}
        {...fontProps}
        children={children}
      />
    </mesh>
  )
}

export default Word
