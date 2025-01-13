import React, { useEffect, useRef, useState } from 'react';
import type { Testimonial } from '../../types/testimonials';

interface InfiniteTestimonialsProps {
  testimonials: Testimonial[];
}

export default function InfiniteTestimonials({ testimonials }: InfiniteTestimonialsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [duplicatedTestimonials, setDuplicatedTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    // Duplicate testimonials for seamless infinite scroll
    setDuplicatedTestimonials([...testimonials, ...testimonials, ...testimonials]);
  }, [testimonials]);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollElement;
      const scrollEnd = scrollWidth / 3;

      if (scrollLeft >= scrollEnd) {
        scrollElement.scrollLeft = 0;
      } else if (scrollLeft <= 0) {
        scrollElement.scrollLeft = scrollEnd;
      }
    };

    scrollElement.addEventListener('scroll', handleScroll);
    
    // Start auto-scroll
    const interval = setInterval(() => {
      if (scrollElement) {
        scrollElement.scrollLeft += 1;
      }
    }, 30);

    return () => {
      scrollElement.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [duplicatedTestimonials]);

  return (
    <div 
      ref={scrollRef}
      className="flex gap-6 overflow-x-auto scrollbar-hide"
      style={{ scrollBehavior: 'smooth' }}
    >
      {duplicatedTestimonials.map((testimonial, index) => (
        <div
          key={`${testimonial.name}-${index}`}
          className="min-w-[280px] flex-shrink-0"
        >
          <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white text-sm">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  {testimonial.role}
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm italic">
              "{testimonial.content}"
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
