export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-black text-white px-4"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm Shravan
      </h1>

      <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
        Data Analyst | Frontend Developer
      </h2>

      <p className="max-w-2xl text-gray-300 mb-8">
        I work with data and web technologies to build practical solutions.
        Experience in Python, SQL, React and data visualization.
      </p>

      <div className="flex gap-4">
        <a
          href="https://github.com/gurushravan"
          target="_blank"
          className="px-6 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-200"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/guru-shravan/"
          target="_blank"
          className="px-6 py-2 border border-white rounded-md font-medium hover:bg-white hover:text-black"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}