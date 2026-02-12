import { useEffect, useRef } from 'react';

const EnergyBeamCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        // Resize handler
        const resize = () => {
            // We only need the width to center the beam, height can track scroll or be fixed
            // But for a background in a section, we'll use parent dimensions usually, 
            // but here we want a window-based or section-based effect. 
            // Let's assume full coverage of the parent section.
            if (canvas.parentElement) {
                width = canvas.parentElement.clientWidth;
                height = canvas.parentElement.clientHeight;
                canvas.width = width;
                canvas.height = height;
            }
        };

        window.addEventListener('resize', resize);
        resize();

        // Configuration
        const beamWidth = 2; // Core width
        const glowWidth = 60; // Soft glow width
        const particleCount = 60;

        // State
        let time = 0;

        class Particle {
            x: number;
            y: number;
            size: number;
            speedY: number;
            opacity: number;
            pulseSpeed: number;

            constructor() {
                this.x = width / 2 + (Math.random() - 0.5) * glowWidth * 1.5; // Concentrated around beam
                this.y = Math.random() * height;
                this.size = Math.random() * 2 + 0.5;
                this.speedY = Math.random() * 2 + 0.5; // Upward flow
                this.opacity = Math.random() * 0.5 + 0.2;
                this.pulseSpeed = Math.random() * 0.05 + 0.02;
            }

            update() {
                this.y -= this.speedY; // Move Up
                this.opacity += Math.sin(time * this.pulseSpeed) * 0.02;

                // Reset if out of view
                if (this.y < 0) {
                    this.y = height;
                    this.x = width / 2 + (Math.random() - 0.5) * glowWidth * 1.5;
                }

                // Horizontal jitter to feel alive
                this.x += Math.sin(time + this.y * 0.05) * 0.2;
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.fillStyle = `rgba(124, 58, 237, ${Math.max(0, this.opacity)})`; // Purple particles
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();

                // Glow for particle
                ctx.shadowBlur = 10;
                ctx.shadowColor = "rgba(6, 182, 212, 0.8)"; // Cyan glow
            }
        }

        const particles: Particle[] = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const drawBeam = () => {
            const centerX = width / 2;

            // 1. Outer Glow (Soft Purple/Cyan)
            const gradient = ctx.createLinearGradient(centerX - glowWidth, 0, centerX + glowWidth, 0);
            gradient.addColorStop(0, 'rgba(12, 9, 13, 0)');
            gradient.addColorStop(0.4, 'rgba(124, 58, 237, 0.1)'); // Purple
            gradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.2)'); // Cyan
            gradient.addColorStop(0.6, 'rgba(124, 58, 237, 0.1)'); // Purple
            gradient.addColorStop(1, 'rgba(12, 9, 13, 0)');

            ctx.fillStyle = gradient;
            ctx.fillRect(centerX - glowWidth, 0, glowWidth * 2, height);

            // 2. Core Beam (Intense White/Cyan)
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.lineWidth = beamWidth;
            ctx.moveTo(centerX, 0);
            // Add subtle wave to the core beam
            for (let y = 0; y < height; y += 10) {
                const jitter = Math.sin(y * 0.05 - time * 2) * 2;
                ctx.lineTo(centerX + jitter, y);
            }
            ctx.stroke();

            // 3. Plasma Threads (Secondary lines wrapping around)
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)'; // Cyan
            ctx.lineWidth = 1;
            for (let y = 0; y < height; y += 5) {
                const x = centerX + Math.sin(y * 0.03 + time) * 15;
                if (y === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            ctx.beginPath();
            ctx.strokeStyle = 'rgba(124, 58, 237, 0.3)'; // Purple 
            ctx.lineWidth = 1;
            for (let y = 0; y < height; y += 5) {
                const x = centerX + Math.cos(y * 0.02 - time * 1.5) * 20;
                if (y === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
        };

        const animate = () => {
            // Clear logic
            ctx.clearRect(0, 0, width, height);

            // Reset shadow for beam (optimization)
            ctx.shadowBlur = 0;

            drawBeam();

            particles.forEach(p => {
                p.update();
                p.draw(ctx);
            });

            time += 0.05;
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 opacity-80 mix-blend-screen pointer-events-none" />;
};

export default EnergyBeamCanvas;
