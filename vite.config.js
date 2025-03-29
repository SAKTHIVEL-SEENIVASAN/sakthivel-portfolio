import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl' // For GLSL shaders

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    glsl() // Enable GLSL shader support
  ],
  base: '/sakthivel-portfolio/',
  assetsInclude: [
    '**/*.glb',    // 3D models
    '**/*.gltf',   // GLTF models
    '**/*.hdr',    // HDRI environments
    '**/*.fbx'     // FBX animations
  ],
  optimizeDeps: {
    include: [
      '@react-three/fiber',
      '@react-three/drei',
      'three',
      'three/examples/jsm/controls/OrbitControls'
    ]
  },
  build: {
    chunkSizeWarningLimit: 1600, // For larger 3D assets
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three', '@react-three/fiber', '@react-three/drei']
        }
      }
    }
  }
})