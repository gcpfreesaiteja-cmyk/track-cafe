
import React, { useEffect, useRef } from 'react';

const FluidCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0, px: 0, py: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const particles: any[] = [];
    const maxParticles = 50;

    class Particle {
      x: number; y: number; vx: number; vy: number; life: number; color: string;
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.life = 1.0;
        this.color = `rgba(212, 255, 0, ${Math.random() * 0.5})`;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= 0.01;
      }
      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10 * this.life, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.px = mouse.current.x;
      mouse.current.py = mouse.current.y;
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      for (let i = 0; i < 2; i++) {
        if (particles.length < maxParticles) {
          particles.push(new Particle(e.clientX, e.clientY));
        }
      }
      
      const dot = document.getElementById('custom-cursor');
      if (dot) {
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
        } else {
          particles[i].draw(ctx);
        }
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    animate();

    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[9998]" />;
};

export default FluidCursor;
