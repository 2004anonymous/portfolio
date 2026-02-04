// components/DashboardTabs.tsx
'use client'

import React, { useState } from 'react'
import ProjectsTab from './ProjectTab'

const DashboardTabs = () => {
  const [activeTab, setActiveTab] = useState('people')

  const tabs = [
    { id: 'people', label: 'People' },
    { id: 'projects', label: 'Projects' },
    { id: 'feedbacks', label: 'Feedbacks' },
    { id: 'contact', label: 'Contact' },
    { id: 'qualifications', label: 'Qualifications' },
  ]

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
      <div className="border-b border-gray-200">
        <nav className="flex space-x-2 px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-6">
        {activeTab === 'people' && (
          <div className="text-gray-600">
            People tab content. Select other tabs to see different sections.
          </div>
        )}
        {activeTab === 'projects' && <ProjectsTab />}
        {activeTab === 'feedbacks' && <ProjectsTab />}
        {activeTab === 'contact' && <ProjectsTab />}
        {activeTab === 'qualifications' && <ProjectsTab />}
      </div>
    </div>
  )
}

export default DashboardTabs