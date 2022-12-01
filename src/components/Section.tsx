import { FC, ReactNode, useRef, useState } from 'react'
import { Html, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

type SectionProps = {
  backgroundColor?: string
  top?: string
  children?: ReactNode
  position: [number, number, number]
}

const Section: FC<SectionProps> = ({
  backgroundColor,
  top,
  children,
  position,
}) => {
  const scroll = useScroll()
  const [visible, setVisible] = useState<boolean>(false)
  const ref: any = useRef()

  useFrame(() => {
    const v1 = scroll.visible(1 / 3, 1 / 3)
    setVisible(v1)
  })
  return (
    <Html
      ref={ref}
      style={{ position: 'fixed' }}
      className={`section__title ${visible ? 'active' : ''}`}
      position={position}
    >
      {children}
    </Html>
  )
}

export default Section
