'use client';

import React from 'react';

const SystemSettings = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-6">System Settings</h2>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-8">
          {/* General Settings */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">General Settings</h3>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">System Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  defaultValue="XBX Admin System"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contact Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  defaultValue="admin@xbx.com"
                />
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Security Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h4>
                  <p className="text-sm text-gray-500">Enable 2FA for all admin accounts</p>
                </div>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm">
                  Enable
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Session Timeout</h4>
                  <p className="text-sm text-gray-500">Set session timeout duration</p>
                </div>
                <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  <option>30 minutes</option>
                  <option>1 hour</option>
                  <option>2 hours</option>
                  <option>4 hours</option>
                </select>
              </div>
            </div>
          </div>

          {/* Backup Settings */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Backup Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Automatic Backups</h4>
                  <p className="text-sm text-gray-500">Enable automatic system backups</p>
                </div>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm">
                  Configure
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Manual Backup</h4>
                  <p className="text-sm text-gray-500">Create a backup of the system</p>
                </div>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm">
                  Create Backup
                </button>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end pt-6">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-md text-sm hover:bg-indigo-700">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;
