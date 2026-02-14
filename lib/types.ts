// lib/types.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'active' | 'inactive' | 'draft';
  thumbnail: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'viewer';
  lastLogin: Date;
  isActive: boolean;
}

export interface Feedback {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  createdAt: Date;
  isPublished: boolean;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'unread' | 'read' | 'replied';
  createdAt: Date;
}

export interface Stats {
  totalProjects: number;
  activeProjects: number;
  totalMessages: number;
  unreadMessages: number;
  totalFeedback: number;
  averageRating: number;
}

export interface RecentActivity {
  id: string;
  type: 'project' | 'message' | 'feedback' | 'user';
  action: 'created' | 'updated' | 'deleted' | 'read';
  description: string;
  timestamp: Date;
  user: string;
}