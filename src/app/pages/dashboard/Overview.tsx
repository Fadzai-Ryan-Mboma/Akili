import { motion } from "motion/react";
import { CreditCard, Zap, DollarSign, BarChart3, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const metrics = [
  {
    name: 'Credits Remaining',
    value: '847,392',
    change: '+12.5%',
    trend: 'up',
    icon: CreditCard,
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    name: 'Requests Today',
    value: '24,583',
    change: '+8.3%',
    trend: 'up',
    icon: Zap,
    gradient: 'from-orange-500 to-yellow-500',
  },
  {
    name: 'Total Cost',
    value: '$1,247',
    change: '-3.2%',
    trend: 'down',
    icon: DollarSign,
    gradient: 'from-green-500 to-teal-500',
  },
  {
    name: 'Tokens Used',
    value: '12.4M',
    change: '+15.7%',
    trend: 'up',
    icon: BarChart3,
    gradient: 'from-blue-500 to-indigo-600',
  },
];

const usageData = [
  { date: 'Mar 6', requests: 18000, tokens: 8500000 },
  { date: 'Mar 7', requests: 20000, tokens: 9200000 },
  { date: 'Mar 8', requests: 22000, tokens: 10100000 },
  { date: 'Mar 9', requests: 19000, tokens: 8800000 },
  { date: 'Mar 10', requests: 24000, tokens: 11200000 },
  { date: 'Mar 11', requests: 23000, tokens: 10800000 },
  { date: 'Mar 12', requests: 24583, tokens: 12400000 },
];

const modelUsage = [
  { name: 'AfricaGPT-4', usage: 45 },
  { name: 'AfricaGPT-3.5', usage: 75 },
  { name: 'AfricaMini', usage: 30 },
  { name: 'AfricaSecure', usage: 20 },
];

const recentActivity = [
  { action: 'API Call', model: 'AfricaGPT-4', language: 'Swahili', tokens: 1240, time: '2 min ago', status: 'success' },
  { action: 'API Call', model: 'AfricaGPT-3.5', language: 'Yoruba', tokens: 856, time: '5 min ago', status: 'success' },
  { action: 'API Call', model: 'AfricaMini', language: 'Hausa', tokens: 342, time: '8 min ago', status: 'success' },
  { action: 'API Call', model: 'AfricaGPT-4', language: 'Amharic', tokens: 1456, time: '12 min ago', status: 'error' },
  { action: 'API Call', model: 'AfricaGPT-3.5', language: 'Zulu', tokens: 678, time: '15 min ago', status: 'success' },
];

export function Overview() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
        <p className="text-gray-400">Monitor your API usage and performance</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${metric.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`}></div>
            
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${metric.gradient}`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {metric.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                  {metric.change}
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-sm text-gray-400">{metric.name}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Usage Over Time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-white">API Requests</h3>
              <p className="text-sm text-gray-400">Last 7 days</p>
            </div>
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={usageData}>
              <defs>
                <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis dataKey="date" stroke="#888" style={{ fontSize: '12px' }} />
              <YAxis stroke="#888" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.9)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px'
                }}
              />
              <Area type="monotone" dataKey="requests" stroke="#f97316" fillOpacity={1} fill="url(#colorRequests)" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Token Usage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Token Usage</h3>
              <p className="text-sm text-gray-400">Last 7 days</p>
            </div>
            <BarChart3 className="w-5 h-5 text-purple-400" />
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={usageData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis dataKey="date" stroke="#888" style={{ fontSize: '12px' }} />
              <YAxis stroke="#888" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.9)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px'
                }}
              />
              <Line type="monotone" dataKey="tokens" stroke="#a855f7" strokeWidth={2} dot={{ fill: '#a855f7' }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Model Usage & Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Model Usage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-6">Model Usage</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={modelUsage} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis type="number" stroke="#888" style={{ fontSize: '12px' }} />
              <YAxis dataKey="name" type="category" stroke="#888" style={{ fontSize: '12px' }} width={120} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.9)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="usage" fill="#10b981" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-black/30 rounded-xl border border-white/5"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-white">{activity.model}</span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-400">{activity.language}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{activity.tokens.toLocaleString()} tokens</span>
                    <span>•</span>
                    <span>{activity.time}</span>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-lg text-xs ${
                  activity.status === 'success' 
                    ? 'bg-green-500/10 text-green-400' 
                    : 'bg-red-500/10 text-red-400'
                }`}>
                  {activity.status}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
