import React from 'react';

const OrganizingDisclaimerPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Organizing Disclaimer</h1>
      
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Important Legal Notice</h2>
          <p className="text-gray-700 mb-4">
             This disclaimer provides important information about the organizing process and your rights as an employee. Please read carefully before participating in any organizing activities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights Under Federal Law</h2>
          <p className="text-gray-700 mb-4">
            Under the National Labor Relations Act (NLRA), you have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Form, join, or assist labor organizations</li>
            <li>Bargain collectively through representatives of your choosing</li>
            <li>Engage in other concerted activities for mutual aid or protection</li>
            <li>Choose not to engage in any of these protected activities</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Guarantees</h2>
          <p className="text-gray-700 mb-4">
             AI Employee Protection Coalition cannot guarantee specific outcomes from organizing efforts. Success depends on many factors including employee support, employer response, and legal proceedings. We provide support and guidance but cannot promise particular results.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Employer Retaliation</h2>
          <p className="text-gray-700 mb-4">
             While federal law prohibits employer retaliation for organizing activities, violations can occur. If you experience retaliation, contact us immediately and consider filing a complaint with the National Labor Relations Board (NLRB).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Confidentiality</h2>
          <p className="text-gray-700 mb-4">
            We maintain strict confidentiality of organizing activities and member information. However, some information may become public during formal NLRB proceedings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Legal Advice</h2>
          <p className="text-gray-700 mb-4">
            This information is for educational purposes only and does not constitute legal advice. For specific legal questions, consult with a qualified attorney specializing in labor law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
          <p className="text-gray-700">
            For questions about organizing or this disclaimer, contact us at organizing@aiunion.org
          </p>
        </section>
      </div>
    </div>
  );
};

export default OrganizingDisclaimerPage;