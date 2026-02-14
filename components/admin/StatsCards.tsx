// components/StatsCards.tsx
'use client';

import { Briefcase, MessageSquare, Star, Mail } from 'lucide-react';
import { Stats } from '@/lib/types';

interface StatsCardsProps {
  stats: Stats;
}

export default function StatsCards({ stats }: StatsCardsProps) {
  const cards = [
    {
      title: 'Total Projects',
      value: stats.totalProjects,
      change: '+3',
      icon: Briefcase,
      color: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    },
    {
      title: 'Active Projects',
      value: stats.activeProjects,
      change: '+2',
      icon: Briefcase,
      color: 'bg-gradient-to-r from-green-500 to-emerald-500',
    },
    {
      title: 'Messages',
      value: stats.totalMessages,
      subValue: `${stats.unreadMessages} unread`,
      icon: MessageSquare,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
    },
    {
      title: 'Avg. Rating',
      value: stats.averageRating,
      subValue: `${stats.totalFeedback} feedback`,
      icon: Star,
      color: 'bg-gradient-to-r from-amber-500 to-orange-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex items-center justify-between">
            <div className={`p-3 rounded-xl ${card.color}`}>
              <card.icon className="h-6 w-6 text-white" />
            </div>
            <span className="text-sm font-medium text-green-600">
              {card.change}
            </span>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-600">{card.title}</p>
            <div className="flex items-baseline mt-2">
              <p className="text-2xl font-bold text-gray-900">{card.value}</p>
              {card.subValue && (
                <p className="ml-2 text-sm text-gray-500">{card.subValue}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}