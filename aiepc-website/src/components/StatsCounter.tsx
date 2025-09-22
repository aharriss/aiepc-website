import { useState, useEffect } from 'react';

const stats = [
  { label: "Active Members", value: 45000, prefix: "" },
  { label: "Cases Won", value: 1250, prefix: "" },
  { label: "Companies Engaged", value: 380, prefix: "" },
  { label: "Policies Changed", value: 95, prefix: "" }
];

function AnimatedCounter({ target, prefix = "" }: { target: number; prefix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{prefix}{count.toLocaleString()}</span>;
}

export default function StatsCounter() {
  return (
    <div className="w-full bg-[#00308f] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl font-bold">
                <AnimatedCounter target={stat.value} prefix={stat.prefix} />
              </div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}