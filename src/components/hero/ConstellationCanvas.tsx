import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  highlight: boolean;
}

export const ConstellationCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    // High DPI scaling
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking relative to canvas
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 120,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Initialize nodes
    const nodeCount = Math.floor((width * height) / 10000);
    const nodes: Node[] = [];

    for (let i = 0; i < Math.min(Math.max(nodeCount, 25), 55); i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 1.2,
        baseAlpha: Math.random() * 0.4 + 0.2,
        highlight: i % 4 === 0, // Accent champagne nodes
      });
    }

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle orbital guide circles in champagne
      const centerX = width * 0.55;
      const centerY = height * 0.48;

      ctx.save();
      ctx.strokeStyle = 'rgba(198, 173, 123, 0.05)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 8]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, 130, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX, centerY, 210, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Update and connect nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Bounce at boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse influence: gentle repulsion / attraction
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 0.8;
          node.x -= (dx / dist) * force;
          node.y -= (dy / dist) * force;
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const ndx = other.x - node.x;
          const ndy = other.y - node.y;
          const nDist = Math.sqrt(ndx * ndx + ndy * ndy);

          const maxDist = 95;
          if (nDist < maxDist) {
            const alpha = (1 - nDist / maxDist) * 0.25;
            const isChampagneLine = node.highlight || other.highlight;

            ctx.strokeStyle = isChampagneLine
              ? `rgba(198, 173, 123, ${alpha * 0.8})`
              : `rgba(242, 239, 232, ${alpha * 0.3})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);

        if (node.highlight) {
          ctx.fillStyle = `rgba(198, 173, 123, ${node.baseAlpha + 0.3})`;
          ctx.shadowColor = '#C6AD7B';
          ctx.shadowBlur = 6;
        } else {
          ctx.fillStyle = `rgba(242, 239, 232, ${node.baseAlpha})`;
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`relative w-full h-full pointer-events-auto ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        aria-hidden="true"
      />
      {/* Subtle architectural HUD labels */}
      <div className="absolute bottom-3 right-4 flex items-center gap-3 font-mono text-[9px] tracking-[0.2em] text-[#C6AD7B]/60 uppercase pointer-events-none select-none">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C6AD7B]/70 animate-pulse" />
        <span>NODE LATTICE // SPATIAL MATRIX</span>
      </div>
    </div>
  );
};
