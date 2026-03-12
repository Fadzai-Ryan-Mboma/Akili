import { motion } from "motion/react";
import { useState } from "react";
import { Key, Plus, Copy, Trash2, Eye, EyeOff, Check, AlertCircle } from "lucide-react";

interface ApiKey {
  id: string;
  name: string;
  key: string;
  created: string;
  lastUsed: string;
  requests: number;
}

const initialKeys: ApiKey[] = [
  {
    id: '1',
    name: 'Production API Key',
    key: 'sk_live_a8f9d7e6c5b4a3d2e1f0g9h8i7j6k5l4',
    created: 'Feb 15, 2026',
    lastUsed: '2 hours ago',
    requests: 145230,
  },
  {
    id: '2',
    name: 'Development API Key',
    key: 'sk_dev_b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6',
    created: 'Jan 10, 2026',
    lastUsed: '1 day ago',
    requests: 8456,
  },
];

export function ApiKeys() {
  const [keys, setKeys] = useState<ApiKey[]>(initialKeys);
  const [visibleKeys, setVisibleKeys] = useState<Set<string>>(new Set());
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newKeyName, setNewKeyName] = useState('');

  const toggleKeyVisibility = (id: string) => {
    const newVisible = new Set(visibleKeys);
    if (newVisible.has(id)) {
      newVisible.delete(id);
    } else {
      newVisible.add(id);
    }
    setVisibleKeys(newVisible);
  };

  const copyKey = (key: string, id: string) => {
    navigator.clipboard.writeText(key);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const deleteKey = (id: string) => {
    if (confirm('Are you sure you want to delete this API key? This action cannot be undone.')) {
      setKeys(keys.filter(k => k.id !== id));
    }
  };

  const createKey = () => {
    if (!newKeyName.trim()) return;

    const newKey: ApiKey = {
      id: Date.now().toString(),
      name: newKeyName,
      key: `sk_live_${Math.random().toString(36).substring(2, 34)}`,
      created: 'Just now',
      lastUsed: 'Never',
      requests: 0,
    };

    setKeys([newKey, ...keys]);
    setNewKeyName('');
    setShowCreateModal(false);
  };

  const maskKey = (key: string) => {
    return `${key.substring(0, 12)}${'•'.repeat(20)}${key.substring(key.length - 4)}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">API Keys</h1>
          <p className="text-gray-400">Manage your API keys and access tokens</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
        >
          <Plus className="w-5 h-5" />
          Create New Key
        </button>
      </div>

      {/* Warning Banner */}
      <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-orange-300 text-sm">
            <strong>Security Notice:</strong> Keep your API keys secure and never share them publicly. 
            If you suspect a key has been compromised, delete it immediately and create a new one.
          </p>
        </div>
      </div>

      {/* API Keys List */}
      <div className="space-y-4">
        {keys.map((apiKey, index) => (
          <motion.div
            key={apiKey.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600">
                  <Key className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{apiKey.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>Created {apiKey.created}</span>
                    <span>•</span>
                    <span>Last used {apiKey.lastUsed}</span>
                    <span>•</span>
                    <span>{apiKey.requests.toLocaleString()} requests</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => deleteKey(apiKey.id)}
                className="p-2 rounded-lg text-red-400 hover:bg-red-500/10 transition-all"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-black/30 border border-white/10 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <code className="text-sm text-gray-300 font-mono">
                  {visibleKeys.has(apiKey.id) ? apiKey.key : maskKey(apiKey.key)}
                </code>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleKeyVisibility(apiKey.id)}
                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                  >
                    {visibleKeys.has(apiKey.id) ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => copyKey(apiKey.key, apiKey.id)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-gray-300 hover:bg-white/10 transition-all"
                  >
                    {copiedKey === apiKey.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Create Key Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowCreateModal(false)}></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-md bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Create New API Key</h2>
            <p className="text-gray-400 mb-6">Give your API key a descriptive name</p>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Key Name</label>
              <input
                type="text"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
                placeholder="e.g., Production API Key"
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                autoFocus
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={createKey}
                disabled={!newKeyName.trim()}
                className="flex-1 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create Key
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
