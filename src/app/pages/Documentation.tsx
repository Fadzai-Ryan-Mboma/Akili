import { motion } from "motion/react";
import { useState } from "react";
import { Book, Code2, Zap, Shield, Terminal, Copy, Check } from "lucide-react";

const sidebarSections = [
  {
    title: 'Getting Started',
    icon: Book,
    items: ['Quick Start', 'Authentication', 'Installation', 'First Request'],
  },
  {
    title: 'API Reference',
    icon: Code2,
    items: ['Chat Completions', 'Translations', 'Embeddings', 'Fine-tuning'],
  },
  {
    title: 'Guides',
    icon: Zap,
    items: ['Best Practices', 'Rate Limits', 'Error Handling', 'Streaming'],
  },
  {
    title: 'Security',
    icon: Shield,
    items: ['API Keys', 'OAuth', 'IP Whitelisting', 'Audit Logs'],
  },
];

const codeExamples = {
  quickStart: {
    title: 'Quick Start',
    description: 'Get started with AfricaLLM in minutes',
    code: `// Install the SDK
npm install africallm

// Initialize the client
import { AfricaLLM } from 'africallm';

const client = new AfricaLLM({
  apiKey: process.env.AFRICALLM_API_KEY
});

// Make your first request
const response = await client.chat.completions.create({
  model: "africa-gpt-4",
  language: "sw-KE", // Swahili
  messages: [
    { role: "user", content: "Habari, unawezaje kunisaidia?" }
  ]
});

console.log(response.choices[0].message.content);`,
  },
  authentication: {
    title: 'Authentication',
    description: 'Secure your API requests with API keys',
    code: `// Set your API key as an environment variable
export AFRICALLM_API_KEY="your-api-key-here"

// Or pass it directly to the client
const client = new AfricaLLM({
  apiKey: "your-api-key-here"
});

// All requests will automatically include your API key
const response = await client.chat.completions.create({
  model: "africa-gpt-4",
  language: "yo-NG",
  messages: [{ role: "user", content: "Báwo ni?" }]
});`,
  },
  chatCompletions: {
    title: 'Chat Completions',
    description: 'Generate conversational responses in African languages',
    code: `const response = await client.chat.completions.create({
  model: "africa-gpt-4",
  language: "ha-NG", // Hausa
  messages: [
    { 
      role: "system", 
      content: "You are a helpful assistant fluent in Hausa." 
    },
    { 
      role: "user", 
      content: "Menene manufar AI?" 
    }
  ],
  temperature: 0.7,
  max_tokens: 500,
  top_p: 0.9
});

console.log(response.choices[0].message.content);
// Output: AI (Artificial Intelligence) shine...`,
  },
  translations: {
    title: 'Translations',
    description: 'Translate text between African languages',
    code: `const translation = await client.translations.create({
  text: "Good morning, how are you?",
  source_language: "en",
  target_language: "am-ET", // Amharic
  preserve_formatting: true
});

console.log(translation.translated_text);
// Output: እንደምን አደርክ፣ እንዴት ነህ?

// Batch translations
const batch = await client.translations.batch({
  texts: ["Hello", "Thank you", "Goodbye"],
  source_language: "en",
  target_language: "zu-ZA" // Zulu
});

console.log(batch.translations);
// Output: ["Sawubona", "Ngiyabonga", "Sala kahle"]`,
  },
  streaming: {
    title: 'Streaming Responses',
    description: 'Get real-time streaming responses for better UX',
    code: `const stream = await client.chat.completions.create({
  model: "africa-gpt-4",
  language: "sw-KE",
  messages: [
    { role: "user", content: "Eleza kuhusu historia ya Kenya" }
  ],
  stream: true
});

for await (const chunk of stream) {
  const content = chunk.choices[0]?.delta?.content || '';
  process.stdout.write(content);
}

// Or use with React
function ChatComponent() {
  const [response, setResponse] = useState('');
  
  const handleStream = async () => {
    const stream = await client.chat.completions.create({
      model: "africa-gpt-4",
      language: "sw-KE",
      messages: [{ role: "user", content: input }],
      stream: true
    });
    
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || '';
      setResponse(prev => prev + content);
    }
  };
}`,
  },
  errorHandling: {
    title: 'Error Handling',
    description: 'Handle API errors gracefully',
    code: `import { 
  AfricaLLM, 
  APIError, 
  RateLimitError, 
  AuthenticationError 
} from 'africallm';

try {
  const response = await client.chat.completions.create({
    model: "africa-gpt-4",
    language: "ig-NG",
    messages: [{ role: "user", content: "Kedu?" }]
  });
} catch (error) {
  if (error instanceof RateLimitError) {
    console.log('Rate limit exceeded. Retry after:', error.retryAfter);
    // Implement exponential backoff
  } else if (error instanceof AuthenticationError) {
    console.log('Invalid API key');
    // Prompt user to check credentials
  } else if (error instanceof APIError) {
    console.log('API error:', error.message);
    console.log('Status code:', error.status);
    console.log('Request ID:', error.requestId);
  } else {
    throw error;
  }
}`,
  },
};

