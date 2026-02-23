import { useState } from "react";
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
  CheckCircle,
  Zap,
  Loader2,
  AlertCircle
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
    lines: ["hello@invokeIt.in"],
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    qualification: '',
    yearOfPassing: '',
    category: ''
  });

  // Replace with your actual Zoho form URL
  const ZOHO_FORM_URL = 'https://forms.zohopublic.in/rahulrocks9876543210gm1/form/ContactForm/formperma/YOUR_FORM_PERMALINK';

  const handleWhatsAppChat = () => {
    window.open('https://wa.me/919059065724', '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user selects
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
        newErrors.phone = 'Please enter a valid 10-digit phone number';
      }
    }

    if (!formData.qualification) {
      newErrors.qualification = 'Please select your qualification';
    }

    if (!formData.yearOfPassing) {
      newErrors.yearOfPassing = 'Please select your year of passing';
    }

    if (!formData.category) {
      newErrors.category = 'Please select your category';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Create URL with query parameters for Zoho form
    const params = new URLSearchParams({
      'Name_First': formData.firstName,
      'Name_Last': formData.lastName,
      'Email': formData.email,
      'PhoneNumber_countrycode': formData.phone,
      'Dropdown': formData.qualification,
      'Dropdown1': formData.yearOfPassing,
      'Dropdown2': formData.category,
      'SingleLine': 'Contact Form Submission',
      'SingleLine1': 'demo-request'
    });

    // Navigate to Zoho form with pre-filled data
    const zohoFormWithData = `${ZOHO_FORM_URL}?${params.toString()}`;

    // Open in new tab/window
    window.open(zohoFormWithData, '_blank');

    // Reset form after navigation
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        qualification: '',
        yearOfPassing: '',
        category: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="relative overflow-hidden py-16 pt-8" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-[200px]" />
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
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">Get In Touch</span>
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
                <p className="text-muted-foreground">Fill out the form below and we'll redirect you to complete your registration</p>
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
                  <div>
                    <Input
                      name="firstName"
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`glass backdrop-blur-md bg-white/5 border-border/50 focus:border-purple-500/50 transition-all duration-300 ${errors.firstName ? 'border-red-500/50 focus:border-red-500' : ''
                        }`}
                      required
                    />
                    {errors.firstName && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1 mt-1 text-red-400 text-xs"
                      >
                        <AlertCircle className="w-3 h-3" />
                        {errors.firstName}
                      </motion.div>
                    )}
                  </div>
                  <div>
                    <Input
                      name="lastName"
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`glass backdrop-blur-md bg-white/5 border-border/50 focus:border-purple-500/50 transition-all duration-300 ${errors.lastName ? 'border-red-500/50 focus:border-red-500' : ''
                        }`}
                      required
                    />
                    {errors.lastName && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1 mt-1 text-red-400 text-xs"
                      >
                        <AlertCircle className="w-3 h-3" />
                        {errors.lastName}
                      </motion.div>
                    )}
                  </div>
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`glass backdrop-blur-md bg-white/5 border-border/50 focus:border-purple-500/50 transition-all duration-300 ${errors.email ? 'border-red-500/50 focus:border-red-500' : ''
                      }`}
                    required
                  />
                  {errors.email && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 mt-1 text-red-400 text-xs"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </motion.div>
                  )}
                </div>

                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`glass backdrop-blur-md bg-white/5 border-border/50 focus:border-purple-500/50 transition-all duration-300 ${errors.phone ? 'border-red-500/50 focus:border-red-500' : ''
                      }`}
                    required
                  />
                  {errors.phone && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 mt-1 text-red-400 text-xs"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </motion.div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Select onValueChange={(value) => handleSelectChange('qualification', value)}>
                      <SelectTrigger className={`glass backdrop-blur-md bg-white/5 border-border/50 focus:border-purple-500/50 transition-all duration-300 ${errors.qualification ? 'border-red-500/50' : ''
                        }`}>
                        <SelectValue placeholder="Qualification *" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="btech">B.Tech</SelectItem>
                        <SelectItem value="bsc">BSc/BCA</SelectItem>
                        <SelectItem value="msc">MSc/MCA</SelectItem>
                        <SelectItem value="diploma">Diploma</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.qualification && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1 mt-1 text-red-400 text-xs"
                      >
                        <AlertCircle className="w-3 h-3" />
                        {errors.qualification}
                      </motion.div>
                    )}
                  </div>

                  <div>
                    <Select onValueChange={(value) => handleSelectChange('yearOfPassing', value)}>
                      <SelectTrigger className={`glass backdrop-blur-md bg-white/5 border-border/50 focus:border-purple-500/50 transition-all duration-300 ${errors.yearOfPassing ? 'border-red-500/50' : ''
                        }`}>
                        <SelectValue placeholder="Year of Passing *" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2026">2026</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="earlier">Earlier</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.yearOfPassing && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1 mt-1 text-red-400 text-xs"
                      >
                        <AlertCircle className="w-3 h-3" />
                        {errors.yearOfPassing}
                      </motion.div>
                    )}
                  </div>
                </div>

                <div>
                  <Select onValueChange={(value) => handleSelectChange('category', value)}>
                    <SelectTrigger className={`glass backdrop-blur-md bg-white/5 border-border/50 focus:border-purple-500/50 transition-all duration-300 ${errors.category ? 'border-red-500/50' : ''
                      }`}>
                      <SelectValue placeholder="I am a... *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">College Student</SelectItem>
                      <SelectItem value="fresher">Fresher</SelectItem>
                      <SelectItem value="professional">Working Professional</SelectItem>
                      <SelectItem value="switcher">Career Switcher</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.category && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 mt-1 text-red-400 text-xs"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {errors.category}
                    </motion.div>
                  )}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-2xl shadow-purple-500/25"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Redirecting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Book Free Demo
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                * Required fields. You'll be redirected to complete your registration securely.
              </p>
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
                <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">Quick Response</span>
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
                  value: "2250+",
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
