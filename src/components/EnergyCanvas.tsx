import { useEffect, useRef } from 'react';

const EnergyCanvas = ({ showWaves = true, shouldAnimate = true }: { showWaves?: boolean; shouldAnimate?: boolean }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationFrameId: number;

        // Configuration
        const gridSpacing = 50;
        const waveSpeed = 0.02;
        const particleCount = 50;

        // State
        let time = 0;

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.1;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > width) this.x = 0;
                if (this.x < 0) this.x = width;
                if (this.y > height) this.y = 0;
                if (this.y < 0) this.y = height;
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.fillStyle = `rgba(6, 182, 212, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const particles: Particle[] = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const drawGrid = () => {
            ctx.strokeStyle = 'rgba(124, 58, 237, 0.1)'; // Faint Purple
            ctx.lineWidth = 1;

            // Vertical lines
            for (let x = 0; x <= width; x += gridSpacing) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            // Horizontal lines
            for (let y = 0; y <= height; y += gridSpacing) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }
        };

        const drawWaves = () => {
            // Blue wave
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(6, 182, 212, 0.5)';
            ctx.lineWidth = 2;

            ctx.moveTo(0, height / 2);
            for (let x = 0; x <= width; x += 10) {
                const y = height / 2 + Math.sin(x * 0.01 + time) * 50 + Math.sin(x * 0.005 + time * 1.5) * 20;
                ctx.lineTo(x, y);
            }
            ctx.stroke();

            // Purple wave
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(124, 58, 237, 0.5)';
            ctx.lineWidth = 2;

            ctx.moveTo(0, height / 2);
            for (let x = 0; x <= width; x += 10) {
                const y = height / 2 + Math.sin(x * 0.012 + time + 2) * 60 + Math.sin(x * 0.008 + time * 1.2) * 30;
                ctx.lineTo(x, y);
            }
            ctx.stroke();

            // Cyan wave
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)';
            ctx.lineWidth = 1;

            ctx.moveTo(0, height / 2 + 100);
            for (let x = 0; x <= width; x += 10) {
                const y = height / 2 + 100 + Math.sin(x * 0.005 + time * 0.8) * 40;
                ctx.lineTo(x, y);
            }
            ctx.stroke();
        };

        const drawFrame = () => {
            ctx.fillStyle = 'rgb(12, 9, 13)'; // Clear with BG color
            ctx.fillRect(0, 0, width, height);

            drawGrid();

            particles.forEach(p => {
                if (shouldAnimate) p.update(); // Only update positions if animating
                p.draw(ctx);
            });

            if (showWaves) {
                drawWaves();
            }

            // vignette effect
            const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width);
            gradient.addColorStop(0, 'rgba(12, 9, 13, 0)');
            gradient.addColorStop(1, 'rgba(12, 9, 13, 0.8)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        };

        const animate = () => {
            drawFrame();
            time += waveSpeed;
            if (shouldAnimate) {
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            if (!shouldAnimate) {
                requestAnimationFrame(drawFrame); // Redraw once on resize if static
            }
        };

        window.addEventListener('resize', resize);
        resize();

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [shouldAnimate, showWaves]);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />;
};

export default EnergyCanvas;
