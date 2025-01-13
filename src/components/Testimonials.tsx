import React from 'react';
import InfiniteTestimonials from './testimonials/InfiniteTestimonials';
import type { Testimonial } from '../types/testimonials';

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director at TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
    content: 'YAKSEN transformed our digital presence with their AI-powered solutions.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CEO at GrowthStart',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
    content: 'The AI-generated content consistently outperforms our traditional approaches.',
    rating: 5,
  },
  {
    name: 'Emma Davis',
    role: 'E-commerce Manager at StyleHub',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
    content: 'Their chatbot integration increased our satisfaction scores by 45%.',
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Customer Feedback
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            See what our clients say about our services
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 dark:from-gray-800 to-transparent z-10" />
          <div className="relative overflow-hidden">
            <InfiniteTestimonials testimonials={testimonials} />
          </div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
