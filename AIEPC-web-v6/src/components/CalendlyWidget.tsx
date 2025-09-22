import React, { useEffect } from 'react';

interface CalendlyWidgetProps {
  url: string;
  isOpen: boolean;
  onClose: () => void;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ url, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Load Calendly script if not already loaded
      if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
      }

      // Initialize inline widget after script loads
      const timer = setTimeout(() => {
        if (window.Calendly && document.getElementById('calendly-embed')) {
          window.Calendly.initInlineWidget({
            url: url,
            parentElement: document.getElementById('calendly-embed'),
            prefill: {},
            utm: {}
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isOpen, url]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl h-[80vh] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div 
          id="calendly-embed" 
          className="w-full h-full rounded-lg"
          style={{ minWidth: '320px', height: '100%' }}
        />
      </div>
    </div>
  );
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    Calendly: any;
  }
}

export default CalendlyWidget;