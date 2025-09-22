import React from "react";

interface QuickLinkProps {
  icon: React.ReactNode;
  title: string;
  href: string;
}

export default function QuickLink({ icon, title, href }: QuickLinkProps) {
  return (
    <a
      href={href}
      className="group block p-4 bg-white border border-slate-200 rounded-xl hover:border-[#00308F] hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:scale-98"
    >
      <div className="flex items-center gap-3">
        <div className="text-[#00308F] group-hover:text-[#5D8AA8] transition-colors">
          {icon}
        </div>
        <span className="font-semibold text-slate-900 group-hover:text-[#00308F] transition-colors">
          {title}
        </span>
      </div>
    </a>
  );
}
