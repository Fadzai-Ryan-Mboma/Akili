import { motion } from "motion/react";
import { useState } from "react";
import { Filter, Download, Search, CheckCircle, XCircle, Clock, Zap } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const activityLogs = [
  { id: '1', timestamp: '2026-03-12 08:35:42', endpoint: '/v1/chat/completions', model: 'AfricaGPT-4', language: 'Swahili', status: 200, latency: 234, tokens: 1240, cost: 0.037 },
  { id: '2', timestamp: '2026-03-12 08:34:15', endpoint: '/v1/chat/completions', model: 'AfricaGPT-3.5', language: 'Yoruba', status: 200, latency: 156, tokens: 856, cost: 0.002 },
  { id: '3', timestamp: '2026-03-12 08:32:48', endpoint: '/v1/translations', model: 'AfricaMini', language: 'Hausa', status: 200, latency: 98, tokens: 342, cost: 0.0002 },
  { id: '4', timestamp: '2026-03-12 08:30:22', endpoint: '/v1/chat/completions', model: 'AfricaGPT-4', language: 'Amharic', status: 429, latency: 45, tokens: 0, cost: 0 },
  { id: '5', timestamp: '2026-03-12 08:28:56', endpoint: '/v1/embeddings', model: 'AfricaGPT-3.5', language: 'Zulu', status: 200, latency: 178, tokens: 678, cost: 0.001 },
  { id: '6', timestamp: '2026-03-12 08:26:31', endpoint: '/v1/chat/completions', model: 'AfricaGPT-4', language: 'Igbo', status: 200, latency: 267, tokens: 1567, cost: 0.047 },
  { id: '7', timestamp: '2026-03-12 08:24:05', endpoint: '/v1/translations', model: 'AfricaMini', language: 'Somali', status: 200, latency: 89, tokens: 234, cost: 0.0001 },
  { id: '8', timestamp: '2026-03-12 08:21:39', endpoint: '/v1/chat/completions', model: 'AfricaGPT-3.5', language: 'Kinyarwanda', status: 500, latency: 5002, tokens: 0, cost: 0 },
];

const hourlyData = [
  { hour: '00:00', requests: 234 },
  { hour: '04:00', requests: 145 },
  { hour: '08:00', requests: 567 },
  { hour: '12:00', requests: 892 },
  { hour: '16:00', requests: 1234 },
  { hour: '20:00', requests: 678 },
];

const languageData = [
  { name: 'Swahili', value: 35, color: '#f97316' },
  { name: 'Yoruba', value: 25, color: '#a855f7' },
  { name: 'Hausa', value: 20, color: '#10b981' },
  { name: 'Amharic', value: 12, color: '#3b82f6' },
  { name: 'Others', value: 8, color: '#6b7280' },
];

const statusData = [
  { name: '200 OK', value: 95.3, color: '#10b981' },
  { name: '4xx Errors', value: 3.2, color: '#f59e0b' },
  { name: '5xx Errors', value: 1.5, color: '#ef4444' },
];

export function Activity() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredLogs = activityLogs.filter(log => {
    const matchesSearch = 
      log.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.endpoint.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = 
      selectedStatus === 'all' ||
      (selectedStatus === 'success' && log.status === 200) ||
      (selectedStatus === 'error' && log.status !== 200);
    
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status: number) => {
    if (status === 200) return <CheckCircle className="w-4 h-4 text-green-400" />;
    if (status === 429) return <Clock className="w-4 h-4 text-yellow-400" />;
    return <XCircle className="w-4 h-4 text-red-400" />;
  };

  const getStatusColor = (status: number) => {
    if (status === 200) return 'bg-green-500/10 text-green-400 border-green-500/20';
    if (status === 429) return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
    return 'bg-red-500/10 text-red-400 border-red-500/20';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Activity & Usage</h1>
          <p className="text-gray-400">Monitor your API activity and usage patterns</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition-all">
          <Download className="w-5 h-5" />
          Export Data
        </button>
      </div>

      {/* Analytics Charts */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Hourly Requests */}
        <div className="lg:col-span-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Requests Over Time</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={hourlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis dataKey="hour" stroke="#888" style={{ fontSize: '12px' }} />
              <YAxis stroke="#888" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.9)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px'
                }}
              />
              <Line type="monotone" dataKey="requests" stroke="#f97316" strokeWidth={2} dot={{ fill: '#f97316' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Status Distribution */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Status Distribution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.9)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-4">
            {statusData.map((item, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-gray-300">{item.name}</span>
                </div>
                <span className="text-white font-semibold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Language Usage */}
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Top Languages</h3>
        <div className="grid sm:grid-cols-5 gap-4">
          {languageData.map((lang, index) => (
            <div key={index} className="text-center">
              <div className="mb-3">
                <svg className="w-full h-24">
                  <circle cx="50%" cy="50%" r="35" fill="rgba(255,255,255,0.05)" />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="35"
                    fill="none"
                    stroke={lang.color}
                    strokeWidth="8"
                    strokeDasharray={`${lang.value * 2.2} 220`}
                    transform="rotate(-90 60 60)"
                    strokeLinecap="round"
                  />
                  <text x="50%" y="50%" textAnchor="middle" dy="0.3em" className="text-2xl font-bold fill-white">
                    {lang.value}%
                  </text>
                </svg>
              </div>
              <div className="text-sm text-gray-300">{lang.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Logs */}
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Search */}
            <div className="relative flex-1 sm:flex-none">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full sm:w-64 pl-10 pr-4 py-2 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            
            {/* Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 bg-black/50 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
            >
              <option value="all">All Status</option>
              <option value="success">Success</option>
              <option value="error">Errors</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-sm font-medium text-gray-400 pb-3">Timestamp</th>
                <th className="text-left text-sm font-medium text-gray-400 pb-3">Endpoint</th>
                <th className="text-left text-sm font-medium text-gray-400 pb-3">Model</th>
                <th className="text-left text-sm font-medium text-gray-400 pb-3">Language</th>
                <th className="text-left text-sm font-medium text-gray-400 pb-3">Status</th>
                <th className="text-left text-sm font-medium text-gray-400 pb-3">Latency</th>
                <th className="text-left text-sm font-medium text-gray-400 pb-3">Tokens</th>
                <th className="text-left text-sm font-medium text-gray-400 pb-3">Cost</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((log, index) => (
                <motion.tr
                  key={log.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 text-sm text-gray-300">{log.timestamp}</td>
                  <td className="py-4 text-sm text-gray-300 font-mono">{log.endpoint}</td>
                  <td className="py-4 text-sm text-white">{log.model}</td>
                  <td className="py-4 text-sm text-gray-300">{log.language}</td>
                  <td className="py-4">
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg border text-xs ${getStatusColor(log.status)}`}>
                      {getStatusIcon(log.status)}
                      {log.status}
                    </div>
                  </td>
                  <td className="py-4 text-sm text-gray-300">{log.latency}ms</td>
                  <td className="py-4 text-sm text-gray-300">{log.tokens.toLocaleString()}</td>
                  <td className="py-4 text-sm text-gray-300">${log.cost.toFixed(4)}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
