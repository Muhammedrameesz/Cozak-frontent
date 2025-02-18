import React, { useEffect, useState } from "react";
import styles from "./VideoPlayer.module.css";
import { AnimatePresence, motion } from "framer-motion";

const VideoPlayer = () => {
  const [isVisible, setIsVisible] = useState(true);

  const animationConfigs = [
    { initialX: "-140%", exitX: "180%", text: "First Animation" },
    { initialX: "-140%", exitX: "180%", text: "Second Animation" },
    { initialX: "-140%", exitX: "180%", text: "Third Animation" },
  ];

  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);

  const handleAnimationComplete = () => {
    setIsVisible(false); // Hide the component after the animation is complete
  };

  // Reset the visibility every time it becomes invisible
  useEffect(() => {
    if (!isVisible) {
      // Go to the next animation in the array
      setTimeout(() => {
        setIsVisible(true);
        setCurrentAnimationIndex((prevIndex) => (prevIndex + 1) % animationConfigs.length); // Cycle through animations
      },4000); // Delay to sync with the transition duration
    }
  }, [isVisible]);

  const { initialX, exitX, text} = animationConfigs[currentAnimationIndex];

  return (
    <div className={styles.videocontainer}>
      <video autoPlay controls loop muted className={styles.videoplayer}>
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        style={{ textAlign: "center", marginTop: "50px", position: "absolute" }}
      >
        {/* <AnimatePresence>
          {isVisible && (
            <motion.div
              key={currentAnimationIndex} // Key based on animation index to re-trigger animation
              initial={{ x: initialX }}
              animate={{ x: 10 }}
              exit={{ x: exitX, opacity: 0 }}
              transition={{ duration: 3 }}
              onAnimationComplete={handleAnimationComplete}
              style={{
                marginTop: "20px",
                padding: "20px",
                backgroundColor: "#000000",
                borderRadius: "8px",
                display: "inline-block",
                color: "#ffffff",
                width: "100%",
              }}
            >
              {text}
            </motion.div>
          )}
        </AnimatePresence> */}
      </div>
    </div>
  );
};

export default VideoPlayer;
