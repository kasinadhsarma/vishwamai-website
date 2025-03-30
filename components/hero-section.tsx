"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Three.js setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)

    // Create particles
    const geometry = new THREE.BufferGeometry()
    const vertices = []

    for (let i = 0; i < 5000; i++) {
      vertices.push(THREE.MathUtils.randFloatSpread(2000))
      vertices.push(THREE.MathUtils.randFloatSpread(2000))
      vertices.push(THREE.MathUtils.randFloatSpread(2000))
    }

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3))
    const particles = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0x00bfff, size: 2 }))

    scene.add(particles)
    camera.position.z = 1000

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      particles.rotation.x += 0.0005
      particles.rotation.y += 0.0005
      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      scene.remove(particles)
      geometry.dispose()
      particles.material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-white dark:bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">VishwamAI</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          Revolutionizing Tomorrow with Intelligent Innovation
        </p>
      </div>
    </section>
  )
}

