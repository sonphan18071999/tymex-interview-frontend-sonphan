import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

type Direction = "up" | "down" | "left" | "right";

interface UseFadeAnimationProps {
  direction?: Direction;
  duration?: number;
  triggerOnce?: boolean; // Only animate once
}

const useFadeAnimation = ({
  direction = "up",
  duration = 1,
  triggerOnce = true,
}: UseFadeAnimationProps = {}) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    let x = 0,
      y = 0;
    switch (direction) {
      case "up":
        y = 100;
        break;
      case "down":
        y = -100;
        break;
      case "left":
        x = 100;
        break;
      case "right":
        x = -100;
        break;
    }

    gsap.fromTo(
      elementRef.current,
      { opacity: 0, x, y },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 80%", // Start when the top of the element is 80% in viewport
          toggleActions: triggerOnce
            ? "play none none none"
            : "play reverse play reverse",
        },
      },
    );
  }, [direction, duration, triggerOnce]);

  return elementRef;
};

export default useFadeAnimation;
