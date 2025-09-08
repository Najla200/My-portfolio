import { useEffect, useState, RefObject } from 'react';

export const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  threshold = 0.1
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // once visible, never reset to false
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementRef, threshold]);

  return isVisible;
};
