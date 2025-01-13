import React from 'react';
import { Brain, Bot, Cpu, Network, Database, LineChart } from 'lucide-react';
import TechnologyCard from './technology/TechnologyCard';

const technologies = [
  {
    icon: Brain,
    name: 'Natural Language Processing',
    description: 'Advanced NLP algorithms for content generation and analysis',
    tags: ['GPT-4', 'BERT', 'Transformers']
  },
  {
    icon: Bot,
    name: 'Machine Learning',
    description: 'Predictive analytics and pattern recognition',
    tags: ['TensorFlow', 'PyTorch', 'Scikit-learn']
  },
  {
    icon: Cpu,
    name: 'Deep Learning',
    description: 'Neural networks for complex decision making',
    tags: ['CNN', 'RNN', 'LSTM']
  },
  {
    icon: Network,
    name: 'Computer Vision',
    description: 'Image and video analysis for visual content',
    tags: ['OpenCV', 'YOLO', 'ResNet']
  },
  {
    icon: Database,
    name: 'Big Data Analytics',
    description: 'Processing large-scale marketing data',
    tags: ['Hadoop', 'Spark', 'MongoDB']
  },
  {
    icon: LineChart,
    name: 'Predictive Analytics',
    description: 'Future trend prediction and insights',
    tags: ['R', 'Python', 'Julia']
  }
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Our Technologies
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Cutting-edge AI technologies powering your success
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <TechnologyCard key={tech.name} technology={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
