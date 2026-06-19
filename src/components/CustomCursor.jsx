import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hidden, setHidden] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if mobile or touch device
    const checkDevice = () => {
      const mobile = 
        window.matchMedia("(max-width: 768px)").matches || 
        ("ontouchstart" in window) || 
        (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (hidden) setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    // Mouse hover detections
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isInteractive = 
        target.closest("button") || 
        target.closest("a") || 
        target.closest("input") || 
        target.closest("textarea") ||
        target.closest("[data-magnetic]") ||
        target.closest(".interactive-card");
      
      setIsHovered(!!isInteractive);
    };

    if (!isMobile) {
      window.addEventListener("mousemove", moveCursor);
      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("mouseenter", handleMouseEnter);
      window.addEventListener("mouseover", handleMouseOver);
    }

    return () => {
      window.removeEventListener("resize", checkDevice);
      if (!isMobile) {
        window.removeEventListener("mousemove", moveCursor);
        document.removeEventListener("mouseleave", handleMouseLeave);
        document.removeEventListener("mouseenter", handleMouseEnter);
        window.removeEventListener("mouseover", handleMouseOver);
      }
    };
  }, [cursorX, cursorY, hidden, isMobile]);

  if (isMobile || hidden) return null;

  return (
    <>
      {/* Outer aura trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#d4a853]/60 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? "rgba(212, 168, 83, 0.08)" : "rgba(212, 168, 83, 0)",
          borderColor: isHovered ? "rgba(212, 168, 83, 0.9)" : "rgba(212, 168, 83, 0.6)",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      />
      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#d4a853] rounded-full pointer-events-none z-[10000]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
