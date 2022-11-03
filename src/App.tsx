import { FC } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Box from './components/Box'

const App: FC = () => {
  return (
    <Canvas
      style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}
      camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[1.2, 0, 0]} />
      <Box position={[-1.2, 0, 0]} />
    </Canvas>
  )
}

export default App
