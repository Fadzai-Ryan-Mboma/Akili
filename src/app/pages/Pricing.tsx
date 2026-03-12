import { motion } from "motion/react";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: 'Free',
    icon: Sparkles,
    price: '$0',
    description: 'Perfect for testing and small projects',
    gradient: 'from-gray-500 to-gray-600',
    features: [
      '10,000 tokens/month',
      '5 languages',
      'Basic models',
      'Community support',
      'API access',
      'Rate limit: 10 req/min',
    ],
    limitations: [
      'No fine-tuning',
      'No SLA',
    ]
  },
  {
    name: 'Pro',
    icon: Zap,
    price: '$49',
    description: 'For growing applications and startups',
    gradient: 'from-orange-500 to-purple-600',
    popular: true,
    features: [
      '1M tokens/month',
      'All 2000+ languages',
      'Advanced models',
      'Priority support',
      'Higher rate limits',
      'Custom domains',
      'Analytics dashboard',
      '99.9% uptime SLA',
    ],
    limitations: []
  },
  {
    name: 'Enterprise',
    icon: Crown,
    price: 'Custom',
    description: 'For large-scale production deployments',
    gradient: 'from-purple-500 to-pink-600',
    features: [
      'Unlimited tokens',
      'All languages + dialects',
      'Custom model training',
      'Dedicated support',
      'No rate limits',
      'On-premise deployment',
      'SSO & advanced security',
      '99.99% uptime SLA',
      'Custom integrations',
      'Training & consulting',
    ],
    limitations: []
  },
];

const addOns = [
  { name: 'Fine-tuning', price: '$199/model', description: 'Train custom models on your data' },
  { name: 'Dedicated Infrastructure', price: '$999/month', description: 'Isolated compute resources' },
  { name: 'Speech-to-Text', price: '$0.006/min', description: 'Audio transcription in African languages' },
  { name: 'Premium Support', price: '$299/month', description: '24/7 priority support with SLA' },
];

export function Pricing() {
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
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include access to our core API.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative group ${plan.popular ? 'md:-mt-8' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-white text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className={`relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border rounded-3xl p-8 hover:border-white/20 transition-all ${
                plan.popular ? 'border-white/20' : 'border-white/10'
              }`}>
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${plan.gradient} mb-6`}>
                  <plan.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-400">/month</span>}
                </div>

                <button className={`w-full py-3 rounded-full font-semibold transition-all mb-8 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/50'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>

                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-4 text-center">Add-ons & Extensions</h2>
          <p className="text-gray-400 text-center mb-10">Enhance your plan with additional features</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
              >
                <h3 className="text-lg font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-orange-400 font-semibold mb-3">{addon.price}</p>
                <p className="text-gray-400 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              {
                q: 'What counts as a token?',
                a: 'A token is approximately 4 characters of text. For example, a 1000-word document is roughly 750 tokens.',
              },
              {
                q: 'Can I change plans anytime?',
                a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.',
              },
              {
                q: 'Do you offer refunds?',
                a: 'We offer a 30-day money-back guarantee for Pro plans. Contact us if you\'re not satisfied.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
