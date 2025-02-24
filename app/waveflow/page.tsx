"use client";
import { useEffect, useRef } from "react";

const WaveCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 280; // Canvas height set to 280px
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Wave parameters
    const waveHeight = 40;
    const waveSpeed1 = 1.2;
    const waveSpeed2 = 0.2;
    const waveSpeed3 = 1;
    const waveLength = 0.01;

    const drawWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const createGradient = (color1: string, color2: string) => {
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, color1); // Light color at the top
        gradient.addColorStop(1, color2); // Faded color at the bottom
        return gradient;
      };

      // const gradient1 = createGradient("rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0)"); 
      // const gradient2 = createGradient("rgba(240, 248, 255, 0.8)", "rgba(240, 248, 255, 0)"); 
      // const gradient3 = createGradient("rgba(255, 240, 245, 0.8)", "rgba(255, 240, 245, 0)"); 
      
      const gradient1 = createGradient("rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.6)"); // Light white gradient
      const gradient2 = createGradient("rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.6)"); // Light blue gradient
      const gradient3 = createGradient("rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.6)"); // Light pink gradient
      
      const drawSingleWave = (waveSpeed: number, waveFactor: number, gradient: CanvasGradient) => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        for (let x = 0; x < canvas.width; x++) {
          let y =
            Math.sin(x * waveLength + waveSpeed * performance.now() / 1000) *
              (waveHeight * waveFactor) +
            canvas.height / 2;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();
      };

      drawSingleWave(waveSpeed1, 1, gradient1);
      drawSingleWave(waveSpeed2, 0.8, gradient2);
      drawSingleWave(waveSpeed3, 0.6, gradient3);
    };

    const animate = () => {
      drawWave();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute bottom-0 left-0 w-full h-[90px] sm:h-[180px] md:h-[280px] z-[1]"></canvas>;
};

export default WaveCanvas;
