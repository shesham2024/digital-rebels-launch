import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Play,
    FileText,
    Phone,
    Check,
    Star,
    Users,
    Sparkles,
    Gift,
    Clock,
    Download,
    Video,
    Calendar,
    X,
    Volume2,
    Maximize,
    Pause
} from "lucide-react";

const previewItems = [
    {
        icon: Play,
        title: "Full Lesson: Spring Boot + AI Basics",
        description: "60-minute masterclass on building your first AI-powered API",
        gradient: "from-purple-500 to-pink-500",
        highlights: [
            "Hands-on coding session",
            "Real-world project setup",
            "AI integration patterns"
        ]
    },
    {
        icon: FileText,
        title: "Complete Curriculum PDF",
        description: "Detailed 24-week roadmap with all topics covered",
        gradient: "from-blue-500 to-cyan-500",
        highlights: [
            "Week-by-week breakdown",
            "Project milestones",
            "Learning objectives"
        ]
    },
    {
        icon: Phone,
        title: "15-Min Career Consultation",
        description: "1:1 call to discuss your goals and how we can help",
        gradient: "from-green-500 to-emerald-500",
        highlights: [
            "Personalized guidance",
            "Career roadmap",
            "Skill gap analysis"
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

export function FreeTrial() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    const handleGetFreeAccess = () => {
        const contactSection = document.querySelector("#contact");
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const handleVideoPlay = () => {
        setIsVideoModalOpen(true);
        setIsVideoPlaying(true);
    };

    const handleVideoClose = () => {
        setIsVideoModalOpen(false);
        setIsVideoPlaying(false);
    };

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-[128px] animate-pulse" />
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
                        <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-green-500/30 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
                            <Gift className="w-4 h-4 text-green-400" />
                            <span className="text-sm font-semibold text-green-300 uppercase tracking-wider">
                                Free Preview Access
                            </span>
                        </div>
                    </motion.div>

                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Try Before You <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Commit</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Not sure if this is right for you? Get a taste of our teaching style and curriculum quality —
                        completely free, no strings attached.
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-2 max-w-7xl mx-auto mb-16">
                    {/* Left side - Preview items */}
                    <motion.div
                        className="space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {previewItems.map((item, index) => (
                            <motion.div
                                key={item.title}
                                variants={itemVariants}
                                whileHover={{ x: 5, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="p-6 rounded-2xl glass backdrop-blur-md bg-white/5 border border-border/50 hover:border-purple-500/30 transition-all duration-300 group">
                                    <div className="flex items-start gap-4">
                                        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r ${item.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                                            <item.icon className="h-7 w-7 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-purple-400 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                                {item.description}
                                            </p>

                                            {/* Highlights */}
                                            <ul className="space-y-2">
                                                {item.highlights.map((highlight, highlightIndex) => (
                                                    <motion.li
                                                        key={highlight}
                                                        className="flex items-center gap-2 text-sm"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: highlightIndex * 0.1 }}
                                                    >
                                                        <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${item.gradient} flex-shrink-0`} />
                                                        <span className="text-foreground font-medium">{highlight}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="pt-6"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    variant="aurora"
                                    size="lg"
                                    className="w-full sm:w-auto shadow-2xl shadow-green-500/25"
                                    onClick={handleGetFreeAccess}
                                >
                                    <Download className="w-5 h-5 mr-2" />
                                    Get Free Access Now
                                </Button>
                            </motion.div>

                            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-2 glass px-3 py-1 rounded-full border border-green-500/20">
                                    <Check className="h-4 w-4 text-green-400" />
                                    No credit card required
                                </span>
                                <span className="flex items-center gap-2 glass px-3 py-1 rounded-full border border-blue-500/20">
                                    <Clock className="h-4 w-4 text-blue-400" />
                                    Instant access
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right side - Video preview */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="rounded-2xl glass backdrop-blur-md bg-white/5 border border-border/50 hover:border-purple-500/30 transition-all duration-300 overflow-hidden group">
                            <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                                {/* Video thumbnail overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-slate-800/60 to-blue-900/40" />

                                {/* Decorative elements */}
                                <div className="absolute top-4 left-4 flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                                    <span className="text-xs text-white/70 font-medium">LIVE PREVIEW</span>
                                </div>

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.button
                                        className="group/play relative"
                                        onClick={handleVideoPlay}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {/* Ripple effect */}
                                        <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
                                        <div className="absolute inset-0 rounded-full bg-white/10 animate-ping animation-delay-75" />

                                        {/* Play button */}
                                        <div className="relative flex h-20 w-20 items-center justify-center rounded-full glass backdrop-blur-sm border-2 border-white/30 bg-gradient-to-r from-purple-500/30 to-pink-500/30 transition-all duration-300 group-hover/play:shadow-2xl group-hover/play:shadow-purple-500/25">
                                            <Play className="h-8 w-8 text-white ml-1 transition-transform group-hover/play:scale-110" />
                                        </div>
                                    </motion.button>
                                </div>

                                {/* Video overlay info */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Video className="w-4 h-4 text-purple-400" />
                                        <span className="text-sm font-medium text-purple-300">Free Masterclass</span>
                                    </div>
                                    <p className="font-display text-lg font-semibold text-white">Spring Boot + AI Integration</p>
                                    <p className="text-sm text-white/80">60 minutes of hands-on learning</p>
                                </div>
                            </div>

                            {/* Video stats */}
                            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Users className="h-4 w-4 text-green-400" />
                                    <span className="font-medium">500+ watched</span>
                                </div>
                                <div className="flex items-center gap-1 text-sm">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span className="font-medium text-foreground">4.9/5 rating</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Trust badges */}
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
                                <Sparkles className="w-4 h-4 text-purple-400" />
                                <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                                    Trusted Experience
                                </span>
                            </div>
                        </div>

                        <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">
                            Join <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">500+</span> Students Who{" "}
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Started Free</span>
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: Check,
                                    text: "Trusted by 500+ students",
                                    gradient: "from-green-500 to-emerald-500",
                                    description: "Join our growing community"
                                },
                                {
                                    icon: Calendar,
                                    text: "Industry-approved curriculum",
                                    gradient: "from-blue-500 to-cyan-500",
                                    description: "Built by industry experts"
                                },
                                {
                                    icon: Star,
                                    text: "100% satisfaction guarantee",
                                    gradient: "from-purple-500 to-pink-500",
                                    description: "Risk-free learning experience"
                                }
                            ].map((badge, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center p-6 rounded-xl glass backdrop-blur-md bg-white/5 border border-border/30 hover:border-purple-500/30 transition-all duration-300 group"
                                >
                                    <div className="flex justify-center mb-4">
                                        <div className={`p-3 rounded-xl bg-gradient-to-r ${badge.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                                            <badge.icon className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                    <h4 className="font-semibold text-foreground mb-2">{badge.text}</h4>
                                    <p className="text-sm text-muted-foreground">{badge.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Video Modal */}
            {isVideoModalOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                    onClick={handleVideoClose}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="relative w-full max-w-4xl mx-4 aspect-video rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={handleVideoClose}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full glass backdrop-blur-md bg-black/50 hover:bg-black/70 transition-colors"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>

                        {/* Video player */}
                        <video
                            className="w-full h-full object-cover"
                            controls
                            autoPlay
                            src="https://www.w3schools.com/html/mov_bbb.mp4"
                        >
                            Your browser does not support the video tag.
                        </video>

                        {/* Video info overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                            <h3 className="font-display text-xl font-bold text-white mb-2">
                                Spring Boot + AI Integration Masterclass
                            </h3>
                            <p className="text-white/80">
                                Learn how to build production-ready AI-powered applications with Spring Boot
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}
