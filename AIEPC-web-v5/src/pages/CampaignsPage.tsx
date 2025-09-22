import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, MapPin, Clock, Users, Upload } from "lucide-react";
import Navigation from '../components/Navigation';

const CampaignsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    contact: '',
    email: '',
    location: '',
    date: '',
    time: '',
    duration: '',
    capacity: '',
    description: ''
  });

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
      title: "AI Ethics Panel Discussion",
      date: "April 5, 2024",
      time: "6:00 PM - 8:00 PM", 
      location: "New York, NY",
      attendees: 200,
      description: "Industry experts discuss the future of ethical AI in the workplace."
    },
    {
      title: "AI Bias Training Session",
      date: "September 25, 2024",
      time: "1:00 PM - 3:00 PM",
      location: "Online",
      attendees: 250,
      description: "Understanding and combating algorithmic bias in hiring and evaluation."
    },
    {
      title: "Worker Data Privacy Summit",
      date: "October 8, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Seattle, WA",
      attendees: 400,
      description: "Full-day summit on protecting worker data in the digital age."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="w-full relative bg-[#00308f] text-white pt-32 pb-20 px-6 text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/68af6a1e9da3bd2702411fe5_1756364526221_ee61229f.webp)',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="absolute inset-0 bg-[#00308f] opacity-80"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Join us at workshops, rallies, and discussions to build a stronger movement for worker rights.
          </p>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="w-full bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#00308f] mb-4">Join Us</h2>
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

      {/* Create Your Own Event Section */}
      <div className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#00308f] mb-4">Create Your Own Event</h2>
          </div>

          <Card className="border-gray-200">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="title">Event Title</Label>
                    <Input
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Enter event title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact">Contact Name</Label>
                    <Input
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="City, State or Online"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Time</Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="duration">Duration (hours)</Label>
                    <Input
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      placeholder="2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="capacity">Event Capacity</Label>
                  <Input
                    id="capacity"
                    name="capacity"
                    type="number"
                    value={formData.capacity}
                    onChange={handleInputChange}
                    placeholder="50"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Event Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe your event, its purpose, and what attendees will learn..."
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="materials">Upload Materials (Optional)</Label>
                  <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-[#00308f] hover:text-[#5D8AA8]">
                          <span>Upload files</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF, DOC, PPT up to 10MB</p>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-[#00308f] text-white hover:bg-[#5D8AA8] py-3 text-lg">
                  Submit Event for Approval
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-12 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-[#00308f] text-lg mb-4">AI Union</h3>
              <p className="text-[#00308f] text-sm">
                Protecting workers' rights in the age of artificial intelligence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#00308f] mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-[#00308f] hover:text-[#5D8AA8] text-sm">Home</a></li>
                <li><a href="/members" className="text-[#00308f] hover:text-[#5D8AA8] text-sm">Members</a></li>
                <li><a href="/companies" className="text-[#00308f] hover:text-[#5D8AA8] text-sm">Companies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#00308f] mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/legal-center" className="text-[#00308f] hover:text-[#5D8AA8] text-sm">Legal Center: Terms of Use, Privacy Policy, Refund Policy and Organizing Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#00308f] mb-3">Contact</h4>
              <p className="text-[#00308f] text-sm">Email: info@aiepc.org</p>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-[#00308f] text-sm">&copy; 2025 AI Union. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CampaignsPage;