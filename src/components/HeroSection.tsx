import { motion } from "framer-motion";
import { ArrowRight, Play, Clock, Zap, Users, Star, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  const handleBookDemo = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleJoinMovement = () => {
    const pdfUrl = '/JavaDeveloperRoadmap.pdf';
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfUrl;
    downloadLink.download = 'Digital-Rebels-Java-Curriculum.pdf';
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    setTimeout(() => {
      window.open(pdfUrl, '_blank');
    }, 500);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-36 lg:pt-40"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-[200px]" />
      </div>

      {/* Spacer div to ensure proper spacing from fixed navbar */}
      <div className="absolute top-0 left-0 right-0 h-24 md:h-28 lg:h-32 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <Badge className="px-6 py-3 text-sm font-semibold border border-purple-400/60 bg-gradient-to-r from-purple-500/80 to-pink-500/80 text-purple-50 hover:from-purple-600/80 hover:to-pink-600/80 transition-all duration-300 shadow-lg shadow-purple-500/20 rounded-full animate-pulse">
              <Clock className="w-4 h-4 mr-2" />
              Next Batch Starts Feb 15 — Only 25 Seats Left
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            THIS IS NOT A{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              CLASSROOM.
            </span>
            <br />
            THIS IS A{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              MOVEMENT.
            </span>
          </motion.h1>

          {/* Sub Headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            <span className="font-display font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Java Full Stack with Gen AI
            </span>{" "}
            — Built for the AI Corporate World. Transform from a coder to an
            AI-ready professional in just 3 months.
          </motion.p>

          {/* Program Features - Single Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Zap, text: "3-Month Intensive", gradient: "from-yellow-400 to-orange-500", border: "border-yellow-400/30" },
              { icon: Users, text: "1:1 Mentorship", gradient: "from-purple-400 to-pink-500", border: "border-purple-400/30" },
              { icon: Target, text: "Job Placement", gradient: "from-blue-400 to-cyan-500", border: "border-blue-400/30" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`flex items-center gap-3 glass px-4 py-3 rounded-xl border ${feature.border} hover:border-opacity-60 transition-all duration-300 group backdrop-blur-md bg-white/5`}
              >
                <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.gradient} shadow-lg`}>
                  <feature.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm md:text-base font-medium text-foreground whitespace-nowrap">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Guarantees - Single Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-3 md:gap-4 text-sm mb-10 max-w-5xl mx-auto"
          >
            {[
              { text: "100% Money-Back Guarantee", color: "text-green-400", border: "border-green-400/30" },
              { text: "No Prior Experience Needed", color: "text-blue-400", border: "border-blue-400/30" },
              { text: "Weekend-Friendly Schedule", color: "text-purple-400", border: "border-purple-400/30" }
            ].map((guarantee, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`flex items-center gap-2 glass px-4 py-2 rounded-lg border ${guarantee.border} backdrop-blur-md bg-white/5 transition-all duration-300`}
              >
                <span className={`${guarantee.color} font-bold text-base`}>✓</span>
                <span className="text-muted-foreground font-medium whitespace-nowrap">{guarantee.text}</span>
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="aurora"
                size="xl"
                className="w-full sm:w-auto cursor-pointer shadow-2xl shadow-purple-500/25 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                onClick={handleBookDemo}
              >
                Book Free Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto cursor-pointer glass border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 text-foreground"
                onClick={handleJoinMovement}
              >
                <Play className="w-5 h-5 mr-2" />
                Download Curriculum
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats - Single Line */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
          >
            {[
              { value: "500+", label: "Students Trained", icon: Users, gradient: "from-purple-500 to-pink-500" },
              { value: "95%", label: "Placement Rate", icon: Target, gradient: "from-blue-500 to-cyan-500" },
              { value: "50+", label: "Hiring Partners", icon: Award, gradient: "from-green-500 to-emerald-500" },
              { value: "4.9★", label: "Student Rating", icon: Star, gradient: "from-yellow-500 to-orange-500" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-6 rounded-2xl glass border border-border/50 hover:border-purple-500/30 transition-all duration-300 group backdrop-blur-md bg-white/5"
              >
                <div className="flex justify-center mb-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className={`font-display text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
