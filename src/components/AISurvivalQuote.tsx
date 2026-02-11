import { motion } from "framer-motion";
import {
  Quote,
  AlertTriangle,
  Sparkles,
  Zap,
  TrendingUp,
  Users,
  Target,
  ArrowRight,
  Brain,
  Code,
  Rocket
} from "lucide-react";

const impactStats = [
  {
    icon: Brain,
    value: "75%",
    label: "Jobs Will Change",
    description: "AI will transform most tech roles by 2030",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    value: "40%",
    label: "Salary Premium",
    description: "AI-skilled developers earn significantly more",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Rocket,
    value: "3x",
    label: "Faster Growth",
    description: "AI-ready professionals advance quicker",
    gradient: "from-green-500 to-emerald-500"
  }
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

const AISurvivalQuote = () => {
  const handleJoinMovement = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
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
              <AlertTriangle className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-semibold text-orange-300 uppercase tracking-wider">
                Wake Up Call
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Quote Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="relative p-8 md:p-12 rounded-2xl glass backdrop-blur-md bg-gradient-to-br from-orange-500/10 via-red-500/5 to-purple-500/10 border border-orange-500/30 overflow-hidden group">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-orange-500/30 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-orange-500/30 rounded-br-2xl" />

            {/* Animated Alert Icon */}
            <div className="flex justify-center mb-8">
              <motion.div
                animate={{
                  rotate: [0, -5, 5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="p-6 rounded-full glass backdrop-blur-md bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 shadow-2xl"
              >
                <AlertTriangle className="w-12 h-12 text-orange-400" />
              </motion.div>
            </div>

            {/* Main Quote */}
            <div className="relative text-center">
              <Quote className="absolute -top-6 -left-4 w-16 h-16 text-orange-400/20" />
              <Quote className="absolute -bottom-6 -right-4 w-16 h-16 text-orange-400/20 rotate-180" />

              <blockquote className="relative z-10">
                <motion.p
                  className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  AI is{" "}
                  <span className="relative">
                    <span className="text-muted-foreground line-through decoration-red-500 decoration-2">
                      not
                    </span>
                    <motion.div
                      className="absolute -inset-1 bg-red-500/20 rounded"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    />
                  </span>{" "}
                  replacing developers.
                  <br />
                  <span className="bg-gradient-to-r from-orange-400 via-red-400 to-purple-400 bg-clip-text text-transparent">
                    AI is replacing outdated developers.
                  </span>
                </motion.p>
              </blockquote>
            </div>

            {/* Sub text */}
            <motion.p
              className="text-center text-muted-foreground mt-6 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Don't be outdated. Be a{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                Digital Rebel
              </span>.
            </motion.p>

            {/* Decorative Side Elements */}
            <div className="absolute top-1/2 left-4 -translate-y-1/2 w-1 h-24 bg-gradient-to-b from-transparent via-orange-400 to-transparent opacity-50" />
            <div className="absolute top-1/2 right-4 -translate-y-1/2 w-1 h-24 bg-gradient-to-b from-transparent via-orange-400 to-transparent opacity-50" />
          </div>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                  The Reality
                </span>
              </div>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold">
              The <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Revolution</span> is Here
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-6 rounded-xl glass backdrop-blur-md bg-white/5 border border-border/50 hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${stat.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="max-w-4xl mx-auto p-8 rounded-2xl glass backdrop-blur-md bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-blue-500/10 border border-purple-500/30">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                  Join The Revolution
                </span>
              </div>
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Don't Get Left <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Behind</span>
            </h3>

            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              The AI revolution is happening now. Those who adapt will thrive.
              Those who don't will be replaced. Which side will you choose?
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                onClick={handleJoinMovement}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-5 h-5" />
                Start Your Transformation
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                className="px-8 py-3 rounded-lg glass border border-border/50 hover:border-purple-500/50 hover:bg-purple-500/10 text-foreground font-medium transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code className="w-5 h-5" />
                View Curriculum
              </motion.button>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-border/20">
              {[
                { value: "500+", label: "Rebels Trained" },
                { value: "95%", label: "Success Rate" },
                { value: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AISurvivalQuote;
