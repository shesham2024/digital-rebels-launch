import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  MessageCircle,
  Sparkles,
  Send,
  Calendar,
  User,
  GraduationCap,
  Briefcase,
  CheckCircle,
  Zap
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 90590 65724", "+91 93908 29318"],
    gradient: "from-green-500 to-emerald-500",
    description: "Direct line to our counselors"
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["hello@digitalrebels.in"],
    gradient: "from-blue-500 to-cyan-500",
    description: "Quick response guaranteed"
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 5:00 PM"],
    gradient: "from-purple-500 to-pink-500",
    description: "Always here to help"
  },
  {
    icon: MapPin,
    title: "Location",
    lines: ["Hyderabad, Telangana, India", "(Primarily Online Training)"],
    gradient: "from-orange-500 to-red-500",
    description: "Global reach, local support"
  },
];

const formBenefits = [
  {
    icon: Calendar,
    text: "Free Demo Session",
    description: "60-min hands-on experience"
  },
  {
    icon: User,
    text: "Personal Counseling",
    description: "Career guidance & roadmap"
  },
  {
    icon: CheckCircle,
    text: "No Obligations",
    description: "Completely risk-free"
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

export function ContactSection() {
  const handleWhatsAppChat = () => {
    window.open('https://wa.me/919059065724', '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <section className="relative overflow-hidden py-24" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-[200px]" />
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
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
                Get In Touch
              </span>
            </div>
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Book Your <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Free Demo</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Still have questions? Book a free demo session or talk to our counselors.
            No obligations, just pure value and guidance.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-7xl mx-auto mb-16">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-2xl glass backdrop-blur-md bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 border border-purple-500/30">
              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Register for <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Free Demo</span>
                </h3>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

              {/* Form Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {formBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-3 rounded-lg glass backdrop-blur-md bg-white/5 border border-border/30"
                  >
                    <div className="flex justify-center mb-2">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                        <benefit.icon className="w-4 h-4 text-purple-400" />
                      </div>
                    </div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">{benefit.text}</h4>
                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    className="glass backdrop-blur-md bg-white/5 border-border/50 focus:border-purple-500/50 transition-all duration-300"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="glass backdrop-blur-md bg-white/5 border-border/50 focus:border-purple-500/50 transition-all duration-300"
                    required
                  />
                </div>

                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="glass backdrop-blur-md bg-white/5 border-border/50 focus:border-purple-500/50 transition-all duration-300"
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select>
                    <SelectTrigger className="glass backdrop-blur-md bg-white/5 border-border/50 focus:border-purple-500/50 transition-all duration-300">
                      <SelectValue placeholder="Qualification" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="btech">B.Tech</SelectItem>
                      <SelectItem value="bsc">BSc/BCA</SelectItem>
                      <SelectItem value="msc">MSc/MCA</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="glass backdrop-blur-md bg-white/5 border-border/50 focus:border-purple-500/50 transition-all duration-300">
                      <SelectValue placeholder="Year of Passing" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2026">2026</SelectItem>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="earlier">Earlier</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Select>
                  <SelectTrigger className="glass backdrop-blur-md bg-white/5 border-border/50 focus:border-purple-500/50 transition-all duration-300">
                    <SelectValue placeholder="I am a..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">College Student</SelectItem>
                    <SelectItem value="fresher">Fresher</SelectItem>
                    <SelectItem value="professional">Working Professional</SelectItem>
                    <SelectItem value="switcher">Career Switcher</SelectItem>
                  </SelectContent>
                </Select>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    variant="aurora"
                    size="lg"
                    className="w-full shadow-2xl shadow-purple-500/25"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Book Free Demo
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                variants={itemVariants}
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6 rounded-2xl glass backdrop-blur-md bg-white/5 border border-border/50 hover:border-purple-500/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r ${info.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-purple-400 transition-colors">
                        {info.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">{info.description}</p>
                      {info.lines.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-sm text-foreground font-medium mb-1">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full glass border-green-500/50 hover:border-green-400 hover:bg-green-500/10 text-foreground shadow-lg"
                  onClick={handleWhatsAppChat}
                >
                  <MessageCircle className="h-5 w-5 mr-2 text-green-400" />
                  Chat on WhatsApp
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="max-w-5xl mx-auto p-8 rounded-2xl glass backdrop-blur-md bg-gradient-to-r from-green-500/10 via-blue-500/5 to-purple-500/10 border border-purple-500/30">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                <Zap className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                  Quick Response
                </span>
              </div>
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Get <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Instant</span> Response
            </h3>

            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Our counselors are standing by to help you take the next step in your career.
              Don't wait — your future in tech starts with a single conversation.
            </p>

            {/* Response Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Clock,
                  value: "< 24hrs",
                  label: "Response Time",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: User,
                  value: "1000+",
                  label: "Students Counseled",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  icon: CheckCircle,
                  value: "100%",
                  label: "Free Consultation",
                  gradient: "from-purple-500 to-pink-500"
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl glass backdrop-blur-md bg-white/5 border border-border/30 hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className={`text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
