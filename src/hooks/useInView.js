import { useState, useEffect, useRef } from "react";

/**
 * Custom hook that tracks whether an element is in the viewport.
 * Once visible, stays visible (no disappearing on re-render).
 */
export default function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || isVisible) return; // already visible, skip

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // once visible, never un-observe
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px", ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible, options]);

  return [ref, isVisible];
}
