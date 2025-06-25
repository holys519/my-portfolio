import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Line } from '@react-three/drei'
import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'

// 背景のパーティクル
const BackgroundParticles = () => {
  const { viewport } = useThree()
  const pointsRef = useRef<THREE.Points>(null!)

  const particles = useMemo(() => {
    const positions = new Float32Array(5000 * 3)
    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * viewport.width * 2
      const y = (Math.random() - 0.5) * viewport.height * 2
      const z = (Math.random() - 0.5) * 10
      positions.set([x, y, z], i * 3)
    }
    return positions
  }, [viewport.width, viewport.height])

  useFrame(({ mouse }) => {
    if (pointsRef.current) {
      const x = mouse.x * viewport.width / 2
      const y = mouse.y * viewport.height / 2
      pointsRef.current.position.lerp(new THREE.Vector3(-x * 0.1, -y * 0.1, 0), 0.05)
    }
  })

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#444" size={0.01} sizeAttenuation={true} depthWrite={false} />
    </Points>
  )
}

// 心電図の波形
const EKGWave = () => {
  const [points, setPoints] = useState(() => {
    const p = []
    for (let i = 0; i <= 1000; i++) {
      p.push(new THREE.Vector3(i / 100 - 5, 0, 0))
    }
    return p
  })

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 2;
    const newPoints = points.map((p, i) => {
      const x = (i / 100) - 5;
      const wavePos = (x + t) % 5;

      let y = 0;
      // P wave
      if (wavePos > 0.5 && wavePos < 0.8) y = Math.sin((wavePos - 0.5) * Math.PI / 0.3) * 0.2;
      // QRS complex
      if (wavePos > 1.0 && wavePos < 1.1) y = (wavePos - 1.0) * -5;
      if (wavePos >= 1.1 && wavePos < 1.2) y = ((wavePos - 1.1) * 15) - 0.5;
      if (wavePos >= 1.2 && wavePos < 1.3) y = (1 - (wavePos - 1.2) * 10) * 1;
      // T wave
      if (wavePos > 1.8 && wavePos < 2.3) y = Math.sin((wavePos - 1.8) * Math.PI / 0.5) * 0.4;

      return new THREE.Vector3(x, y, p.z);
    });
    setPoints(newPoints);
  });

  return (
    <Line points={points} color="#00ff00" lineWidth={2} />
  )
}

const HeroAnimation = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <BackgroundParticles />
      <EKGWave />
    </Canvas>
  )
}

export default HeroAnimation
