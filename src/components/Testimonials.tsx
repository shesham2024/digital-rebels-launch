import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Play,
    Star,
    Quote,
    ChevronLeft,
    ChevronRight,
    Video,
    MessageSquare,
    Users,
    Clock,
    Sparkles,
    TrendingUp,
    Award,
    CheckCircle,
    ArrowRight
} from "lucide-react";

const videoTestimonials = [
    {
        id: 1,
        name: "Rahul Sharma",
        role: "Software Engineer",
        company: "Google",
        avatar: "👨‍💻",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        duration: "2:15",
        highlight: "Got 40% salary hike",
        shortQuote: "The AI integration module completely transformed my approach to backend development.",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        id: 2,
        name: "Priya Patel",
        role: "Full Stack Developer",
        company: "Microsoft",
        avatar: "👩‍💻",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        duration: "1:45",
        highlight: "Switched from non-tech to SDE",
        shortQuote: "From marketing to Microsoft in 8 months - this program made it possible.",
        gradient: "from-green-500 to-emerald-500"
    },
    {
        id: 3,
        name: "Arjun Kumar",
        role: "Senior Backend Engineer",
        company: "Flipkart",
        avatar: "👨‍🚀",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        duration: "3:20",
        highlight: "Promoted to Senior in 6 months",
        shortQuote: "The microservices and AI modules gave me the edge I needed for promotion.",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        id: 4,
        name: "Amit Singh",
        role: "Tech Lead",
        company: "Uber",
        avatar: "👨‍💼",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        duration: "2:45",
        highlight: "Became Tech Lead",
        shortQuote: "The system design and architecture modules prepared me for leadership roles.",
        gradient: "from-orange-500 to-red-500"
    },
    {
        id: 5,
        name: "Kavya Reddy",
        role: "Senior SDE",
        company: "Netflix",
        avatar: "👩‍🚀",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        duration: "3:10",
        highlight: "Joined FAANG",
        shortQuote: "From startup to Netflix - the interview prep and advanced concepts were game-changers.",
        gradient: "from-yellow-500 to-orange-500"
    },
    {
        id: 6,
        name: "Rohan Gupta",
        role: "Principal Engineer",
        company: "Razorpay",
        avatar: "👨‍🎓",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        duration: "4:15",
        highlight: "Principal Engineer role",
        shortQuote: "The fintech and payment systems module directly helped me excel at Razorpay.",
        gradient: "from-indigo-500 to-purple-500"
    }
];

const textTestimonials = [
    {
        id: 1,
        name: "Sneha Reddy",
        role: "Software Developer",
        company: "Zomato",
        avatar: "👩‍💼",
        rating: 5,
        text: "I was stuck as a junior developer for 2 years. After completing this program, I not only got promoted but also received a 45% salary increase.",
        highlight: "45% salary increase",
        beforeAfter: { before: "Junior Developer - 3.5 LPA", after: "Software Developer - 8 LPA" },
        gradient: "from-green-500 to-emerald-500"
    },
    {
        id: 2,
        name: "Vikash Singh",
        role: "Backend Engineer",
        company: "Paytm",
        avatar: "👨‍💻",
        rating: 5,
        text: "Coming from a non-CS background, I thought backend development was impossible. The mentors broke down complex concepts into digestible parts.",
        highlight: "Non-CS to Backend Engineer",
        beforeAfter: { before: "Mechanical Engineer - 4 LPA", after: "Backend Engineer - 12 LPA" },
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        id: 3,
        name: "Ananya Gupta",
        role: "Full Stack Developer",
        company: "Swiggy",
        avatar: "👩‍🚀",
        rating: 5,
        text: "The AI integration modules are pure gold! I'm now the go-to person in my team for AI-powered features.",
        highlight: "AI Expert in team",
        beforeAfter: { before: "Frontend Developer - 6 LPA", after: "Full Stack Developer - 15 LPA" },
        gradient: "from-purple-500 to-pink-500"
    },
    {
        id: 4,
        name: "Rohit Agarwal",
        role: "Senior Software Engineer",
        company: "Amazon",
        avatar: "👨‍🎓",
        rating: 5,
        text: "Best investment I made in my career. The mentorship was personalized, and the projects were industry-relevant. Got placed at Amazon within 4 months!",
        highlight: "Placed at Amazon",
        beforeAfter: { before: "Fresher - 0 LPA", after: "SDE at Amazon - 28 LPA" },
        gradient: "from-orange-500 to-red-500"
    },
    {
        id: 5,
        name: "Deepika Sharma",
        role: "DevOps Engineer",
        company: "Atlassian",
        avatar: "👩‍💻",
        rating: 5,
        text: "The cloud and DevOps modules were incredibly comprehensive. I transitioned from development to DevOps seamlessly with a 60% salary jump!",
        highlight: "60% salary jump",
        beforeAfter: { before: "Backend Developer - 8 LPA", after: "DevOps Engineer - 18 LPA" },
        gradient: "from-indigo-500 to-purple-500"
    },
    {
        id: 6,
        name: "Karthik Nair",
        role: "Data Engineer",
        company: "Airbnb",
        avatar: "👨‍🔬",
        rating: 5,
        text: "The big data and streaming modules opened up a completely new career path for me. From web development to data engineering at Airbnb!",
        highlight: "Career pivot to Data",
        beforeAfter: { before: "Web Developer - 7 LPA", after: "Data Engineer - 22 LPA" },
        gradient: "from-teal-500 to-cyan-500"
    }
];

