export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">My Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-bold mb-2">Coffee Shop Website</h3>
          <p className="text-gray-600 mb-2">A responsive coffee shop website using HTML, CSS, and Bootstrap.</p>
          <a href="https://zainabbilal123.github.io/coffe-shop-website/" target="_blank" className="text-blue-500 hover:underline">Live Demo</a>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-bold mb-2">Blog Website</h3>
          <p className="text-gray-600 mb-2">A complete blog backend using Node.js, Express.js, MongoDB, and JWT authentication.</p>
          <a href="https://github.com/Zainabbilal123/blog-website" target="_blank" className="text-blue-500 hover:underline">GitHub Repo</a>
        </div>
      </div>
    </section>
  );
}