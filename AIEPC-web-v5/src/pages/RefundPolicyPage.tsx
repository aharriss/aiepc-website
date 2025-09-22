import React from 'react';

const RefundPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
           <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coalition Dues Refunds</h2>
          <p className="text-gray-700 mb-4">
             Coalition dues are generally non-refundable as they support ongoing coalition operations, member services, and advocacy activities. However, we understand that circumstances may arise where a refund request is warranted.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refund Eligibility</h2>
          <p className="text-gray-700 mb-4">
            Refunds may be considered in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Duplicate payments made in error</li>
            <li>Technical errors resulting in incorrect charges</li>
            <li>Membership cancellation within 30 days of initial signup</li>
            <li>Involuntary job loss or significant financial hardship</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Request a Refund</h2>
          <p className="text-gray-700 mb-4">
            To request a refund, please contact our member services team at refunds@aiunion.org with your membership details and reason for the refund request. All requests will be reviewed on a case-by-case basis.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Processing Time</h2>
          <p className="text-gray-700 mb-4">
            Approved refunds will be processed within 5-10 business days and will be credited back to the original payment method.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
          <p className="text-gray-700">
            For questions about refunds, please contact us at refunds@aiunion.org or call (555) 123-4567.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicyPage;