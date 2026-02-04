// components/Sidebar.tsx
import React from 'react'
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Smartphone, 
  Grid3x3, 
  DollarSign, 
  Calendar, 
  Star,
  Settings,
  FolderTree,
  MessageSquare,
  BarChart3
} from 'lucide-react'

const Sidebar = () => {
  const mainNavItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Users, label: 'People', active: true },
    { icon: Briefcase, label: 'Hiring' },
    { icon: Smartphone, label: 'Devices' },
    { icon: Grid3x3, label: 'Apps' },
    { icon: DollarSign, label: 'Salary' },
    { icon: Calendar, label: 'Calendar' },
    { icon: Star, label: 'Reviews' },
    { icon: Settings, label: 'Setting' },
  ]

  const sidebarNavItems = [
    { icon: FolderTree, label: 'Directory' },
    { icon: MessageSquare, label: 'Org Chat' },
    { icon: BarChart3, label: 'Insights' },
  ]

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Crextio</h1>
      </div>

      <div className="mb-8">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
          Navigation
        </h2>
        <nav className="space-y-2">
          {mainNavItems.map((item) => (
            <button
              key={item.label}
              className={`flex items-center w-full px-4 py-3 text-left rounded-lg transition-colors ${
                item.active
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
          Sidebar
        </h2>
        <nav className="space-y-2">
          {sidebarNavItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center w-full px-4 py-3 text-left text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar