import { motion } from "framer-motion";
import {
  Lightbulb,
  Building2,
  DollarSign,
  MessageSquare,
  Sparkles,
  Brain,
  Users,
  Target
} from "lucide-react";

const skills = [
  {
    icon: Lightbulb,
    title: "System Thinking",
    description: "Learn to architect solutions, not just write code. Think in systems, not scripts.",
    gradient: "from-yellow-500 to-orange-500",
    highlights: [
      "Solution architecture patterns",
      "Scalable system design",
      "Problem-solving methodologies"
    ]
  },
  {
    icon: Building2,
    title: "Corporate Readiness",
    description: "Understand how tech companies work. Navigate politics, processes, and culture.",
    gradient: "from-blue-500 to-cyan-500",
    highlights: [
      "Corporate culture navigation",
      "Team collaboration skills",
      "Professional communication"
    ]
  },
  {
    icon: DollarSign,
    title: "Financial Awareness",
    description: "Negotiate salaries, understand equity, and make smart career investments.",
    gradient: "from-green-500 to-emerald-500",
    highlights: [
      "Salary negotiation tactics",
      "Equity and stock options",
      "Career investment strategies"
    ]
  },
  {
    icon: MessageSquare,
    title: "Soft Skills Mastery",
    description: "Communicate effectively, lead teams, and present ideas with confidence.",
    gradient: "from-purple-500 to-pink-500",
    highlights: [
      "Leadership development",
      "Presentation skills",
      "Conflict resolution"
    ]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function BeyondCoding() {
  return (
    <section className="relative py-16 pt-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-[200px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
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
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-green-500/30 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
              <Brain className="w-4 h-4 text-green-400" />
              <span className="text-sm font-semibold text-green-300 uppercase tracking-wider">
                Holistic Growth
              </span>
            </div>
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Beyond <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Coding</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don't just create coders. We create complete professionals ready to thrive
            in the corporate world and lead the future of technology.
          </p>
        </motion.div>

        {/* Skills Cards */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-full p-6 rounded-2xl glass backdrop-blur-md bg-white/5 border border-border/50 hover:border-purple-500/30 transition-all duration-300 group text-center">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${skill.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <skill.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {skill.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-3 text-left">
                  {skill.highlights.map((highlight, highlightIndex) => (
                    <motion.li
                      key={highlight}
                      className="flex items-start gap-3 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: highlightIndex * 0.1 }}
                    >
                      <div className={`mt-1 h-2 w-2 rounded-full bg-gradient-to-r ${skill.gradient} flex-shrink-0`} />
                      <span className="text-foreground font-medium leading-relaxed">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="max-w-4xl mx-auto p-8 rounded-2xl glass backdrop-blur-md bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-purple-500/10 border border-purple-500/30">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                <Target className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                  Complete Transformation
                </span>
              </div>
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              From <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Coder</span> to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Leader</span>
            </h3>

            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Our holistic approach ensures you're not just technically proficient, but also
              equipped with the leadership, communication, and business skills that set you
              apart in the competitive tech landscape.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {[
                { value: "100%", label: "Soft Skills Training", icon: Users },
                { value: "1:1", label: "Career Mentoring", icon: Target },
                { value: "24/7", label: "Community Support", icon: MessageSquare },
                { value: "∞", label: "Growth Mindset", icon: Brain },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                      <stat.icon className="w-4 h-4 text-purple-400" />
                    </div>
                  </div>
                  <div className="font-display text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
