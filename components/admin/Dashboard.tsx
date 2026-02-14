"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, Edit, X } from "lucide-react";
import React, { useState } from "react";

export interface Project {
  id: number;
  name: string;
  type: string;
  description: string;
  poster: string;
  link?: string;
  githubLink?: string;
  tag?: string;
  published: boolean;
  createdAt: Date;
}

const Dashboard = ({
  open,
  onClose,
  onCreate,
}: {
  open: boolean;
  onClose: () => void;
  onCreate: (project: Project) => void;
}) => {
  const [form, setForm] = useState<Omit<Project, "id" | "createdAt">>({
    name: "",
    type: "",
    description: "",
    poster: "",
    link: "",
    githubLink: "",
    tag: "",
    published: false,
  });

  const submit = () => {
    onCreate({
      id: Date.now(),
      createdAt: new Date(),
      ...form,
    });
    onClose();
  };
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">New Project</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white"
              >
                <X />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                placeholder="Project name"
                className="input"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                placeholder="Type (Web / App / ML)"
                className="input"
                onChange={(e) => setForm({ ...form, type: e.target.value })}
              />
              <input
                placeholder="Poster URL"
                className="input md:col-span-2"
                onChange={(e) => setForm({ ...form, poster: e.target.value })}
              />
              <textarea
                placeholder="Description"
                className="input md:col-span-2 h-24"
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
              <input
                placeholder="Live link"
                className="input"
                onChange={(e) => setForm({ ...form, link: e.target.value })}
              />
              <input
                placeholder="GitHub link"
                className="input"
                onChange={(e) =>
                  setForm({ ...form, githubLink: e.target.value })
                }
              />
              <input
                placeholder="Tag"
                className="input"
                onChange={(e) => setForm({ ...form, tag: e.target.value })}
              />
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={form.published}
                  onChange={(e) =>
                    setForm({ ...form, published: e.target.checked })
                  }
                />
                Published
              </label>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-zinc-800"
              >
                Cancel
              </button>
              <button
                onClick={submit}
                className="px-4 py-2 rounded-xl bg-white text-black"
              >
                Create Project
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dashboard;
