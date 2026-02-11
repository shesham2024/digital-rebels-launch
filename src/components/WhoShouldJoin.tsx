import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  UserCheck,
  Briefcase,
  RefreshCw,
  ArrowRight,
  Users,
  Target,
  Zap,
  CheckCircle
} from "lucide-react";

const personas = [
  {
    icon: GraduationCap,
    title: "College Students",
    subtitle: "2nd to 4th Year BTech/MCA",
    description: "Your college syllabus is outdated. Get industry skills while still in college and graduate job-ready.",
    cta: "Start Early, Win Big",
    gradient: "from-blue-500 to-cyan-500",
    highlights: [
      "Learn while studying",
      "Graduate job-ready",
      "Build real projects"
    ]
  },
  {
    icon: UserCheck,
    title: "Freshers",
    subtitle: "Recent Graduates",
    description: "No job offers yet? It's not you — it's your skills. Upgrade to AI-era technologies and stand out.",
    cta: "Transform Your Profile",
    gradient: "from-green-500 to-emerald-500",
    highlights: [
      "Bridge skill gaps",
      "Stand out from crowd",
      "Get interview calls"
    ]
  },
  {
    icon: Briefcase,
    title: "Working Professionals",
    subtitle: "1-5 Years Experience",
    description: "Feeling stuck or outdated? Learn Gen AI integration and future-proof your career before it's too late.",
    cta: "Stay Relevant",
    gradient: "from-purple-500 to-pink-500",
    highlights: [
      "Future-proof career",
      "Learn Gen AI skills",
      "Weekend-friendly"
    ]
  },
  {
    icon: RefreshCw,
    title: "Career Switchers",
    subtitle: "Non-IT to IT",
    description: "Want to break into tech? Our comprehensive program takes you from zero to industry-ready in months.",
    cta: "New Career Path",
    gradient: "from-orange-500 to-red-500",
    highlights: [
      "Zero to hero journey",
      "Complete career change",
      "Industry mentorship"
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

export function WhoShouldJoin() {
  const handleCheckQualification = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-[200px]" />
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
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-red-500/10">
              <Users className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-semibold text-orange-300 uppercase tracking-wider">
                For You
              </span>
            </div>
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Who Should <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Join?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Digital Rebels is for those who refuse to be left behind. Are you ready to
            join the movement and transform your career?
          </p>
        </motion.div>

        {/* Persona Cards */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {personas.map((persona, index) => (
            <motion.div
              key={persona.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-full p-6 rounded-2xl glass backdrop-blur-md bg-white/5 border border-border/50 hover:border-purple-500/30 transition-all duration-300 group">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${persona.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <persona.icon className="h-7 w-7 text-white" />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="mb-4">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {persona.title}
                  </h3>
                  <p className={`text-sm font-medium bg-gradient-to-r ${persona.gradient} bg-clip-text text-transparent`}>
                    {persona.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {persona.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {persona.highlights.map((highlight, highlightIndex) => (
                    <motion.li
                      key={highlight}
                      className="flex items-center gap-2 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: highlightIndex * 0.1 }}
                    >
                      <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                      <span className="text-foreground font-medium">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <div className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${persona.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-300`}>
                  <span>{persona.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Qualification Check Section */}
        <motion.div
          className="text-center"
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
                  Ready to Start?
                </span>
              </div>
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Not Sure If You <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Qualify?</span>
            </h3>

            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Don't worry! Our program is designed for learners at all levels.
              Book a free consultation to discuss your background and career goals.
            </p>

            {/* Qualification Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Zap, text: "Free Career Assessment", color: "from-yellow-400 to-orange-400" },
                { icon: Users, text: "Personalized Learning Path", color: "from-purple-400 to-pink-400" },
                { icon: Target, text: "Goal-Oriented Guidance", color: "from-blue-400 to-cyan-400" }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 glass px-4 py-3 rounded-xl border border-border/30 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${benefit.color}`}>
                    <benefit.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="aurora"
                size="lg"
                className="shadow-2xl shadow-purple-500/25"
                onClick={handleCheckQualification}
              >
                Check If You Qualify
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
