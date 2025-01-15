import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import NotFound from "./NotFound";
import { services } from "../constants/services";
import { ArrowRight, Check } from "lucide-react";
import ServiceTools from "../components/service/ServiceTools";
import { useScrollToTop } from "../hooks/useScrollToTop";
import Footer from "../components/footer/Footer";
import ProjectsSection from "../components/service/ProjectsSection";

interface SubService {
  id: string;
  title: string;
  description: string;
  subDescription: string;
  image: string;
  comingSoon?: boolean;
  features: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  process: { title: string; description: string }[];
  projects: { id: string; title: string; image: string; url: string }[] | null;
  tools: {
    name: string;
    description: string;
    icon: any;
    techStack?: string[];
  }[];
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  subServices: SubService[];
}

export default function ServicePage() {
  useScrollToTop();
  const { id } = useParams();
  const service = services.find((s) => s.id === id) as Service;

  const [selectedSubService, setSelectedSubService] =
    useState<SubService | null>(service?.subServices?.[0] || null);

  if (!service) {
    return <NotFound />;
  }

  const handleSubServiceChange = (subServiceId: string) => {
    const subService = service.subServices.find(
      (sub) => sub.id === subServiceId
    );
    setSelectedSubService(subService || null);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent dark:from-primary/5" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000&h=1000')] opacity-5 dark:opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl mb-6">
              <service.icon className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Subservice Selection */}
      {service.subServices && service.subServices.length > 1 && (
        <div className="py-8 bg-gray-100 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.subServices.map((subService) => (
                <button
                  key={subService.id}
                  onClick={() => handleSubServiceChange(subService.id)}
                  className={`relative group p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${
                    selectedSubService?.id === subService.id
                      ? "ring-2 ring-primary"
                      : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300" />
                  <div className="relative flex flex-col items-center justify-center">
                    <div className="overflow-hidden w-full h-32 mb-4">
                      <img
                        src={subService.image}
                        alt={subService.title}
                        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                      {subService.title}
                    </h3>
                    {subService.comingSoon && (
                      <span className="absolute top-2 right-2 px-2 py-1 text-xs font-medium bg-yellow-500 text-white rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedSubService && (
        <>
          <div className="py-8 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {selectedSubService.subDescription}
              </p>
            </div>
          </div>
          {/* Features Grid */}
          <div className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {selectedSubService.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Check className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Section */}
          {selectedSubService.projects &&
            selectedSubService.projects.length > 0 && (
              <ProjectsSection projects={selectedSubService.projects} />
            )}

          {/* Benefits Section */}
          <div className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {selectedSubService.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transform transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <ArrowRight className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                Our Process
              </h2>
              <div className="space-y-12">
                {selectedSubService.process.map((step, index) => (
                  <div key={index} className="relative">
                    {index !== selectedSubService.process.length - 1 && (
                      <div className="absolute left-8 top-16 h-full w-0.5 bg-primary/20" />
                    )}
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-bold text-primary">
                          {index + 1}
                        </span>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg flex-1 transform transition-all duration-300 hover:-translate-y-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}
