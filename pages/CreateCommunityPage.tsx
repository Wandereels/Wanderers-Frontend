import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';

const CreateCommunityPage: React.FC = () => {
  const [communityName, setCommunityName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="max-w-3xl mx-auto">
      <PageHeader title="Create a Community" />
      <Card className="p-8">
        <form className="space-y-6">
          <div>
            <label htmlFor="communityName" className="block text-sm font-medium text-gray-700 mb-1">
              Community Name
            </label>
            <input
              type="text"
              id="communityName"
              placeholder="e.g., Himachal Adventurers"
              value={communityName}
              onChange={(e) => setCommunityName(e.target.value)}
              className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">Community names cannot be changed once created.</p>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              placeholder="Share what your community is about."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Community Type</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input id="public" name="community-type" type="radio" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" defaultChecked />
                <label htmlFor="public" className="ml-3 block text-sm text-gray-900">
                  <span className="font-medium">Public</span>
                  <p className="text-gray-500 text-xs">Anyone can view, post, and comment.</p>
                </label>
              </div>
              <div className="flex items-center">
                <input id="restricted" name="community-type" type="radio" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                <label htmlFor="restricted" className="ml-3 block text-sm text-gray-900">
                   <span className="font-medium">Restricted</span>
                  <p className="text-gray-500 text-xs">Anyone can view, but only approved users can post.</p>
                </label>
              </div>
              <div className="flex items-center">
                <input id="private" name="community-type" type="radio" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                <label htmlFor="private" className="ml-3 block text-sm text-gray-900">
                  <span className="font-medium">Private</span>
                  <p className="text-gray-500 text-xs">Only approved users can view and submit.</p>
                </label>
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Create Community
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CreateCommunityPage;