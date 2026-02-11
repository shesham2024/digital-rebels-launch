import { motion } from "framer-motion";
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
  Heart,
  Code,
  Users,
  Award,
  Zap,
  ExternalLink
} from "lucide-react";

const footerLinks = {
  program: [
    { label: "Curriculum", href: "#program" },
    { label: "Schedule", href: "#" },
    { label: "Mentors", href: "#" },
    { label: "Careers", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Success Stories", href: "#testimonials" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
};

const socialLinks = [
  {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn",
    gradient: "from-blue-600 to-blue-700",
    hoverColor: "hover:bg-blue-600"
  },
  {
    icon: Twitter,
    href: "#",
    label: "Twitter",
    gradient: "from-sky-500 to-sky-600",
    hoverColor: "hover:bg-sky-500"
  },
  {
    icon: Instagram,
    href: "#",
    label: "Instagram",
    gradient: "from-pink-500 to-purple-600",
    hoverColor: "hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600"
  },
  {
    icon: Youtube,
    href: "#",
    label: "YouTube",
    gradient: "from-red-500 to-red-600",
    hoverColor: "hover:bg-red-500"
  },
];

const quickStats = [
  {
    icon: Users,
    value: "500+",
    label: "Students Trained",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Award,
    value: "95%",
    label: "Placement Rate",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Code,
    value: "50+",
    label: "Hiring Partners",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    value: "24/7",
    label: "Support Available",
    gradient: "from-orange-500 to-red-500"
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

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-br from-background via-background/95 to-background/90 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-32 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-[128px]" />
      </div>

      <div className="container relative z-10 py-16">
        {/* Quick Stats Section */}
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
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                  Our Impact
                </span>
              </div>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold">
              Transforming <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Careers</span> Daily
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -3, scale: 1.02 }}
                className="text-center p-6 rounded-xl glass backdrop-blur-md bg-white/5 border border-border/50 hover:border-purple-500/30 transition-all duration-300 group"
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
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <motion.a
              href="#"
              className="flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <span className="font-display text-2xl font-bold">
                Digital<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Rebels</span>
              </span>
            </motion.a>

            <p className="max-w-sm text-muted-foreground leading-relaxed mb-6">
              Transforming coders into AI-ready professionals with industry-focused,
              hands-on training that actually works. Join the rebellion against outdated education.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <motion.a
                href="mailto:hello@digitalrebels.in"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                  <Mail className="h-4 w-4 text-blue-400" />
                </div>
                hello@digitalrebels.in
              </motion.a>

              <motion.a
                href="tel:+919059065724"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
                  <Phone className="h-4 w-4 text-green-400" />
                </div>
                +91 90590 65724
              </motion.a>

              <motion.div
                className="flex items-center gap-3 text-sm text-muted-foreground"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                  <MapPin className="h-4 w-4 text-purple-400" />
                </div>
                Hyderabad, Telangana, India
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`flex h-10 w-10 items-center justify-center rounded-lg glass backdrop-blur-md bg-white/5 border border-border/30 text-muted-foreground transition-all duration-300 hover:border-purple-500/30 ${social.hoverColor} hover:text-white hover:scale-110`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-6 font-display font-bold text-foreground flex items-center gap-2">
              <div className="p-1 rounded bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                <Code className="h-4 w-4 text-blue-400" />
              </div>
              Program
            </h4>
            <ul className="space-y-3">
              {footerLinks.program.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="mb-6 font-display font-bold text-foreground flex items-center gap-2">
              <div className="p-1 rounded bg-gradient-to-r from-green-500/20 to-emerald-500/20">
                <Users className="h-4 w-4 text-green-400" />
              </div>
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="mb-6 font-display font-bold text-foreground flex items-center gap-2">
              <div className="p-1 rounded bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                <Award className="h-4 w-4 text-purple-400" />
              </div>
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                    <ExternalLink className="h-3 w-3 opacity-50" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl glass backdrop-blur-md bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-blue-500/10 border border-purple-500/30">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                  Stay Updated
                </span>
              </div>
            </div>

            <h3 className="font-display text-xl font-bold mb-2">
              Join the <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Rebellion</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest updates on new courses, success stories, and exclusive offers.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg glass backdrop-blur-md bg-white/5 border border-border/50 focus:border-purple-500/50 focus:outline-none text-foreground placeholder:text-muted-foreground"
              />
              <motion.button
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground">
            © 2025 Digital Rebels. All rights reserved.
          </p>
          <motion.p
            className="text-sm text-muted-foreground flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> in India
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
