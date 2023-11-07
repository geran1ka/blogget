export const debounceRaf = fn => {
  let raf = 0;

  return (...args) => {
    raf = requestAnimationFrame(() => {
      if (raf) return;
      fn(...args);
      raf = 0;
    });
  };
};
