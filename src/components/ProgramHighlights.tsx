import { motion } from "framer-motion";
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

export function ProgramHighlights() {
  return (
    <section className="relative overflow-hidden py-24" id="program">
      <div>
        <motion.div
          className="text-center mb-12"
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
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
                Our Program
              </span>
            </div>
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Java Full Stack with <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Gen AI</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the complete stack from backend to AI integration. Build real-world
            applications that matter in today's market.
          </p>
        </motion.div>

        {/* Program Features Cards */}
        <motion.div
          className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {programFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-full p-6 rounded-2xl glass backdrop-blur-md bg-white/5 border border-border/50 hover:border-purple-500/30 transition-all duration-300 group">
                <div className="mb-6 flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${feature.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {feature.title}
                      </h3>
                      {feature.badge && (
                        <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                          {feature.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <ul className="space-y-3">
                  {feature.highlights.map((highlight, highlightIndex) => (
                    <motion.li
                      key={highlight}
                      className="flex items-start gap-3 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: highlightIndex * 0.1 }}
                    >
                      <div className={`mt-1 h-2 w-2 rounded-full bg-gradient-to-r ${feature.gradient} flex-shrink-0`} />
                      <span className="text-foreground font-medium leading-relaxed">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

