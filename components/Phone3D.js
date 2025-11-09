"use client";

import Assets from "@/assets";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Phone3D.css";

export default function Phone3D() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transitionType, setTransitionType] = useState(0);

  const images = [
    Assets.HomeActivity,
    Assets.ListPolicyActivity,
    Assets.SigninActivity,
  ];

  // Các kiểu chuyển cảnh khác nhau
  const transitions = [
    // 1. Zoom fade
    {
      initial: { opacity: 0, scale: 1.05 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
    },
    // 2. Slide từ phải
    {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -50 },
    },
    // 3. Slide từ dưới
    {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -30 },
    },
    // 4. Rotate fade
    {
      initial: { opacity: 0, rotateY: 20 },
      animate: { opacity: 1, rotateY: 0 },
      exit: { opacity: 0, rotateY: -20 },
    },
    // 5. Scale up
    {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.1 },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTransitionType(Math.floor(Math.random() * transitions.length));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, transitions.length]);

  return (
    <div className="phone-3d-container">
      <div className="iphone-mockup">
        {/* Frame điện thoại */}
        <div className="iphone-frame">
          {/* Dynamic Island */}
          <div className="dynamic-island">
            <div className="island-camera"></div>
            <div className="island-dot"></div>
          </div>

          {/* Màn hình */}
          <div className="iphone-screen">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex].src}
                alt={`App screenshot ${currentImageIndex + 1}`}
                className="screen-image"
                initial={transitions[transitionType].initial}
                animate={transitions[transitionType].animate}
                exit={transitions[transitionType].exit}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                  opacity: { duration: 0.4 }
                }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
