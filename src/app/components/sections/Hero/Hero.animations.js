

// Animations - refined for smoother, more natural motion
export const badge = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};
export const headline = {
  hidden: { opacity: 0, y: 28 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] } 
  },
};

export const description = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] } 
  },
};

export const quote = {
  hidden: { opacity: 0, x: -12 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] } 
  },
};

export const ctas = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] } 
  },
};

export const imageFloat = {
  initial: { y: 0 },
  animate: { 
    y: [-2, 2, -2], 
    transition: { 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut",
      repeatType: "reverse"
    } 
  },
};

export const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const viewport = { once: true, margin: '-100px' };