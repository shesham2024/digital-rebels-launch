import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Award,
    Briefcase,
    GraduationCap,
    Code,
    Users,
    Target,
    RotateCcw,
    Sparkles,
    Brain,
    Zap,
    CheckCircle
} from "lucide-react";

const mentors = [
    {
        id: 0,
        name: "[Mentor 1 Name]",
        role: "Founder & Lead Instructor",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        badge: "Senior Tech Lead",
        badgeGradient: "from-purple-500 to-pink-500",
        credentials: [
            {
                icon: Briefcase,
                title: "10+ Years Industry Experience",
                description: "Worked at top tech companies building scalable backend systems",
                gradient: "from-blue-500 to-cyan-500"
            },
            {
                icon: Code,
                title: "Senior Architect Level Skills",
                description: "Designed microservices handling millions of requests daily",
                gradient: "from-green-500 to-emerald-500"
            },
            {
                icon: GraduationCap,
                title: "Mentored 500+ Developers",
                description: "Helped junior devs successfully transition to senior roles",
                gradient: "from-purple-500 to-pink-500"
            },
            {
                icon: Award,
                title: "Active Open Source Contributor",
                description: "Contributing to Spring ecosystem and AI integration libraries",
                gradient: "from-orange-500 to-red-500"
            },
        ],
        quote: "I don't just teach theory — I share what actually works in production environments."
    },
    {
        id: 1,
        name: "[Mentor 2 Name]",
        role: "Co-Founder & AI Specialist",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        badge: "AI Expert",
        badgeGradient: "from-blue-500 to-cyan-500",
        credentials: [
            {
                icon: Target,
                title: "8+ Years in AI/ML",
                description: "Built AI solutions for Fortune 500 companies and startups",
                gradient: "from-purple-500 to-pink-500"
            },
            {
                icon: Code,
                title: "Full-Stack AI Integration",
                description: "Expert in integrating AI models into production applications",
                gradient: "from-blue-500 to-cyan-500"
            },
            {
                icon: Users,
                title: "Trained 300+ Engineers",
                description: "Specialized in teaching AI concepts to traditional developers",
                gradient: "from-green-500 to-emerald-500"
            },
            {
                icon: Award,
                title: "Published AI Researcher",
                description: "Published papers on practical AI implementation in enterprise systems",
                gradient: "from-yellow-500 to-orange-500"
            },
        ],
        quote: "AI isn't magic — it's engineering. I'll show you how to build it right."
    }
];

const Founder = () => {
    const [activeMentor, setActiveMentor] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);

    const handleFlip = () => {
        if (isFlipping) return;

        setIsFlipping(true);
        setTimeout(() => {
            setActiveMentor(prev => prev === 0 ? 1 : 0);
            setIsFlipping(false);
        }, 300);
    };

    const currentMentor = mentors[activeMentor];

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-[200px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center mb-4"
                    >
                        <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
                            <Brain className="w-4 h-4 text-blue-400" />
                            <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
                                Meet Your Mentors
                            </span>
                        </div>
                    </motion.div>

                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Learn From Those Who've{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Built It</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Click the card to meet both mentors — practitioners who build production systems daily
                        and shape the future of technology.
                    </p>
                </motion.div>

                {/* Interactive Mentor Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-6xl mx-auto mb-16"
                >
                    <motion.div
                        animate={{
                            rotateY: isFlipping ? 180 : 0,
                            scale: isFlipping ? 0.95 : 1,
                        }}
                        transition={{
                            duration: 0.6,
                            ease: "easeInOut"
                        }}
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <Card
                            className="overflow-hidden glass backdrop-blur-md bg-white/5 border border-border/50 hover:border-purple-500/30 shadow-2xl hover:shadow-purple-500/20 cursor-pointer transition-all duration-300 group"
                            onClick={handleFlip}
                        >
                            <CardContent className="p-0 relative">
                                {/* Flip Indicator */}
                                <div className="absolute top-6 right-6 z-20 glass rounded-full p-3 border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-pink-500/10 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300">
                                    <RotateCcw className="w-5 h-5 text-purple-400" />
                                </div>

                                {/* Mentor Indicator Dots */}
                                <div className="absolute top-6 left-6 z-20 flex gap-2">
                                    {mentors.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeMentor
                                                    ? 'bg-gradient-to-r from-purple-400 to-pink-400 scale-125 shadow-lg'
                                                    : 'bg-white/30 hover:bg-white/50'
                                                }`}
                                        />
                                    ))}
                                </div>

                                <motion.div
                                    key={activeMentor}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                    className="grid lg:grid-cols-2"
                                >
                                    {/* Photo Section */}
                                    <div className="bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 min-h-[500px] flex items-center justify-center relative">
                                        {/* Decorative elements */}
                                        <div className="absolute top-8 left-8 w-16 h-16 border border-purple-500/20 rounded-full animate-pulse" />
                                        <div className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-sm" />

                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.4 }}
                                            className="text-center p-8 relative z-10"
                                        >
                                            <div className="w-48 h-64 mx-auto mb-6 overflow-hidden rounded-2xl border-2 border-purple-500/30 shadow-2xl shadow-purple-500/20 group-hover:shadow-purple-500/30 transition-all duration-300">
                                                <img
                                                    src={currentMentor.avatar}
                                                    alt={currentMentor.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <h3 className="text-3xl font-display font-bold mb-2">
                                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                    {currentMentor.name}
                                                </span>
                                            </h3>
                                            <p className="text-muted-foreground text-lg mb-4">
                                                {currentMentor.role}
                                            </p>
                                            <Badge className={`bg-gradient-to-r ${currentMentor.badgeGradient} text-white border-none shadow-lg`}>
                                                {currentMentor.badge}
                                            </Badge>
                                        </motion.div>
                                    </div>

                                    {/* Credentials Section */}
                                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                                        <motion.div
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 0.5 }}
                                        >
                                            <h3 className="text-2xl font-display font-bold mb-2">
                                                Why Learn From{" "}
                                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                    {currentMentor.name.split(' ')[0]}
                                                </span>?
                                            </h3>
                                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                                Real-world experience meets practical teaching methodology
                                            </p>
                                        </motion.div>

                                        <div className="space-y-6">
                                            {currentMentor.credentials.map((cred, index) => {
                                                const Icon = cred.icon;
                                                return (
                                                    <motion.div
                                                        key={`${activeMentor}-${index}`}
                                                        initial={{ opacity: 0, x: 30 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                                        className="flex gap-4 group/item"
                                                    >
                                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cred.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:shadow-xl transition-all duration-300`}>
                                                            <Icon className="w-6 h-6 text-white" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-foreground mb-1 group-hover/item:text-purple-400 transition-colors">
                                                                {cred.title}
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                {cred.description}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>

                                        {/* Quote */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 1.0 }}
                                            className="mt-8 p-6 rounded-xl glass backdrop-blur-md bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex-shrink-0">
                                                    <Sparkles className="w-4 h-4 text-purple-400" />
                                                </div>
                                                <p className="text-sm text-muted-foreground italic leading-relaxed">
                                                    "{currentMentor.quote}"
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* Click Hint */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 glass px-4 py-2 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-70 group-hover:opacity-100 transition-all duration-300">
                                    <span className="text-xs text-purple-300 font-medium flex items-center gap-2">
                                        <RotateCcw className="w-3 h-3" />
                                        Click to meet the other mentor
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>

                {/* Combined Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center"
                >
                    <div className="max-w-5xl mx-auto p-8 rounded-2xl glass backdrop-blur-md bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-pink-500/10 border border-purple-500/30">
                        <div className="flex justify-center mb-6">
                            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                                <Zap className="w-4 h-4 text-purple-400" />
                                <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                                    Combined Excellence
                                </span>
                            </div>
                        </div>

                        <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Industry Veterans</span>{" "}
                            Who <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Actually Build</span>
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { value: "18+", label: "Years Combined Experience", icon: Award, gradient: "from-blue-500 to-cyan-500" },
                                { value: "800+", label: "Developers Mentored", icon: Users, gradient: "from-green-500 to-emerald-500" },
                                { value: "50+", label: "Production Systems Built", icon: Target, gradient: "from-purple-500 to-pink-500" },
                                { value: "100%", label: "Practical Focus", icon: CheckCircle, gradient: "from-orange-500 to-red-500" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center p-4 rounded-xl glass backdrop-blur-md bg-white/5 border border-border/30 hover:border-purple-500/30 transition-all duration-300 group"
                                >
                                    <div className="flex justify-center mb-3">
                                        <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                                            <stat.icon className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                    <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground font-medium leading-tight">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Founder;
