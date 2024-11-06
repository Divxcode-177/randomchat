import React from 'react';
import { User } from '../types';
import { Users } from 'lucide-react';

interface UserListProps {
  users: User[];
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-full">
      <div className="flex items-center gap-2 mb-4">
        <Users className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Online Users ({users.length}/10)</h2>
      </div>
      <div className="space-y-3">
        {users.map((user) => (
          <div key={user.id} className="flex items-center gap-3">
            <img
              src={user.avatar}
              alt={user.username}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium">{user.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
};