const ITEMS_PER_PAGE = 3;

export function Testimonials() {
    const [activeTab, setActiveTab] = useState<'video' | 'text'>('video');
    const [currentVideoPage, setCurrentVideoPage] = useState(0);
    const [currentTextPage, setCurrentTextPage] = useState(0);
    const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const totalVideoPages = Math.ceil(videoTestimonials.length / ITEMS_PER_PAGE);
    const totalTextPages = Math.ceil(textTestimonials.length / ITEMS_PER_PAGE);

    const getCurrentVideoTestimonials = () => {
        const start = currentVideoPage * ITEMS_PER_PAGE;
        return videoTestimonials.slice(start, start + ITEMS_PER_PAGE);
    };

    const getCurrentTextTestimonials = () => {
        const start = currentTextPage * ITEMS_PER_PAGE;
        return textTestimonials.slice(start, start + ITEMS_PER_PAGE);
    };

    const nextVideoPage = () => {
        setCurrentVideoPage((prev) => (prev + 1) % totalVideoPages);
        setIsVideoPlaying(false);
        setSelectedVideoIndex(0);
    };

    const prevVideoPage = () => {
        setCurrentVideoPage((prev) => (prev - 1 + totalVideoPages) % totalVideoPages);
        setIsVideoPlaying(false);
        setSelectedVideoIndex(0);
    };

    const nextTextPage = () => setCurrentTextPage((prev) => (prev + 1) % totalTextPages);
    const prevTextPage = () => setCurrentTextPage((prev) => (prev - 1 + totalTextPages) % totalTextPages);

    const handleVideoSelect = (localIndex: number) => {
        setSelectedVideoIndex(localIndex);
        setIsVideoPlaying(false);
    };

    const currentVideos = getCurrentVideoTestimonials();
    const currentTexts = getCurrentTextTestimonials();
    const selectedVideo = currentVideos[selectedVideoIndex];

    return (
        <section className="relative overflow-hidden py-24" id="testimonials">
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
                            <Award className="w-4 h-4 text-green-400" />
                            <span className="text-sm font-semibold text-green-300 uppercase tracking-wider">
                                Success Stories
                            </span>
                        </div>
                    </motion.div>

                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Real Results From <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Real People</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Don't just take our word for it — hear from developers who transformed their careers
                        and achieved their dream jobs.
                    </p>

                    {/* Tab Switcher */}
                    <div className="mt-8 inline-flex items-center gap-2 rounded-xl glass backdrop-blur-md bg-white/5 border border-border/50 p-1.5">
                        <button
                            onClick={() => setActiveTab('video')}
                            className={`flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all duration-300 ${activeTab === 'video'
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                                }`}
                        >
                            <Video className="h-4 w-4" />
                            Video Stories
                            <Badge variant="secondary" className="ml-1 bg-white/20 text-white border-none">
                                {videoTestimonials.length}
                            </Badge>
                        </button>
                        <button
                            onClick={() => setActiveTab('text')}
                            className={`flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all duration-300 ${activeTab === 'text'
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                                }`}
                        >
                            <MessageSquare className="h-4 w-4" />
                            Written Reviews
                            <Badge variant="secondary" className="ml-1 bg-white/20 text-white border-none">
                                {textTestimonials.length}
                            </Badge>
                        </button>
                    </div>
                </motion.div>

                <AnimatePresence mode="wait">
                    {/* Video Testimonials */}
                    {activeTab === 'video' && (
                        <motion.div
                            key="video"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-8"
                        >
                            {/* Main Video Player */}
                            <div className="rounded-2xl glass backdrop-blur-md bg-white/5 border border-border/50 hover:border-purple-500/30 transition-all duration-300 overflow-hidden">
                                <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                                    {/* Video thumbnail/placeholder */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-800/50 to-blue-900/30" />

                                    {!isVideoPlaying ? (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <button
                                                onClick={() => setIsVideoPlaying(true)}
                                                className="group flex flex-col items-center gap-4"
                                            >
                                                <motion.div
                                                    className="flex h-20 w-20 items-center justify-center rounded-full glass backdrop-blur-sm border-2 border-white/30 bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-purple-500/25"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Play className="h-8 w-8 text-white ml-1" />
                                                </motion.div>
                                                <div className="text-center">
                                                    <p className="font-display text-lg font-semibold text-white mb-1">
                                                        Watch {selectedVideo?.name}'s Story
                                                    </p>
                                                    <p className="text-sm text-white/80 flex items-center gap-2 justify-center">
                                                        <Clock className="w-4 h-4" />
                                                        {selectedVideo?.duration} • {selectedVideo?.highlight}
                                                    </p>
                                                </div>
                                            </button>
                                        </div>
                                    ) : (
                                        <video
                                            className="h-full w-full object-cover"
                                            controls
                                            autoPlay
                                            src={selectedVideo?.videoUrl}
                                            onEnded={() => setIsVideoPlaying(false)}
                                        />
                                    )}

                                    {/* Video Info Overlay */}
                                    {!isVideoPlaying && (
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                                            <div className="flex items-center gap-4">
                                                <div className="flex h-14 w-14 items-center justify-center rounded-full glass backdrop-blur-md bg-white/20 text-2xl border-2 border-white/30">
                                                    {selectedVideo?.avatar}
                                                </div>
                                                <div className="flex-1">
                                                    <p className="font-display text-lg font-semibold text-white">{selectedVideo?.name}</p>
                                                    <p className="text-sm text-white/80 font-medium">
                                                        {selectedVideo?.role} at <span className="text-white font-semibold">{selectedVideo?.company}</span>
                                                    </p>
                                                </div>
                                                <Badge className={`bg-gradient-to-r ${selectedVideo?.gradient} text-white border-none shadow-lg px-3 py-1`}>
                                                    {selectedVideo?.highlight}
                                                </Badge>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Video Grid with Pagination */}
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Badge className="glass backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300">
                                            <TrendingUp className="w-3 h-3 mr-1" />
                                            Success Stories
                                        </Badge>
                                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                            <Users className="h-4 w-4" />
                                            Page {currentVideoPage + 1} of {totalVideoPages}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button variant="ghost" size="icon" onClick={prevVideoPage} className="hover:bg-purple-500/10">
                                            <ChevronLeft className="h-4 w-4" />
                                        </Button>
                                        {Array.from({ length: totalVideoPages }).map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => {
                                                    setCurrentVideoPage(index);
                                                    setSelectedVideoIndex(0);
                                                    setIsVideoPlaying(false);
                                                }}
                                                className={`h-8 w-8 rounded-lg text-xs font-medium transition-all ${index === currentVideoPage
                                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                                                        : 'glass backdrop-blur-md bg-white/5 hover:bg-purple-500/10 text-muted-foreground border border-border/30'
                                                    }`}
                                            >
                                                {index + 1}
                                            </button>
                                        ))}
                                        <Button variant="ghost" size="icon" onClick={nextVideoPage} className="hover:bg-purple-500/10">
                                            <ChevronRight className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="grid gap-4 md:grid-cols-3">
                                    {currentVideos.map((video, index) => (
                                        <motion.div
                                            key={video.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ y: -3, scale: 1.02 }}
                                        >
                                            <div
                                                className={`cursor-pointer p-4 rounded-xl glass backdrop-blur-md bg-white/5 border transition-all duration-300 ${index === selectedVideoIndex
                                                        ? 'border-purple-500/50 bg-gradient-to-br from-purple-500/10 to-pink-500/10 shadow-lg'
                                                        : 'border-border/50 hover:border-purple-500/30'
                                                    }`}
                                                onClick={() => handleVideoSelect(index)}
                                            >
                                                <div className="flex items-start gap-3 mb-3">
                                                    <div className="relative">
                                                        <div className="flex h-12 w-12 items-center justify-center rounded-full glass backdrop-blur-md bg-white/10 text-xl border border-border/30">
                                                            {video.avatar}
                                                        </div>
                                                        {index === selectedVideoIndex && (
                                                            <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
                                                                <Play className="h-3 w-3 text-white" />
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="font-display font-semibold truncate text-foreground">{video.name}</p>
                                                        <p className="text-xs text-muted-foreground truncate">{video.role}</p>
                                                        <Badge variant="secondary" className="mt-1 text-xs bg-gradient-to-r from-slate-600 to-slate-700 text-white border-none font-semibold">
                                                            {video.company}
                                                        </Badge>
                                                    </div>
                                                </div>
                                                <Badge className={`w-full justify-center bg-gradient-to-r ${video.gradient} text-white border-none mb-3 font-medium`}>
                                                    {video.highlight}
                                                </Badge>
                                                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                                                    {video.shortQuote}
                                                </p>
                                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                                    <Clock className="h-3 w-3" />
                                                    {video.duration}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Text Testimonials */}
                    {activeTab === 'text' && (
                        <motion.div
                            key="text"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Badge className="glass backdrop-blur-md bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-300">
                                        <MessageSquare className="w-3 h-3 mr-1" />
                                        Written Reviews
                                    </Badge>
                                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                        <Users className="h-4 w-4" />
                                        Page {currentTextPage + 1} of {totalTextPages}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon" onClick={prevTextPage} className="hover:bg-green-500/10">
                                        <ChevronLeft className="h-4 w-4" />
                                    </Button>
                                    {Array.from({ length: totalTextPages }).map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentTextPage(index)}
                                            className={`h-8 w-8 rounded-lg text-xs font-medium transition-all ${index === currentTextPage
                                                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                                                    : 'glass backdrop-blur-md bg-white/5 hover:bg-green-500/10 text-muted-foreground border border-border/30'
                                                }`}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                    <Button variant="ghost" size="icon" onClick={nextTextPage} className="hover:bg-green-500/10">
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-3">
                                {currentTexts.map((testimonial, index) => (
                                    <motion.div
                                        key={testimonial.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                    >
                                        <div className="h-full p-6 rounded-2xl glass backdrop-blur-md bg-white/5 border border-border/50 hover:border-purple-500/30 transition-all duration-300 group">
                                            <div className="mb-4 flex items-center justify-between">
                                                <Quote className="h-8 w-8 text-purple-400/30" />
                                                <div className="flex gap-0.5">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                    ))}
                                                </div>
                                            </div>

                                            <p className="mb-6 text-sm text-foreground/90 leading-relaxed">"{testimonial.text}"</p>

                                            <div className="space-y-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-11 w-11 items-center justify-center rounded-full glass backdrop-blur-md bg-white/10 text-lg border border-border/30">
                                                        {testimonial.avatar}
                                                    </div>
                                                    <div>
                                                        <p className="font-display font-semibold text-foreground">{testimonial.name}</p>
                                                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                                                        <Badge variant="secondary" className="mt-0.5 text-xs bg-gradient-to-r from-slate-600 to-slate-700 text-white border-none font-semibold">
                                                            {testimonial.company}
                                                        </Badge>
                                                    </div>
                                                </div>

                                                <Badge className={`w-full justify-center bg-gradient-to-r ${testimonial.gradient} text-white border-none font-medium`}>
                                                    {testimonial.highlight}
                                                </Badge>

                                                <div className="rounded-lg glass backdrop-blur-md bg-white/5 border border-border/30 p-4 text-xs">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="text-muted-foreground">Before:</span>
                                                        <span className="font-medium text-red-400">{testimonial.beforeAfter.before}</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-muted-foreground">After:</span>
                                                        <span className="font-medium text-green-400">{testimonial.beforeAfter.after}</span>
                                                    </div>
                                                    <div className="mt-2 flex items-center justify-center">
                                                        <ArrowRight className="w-3 h-3 text-purple-400" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Bottom Stats Section */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="max-w-5xl mx-auto p-8 rounded-2xl glass backdrop-blur-md bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-blue-500/10 border border-purple-500/30">
                        <div className="flex justify-center mb-6">
                            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                                <Sparkles className="w-4 h-4 text-purple-400" />
                                <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                                    Proven Results
                                </span>
                            </div>
                        </div>

                        <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">
                            Join <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">500+</span> Success Stories
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { value: "95%", label: "Placement Rate", icon: TrendingUp, gradient: "from-green-500 to-emerald-500" },
                                { value: "40%", label: "Avg Salary Hike", icon: ArrowRight, gradient: "from-blue-500 to-cyan-500" },
                                { value: "4.9★", label: "Student Rating", icon: Star, gradient: "from-yellow-500 to-orange-500" },
                                { value: "100%", label: "Success Rate", icon: CheckCircle, gradient: "from-purple-500 to-pink-500" },
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
                                            <stat.icon className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                    <div className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
