import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Calculator, TrendingUp, Clock, Award } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Active Proposals', value: '12', trend: '+2 this week' },
    { label: 'Win Rate', value: '68%', trend: '+5% vs last month' },
    { label: 'Avg. Response Time', value: '2.4 days', trend: '-0.5 days' },
    { label: 'Total Projects', value: '156', trend: '+8 this month' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, John</h1>
        <div className="space-x-4">
          <button
            onClick={() => navigate('/proposal')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            New Proposal
          </button>
          <button
            onClick={() => navigate('/estimator')}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            New Estimate
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 font-medium">{stat.label}</span>
              {index === 0 && <FileText className="h-5 w-5 text-blue-500" />}
              {index === 1 && <TrendingUp className="h-5 w-5 text-green-500" />}
              {index === 2 && <Clock className="h-5 w-5 text-orange-500" />}
              {index === 3 && <Award className="h-5 w-5 text-purple-500" />}
            </div>
            <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
            <p className="mt-1 text-sm text-gray-500">{stat.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Proposals</h2>
          <div className="space-y-4">
            {[
              { client: 'Acme Corp', value: '$45,000', status: 'Pending' },
              { client: 'TechStart Inc', value: '$28,500', status: 'Won' },
              { client: 'BuildRight LLC', value: '$62,000', status: 'In Review' },
            ].map((proposal, index) => (
              <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div>
                  <p className="font-medium text-gray-900">{proposal.client}</p>
                  <p className="text-sm text-gray-500">Value: {proposal.value}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium
                  ${proposal.status === 'Won' ? 'bg-green-100 text-green-800' : 
                    proposal.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-blue-100 text-blue-800'}`}>
                  {proposal.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Material Price Trends</h2>
          <div className="space-y-4">
            {[
              { material: 'Lumber', trend: '+2.3%', status: 'up' },
              { material: 'Steel', trend: '-1.5%', status: 'down' },
              { material: 'Concrete', trend: '+0.8%', status: 'up' },
            ].map((material, index) => (
              <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{material.material}</p>
                  <p className="text-sm text-gray-500">30-day change</p>
                </div>
                <span className={`font-medium ${
                  material.status === 'up' ? 'text-red-600' : 'text-green-600'
                }`}>
                  {material.trend}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;