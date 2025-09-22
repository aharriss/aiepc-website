import React from "react";

interface PolicyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  highlights?: string[];
}

export default function PolicyCard({ icon, title, description, href, highlights }: PolicyCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-[#00308F]">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      </div>
      
      <p className="text-slate-600 mb-4">{description}</p>
      
      {highlights && highlights.length > 0 && (
        <ul className="space-y-2 mb-6">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
              <div className="w-1.5 h-1.5 bg-[#00308F] rounded-full mt-2 flex-shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>
      )}
      
      <a
        href={href}
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#00308F] hover:text-[#5D8AA8] transition-colors"
      >
        Read Full Document
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}