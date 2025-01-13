import React, { ChangeEvent, FormEvent, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import SocialLinks from "./SocialLinks";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_j8niree",
        "template_dmhbde6",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "aLfxZUo4ScErPIGL5"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            Let's discuss how we can help transform your business
          </p>
        </div>

        <div className="mt-20 bg-white dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl">
                Ready to get started?
              </h3>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary" />
                  <span className="ml-3 text-gray-500 dark:text-gray-300">
                    contact@yaksen.com
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary" />
                  <span className="ml-3 text-gray-500 dark:text-gray-300">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="ml-3 text-gray-500 dark:text-gray-300">
                    123 AI Street, Tech City, TC 12345
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Us
                </h4>
                <SocialLinks />
              </div>
            </div>
          </div>
          <div className="py-10 px-6 sm:px-10 lg:col-span-1 xl:p-12">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-primary focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-primary focus:ring-primary"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md p-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-primary focus:ring-primary"
                  placeholder="Tell us about your project"
                />
              </div>
              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
