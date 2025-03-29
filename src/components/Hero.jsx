 
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'

export default function Hero() {
  return (
    <div className="hero">
      <Canvas>
        <ambientLight intensity={1} />
        <Sphere args={[1, 32, 32]}>
          <meshStandardMaterial color="#3a86ff" wireframe />
        </Sphere>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <h1>S.M. SAKTHIVEL</h1>
      <p>AI Engineer | Data Scientist</p>
    </div>
  )
}