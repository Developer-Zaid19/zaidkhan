/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/notes/pdf/:id",
        destination: `http://localhost:5000/note-pdf/${":id"}.pdf`,
      },
      {
        source: "/notes/img/:id",
        destination: `http://localhost:5000/notes-img/${":id"}`,
      },
      {
        source: "/projects/img/:id",
        destination: `http://localhost:5000/projects/${":id"}`,
      },
    ];
  },
  reactCompiler: true,
};

export default nextConfig;
