"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, Edit } from "lucide-react";
import Dashboard, { Project } from "@/components/admin/Dashboard";


export default function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>([
    {
    id: 1,
    name: "Personal Portfolio",
    type: "Web",
    description:
      "A modern personal portfolio website showcasing projects, skills, and contact information with a clean dark UI.",
    poster: "/images/portfolio.png",
    link: "https://yourportfolio.com",
    githubLink: "https://github.com/yourusername/portfolio",
    tag: "Next.js, Tailwind",
    published: true,
    createdAt: new Date("2024-11-12"),
  },
  {
    id: 2,
    name: "Movie Streaming App",
    type: "Android",
    description:
      "An Android application for browsing and streaming movies and series with search, filters, and pagination.",
    poster: "/images/movie-app.png",
    link: "",
    githubLink: "https://github.com/yourusername/movie-app",
    tag: "Kotlin, MVVM",
    published: false,
    createdAt: new Date("2024-12-02"),
  },
  ]);

  const [open, setOpen] = useState(false);

  const deleteProject = (id: number) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 bg-zinc-900 border-r border-zinc-800 flex-col p-6">
        <h1 className="text-xl font-semibold tracking-wide">Admin</h1>
        <p className="text-sm text-gray-500 mb-8">Portfolio Dashboard</p>
        <nav className="space-y-4">
          <button className="w-full text-left px-3 py-2 rounded-lg bg-zinc-800">
            Dashboard
          </button>
          <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-zinc-800">
            Projects
          </button>
          <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-zinc-800">
            Profile
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold">Dashboard</h2>
            <p className="text-gray-500">Manage your portfolio projects</p>
          </div>
          <button
            onClick={() => {
              setOpen(true);
            }}
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl hover:bg-gray-200 transition"
          >
            <Plus size={18} /> New Project
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {[
            { label: "Total Projects", value: projects.length },
            {
              label: "Active",
              value: projects.filter((p) => p.type === "Active").length,
            },
            {
              label: "Drafts",
              value: projects.filter((p) => p.type === "Draft").length,
            },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >
              <p className="text-gray-500 text-sm">{stat.label}</p>
              <p className="text-3xl font-bold mt-2">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Projects Table */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-zinc-800">
            <h3 className="text-lg font-semibold">Projects</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-gray-500">
                <tr className="border-b border-zinc-800">
                  <th className="text-left p-4">Title</th>
                  <th className="text-left p-4">Tech</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-right p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <motion.tr
                    key={project.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border-b border-zinc-800 hover:bg-zinc-800/50"
                  >
                    <td className="p-4">{project.name}</td>
                    <td className="p-4 text-gray-400">{project.tag || "—"}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${
                          project.type === "Active"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {project.type}
                      </span>
                    </td>
                    <td className="p-4 flex justify-end gap-3">
                      <button className="hover:text-white text-gray-400">
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => deleteProject(project.id)}
                        className="hover:text-red-400 text-gray-400"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Dashboard
          open={open}
          onClose={() => setOpen(false)}
          onCreate={(project) => setProjects([...projects, project])}
        />
      </main>
    </div>
  );
}
