"use client";

import { useState } from "react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  details: string;
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: "Assistive Library Robot",
      description:
        "Built a robot-assisted library system using conversational AI and autonomous navigation. Integrated Furhat (HRI) with TurtleBot4 (ROS2) to guide users to books through voice interaction and real-time navigation.",
      tech: ["AI", "NLP", "ASR", "ROS2", "Robotics", "Python", "Socket Programming", "SQL"],
      details: "Detailed content handled in UI",
    },
    {
      title: "Benchmarking GPT-3 for Emotion Recognition",
      description:
        "Evaluated GPT models on emotion recognition tasks and compared performance with state-of-the-art models.",
      tech: ["NLP", "Machine Learning", "Prompt Engineering", "GPT-3"],
      details: "Detailed content handled in UI",
    },
    {
      title: "Event Management Platform",
      description:
        "Developed a full-stack event management platform with user authentication, event booking, organizer dashboard and QR-based ticket validation.",
      tech: ["Next.js", "React", "PostgreSQL", "Prisma", "Tailwind CSS"],
      details: "Detailed content handled in UI",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 py-20 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-4 text-center">
          Projects
        </h2>

        {/* ADDED: Instruction */}
        <p className="text-gray-400 text-center mb-10">
          Click on a project to view more details
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 
              hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] 
              transform hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 rounded-full bg-zinc-800 text-blue-400 border border-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* ADDED: CTA */}
              <p className="text-blue-400 text-sm mt-3">
                View Details →
              </p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 z-50"
            onClick={() => setSelectedProject(null)}
          >            
            <div
              className="bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 rounded-2xl max-w-4xl w-full border border-zinc-800 shadow-2xl relative overflow-y-auto max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >  
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-4 text-xl hover:text-gray-400"
              >
                ×
              </button>

              <h3 className="text-3xl font-semibold mb-6">
                {selectedProject.title}
              </h3>

              {/* Assistive Robot Project */}
              {selectedProject.title === "Assistive Library Robot" ? (
                <div className="space-y-6 text-gray-300">

                  <p>
                    Developed a Human-Robot Interaction system to assist users in libraries using conversational AI and autonomous navigation. The system combines a Furhat social robot for interaction and a TurtleBot4 for physical guidance.
                  </p>

                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Architecture</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Speech input using ASR → intent classification (NLU)</li>
                      <li>Query mapped to modules like book availability and location</li>
                      <li>Database retrieval using MySQL</li>
                      <li>Response generated via TTS</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-400 mb-2">Furhat Robot (HRI)</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Conversational interface for library queries</li>
                      <li>Intent-based NLP system with fallback using LLM (Gemma)</li>
                      <li>Face detection and user engagement tracking</li>
                      <li>Supports book search, recommendations and library info</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">TurtleBot4 (Navigation)</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>ROS2-based autonomous navigation using SLAM</li>
                      <li>Mapped coordinates to bookshelf locations</li>
                      <li>Obstacle detection and path planning</li>
                      <li>Text-to-speech guidance for users</li>
                      <li>Auto docking after task completion</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-400 mb-2">Integration</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Socket-based communication between Furhat and TurtleBot</li>
                      <li>Furhat triggers navigation using location IDs</li>
                      <li>End-to-end pipeline from voice query → physical guidance</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Results</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Tested with real users in IIT Mandi library</li>
                      <li>Average interaction time: 5–7 minutes</li>
                      <li>Positive feedback on usability and informativeness</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-400 mb-2">Tech Stack</h4>
                    <p>Python, ROS2, Furhat SDK, NLP (NLU, ASR, TTS), MySQL, Socket Programming</p>
                  </div>

                  {/* Images */}
                  <div className="space-y-4 pt-2">
                    <img src="/pictures/furhat.png" onClick={() => setSelectedImage("/pictures/furhat.png")} className="rounded-lg border border-zinc-800 cursor-pointer hover:scale-[1.02] transition" />
                    <img src="/pictures/turtlebot.png" onClick={() => setSelectedImage("/pictures/turtlebot.png")} className="rounded-lg border border-zinc-800 cursor-pointer hover:scale-[1.02] transition" />
                    <img src="/pictures/system-architecture.png" onClick={() => setSelectedImage("/pictures/system-architecture.png")} className="rounded-lg border border-zinc-800 cursor-pointer hover:scale-[1.02] transition" />
                    <img src="/pictures/setup.png" onClick={() => setSelectedImage("/pictures/setup.png")} className="rounded-lg border border-zinc-800 cursor-pointer hover:scale-[1.02] transition" />
                  </div>

                </div>
              ) : selectedProject.title === "Benchmarking GPT-3 for Emotion Recognition" ? (
                <div className="space-y-6 text-gray-300">

                  <p>
                    This project focuses on benchmarking GPT-3 for emotion recognition in text, used in chatbots, sentiment analysis and mental health systems.
                  </p>

                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Datasets</h4>
                    <p>DailyDialog, MELD and EmoryNLP datasets.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-400 mb-2">Approach</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Prompt-based classification</li>
                      <li>Window-based context</li>
                      <li>Multiple window sizes</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Evaluation</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Accuracy and F1 Score</li>
                      <li>Compared with SOTA</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-400 mb-2">Results</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Macro F1 ~0.455</li>
                      <li>Close to SOTA</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Tools</h4>
                    <p>GPT-3, Python, NLP evaluation</p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <img src="/pictures/flow.png" onClick={() => setSelectedImage("/pictures/flow.png")} className="rounded-lg border border-zinc-800 cursor-pointer hover:scale-[1.02] transition" />
                    <img src="/pictures/emotion-concept.png" onClick={() => setSelectedImage("/pictures/emotion-concept.png")} className="rounded-lg border border-zinc-800 cursor-pointer hover:scale-[1.02] transition" />
                    <img src="/pictures/emotion-results-1.png" onClick={() => setSelectedImage("/pictures/emotion-results-1.png")} className="rounded-lg border border-zinc-800 cursor-pointer hover:scale-[1.02] transition" />
                    <img src="/pictures/emotion-results-2.png" onClick={() => setSelectedImage("/pictures/emotion-results-2.png")} className="rounded-lg border border-zinc-800 cursor-pointer hover:scale-[1.02] transition" />
                    <img src="/pictures/emotion-results-3.png" onClick={() => setSelectedImage("/pictures/emotion-results-3.png")} className="rounded-lg border border-zinc-800 cursor-pointer hover:scale-[1.02] transition" />
                  </div>

                </div>
              ) : selectedProject.title === "Event Management Platform" ? (
                <div className="space-y-6 text-gray-300">

                  <p>
                    Built a full-stack event management platform that allows users to browse events, book tickets and enables organizers to create and manage events through a dashboard.
                  </p>

                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Core Features</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>User authentication (login and signup)</li>
                      <li>Browse and view event details</li>
                      <li>Event booking system</li>
                      <li>Organizer dashboard for event management</li>
                      <li>Create, edit and delete events</li>
                      <li>Booking tracking</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-400 mb-2">QR-Based Ticket System</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Generated QR codes for bookings</li>
                      <li>Scanner for ticket validation</li>
                      <li>Real-time verification</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Architecture</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Next.js (App Router)</li>
                      <li>API routes for backend</li>
                      <li>Prisma ORM with PostgreSQL</li>
                      <li>Server-side rendering</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-400 mb-2">Tech Stack</h4>
                    <p>Next.js, React, PostgreSQL, Prisma, Tailwind CSS</p>
                  </div>

                </div> ) :
              (
                <p className="text-gray-400">
                  {selectedProject.details}
                </p>
              )}

              {/* TECH */}
              <div className="flex flex-wrap gap-2 mt-8">
                {selectedProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 rounded-full bg-zinc-800 text-blue-400 border border-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
                <div className="pt-4">
                  <a
                    href="https://github.com/gurushravan/Events-Platform-ShowUP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-blue-400 hover:border-blue-500 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition"
                  >
                    View on GitHub →
                  </a>
                </div>
            </div>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[60]"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              className="max-w-[90%] max-h-[90%] rounded-xl border border-zinc-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          
        )}

      </div>
      
    </section>
  );
}