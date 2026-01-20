import React, { useRef, useEffect } from 'react';
import styles from './BubbleCanvas.module.css';

const BubbleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse position and velocity tracking
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let prevMouseX = mouseX;
    let prevMouseY = mouseY;
    let velocityX = 0;
    let velocityY = 0;

    // Fade tracking
    let lastMoveTime = Date.now();
    let globalOpacity = 0;
    const fadeOutDelay = 2000; // Start fading after 2 seconds
    const fadeOutDuration = 1000; // Fade out over 1 second
    const fadeInSpeed = 0.15; // How fast to fade in

    const handleMouseMove = (e) => {
      prevMouseX = mouseX;
      prevMouseY = mouseY;
      mouseX = e.clientX;
      mouseY = e.clientY;
      velocityX = mouseX - prevMouseX;
      velocityY = mouseY - prevMouseY;
      lastMoveTime = Date.now();
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Bubble class
    class Bubble {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 20 + 10;
        this.speedFactor = Math.random() * 0.06 + 0.02;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.02 + 0.01;

        // Position in the trail (0 = closest to mouse, 1 = end of trail)
        this.trailPosition = Math.random();
        // Small perpendicular offset for slight width variation
        this.perpOffset = (Math.random() - 0.5) * 30;
      }

      update() {
        // Calculate distance from mouse to determine trail length
        const distToMouse = Math.sqrt(
          Math.pow(this.x - mouseX, 2) + Math.pow(this.y - mouseY, 2)
        );

        // Trail length scales with distance - close = short, far = long trail
        const spreadFactor = Math.min(1, distToMouse / 300);
        const trailLength = 250 * spreadFactor;

        // Get movement direction (opposite = trail direction)
        const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
        let trailDirX = 0;
        let trailDirY = 0;

        if (speed > 0.5) {
          // Trail behind mouse movement
          trailDirX = -velocityX / speed;
          trailDirY = -velocityY / speed;
        }

        // Position along the trail based on this bubble's trail position
        const trailDist = this.trailPosition * trailLength;

        // Perpendicular direction for slight width
        const perpX = -trailDirY;
        const perpY = trailDirX;

        // Target position: mouse + trail offset + perpendicular offset
        const targetX = mouseX + trailDirX * trailDist + perpX * this.perpOffset * spreadFactor;
        const targetY = mouseY + trailDirY * trailDist + perpY * this.perpOffset * spreadFactor;

        const dx = targetX - this.x;
        const dy = targetY - this.y;

        this.x += dx * this.speedFactor;
        this.y += dy * this.speedFactor;

        // Add subtle wobble
        this.wobble += this.wobbleSpeed;
        this.x += Math.sin(this.wobble) * 0.3;
        this.y += Math.cos(this.wobble) * 0.3;
      }

      draw() {
        // Calculate distance from mouse
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Closer = more opaque, further = more faded (reduced intensity)
        const maxDistance = 400;
        const opacity = Math.max(0.02, 0.4 - (distance / maxDistance) * 0.4);
        const blur = Math.min(12, distance / 30);

        // Draw bubble with gradient
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );

        gradient.addColorStop(0, `rgba(93, 253, 203, ${opacity * 0.5})`);
        gradient.addColorStop(0.5, `rgba(70, 200, 160, ${opacity * 0.25})`);
        gradient.addColorStop(1, `rgba(50, 150, 120, 0)`);

        ctx.save();
        ctx.filter = `blur(${blur}px)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();
      }
    }

    // Create bubbles
    const bubbles = [];
    const bubbleCount = 35;
    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push(new Bubble());
    }

    // Animation loop
    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate global opacity based on mouse activity
      const timeSinceMove = Date.now() - lastMoveTime;

      if (timeSinceMove < fadeOutDelay) {
        // Mouse recently moved - fade in
        globalOpacity = Math.min(1, globalOpacity + fadeInSpeed);
      } else {
        // Mouse idle - fade out
        const fadeProgress = Math.min(1, (timeSinceMove - fadeOutDelay) / fadeOutDuration);
        globalOpacity = Math.max(0, 1 - fadeProgress);
      }

      // Only draw if visible
      if (globalOpacity > 0.01) {
        ctx.globalAlpha = globalOpacity;
        bubbles.forEach(bubble => {
          bubble.update();
          bubble.draw();
        });
        ctx.globalAlpha = 1;
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
};

export default BubbleCanvas;
