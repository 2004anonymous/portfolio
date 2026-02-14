// components/ContactMessages.tsx
'use client';

import { Mail, Clock, CheckCircle, XCircle } from 'lucide-react';
import { ContactMessage } from '@/lib/types';

interface ContactMessagesProps {
  messages: ContactMessage[];
}

export default function ContactMessages({ messages }: ContactMessagesProps) {
  const getStatusIcon = (status: ContactMessage['status']) => {
    switch (status) {
      case 'unread':
        return <Clock className="h-4 w-4 text-amber-500" />;
      case 'read':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'replied':
        return <CheckCircle className="h-4 w-4 text-blue-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Recent Messages</h2>
          <span className="text-sm font-medium text-indigo-600">
            {messages.filter((m) => m.status === 'unread').length} unread
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-4 rounded-xl border ${
                message.status === 'unread'
                  ? 'border-indigo-200 bg-indigo-50'
                  : 'border-gray-200 hover:bg-gray-50'
              } transition-colors duration-150`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center">
                    <div className="h-8 w-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center">
                      <Mail className="h-4 w-4 text-white" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-gray-900">
                        {message.name}
                      </h4>
                      <p className="text-xs text-gray-500">{message.email}</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h5 className="text-sm font-medium text-gray-900">
                      {message.subject}
                    </h5>
                    <p className="text-sm text-gray-600 mt-1">
                      {message.message.substring(0, 80)}...
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(message.status)}
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-500">
                  {message.createdAt.toLocaleDateString()}
                </span>
                <div className="flex items-center space-x-2">
                  <button className="text-xs px-3 py-1 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-lg transition-colors">
                    Reply
                  </button>
                  <button className="text-xs px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors">
                    Mark Read
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {messages.length === 0 && (
          <div className="text-center py-8">
            <div className="text-gray-400 mb-2">No messages</div>
            <div className="text-sm text-gray-500">
              Contact messages will appear here
            </div>
          </div>
        )}
        <button className="w-full mt-4 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors">
          View All Messages
        </button>
      </div>
    </div>
  );
}