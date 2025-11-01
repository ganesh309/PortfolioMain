import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles: Particle[] = [];
  const particleCount = 60; // Increased number of particles for better coverage
  const particleSize = 1; // Fixed small size for all particles
  const maxSpeed = 0.15; // Even slower movement
  const minSpeed = 0.02; // Even slower minimum speed

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: particleSize, // Fixed size for all particles
          speedX: (Math.random() - 0.5) * (maxSpeed - minSpeed) + minSpeed,
          speedY: (Math.random() - 0.5) * (maxSpeed - minSpeed) + minSpeed,
          opacity: Math.random() * 0.5 + 0.2 // Slightly more visible
        });
      }
    };

    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        // Solid light blue color for particles
        ctx.fillStyle = 'rgba(147, 197, 253, 0.8)';
        ctx.fill();
      });
    };

    // Update particle positions
    const updateParticles = () => {
      particles.forEach(particle => {
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges with slight randomization
        if (particle.x < 0) {
          particle.x = 0;
          particle.speedX = Math.abs(particle.speedX) * (0.8 + Math.random() * 0.4);
        } else if (particle.x > canvas.width) {
          particle.x = canvas.width;
          particle.speedX = -Math.abs(particle.speedX) * (0.8 + Math.random() * 0.4);
        }
        
        if (particle.y < 0) {
          particle.y = 0;
          particle.speedY = Math.abs(particle.speedY) * (0.8 + Math.random() * 0.4);
        } else if (particle.y > canvas.height) {
          particle.y = canvas.height;
          particle.speedY = -Math.abs(particle.speedY) * (0.8 + Math.random() * 0.4);
        }
      });
    };

    // Animation loop
    const animate = () => {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    initParticles();
    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Use useCallback to prevent unnecessary re-renders
  const canvasStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 0,
    backgroundColor: 'transparent',
    willChange: 'transform' // Optimize for animations
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        style={canvasStyle}
      />
    </div>
  );
};

export default ParticlesBackground;
