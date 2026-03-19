"use client";

const experiences = [
  {
    role: "Data Analyst",
    company: "Radar Ventures",
    duration: "June 2025 - Nov 2025",
    points: [
      "Automated a manual Gross Profit reporting process, generating daily branch-wise reports for 7 branches.",
      "Handled data extraction, analysis and reporting using Excel, Python and Metabase.",
      "Delivered business insights to support operational decision-making.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Radar Ventures",
    duration: "Jan 2025 - June 2025",
    points: [
      "Analyzed 460+ shipments across 40+ cities to optimize freight costs using FTL and LTL combinations.",
      "Built dashboards using AWS QuickSight and Metabase to track cost optimization and sales performance.",
      "Worked on data-driven strategies to improve logistics efficiency.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 py-35 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-12 text-center">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold">
                {exp.role} - <span className="text-blue-400">{exp.company}</span>
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {exp.duration}
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}