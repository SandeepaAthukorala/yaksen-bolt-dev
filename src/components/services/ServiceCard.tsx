import React from 'react';
import { Link } from 'react-router-dom';
import type { Service } from '../../types/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { icon: Icon, title, description, id } = service;
  
  return (
    <Link to={`/services/${id}`} className="relative group">
      <div className="h-full bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
        <div className="relative bg-white dark:bg-gray-700 rounded-lg p-6">
          <Icon className="h-12 w-12 text-primary" />
          <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
          <p className="mt-5 text-base text-gray-500 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </Link>
  );
}
