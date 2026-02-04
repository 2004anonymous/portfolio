// components/StatsCards.tsx
import React from 'react'
import { Users, UserCheck, Clock, BarChart } from 'lucide-react'

const StatsCards = () => {
  const stats = [
    {
      title: 'Interviews',
      value: '25%',
      icon: Users,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Hired',
      value: '51%',
      icon: UserCheck,
      color: 'bg-green-100 text-green-600',
    },
    {
      title: 'Project time',
      value: '10%',
      icon: Clock,
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      title: 'Output',
      value: '14%',
      icon: BarChart,
      color: 'bg-purple-100 text-purple-600',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.title} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
            <div className={`${stat.color} p-3 rounded-lg`}>
              <stat.icon className="w-6 h-6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatsCards