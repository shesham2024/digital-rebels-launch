import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  GraduationCap,
  Code2,
  Brain,
  Rocket,
  Users,
  Target,
  X,
  Check,
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
    title: "Digital Rebels",
    label: "The Future",
    color: "text-primary",
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
    <section className="relative py-24">
      {/* Background accents */}
      <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            The Difference
          </p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Why <span className="gradient-text">Digital Rebels?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            The education system is broken. We're here to fix it with AI-integrated,
            industry-focused training.
          </p>
        </motion.div>

        {/* Comparison cards */}
        <motion.div
          className="mb-24 grid gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {comparisons.map((comparison) => (
            <motion.div key={comparison.title} variants={itemVariants}>
              <GlassCard
                className={`h-full ${comparison.isHighlighted ? "border-gradient" : ""
                  }`}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${comparison.isHighlighted
                        ? "gradient-aurora"
                        : "bg-muted"
                      }`}
                  >
                    <comparison.icon
                      className={`h-5 w-5 ${comparison.isHighlighted ? "text-white" : "text-muted-foreground"
                        }`}
                    />
                  </div>
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wider ${comparison.color}`}>
                      {comparison.label}
                    </p>
                    <h3 className="font-display text-lg font-semibold">
                      {comparison.title}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {comparison.items.map((item) => (
                    <li key={item.text} className="flex items-center gap-2 text-sm">
                      {item.isNegative ? (
                        <X className="h-4 w-4 text-destructive/70" />
                      ) : (
                        <Check className="h-4 w-4 text-primary" />
                      )}
                      <span
                        className={
                          item.isNegative ? "text-muted-foreground" : "text-foreground"
                        }
                      >
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Program features */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-secondary">
            Our Program
          </p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Java Full Stack with <span className="gradient-text">Gen AI</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Master the complete stack from backend to AI integration. Build real-world
            applications that matter.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {programFeatures.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <GlassCard
                className="h-full"
                variant="gradient"
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-aurora">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-xl font-semibold">
                        {feature.title}
                      </h3>
                      {feature.badge && (
                        <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-accent-foreground">
                          {feature.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
