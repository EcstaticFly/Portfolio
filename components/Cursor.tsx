"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CosmicCursor = () => {
  const mainCursorRef = useRef(null);
  const auraRef = useRef(null);
  const starsRef = useRef(null);
  const trailRef = useRef(null);
  const pulseRef = useRef(null);
  const orbitRef = useRef(null);

  useEffect(() => {
    const mainCursor = mainCursorRef.current;
    const aura = auraRef.current;
    const stars = starsRef.current;
    const trail = trailRef.current;
    const pulse = pulseRef.current;
    const orbit = orbitRef.current;

    // Center all elements
    gsap.set([mainCursor, aura, stars, trail, pulse, orbit], {
      xPercent: -50,
      yPercent: -50,
    });

    // Create continuous animations

    // Spinning stars effect
    gsap.to(stars, {
      rotation: -720,
      repeat: -1,
      duration: 25,
      ease: "none",
    });

    // Orbiting particles
    gsap.to(orbit, {
      rotation: 360,
      repeat: -1,
      duration: 12,
      ease: "none",
    });

    // Pulsing aura
    gsap.to(aura, {
      scale: 1.3,
      opacity: 5,
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: "sine.inOut",
    });

    // Continuous trail effect
    const createTrailEffect = () => {
      gsap.fromTo(
        trail,
        {
          scale: 0.6,
          opacity: 5,
        },
        {
          scale: 1.2,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
          onComplete: createTrailEffect,
        }
      );
    };

    createTrailEffect();

    // Pulse animation on intervals
    const createPulseEffect = () => {
      gsap.fromTo(
        pulse,
        {
          scale: 0.2,
          opacity: 5,
        },
        {
          scale: 3,
          opacity: 0,
          duration: 2,
          ease: "expo.out",
          onComplete: () => {
            // Add a slight delay before the next pulse
            setTimeout(createPulseEffect, 3000);
          },
        }
      );
    };

    createPulseEffect();

    // Mouse movement handler with different follow speeds
    const handleMouseMove = (e: MouseEvent) => {
      // Main cursor follows instantly
      gsap.set(mainCursor, {
        x: e.clientX,
        y: e.clientY,
      });

      // Medium speed followers
      gsap.to([aura, stars], {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power2.out",
      });

      // Slower followers for trailing effect
      gsap.to([trail, pulse, orbit], {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: "power1.out",
      });
    };

    // Interactive element hover effects
    const handleElementHover = () => {
      // Expand main cursor
      gsap.to(mainCursor, {
        scale: 1.5,
        backgroundColor: "rgba(138, 43, 226, 0.8)",
        opacity: 0.5,
        duration: 0.3,
      });

      // Enhance aura
      gsap.to(aura, {
        scale: 1.8,
        opacity: 0.6,
        duration: 0.3,
      });

      // Intensify stars
      gsap.to(stars, {
        scale: 1.4,
        opacity: 0.8,
        duration: 0.3,
      });

      // Speed up orbit
      gsap.to(orbit, {
        timeScale: 2,
        opacity: 0.7,
        duration: 0.3,
      });
    };

    const handleElementLeave = () => {
      // Reset main cursor
      gsap.to(mainCursor, {
        scale: 1,
        backgroundColor: "rgba(138, 43, 226, 0.6)",
        opacity: 1,
        duration: 0.3,
      });

      // Reset aura
      gsap.to(aura, {
        scale: 1,
        opacity: 5,
        duration: 0.3,
      });

      // Reset stars
      gsap.to(stars, {
        scale: 1,
        opacity: 5,
        duration: 0.3,
      });

      // Reset orbit speed
      gsap.to(orbit, {
        timeScale: 1,
        opacity: 5,
        duration: 0.3,
      });
    };

    // Click animation
    const handleMouseDown = () => {
      // Contract everything
      gsap.to([mainCursor, aura, stars], {
        scale: 0.8,
        duration: 0.2,
      });

      // Trigger special pulse
      gsap.fromTo(
        pulse,
        {
          scale: 0.2,
          opacity: 0.9,
        },
        {
          scale: 2.5,
          opacity: 0,
          duration: 0.5,
          ease: "power4.out",
        }
      );
    };

    const handleMouseUp = () => {
      // Expand everything back
      gsap.to([mainCursor, aura, stars], {
        scale: 1,
        duration: 0.3,
      });
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Find all interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, select, textarea, [role="button"], [data-interactive]'
    );
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleElementHover);
      element.addEventListener("mouseleave", handleElementLeave);
    });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleElementHover);
        element.removeEventListener("mouseleave", handleElementLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={mainCursorRef}
        className="fixed top-0 left-0 size-8 pointer-events-none z-[6000]"
        style={{
          background: "linear-gradient(135deg, #8a2be2, #9370db)",
          borderRadius: "50%",
          filter: "blur(2px) brightness(2.3)",
          boxShadow: "0 0 20px rgba(138, 43, 226, 0.6)",
        }}
      />

      {/* Aura glow */}
      <div
        ref={auraRef}
        className="fixed top-0 left-0 w-32 h-32 pointer-events-none z-[5500]"
        style={{
          background:
            "radial-gradient(circle, rgba(138, 43, 226, 0.2) 0%, rgba(147, 112, 219, 0.1) 40%, transparent 70%)",
          borderRadius: "50%",
          opacity: 5,
          filter: "blur(0px)",
        }}
      />

      {/* Star pattern */}
      <div
        ref={starsRef}
        className="fixed top-0 left-0 w-64 h-64 pointer-events-none z-[5300] opacity-100"
        style={{
          background: `
            repeating-radial-gradient(
              circle at center,
              transparent 0px,
              transparent 15px,
              rgba(255, 255, 255, 0.1) 15px,
              rgba(255, 255, 255, 0.1) 16px,
              transparent 16px,
              transparent 25px
            ),
            repeating-radial-gradient(
              circle at center,
              transparent 0px,
              transparent 20px,
              rgba(138, 43, 226, 0.1) 20px,
              rgba(138, 43, 226, 0.1) 21px,
              transparent 21px,
              transparent 30px
            )
          `,
          borderRadius: "50%",
        }}
      />

      {/* Trail effect */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-16 h-16 pointer-events-none z-[5400] opacity-100"
        style={{
          background:
            "radial-gradient(circle, rgba(138, 43, 226, 0.3) 0%, rgba(147, 112, 219, 0.1) 50%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(3px)",
        }}
      />

      {/* Pulse effect */}
      <div
        ref={pulseRef}
        className="fixed top-0 left-0 w-16 h-16 pointer-events-none z-[5200] opacity-100"
        style={{
          border: "2px solid rgba(138, 43, 226, 0.5)",
          borderRadius: "50%",
        }}
      />

      {/* Orbiting particles */}
      <div
        ref={orbitRef}
        className="fixed top-0 left-0 w-48 h-48 pointer-events-none z-[5100] opacity-100"
        style={{
          background: `
            conic-gradient(
              from 0deg,
              transparent 30deg 0deg,
              rgba(138, 43, 226, 0.2) 88deg 90deg,
              transparent 92deg 122deg,
              rgba(147, 112, 219, 0.2) 178deg 182deg,
              transparent 182deg 212deg,
              rgba(138, 43, 226, 0.2) 268deg 272deg,
              transparent 272deg 302deg,
              rgba(147, 112, 219, 0.2) 358deg 360deg
            )
          `,
          borderRadius: "50%",
        }}
      />
    </>
  );
};

export default CosmicCursor;
