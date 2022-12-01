import { FC, Suspense } from 'react'
import './App.css'
import { Canvas, useLoader } from '@react-three/fiber'

import Guitar from './components/Guitar'
import {
  PerspectiveCamera,
  OrbitControls,
  ScrollControls,
  Loader,
} from '@react-three/drei'

import Word from './components/Word'
import CloudMesh from './components/CloudMesh'
import Menu from './components/Menu'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import PointCamera from './components/PointCamera'
import Layout from './components/Layout'

const App: FC = () => {
  useLoader(
    GLTFLoader,
    '/object/sg_gltf/sg.gltf',
    () => {},
    xhr => {
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded', xhr.loaded, xhr)
    }
  )
  return (
    <>
      <Canvas
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'black',
          zIndex: 0,
          position: 'fixed',
        }}
        camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1} color="white" />
          <pointLight color={'white'} intensity={1} position={[-50, 1, 8]} />
          {/* <pointLight
            color={'darkgrey'}
            intensity={1}
            position={[0.5, 0.5, 7]}
          /> */}
          <PerspectiveCamera position={[0, 0, 4]}>
            {/* <Environment
            background={true}
            files={['background/bg_gibson.jpeg']}
            path={'/'}
          /> */}
            <ScrollControls pages={7} damping={4}>
              <Layout>
                <CloudMesh />
                <Guitar position={[0, -0.2, 0.6]} />
                <Word
                  fontSize={0.5}
                  position={[0, 0.4, 0]}
                  rotation={[0, 0, 0.2]}
                  fontStyle="Medium"
                  colorText="#fff"
                  opacity={0.8}
                  move={false}
                  dumping={{ x: 0.05, y: 0.015 }}
                >
                  ROCK
                </Word>
                <Word
                  fontSize={0.34}
                  position={[0, 0.08, 0]}
                  rotation={[0, 0, 0.2]}
                  fontStyle="Light"
                  colorText="#fff"
                  opacity={0.8}
                  move={false}
                  dumping={{ x: 0.025, y: 0.01 }}
                >
                  FOR THE
                </Word>
                <Word
                  fontSize={0.027}
                  position={[0, -0.015, 0.9]}
                  rotation={[0, 0, 0.2]}
                  fontStyle="SemiBold"
                  colorText="#fff"
                  opacity={0.8}
                  move={false}
                  dumping={{ x: 0.005, y: 0.001 }}
                >
                  CHILDREN
                </Word>
              </Layout>
            </ScrollControls>

            <OrbitControls
              enableZoom={false}
              enableRotate={false}
              enablePan={false}
            />
          </PerspectiveCamera>
        </Suspense>
      </Canvas>
      <Menu />
      <Loader />
    </>
  )
}

export default App
