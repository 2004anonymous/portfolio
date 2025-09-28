"use client"
import { useEffect, useRef, ReactNode } from 'react';

interface ScrollFadeProps {
  children: ReactNode;
  className?: string;
}

const ScrollFade = ({ children, className = '' }: ScrollFadeProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
        }
      },
      {
        threshold: 0.1
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={elementRef}
      className={`opacity-0 transition-opacity ${className}`}
      style={{ transitionDuration: `${1500}ms` }}
    >
      {children}
    </div>
  );
};
export default ScrollFade;