import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, FileText, AlertTriangle } from "lucide-react";

const CompaniesSection: React.FC = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-[#00308f]" />,
      title: "AI Ethics Consulting",
      description: "Partner with us to implement ethical AI practices that protect workers while maintaining productivity."
    },
    {
      icon: <Users className="w-8 h-8 text-[#00308f]" />,
      title: "Worker Relations",
      description: "Build trust with your workforce through transparent AI deployment and fair labor practices."
    },
    {
      icon: <FileText className="w-8 h-8 text-[#00308f]" />,
      title: "Compliance Support",
      description: "Stay ahead of AI regulations and ensure your workplace AI meets emerging legal standards."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-[#00308f]" />,
      title: "Risk Assessment",
      description: "Identify potential AI-related risks to your workforce and develop mitigation strategies."
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#00308f] mb-4">For Companies</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Partner with AI Union to create ethical AI workplaces that benefit both workers and business outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-[#00308f] mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-[#00308f] text-white hover:bg-[#5D8AA8] font-semibold px-8 py-3 rounded-xl">
            Partner With Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompaniesSection;