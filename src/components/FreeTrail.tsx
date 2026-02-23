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
    Pause,
    Code,
    BookOpen,
    MessageCircle,
    ArrowRight,
    Zap,
    Trophy,
    Target
} from "lucide-react";

const previewItems = [
    {
        icon: Code,
        title: "Live Coding Session",
        description: "60-minute hands-on Spring Boot + AI integration workshop",
        gradient: "from-purple-500 to-pink-500",
        highlights: [
            "Build a real AI-powered REST API",
            "Learn industry best practices",
            "Get your code reviewed live"
        ],
        badge: "LIVE",
        value: "₹2,999"
    },
    {
        icon: FileText,
        title: "Complete Roadmap PDF",
        description: "24-week detailed curriculum with project milestones",
        gradient: "from-blue-500 to-cyan-500",
        highlights: [
            "Week-by-week learning path",
            "5 major project blueprints",
            "Skill assessment checklist"
        ],
        badge: "INSTANT",
        value: "₹1,499"
    },
    {
        icon: MessageCircle,
        title: "Career Strategy Call",
        description: "1:1 personalized guidance session with industry expert",
        gradient: "from-green-500 to-emerald-500",
        highlights: [
            "Skill gap analysis",
            "Personalized learning plan",
            "Job market insights"
        ],
        badge: "EXCLUSIVE",
        value: "₹3,999"
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
    const handleGetFreeAccess = () => {
        const contactSection = document.querySelector("#contact");
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section className="relative py-24 pb-8 overflow-hidden">
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
                                Free Starter Pack
                            </span>
                        </div>
                    </motion.div>

                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Get <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">₹8,497 Worth</span> of Resources
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
                        Experience our teaching quality and get valuable resources that will kickstart your journey —
                        completely free, no hidden costs.
                    </p>

                    {/* Value Proposition */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center items-center gap-6 text-sm"
                    >
                        <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-green-500/20">
                            <Clock className="w-4 h-4 text-green-400" />
                            <span className="text-green-300 font-medium">Instant Access</span>
                        </div>
                        <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-blue-500/20">
                            <Check className="w-4 h-4 text-blue-400" />
                            <span className="text-blue-300 font-medium">No Credit Card</span>
                        </div>
                        <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-purple-500/20">
                            <Trophy className="w-4 h-4 text-purple-400" />
                            <span className="text-purple-300 font-medium">500+ Downloaded</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Preview Items Grid */}
                <motion.div
                    className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {previewItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="relative h-full p-6 rounded-2xl glass backdrop-blur-md bg-white/5 border border-border/50 hover:border-purple-500/30 transition-all duration-300 group overflow-hidden">
                                {/* Badge */}
                                <div className="absolute top-4 right-4">
                                    <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${item.gradient} text-white shadow-lg`}>
                                        {item.badge}
                                    </span>
                                </div>

                                {/* Icon */}
                                <div className="flex justify-center mb-6">
                                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                                        <item.icon className="h-8 w-8 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="text-center mb-6">
                                    <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-purple-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                        {item.description}
                                    </p>

                                    {/* Value */}
                                    <div className="flex items-center justify-center gap-2 mb-4">
                                        <span className="text-2xl font-bold text-muted-foreground line-through">
                                            {item.value}
                                        </span>
                                        <span className={`text-2xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                                            FREE
                                        </span>
                                    </div>
                                </div>

                                {/* Highlights */}
                                <ul className="space-y-3 mb-6">
                                    {item.highlights.map((highlight, highlightIndex) => (
                                        <motion.li
                                            key={highlight}
                                            className="flex items-start gap-3 text-sm"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: highlightIndex * 0.1 }}
                                        >
                                            <div className={`mt-1 h-2 w-2 rounded-full bg-gradient-to-r ${item.gradient} flex-shrink-0`} />
                                            <span className="text-foreground font-medium leading-relaxed">{highlight}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Decorative gradient line */}
                                <div className={`h-1 w-full bg-gradient-to-r ${item.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="max-w-4xl mx-auto p-8 rounded-2xl glass backdrop-blur-md bg-gradient-to-r from-green-500/10 via-blue-500/5 to-purple-500/10 border border-purple-500/30 relative overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-purple-500/5" />

                        <div className="relative z-10">
                            <div className="flex justify-center mb-6">
                                <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                                    <Sparkles className="w-4 h-4 text-purple-400" />
                                    <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                                        Limited Time Offer
                                    </span>
                                </div>
                            </div>

                            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                                Join <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">500+</span> Smart Developers Who{" "}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Started Free</span>
                            </h3>

                            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                                Don't miss out on this opportunity to experience our world-class training.
                                Get instant access to premium resources worth ₹8,497 — absolutely free.
                            </p>

                            {/* Main CTA Button */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mb-6"
                            >
                                <Button
                                    variant="aurora"
                                    size="lg"
                                    className="px-12 py-4 text-lg font-bold shadow-2xl shadow-green-500/25 relative overflow-hidden group"
                                    onClick={handleGetFreeAccess}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                                    <Download className="w-6 h-6 mr-3" />
                                    Claim Your Free Resources Now
                                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                                </Button>
                            </motion.div>

                            {/* Trust indicators */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    {
                                        icon: Users,
                                        text: "500+ Downloads",
                                        gradient: "from-green-500 to-emerald-500",
                                        description: "Join our growing community"
                                    },
                                    {
                                        icon: Star,
                                        text: "4.9/5 Rating",
                                        gradient: "from-yellow-500 to-orange-500",
                                        description: "Loved by students"
                                    },
                                    {
                                        icon: Zap,
                                        text: "Instant Access",
                                        gradient: "from-purple-500 to-pink-500",
                                        description: "No waiting, start now"
                                    }
                                ].map((trust, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="text-center p-4 rounded-xl glass backdrop-blur-md bg-white/5 border border-border/30 hover:border-purple-500/30 transition-all duration-300 group"
                                    >
                                        <div className="flex justify-center mb-3">
                                            <div className={`p-2 rounded-lg bg-gradient-to-r ${trust.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                                                <trust.icon className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                        <h4 className="font-semibold text-foreground mb-1 text-sm">{trust.text}</h4>
                                        <p className="text-xs text-muted-foreground">{trust.description}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Urgency element */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="mt-6 p-4 rounded-lg bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20"
                            >
                                <div className="flex items-center justify-center gap-2 text-sm">
                                    <Target className="w-4 h-4 text-orange-400" />
                                    <span className="text-orange-300 font-medium">
                                        🔥 Limited spots available for the next batch - Secure yours now!
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
