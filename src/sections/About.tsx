export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 py-20 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-12 text-center">
          About Me
        </h2>

        {/* Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">
            Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "Python",
              "MySQL",
              "Excel",
              "Power BI",
              "Data Analysis",
              "AWS QuickSight",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-md text-sm bg-zinc-900 border border-zinc-700 text-gray-300 hover:border-blue-500 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-purple-400">
            Education
          </h3>

          <div className="flex flex-col gap-6">

            {/* B.Tech */}
            <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition">
              <h4 className="text-lg font-medium">
                B.Tech in Computer Science
              </h4>
              <p className="text-gray-400">
                Symbiosis Institute of Technology, Pune
              </p>
              <p className="text-gray-500 text-sm">
                2021 - 2025
              </p>
            </div>

            {/* Diploma */}
            <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition">
              <h4 className="text-lg font-medium">
                Diploma in Business Management
              </h4>
              <p className="text-gray-400">
                Symbiosis Institute of Business Management, Pune
              </p>
              <p className="text-gray-500 text-sm">
                2022 - 2023
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}