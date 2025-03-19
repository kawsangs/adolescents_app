const colorUtil = (() => {
  return {
    hexToRGBA
  }

  function hexToRGBA(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
  
    if (alpha >= 0 && alpha <= 1) {
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    } else {
      return `rgba(${r}, ${g}, ${b}, 1)`; // default to fully opaque if alpha is invalid
    }
  }
})();

export default colorUtil;