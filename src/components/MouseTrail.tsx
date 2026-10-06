import { useEffect, useRef } from 'react';

const colors = [
  "#E2B857", // Gold
  "#E2B857",
  "#C58F4F", // Bronze/Amber
  "#C58F4F",
  "#A88B60", // Muted Sand
  "#A88B60",
  "#8C724D", // Soft Gold-brown
  "#8C724D",
  "#6F583B", // Muted Bronze
  "#54412A", // Dark Gold-brown
  "#3C2E1D", // Dark Charcoal-Gold
  "#281E13",
  "#1A140C",
  "#121216", // Slate Surface
  "#121216",
  "#08080A", // Obsidian background
  "#08080A",
  "#08080A",
  "#08080A",
  "#08080A"
];

export function MouseTrail() {
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const coords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const circles = circlesRef.current.filter(Boolean) as HTMLDivElement[];
    
    circles.forEach((circle, index) => {
      (circle as any).x = 0;
      (circle as any).y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e: MouseEvent) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;

    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;
      
      circles.forEach((circle, index) => {
        circle.style.left = x - 20 + "px";
        circle.style.top = y - 20 + "px";
        
        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
        
        (circle as any).x = x;
        (circle as any).y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += ((nextCircle as any).x - x) * 0.3;
        y += ((nextCircle as any).y - y) * 0.3;
      });
     
      animationFrameId = requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (circlesRef.current[i] = el)}
          className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[99999999]"
        />
      ))}
    </>
  );
}