export function Documentation() {
  const [activeSection, setActiveSection] = useState('quickStart');
  const [copied, setCopied] = useState(false);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentExample = codeExamples[activeSection as keyof typeof codeExamples] || codeExamples.quickStart;

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to integrate AfricaLLM into your applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {sidebarSections.map((section, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <section.icon className="w-5 h-5 text-orange-400" />
                  <h3 className="text-white font-semibold">{section.title}</h3>
                </div>
                <div className="space-y-2">
                  {section.items.map((item, i) => {
                    const itemKey = item.toLowerCase().replace(/\s+/g, '');
                    const isActive = activeSection === itemKey;
                    return (
                      <button
                        key={i}
                        onClick={() => setActiveSection(itemKey)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-orange-500/20 to-purple-600/20 text-white border border-orange-500/30'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-orange-500/10 to-purple-600/10 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-6">
              <Terminal className="w-6 h-6 text-orange-400 mb-3" />
              <h3 className="text-white font-semibold mb-2">Need Help?</h3>
              <p className="text-gray-400 text-sm mb-4">
                Join our developer community
              </p>
              <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 text-white text-sm font-semibold hover:shadow-lg transition-all">
                Join Discord
              </button>
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="p-8 border-b border-white/10">
                <h2 className="text-3xl font-bold text-white mb-3">
                  {currentExample.title}
                </h2>
                <p className="text-gray-400 text-lg">
                  {currentExample.description}
                </p>
              </div>

              {/* Code Block */}
              <div className="relative">
                <button
                  onClick={() => handleCopy(currentExample.code)}
                  className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-gray-300 hover:bg-white/20 transition-all z-10"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
                <pre className="p-8 overflow-x-auto">
                  <code className="text-sm text-green-400 leading-relaxed">
                    {currentExample.code}
                  </code>
                </pre>
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Response Format</h3>
                <pre className="bg-black/50 border border-white/10 rounded-lg p-4 text-sm text-purple-400 overflow-x-auto">
{`{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "model": "africa-gpt-4",
  "language": "sw-KE",
  "choices": [{
    "index": 0,
    "message": {
      "role": "assistant",
      "content": "Habari..."
    },
    "finish_reason": "stop"
  }],
  "usage": {
    "prompt_tokens": 12,
    "completion_tokens": 24,
    "total_tokens": 36
  }
}`}
                </pre>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Parameters</h3>
                <div className="space-y-3">
                  {[
                    { name: 'model', type: 'string', desc: 'Model ID to use' },
                    { name: 'language', type: 'string', desc: 'Language code (e.g., sw-KE)' },
                    { name: 'messages', type: 'array', desc: 'Array of message objects' },
                    { name: 'temperature', type: 'number', desc: 'Sampling temperature (0-2)' },
                  ].map((param, i) => (
                    <div key={i} className="border-l-2 border-orange-500/30 pl-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-orange-400 font-mono text-sm">{param.name}</span>
                        <span className="text-gray-500 text-xs">{param.type}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{param.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
