export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6"
    >
      <div className="max-w-4xl mx-auto">

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Hi, I'm Guru Shravan
        </h1>

        {/* Role */}
        <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
          Data Analyst
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-gray-300 mb-10">
            Experience in data analysis and visualization. Focused on building data-driven solutions and intuitive user experiences, with a growing interest in product management.

        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/gurushravan"
            target="_blank"
            className="px-6 py-2 rounded-md font-medium bg-zinc-900 border border-zinc-700 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/guru-shravan/"
            target="_blank"
            className="px-6 py-2 rounded-md font-medium bg-zinc-900 border border-zinc-700 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}