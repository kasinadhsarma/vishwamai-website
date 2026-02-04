"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Check for WebGL support
    const isWebGLAvailable = () => {
      try {
        const canvas = document.createElement("canvas")
        return !!(window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")))
      } catch (e) {
        return false
      }
    }

    if (!isWebGLAvailable()) {
      console.warn("WebGL is not available")
      return
    }

    // Three.js setup
    let scene: THREE.Scene
    let camera: THREE.PerspectiveCamera
    let renderer: THREE.WebGLRenderer
    let particles: THREE.Points
    let geometry: THREE.BufferGeometry
    let handleResize: () => void
    let animateId: number

    try {
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

      // Explicitly check if context creation fails even if WebGL is theoretically available
      try {
        renderer = new THREE.WebGLRenderer({
          canvas: canvasRef.current,
          alpha: true,
          antialias: true,
        })
      } catch (e) {
        console.error("Failed to create WebGLRenderer:", e)
        return
      }

      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(window.devicePixelRatio)

      // Create particles
      geometry = new THREE.BufferGeometry()
      const vertices = []

      for (let i = 0; i < 5000; i++) {
        vertices.push(THREE.MathUtils.randFloatSpread(2000))
        vertices.push(THREE.MathUtils.randFloatSpread(2000))
        vertices.push(THREE.MathUtils.randFloatSpread(2000))
      }

      geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3))
      particles = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0x00bfff, size: 2 }))

      scene.add(particles)
      camera.position.z = 1000

      // Animation loop
      const animate = () => {
        animateId = requestAnimationFrame(animate)
        particles.rotation.x += 0.0005
        particles.rotation.y += 0.0005
        renderer.render(scene, camera)
      }

      animate()

      // Handle window resize
      handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }

      window.addEventListener("resize", handleResize)
    } catch (error) {
      console.error("Error initializing different Three.js scene:", error)
    }

    // Cleanup
    return () => {
      if (handleResize) window.removeEventListener("resize", handleResize)
      if (animateId) cancelAnimationFrame(animateId)
      if (scene && particles) scene.remove(particles)
      if (geometry) geometry.dispose()
      if (particles && particles.material) (particles.material as THREE.Material).dispose()
      if (renderer) renderer.dispose()
    }
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-white dark:bg-black scroll-mt-28">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">VishwamAI</h1>
        <div className="inline-block px-4 py-2 mb-4 bg-[#00BFFF]/20 border border-[#00BFFF] rounded-full">
          <span className="text-sm md:text-base font-semibold text-[#00BFFF]">Under Research & Development</span>
        </div>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          Pioneering AI Solutions to Combat Loneliness
        </p>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4 text-gray-600 dark:text-gray-400">
          Currently developing <span className="text-[#00BFFF] font-semibold">Loneliness Got It Right (PBAI)</span> - An innovative AI companion addressing social isolation
        </p>
      </div>
    </section>
  )
}

