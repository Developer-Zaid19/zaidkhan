/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/notes/pdf/:id",
        destination: `https://devzaidbackend.onrender.com/note-pdf/${":id"}.pdf`,
      },
      {
        source: "/notes/img/:id",
        destination: `https://devzaidbackend.onrender.com/notes-img/${":id"}`,
      },
      {
        source: "/projects/img/:id",
        destination: `https://devzaidbackend.onrender.com/projects/${":id"}`,
      },
    ];
  },
  reactCompiler: true,
};

export default nextConfig;
