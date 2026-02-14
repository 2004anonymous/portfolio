// components/RecentActivities.tsx
'use client';

import { Clock, CheckCircle, Plus, MessageSquare } from 'lucide-react';
import { RecentActivity } from '@/lib/types';

interface RecentActivitiesProps {
  activities: RecentActivity[];
}

export default function RecentActivities({ activities }: RecentActivitiesProps) {
  const getActivityIcon = (type: RecentActivity['type']) => {
    switch (type) {
      case 'project':
        return Plus;
      case 'message':
        return MessageSquare;
      case 'feedback':
        return CheckCircle;
      default:
        return CheckCircle;
    }
  };

  const getActivityColor = (type: RecentActivity['type']) => {
    switch (type) {
      case 'project':
        return 'bg-blue-100 text-blue-600';
      case 'message':
        return 'bg-purple-100 text-purple-600';
      case 'feedback':
        return 'bg-amber-100 text-amber-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          Recent Activities
        </h2>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = getActivityIcon(activity.type);
            return (
              <div key={activity.id} className="flex items-start">
                <div
                  className={`flex-shrink-0 h-10 w-10 rounded-xl flex items-center justify-center ${getActivityColor(
                    activity.type
                  )}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.description}
                  </p>
                  <div className="flex items-center mt-1">
                    <Clock className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-xs text-gray-500">
                      {activity.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-xs text-gray-500">
                      {activity.user}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {activities.length === 0 && (
          <div className="text-center py-8">
            <div className="text-gray-400 mb-2">No recent activities</div>
            <div className="text-sm text-gray-500">
              Activities will appear here
            </div>
          </div>
        )}
        <button className="w-full mt-4 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors">
          View All Activities
        </button>
      </div>
    </div>
  );
}