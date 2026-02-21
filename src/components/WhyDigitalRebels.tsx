import { motion } from "framer-motion";
// import { GlassCard } from "@/components/ui/GlassCard";
import {
  GraduationCap,
  Code2,
  Brain,
  Rocket,
  Users,
  Target,
  X,
  Check,
  Sparkles,
  Zap,
  Award,
} from "lucide-react";

const comparisons = [
  {
    title: "Traditional Colleges",
    label: "The Past",
    color: "text-muted-foreground",
    icon: GraduationCap,
    items: [
      { text: "Outdated curriculum", isNegative: true },
      { text: "Theory-heavy approach", isNegative: true },
      { text: "No industry exposure", isNegative: true },
      { text: "Generic teaching", isNegative: true },
    ],
  },
  {
    title: "Coaching Centers",
    label: "Shortcuts",
    color: "text-muted-foreground",
    icon: Target,
    items: [
      { text: "Interview-focused only", isNegative: true },
      { text: "No real projects", isNegative: true },
      { text: "Memorization tactics", isNegative: true },
      { text: "AI-ignorant training", isNegative: true },
    ],
  },
  {
    title: "InvokeIt",
    label: "The Future",
    color: "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent",
    icon: Rocket,
    isHighlighted: true,
    items: [
      { text: "AI-first curriculum", isNegative: false },
      { text: "Real-world projects", isNegative: false },
      { text: "Industry-ready skills", isNegative: false },
      { text: "Gen AI integration", isNegative: false },
    ],
  },
];

const programFeatures = [
  {
    icon: Code2,
    title: "Core Stack",
    description: "Java & Spring Boot, Microservices, Database Design, REST APIs",
    gradient: "from-blue-500 to-cyan-500",
    highlights: [
      "Enterprise-grade architecture patterns",
      "Performance optimization & scaling",
      "Angular / React frontend mastery",
    ],
  },
  {
    icon: Brain,
    title: "AI Track",
    badge: "NEW",
    description: "AI Agents, GenAI APIs, Prompt Engineering",
    gradient: "from-purple-500 to-pink-500",
    highlights: [
      "Build AI-powered applications",
      "LLM integration patterns",
      "Production AI deployment",
    ],
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "1:1 sessions with industry experts",
    gradient: "from-green-500 to-emerald-500",
    highlights: [
      "Resume & portfolio building",
      "Mock interviews with feedback",
      "Career guidance & networking",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function WhyDigitalRebels() {
  return (
    <section id="why-us" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-[128px] animate-pulse" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                The Difference
              </span>
            </div>
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Why <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Us?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The education system is broken. We're here to fix it with AI-integrated,
            industry-focused training that actually works.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <motion.div
          className="mb-24 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {comparisons.map((comparison, index) => (
            <motion.div
              key={comparison.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`
                  h-full p-6 rounded-2xl glass backdrop-blur-md transition-all duration-300
                  ${comparison.isHighlighted
                    ? "border-2 border-purple-500/50 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-purple-500/10 shadow-2xl shadow-purple-500/20"
                    : "border border-border/50 bg-white/5 hover:border-border/70"
                  }
                `}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl shadow-lg ${comparison.isHighlighted
                        ? "bg-gradient-to-r from-purple-500 to-pink-500"
                        : "bg-gradient-to-r from-gray-600 to-gray-700"
                      }`}
                  >
                    <comparison.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${comparison.isHighlighted ? "text-purple-300" : "text-muted-foreground"
                      }`}>
                      {comparison.label}
                    </p>
                    <h3 className={`font-display text-xl font-bold ${comparison.isHighlighted ? comparison.color : "text-foreground"
                      }`}>
                      {comparison.title}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-4">
                  {comparison.items.map((item, itemIndex) => (
                    <motion.li
                      key={item.text}
                      className="flex items-center gap-3 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIndex * 0.1 }}
                    >
                      <div className={`flex-shrink-0 p-1 rounded-full ${item.isNegative ? "bg-red-500/20" : "bg-green-500/20"
                        }`}>
                        {item.isNegative ? (
                          <X className="h-3 w-3 text-red-400" />
                        ) : (
                          <Check className="h-3 w-3 text-green-400" />
                        )}
                      </div>
                      <span className={item.isNegative ? "text-muted-foreground" : "text-foreground font-medium"}>
                        {item.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
