import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

const EventsSection: React.FC = () => {
  const events = [
    {
      title: "AI Rights Workshop",
      date: "March 15, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Online",
      attendees: 150,
      description: "Learn about your rights in AI-monitored workplaces and how to protect yourself."
    },
    {
      title: "Tech Workers Unite Rally",
      date: "March 22, 2024", 
      time: "10:00 AM - 2:00 PM",
      location: "San Francisco, CA",
      attendees: 500,
      description: "Join fellow tech workers in advocating for fair AI implementation."
    },
    {
      title: "AI Ethics Panel Discussion",
      date: "April 5, 2024",
      time: "6:00 PM - 8:00 PM", 
      location: "New York, NY",
      attendees: 200,
      description: "Industry experts discuss the future of ethical AI in the workplace."
    }
  ];

  return (
    <div className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#00308f] mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join us at workshops, rallies, and discussions to build a stronger movement for worker rights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-[#00308f] text-xl mb-3">{event.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.attendees} expected</span>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4">{event.description}</p>

                <Button className="w-full bg-[#00308f] text-white hover:bg-[#5D8AA8]">
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSection;