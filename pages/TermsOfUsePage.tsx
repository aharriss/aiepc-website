import React from 'react';

const TermsOfUsePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Use</h1>
      
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
          <p className="text-gray-700 mb-4">
             Permission is granted to temporarily download one copy of the materials on AI Employee Protection Coalition's website for personal, non-commercial transitory viewing only.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Disclaimer</h2>
          <p className="text-gray-700 mb-4">
             The materials on AI Employee Protection Coalition's website are provided on an 'as is' basis. AI Employee Protection Coalition makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Contact Information</h2>
          <p className="text-gray-700">
            If you have any questions about these Terms of Use, please contact us at legal@aiunion.org
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfUsePage;