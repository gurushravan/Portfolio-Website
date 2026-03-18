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

  const projects: Project[] = [
    {
      title: "Assistive Library Robot",
      description:
        "Worked on Human-Robot Interaction using speech recognition and text-to-speech. Focused on improving navigation and user assistance in library environments.",
      tech: ["AI", "NLP", "Robotics"],
      details: "Add detailed explanation here later",
    },
    {
      title: "Benchmarking GPT-3 for Emotion Recognition",
      description:
        "Evaluated GPT models on emotion recognition tasks and compared performance with state-of-the-art models.",
      tech: ["NLP", "Machine Learning"],
      details: "Detailed content handled in UI",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 py-20 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-10 text-center">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-[1.02] transition"
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
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 z-50">
            
            <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 rounded-2xl max-w-4xl w-full border border-zinc-800 shadow-2xl relative overflow-y-auto max-h-[85vh]">
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-4 text-xl hover:text-gray-400"
              >
                ×
              </button>

              <h3 className="text-3xl font-semibold mb-6">
                {selectedProject.title}
              </h3>

              {/* DETAILS */}
              {selectedProject.title === "Benchmarking GPT-3 for Emotion Recognition" ? (
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

                  {/* Images */}
                  <div className="space-y-4 pt-2">
                    <img src="/pictures/emotion-flow.png" className="rounded-lg border border-zinc-800" />
                    <img src="/pictures/emotion-results.png" className="rounded-lg border border-zinc-800" />
                    <img src="/pictures/emotion-concept.png" className="rounded-lg border border-zinc-800" />
                  </div>

                </div>
              ) : (
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

            </div>
          </div>
        )}

      </div>
    </section>
  );
}