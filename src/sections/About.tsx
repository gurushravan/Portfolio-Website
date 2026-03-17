export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-6 py-20 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">
        
        <h2 className="text-3xl font-bold mb-10 text-center">
          About Me
        </h2>

        {/* Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>

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
                className="px-4 py-2 border border-gray-600 rounded-md text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Education</h3>

          <div className="flex flex-col gap-4">

            {/* B.Tech */}
            <div className="border border-gray-700 p-6 rounded-lg">
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
            <div className="border border-gray-700 p-6 rounded-lg">
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