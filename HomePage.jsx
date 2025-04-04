import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto p-8 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500 to-indigo-600 animate-[pulse_10s_infinite]" />

      {/* Hero Section */}
      <section className="text-center bg-white text-gray-900 p-12 rounded-2xl shadow-lg relative z-10">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-36 h-36 rounded-full mx-auto border-4 border-gray-900 shadow-md"
        />
        <h1 className="text-4xl font-extrabold mt-4">Hello! I'm Ian</h1>
        <p className="text-lg text-gray-700 mt-2">Pilot, Drone Enthusiast, and Tech Innovator</p>
        <div className="mt-6 flex justify-center gap-4">
          <Button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md">Resume</Button>
          <Button variant="outline" className="text-gray-900 border-gray-900 px-6 py-2 rounded-lg">Projects</Button>
        </div>
      </section>

      {/* About Me Section */}
      <section className="mt-16 bg-white p-10 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
        <p className="text-gray-700 mt-4">
          I'm a passionate pilot and drone enthusiast with a love for technology and innovation. 
          Whether I'm capturing cinematic FPV footage or building custom tech projects, I thrive 
          on pushing the limits of what's possible.
        </p>
      </section>

      {/* Projects Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Projects & Hobbies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="shadow-lg rounded-xl overflow-hidden">
              <CardContent className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-16 bg-white p-10 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
        <p className="text-gray-700 mt-4">Feel free to reach out for collaborations or inquiries.</p>
        <div className="mt-6">
          <p className="text-gray-900 font-semibold">Email: <a href="mailto:ian@example.com" className="text-blue-600">ian@example.com</a></p>
          <p className="text-gray-900 font-semibold">Social: <a href="#" className="text-blue-600">@ian_drones</a></p>
        </div>
      </section>
    </div>
  );
}

const projects = [
  {
    title: "Drone Business",
    description: "Professional FPV and aerial cinematography services.",
    image: "/drone.jpg",
  },
  {
    title: "Photography Portfolio",
    description: "Capturing stunning landscapes and unique perspectives.",
    image: "/photography.jpg",
  },
  {
    title: "VESC Onewheel Mod",
    description: "Custom-built VESC-powered Onewheel for high performance.",
    image: "/vesc.jpg",
  },
];
