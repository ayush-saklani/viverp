import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../api/auth';

interface User {
  id: string;
  fullName: string;
  email: string;
  role: string;
  contactNumber?: string;
  address?: string;
  dateOfBirth?: string;
  gender?: string;
}

export default function DashboardPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        setUsers(response.data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const uniqueRoles = [...new Set(users.map(user => user.role))];

  const getRoleColor = (role: string) => {
    const colors: { [key: string]: string } = {
      'admin': 'bg-red-100 text-red-800',
      'teacher': 'bg-blue-100 text-blue-800',
      'student': 'bg-green-100 text-green-800',
      'staff': 'bg-yellow-100 text-yellow-800',
    };
    return colors[role.toLowerCase()] || 'bg-gray-100 text-gray-800';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 font-medium">Loading users...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Dashboard</h1>
              <p className="text-gray-600">Manage and view all users in your organization</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="bg-blue-50 px-4 py-2 rounded-lg">
                <span className="text-blue-800 font-medium">Total Users: {users.length}</span>
              </div>
            </div>
          </div>

          {/* Search and Filter Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search users by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                <option value="all">All Roles</option>
                {uniqueRoles.map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>

              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'}`}
                >
                  📊 Grid
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`px-4 py-2 rounded-md transition-all ${viewMode === 'table' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'}`}
                >
                  📋 Table
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-8">
        {filteredUsers.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">👥</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              {searchTerm || filterRole !== 'all' ? 'No matching users found' : 'No users found'}
            </h3>
            <p className="text-gray-500">
              {searchTerm || filterRole !== 'all'
                ? 'Try adjusting your search or filter criteria'
                : 'Start by adding some users to your organization'
              }
            </p>
          </div>
        ) : viewMode === 'grid' ? (
          // Grid View
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredUsers.map((user) => (
              <div key={user.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group">
                <div className="p-6">
                  {/* Avatar */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {user.fullName.charAt(0).toUpperCase()}
                    </div>
                    <div className="ml-3 flex-1">
                      <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {user.fullName}
                      </h3>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                        {user.role}
                      </span>
                    </div>
                  </div>

                  {/* User Info */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <span className="w-4">📧</span>
                      <span className="ml-2 truncate">{user.email}</span>
                    </div>
                    {user.contactNumber && (
                      <div className="flex items-center text-gray-600">
                        <span className="w-4">📞</span>
                        <span className="ml-2">{user.contactNumber}</span>
                      </div>
                    )}
                    {user.dateOfBirth && (
                      <div className="flex items-center text-gray-600">
                        <span className="w-4">🎂</span>
                        <span className="ml-2">{new Date(user.dateOfBirth).toLocaleDateString()}</span>
                      </div>
                    )}
                    {user.gender && (
                      <div className="flex items-center text-gray-600">
                        <span className="w-4">{user.gender === 'male' ? '👨' : user.gender === 'female' ? '👩' : '👤'}</span>
                        <span className="ml-2 capitalize">{user.gender}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Table View
          <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Birth Date</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredUsers.map((user, index) => (
                    <tr key={user.id} className={`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                            {user.fullName.charAt(0).toUpperCase()}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{user.fullName}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.contactNumber || <span className="text-gray-400">N/A</span>}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(user.role)}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                        {user.address || <span className="text-gray-400">N/A</span>}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString() : <span className="text-gray-400">N/A</span>}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">
                        {user.gender || <span className="text-gray-400">N/A</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Results Counter */}
        {filteredUsers.length > 0 && (
          <div className="mt-6 text-center text-gray-600">
            Showing {filteredUsers.length} of {users.length} users
            {(searchTerm || filterRole !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilterRole('all');
                }}
                className="ml-2 text-blue-600 hover:text-blue-800 underline"
              >
                Clear filters
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
