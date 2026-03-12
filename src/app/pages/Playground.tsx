import { motion } from "motion/react";
import { useState } from "react";
import { Play, Copy, Check, Code2, Sparkles } from "lucide-react";

const languages = [
  { id: 'sw', name: 'Swahili', code: 'sw-KE' },
  { id: 'yo', name: 'Yoruba', code: 'yo-NG' },
  { id: 'ha', name: 'Hausa', code: 'ha-NG' },
  { id: 'am', name: 'Amharic', code: 'am-ET' },
  { id: 'zu', name: 'Zulu', code: 'zu-ZA' },
  { id: 'ig', name: 'Igbo', code: 'ig-NG' },
  { id: 'so', name: 'Somali', code: 'so-SO' },
  { id: 'rw', name: 'Kinyarwanda', code: 'rw-RW' },
];

const models = [
  { id: 'africa-gpt-4', name: 'AfricaGPT-4', description: 'Most capable model, best for complex tasks' },
  { id: 'africa-gpt-3.5', name: 'AfricaGPT-3.5', description: 'Fast and efficient for most tasks' },
  { id: 'africa-mini', name: 'AfricaMini', description: 'Lightweight model for simple tasks' },
];

const mockResponses = {
  'sw': 'Habari! Mimi ni AfricaLLM, msaidizi wako wa AI. Ninaweza kukusaidia na maswali yoyote kuhusu lugha za Kiafrika, utamaduni, na teknolojia. Je, una swali gani leo?',
  'yo': 'Ẹ káàbọ̀! Èmi ni AfricaLLM, olùrànlọ́wọ́ AI rẹ. Mo lè ràn ọ́ lọ́wọ́ pẹ̀lú ìbéèrè kọ̀ọ̀kan nípa àwọn èdè Áfríkà, àṣà, àti ìmọ̀-ẹ̀rọ. Kí ni ìbéèrè rẹ lónìí?',
  'ha': 'Sannu! Ni ne AfricaLLM, mataimakinka na AI. Zan iya taimaka maka da duk wata tambaya game da harsunan Afirka, al\'adu, da fasaha. Menene tambayarka a yau?',
  'am': 'ሰላም! እኔ AfricaLLM ነኝ፣ የእርስዎ AI ረዳት። ስለ አፍሪካ ቋንቋዎች፣ ባህል እና ቴክኖሎጂ ማንኛውንም ጥያቄ ልረዳዎ እችላለሁ። ዛሬ ምን ጥያቄ አለዎት?',
  'zu': 'Sawubona! NginguAfricaLLM, umsizi wakho we-AI. Ngingakusiza nganoma yimuphi umbuzo mayelana nezilimi zase-Afrika, amasiko, nobuchwepheshe. Yimuphi umbuzo wakho namuhla?',
  'ig': 'Nnọọ! Abụ m AfricaLLM, onye inyeaka gị nke AI. Enwere m ike inyere gị aka na ajụjụ ọ bụla gbasara asụsụ Africa, omenala, na teknụzụ. Kedu ajụjụ ị nwere taa?',
  'so': 'Salaan! Waxaan ahay AfricaLLM, kaaliyahaaga AI-ga. Waxaan kaa caawin karaa su\'aal kasta oo ku saabsan luqadaha Afrika, dhaqanka, iyo tignoolajiyada. Waa maxay su\'aashaada maanta?',
  'rw': 'Muraho! Ndi AfricaLLM, umufasha wawe wa AI. Nshobora kugufasha mu ibibazo byose bijyanye n\'indimi z\'Afurika, umuco, na tekinolojiya. Ni ikibazo ki ufite uyu munsi?',
};

export function Playground() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    setOutput('');
    
    // Simulate API call
    setTimeout(() => {
      setOutput(mockResponses[selectedLanguage.id as keyof typeof mockResponses] || 'Response in ' + selectedLanguage.name);
      setIsLoading(false);
    }, 1500);
  };

  const codeSnippet = `import { AfricaLLM } from 'africallm';

const client = new AfricaLLM({
  apiKey: process.env.AFRICALLM_API_KEY
});

const response = await client.chat.completions.create({
  model: "${selectedModel.id}",
  language: "${selectedLanguage.code}",
  messages: [
    { role: "user", content: "${input || 'Your message here'}" }
  ],
  max_tokens: 1000,
  temperature: 0.7
});

console.log(response.choices[0].message.content);`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-gray-300">Interactive API Testing</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              API Playground
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Test our language models in real-time. Select a language, choose a model, and see the magic happen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Settings Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Language Selection */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">Select Language</h3>
              <div className="space-y-2">
                {languages.map((lang) => (
                  <button
                    key={lang.id}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                      selectedLanguage.id === lang.id
                        ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="font-medium">{lang.name}</div>
                    <div className="text-sm opacity-70">{lang.code}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Model Selection */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">Select Model</h3>
              <div className="space-y-2">
                {models.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModel(model)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                      selectedModel.id === model.id
                        ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="font-medium">{model.name}</div>
                    <div className="text-xs opacity-70">{model.description}</div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Playground */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Input */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">Input</h3>
                <div className="text-sm text-gray-400">
                  {selectedLanguage.name} · {selectedModel.name}
                </div>
              </div>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Enter your text in ${selectedLanguage.name}...`}
                className="w-full h-32 bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
              />
              <button
                onClick={handleSubmit}
                disabled={!input.trim() || isLoading}
                className="mt-4 w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                {isLoading ? 'Processing...' : 'Run'}
              </button>
            </div>

            {/* Output */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">Output</h3>
              <div className="min-h-32 bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white">
                {isLoading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                ) : output ? (
                  <p className="leading-relaxed">{output}</p>
                ) : (
                  <p className="text-gray-500">Response will appear here...</p>
                )}
              </div>
            </div>

            {/* Code Example */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => setShowCode(!showCode)}
                  className="flex items-center gap-2 text-white font-semibold hover:text-orange-400 transition-colors"
                >
                  <Code2 className="w-5 h-5" />
                  {showCode ? 'Hide' : 'Show'} Code Example
                </button>
                {showCode && (
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-gray-300 hover:bg-white/10 transition-all"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                )}
              </div>
              {showCode && (
                <pre className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-green-400 overflow-x-auto">
                  <code>{codeSnippet}</code>
                </pre>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
