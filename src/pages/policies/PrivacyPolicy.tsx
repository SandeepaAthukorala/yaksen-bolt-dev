import React from 'react';
import PolicyLayout from '../../components/policies/PolicyLayout';

export default function PrivacyPolicy() {
  return (
    <PolicyLayout 
      title="Privacy Policy" 
      lastUpdated={new Date().toLocaleDateString()}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
            <p className="mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Payment information</li>
              <li>Communication preferences</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Process your transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about products, services, and events</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Your Rights</h2>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
            </ul>
          </div>
        </section>
      </div>
    </PolicyLayout>
  );
}
