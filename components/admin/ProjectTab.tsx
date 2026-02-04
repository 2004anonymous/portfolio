// components/tabs/ProjectsTab.tsx
import React from 'react'
import { Calendar, Users, Target, CheckCircle } from 'lucide-react'

const ProjectsTab = () => {
  const projects = [
    { name: 'Website Redesign', progress: 75, team: 8, deadline: 'Dec 15, 2024', status: 'In Progress' },
    { name: 'Mobile App', progress: 45, team: 5, deadline: 'Jan 20, 2025', status: 'In Progress' },
    { name: 'API Integration', progress: 100, team: 3, deadline: 'Nov 10, 2024', status: 'Completed' },
    { name: 'Data Migration', progress: 30, team: 6, deadline: 'Feb 28, 2025', status: 'Planning' },
  ]

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-800">Active Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.name} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-medium text-gray-800">{project.name}</h4>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-1" />
                    {project.team} members
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.deadline}
                  </div>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {project.status}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium">{project.progress}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${
                    project.status === 'Completed' ? 'bg-green-500' :
                    'bg-blue-500'
                  }`}
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsTab