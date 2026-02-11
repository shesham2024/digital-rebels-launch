import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    HelpCircle,
    Sparkles,
    CheckCircle,
    Clock,
    Users,
    Shield,
    MessageCircle,
    Phone
} from "lucide-react";

const faqs = [
    {
        question: "I have no coding experience. Can I still join?",
        answer: "Absolutely! Our program is designed to take you from zero to industry-ready. We start with fundamentals and gradually build up to advanced concepts. Many of our successful alumni started with no prior coding experience.",
        category: "beginner",
        gradient: "from-green-500 to-emerald-500"
    },
    {
        question: "What if I'm already a developer but stuck at junior level?",
        answer: "Perfect! Our program focuses on advanced concepts like system design, AI integration, and leadership skills that will help you break through to senior roles. The Gen AI track especially helps you stand out.",
        category: "intermediate",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        question: "How is this different from free YouTube tutorials?",
        answer: "YouTube is great for learning basics, but lacks structure, accountability, and real-world project experience. We provide mentorship, code reviews, mock interviews, and placement support that free content can't offer.",
        category: "comparison",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        question: "What's the time commitment required?",
        answer: "Plan for 15-20 hours per week. Classes are on weekdays (evenings) with AI deep-dives on weekends. The schedule is designed to be friendly for working professionals and students.",
        category: "schedule",
        gradient: "from-orange-500 to-red-500"
    },
    {
        question: "Do you guarantee a job after completion?",
        answer: "While we can't legally guarantee employment, our 95% placement rate speaks for itself. We provide comprehensive placement support including resume building, mock interviews, and direct referrals to our 50+ hiring partners.",
        category: "placement",
        gradient: "from-indigo-500 to-purple-500"
    },
    {
        question: "What if I don't like the program after enrolling?",
        answer: "We offer a 100% money-back guarantee within the first 2 weeks. If you're not satisfied with the teaching quality or content, we'll refund your entire fee — no questions asked.",
        category: "guarantee",
        gradient: "from-teal-500 to-cyan-500"
    },
    {
        question: "Can I pay in EMIs?",
        answer: "Yes! We offer flexible payment options including no-cost EMIs through our banking partners. You can also opt for pay-after-placement options based on eligibility.",
        category: "payment",
        gradient: "from-yellow-500 to-orange-500"
    },
];

const faqStats = [
    {
        icon: CheckCircle,
        value: "95%",
        label: "Questions Resolved",
        gradient: "from-green-500 to-emerald-500"
    },
    {
        icon: Clock,
        value: "< 24hrs",
        label: "Response Time",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        icon: Users,
        value: "1000+",
        label: "Students Helped",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        icon: Shield,
        value: "100%",
        label: "Satisfaction Rate",
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

export function FAQ() {
    return (
        <section className="relative py-24 overflow-hidden" id="faqs">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-[128px] animate-pulse" />
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
                        <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
                            <HelpCircle className="w-4 h-4 text-purple-400" />
                            <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                                FAQ
                            </span>
                        </div>
                    </motion.div>

                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Got <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Questions?</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Here are answers to the most common questions we receive.
                        Can't find what you're looking for? We're here to help!
                    </p>
                </motion.div>

                {/* FAQ Stats */}
                <motion.div
                    className="mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {faqStats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -3, scale: 1.02 }}
                                className="text-center p-4 rounded-xl glass backdrop-blur-md bg-white/5 border border-border/50 hover:border-purple-500/30 transition-all duration-300 group"
                            >
                                <div className="flex justify-center mb-3">
                                    <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                                        <stat.icon className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div className={`text-xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                                    {stat.value}
                                </div>
                                <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* FAQ Accordion */}
                <motion.div
                    className="mx-auto max-w-4xl mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.01 }}
                            >
                                <AccordionItem
                                    value={`item-${index}`}
                                    className="glass backdrop-blur-md bg-white/5 rounded-2xl border border-border/50 hover:border-purple-500/30 transition-all duration-300 px-6 group overflow-hidden relative"
                                >
                                    {/* Gradient accent */}
                                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${faq.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

                                    <AccordionTrigger className="text-left font-display font-semibold hover:no-underline py-6 group-hover:text-purple-400 transition-colors duration-300">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-lg bg-gradient-to-r ${faq.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                                                <HelpCircle className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-base md:text-lg">{faq.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-6 pl-14 leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </motion.div>

                {/* Still Have Questions CTA */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="max-w-4xl mx-auto p-8 rounded-2xl glass backdrop-blur-md bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-blue-500/10 border border-purple-500/30">
                        <div className="flex justify-center mb-6">
                            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                                <Sparkles className="w-4 h-4 text-purple-400" />
                                <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                                    Still Need Help?
                                </span>
                            </div>
                        </div>

                        <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                            Can't Find Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Answer?</span>
                        </h3>

                        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                            Our counselors are here to help! Get personalized answers to your specific questions
                            and learn how our program can fit your unique career goals.
                        </p>

                        {/* Contact Options */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="p-4 rounded-xl glass backdrop-blur-md bg-white/5 border border-border/30 hover:border-green-500/30 transition-all duration-300 cursor-pointer group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg group-hover:shadow-xl transition-all duration-300">
                                        <MessageCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-foreground group-hover:text-green-400 transition-colors">
                                            Chat with Us
                                        </h4>
                                        <p className="text-sm text-muted-foreground">Get instant answers on WhatsApp</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="p-4 rounded-xl glass backdrop-blur-md bg-white/5 border border-border/30 hover:border-blue-500/30 transition-all duration-300 cursor-pointer group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg group-hover:shadow-xl transition-all duration-300">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-foreground group-hover:text-blue-400 transition-colors">
                                            Schedule a Call
                                        </h4>
                                        <p className="text-sm text-muted-foreground">Book a free consultation</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-border/20">
                            {[
                                { value: "< 2hrs", label: "Avg Response Time" },
                                { value: "500+", label: "Questions Answered Daily" },
                                { value: "24/7", label: "Support Available" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
