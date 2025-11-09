"use client";

import Assets from "@/assets";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Phone3D.css";

export default function Phone3D() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    Assets.HomeActivity,
    Assets.ListPolicyActivity,
    Assets.SigninActivity,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="phone-wrapper">
      <div className="phone-3d">
        <div className="pside front">
          <div className="back"></div>
          <div className="layerZero">
            <div className="screen">
              {/* Dynamic Island (Viên thuốc) */}
              <div className="dynamic-island">
                <div className="island-camera"></div>
                <div className="island-dot"></div>
              </div>

              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex].src}
                  alt={`App screenshot ${currentImageIndex + 1}`}
                  className="screen-image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className="pside leftSide">
          <div className="sidebottom"></div>
          <div className="card"></div>
        </div>
        <div className="pside bottom">
          <div className="speaker sp1">
            <div className="spDot"></div>
            <div className="spDot"></div>
            <div className="spDot"></div>
            <div className="spDot"></div>
            <div className="spDot"></div>
            <div className="spDot"></div>
          </div>
          <div className="conector"></div>
          <div className="speaker sp2">
            <div className="spDot"></div>
            <div className="spDot"></div>
            <div className="spDot"></div>
            <div className="spDot"></div>
            <div className="spDot"></div>
            <div className="spDot"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
