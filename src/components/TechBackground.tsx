import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Debug logging
const log = (...args: any[]) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('[TechBackground]', ...args);
  }
};

export default function TechBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) {
      console.error('Mount ref not available');
      return;
    }
    
    // Add a class to the body to indicate 3D background is loading
    document.body.classList.add('3d-bg-loading');

    // Scene setup
    log('Creating scene');
    const scene = new THREE.Scene();
    
    // Camera setup
    const aspect = window.innerWidth / window.innerHeight;
    log(`Window size: ${window.innerWidth}x${window.innerHeight}, aspect: ${aspect}`);
    
    const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    
    // Add renderer to DOM
    try {
      mountRef.current.innerHTML = ''; // Clear any existing content
      mountRef.current.appendChild(renderer.domElement);
      log('Renderer added to DOM');
    } catch (error) {
      console.error('Failed to add renderer to DOM:', error);
      return;
    }

    // Create particles
    const particlesCount = 10000; // Increased number of particles
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    
    // Create a galaxy-like distribution
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position in a sphere with more density towards the center
      const radius = Math.pow(Math.random(), 2.0) * 5; // More particles near center
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      // Position
      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.5; // Flatten y-axis
      positions[i + 2] = radius * Math.cos(phi);
      
      // Color - Brighter blue/purple colors
      const color = new THREE.Color();
      const hue = 0.6 + Math.random() * 0.2; // Purple to blue
      const saturation = 0.8 + Math.random() * 0.2;
      const lightness = 0.4 + Math.random() * 0.3;
      color.setHSL(hue, saturation, lightness);
      
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05, // Larger particles
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      depthWrite: false,
      alphaTest: 0.01
    });

    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Camera position
    camera.position.z = 2;

    // Enhanced Animation
    let animationFrameId: number;
    let lastTime = 0;
    const rotationSpeed = 1.0; // Faster rotation
    
    // Store base positions for animation
    const basePositions = particlesGeometry.attributes.position.array as Float32Array;
    
    const animate = (time: number = 0) => {
      const deltaTime = lastTime ? (time - lastTime) / 1000 : 0.016;
      lastTime = time;
      
      // Smooth rotation
      particlesMesh.rotation.x += (rotationSpeed * Math.PI / 180) * deltaTime * 0.5;
      particlesMesh.rotation.y += (rotationSpeed * Math.PI / 180) * deltaTime * 0.3;
      
      // Dynamic pulsing effect
      const pulse = Math.sin(time * 0.0015) * 0.2 + 0.9;
      particlesMesh.scale.set(pulse, pulse, pulse);
      
      // Animate particles with wave-like motion
      const positionsArray = particlesGeometry.attributes.position.array as Float32Array;
      const timeFactor = time * 0.001;
      
      for (let i = 0; i < positionsArray.length; i += 3) {
        // Get base position
        const ix = basePositions[i];
        const iy = basePositions[i + 1];
        const iz = basePositions[i + 2];
        const i3 = i / 3;
        const offset = i3 * 0.1;
        
        // Add wave-like motion and subtle movement
        const waveX = Math.sin(ix * 2 + timeFactor * 0.5) * 0.2;
        const waveY = Math.cos(iy * 2 + timeFactor * 0.3) * 0.2;
        const waveZ = Math.sin(iz * 2 + timeFactor * 0.4) * 0.2;
        
        const moveX = Math.sin(timeFactor * 0.5 + offset) * 0.1;
        const moveY = Math.cos(timeFactor * 0.4 + offset) * 0.1;
        
        positionsArray[i] = ix + waveX + moveX;
        positionsArray[i + 1] = iy + waveY + moveY;
        positionsArray[i + 2] = iz + waveZ;
      }
      
      particlesGeometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
      document.body.classList.remove('3d-bg-loading');
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
}
