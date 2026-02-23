import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Play,
    Pause,
    Volume2,
    VolumeX,
    Maximize,
    Minimize,
    SkipBack,
    SkipForward,
    ChevronLeft,
    ChevronRight,
    Star,
    Quote,
    Video,
    MessageSquare,
    Users,
    Sparkles,
    TrendingUp,
    Award,
    CheckCircle,
    ArrowRight,
    Loader2
} from "lucide-react";

// Enhanced Video Player Component with Navigation
const ModernVideoPlayer = ({
    videoUrl,
    isPlaying,
    onPlayStateChange,
    selectedVideo,
    onNext,
    onPrevious,
    currentIndex,
    totalVideos,
    hasNext,
    hasPrevious
}: {
    videoUrl: string;
    isPlaying: boolean;
    onPlayStateChange: (playing: boolean) => void;
    selectedVideo: any;
    onNext: () => void;
    onPrevious: () => void;
    currentIndex: number;
    totalVideos: number;
    hasNext: boolean;
    hasPrevious: boolean;
}) => {
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(1);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);
    const [showControls, setShowControls] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isBuffering, setIsBuffering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const controlsTimeoutRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        // Check if mobile device
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const updateProgress = () => {
            if (video.duration) {
                const progressPercent = (video.currentTime / video.duration) * 100;
                setProgress(progressPercent);
                setCurrentTime(video.currentTime);
            }
        };

        const handleLoadedMetadata = () => {
            setDuration(video.duration);
            setIsLoading(false);
        };

        const handleLoadStart = () => {
            setIsLoading(true);
        };

        const handleWaiting = () => {
            setIsBuffering(true);
        };

        const handleCanPlay = () => {
            setIsLoading(false);
            setIsBuffering(false);
        };

        const handlePlay = () => {
            onPlayStateChange(true);
        };

        const handlePause = () => {
            onPlayStateChange(false);
        };

        const handleEnded = () => {
            onPlayStateChange(false);
            // Auto-play next video when current ends
            if (hasNext) {
                setTimeout(() => {
                    onNext();
                }, 1000);
            }
        };

        video.addEventListener('timeupdate', updateProgress);
        video.addEventListener('loadedmetadata', handleLoadedMetadata);
        video.addEventListener('loadstart', handleLoadStart);
        video.addEventListener('waiting', handleWaiting);
        video.addEventListener('canplay', handleCanPlay);
        video.addEventListener('play', handlePlay);
        video.addEventListener('pause', handlePause);
        video.addEventListener('ended', handleEnded);

        return () => {
            video.removeEventListener('timeupdate', updateProgress);
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            video.removeEventListener('loadstart', handleLoadStart);
            video.removeEventListener('waiting', handleWaiting);
            video.removeEventListener('canplay', handleCanPlay);
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('pause', handlePause);
            video.removeEventListener('ended', handleEnded);
        };
    }, [onPlayStateChange, hasNext, onNext]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isPlaying) {
            video.play();
        } else {
            video.pause();
        }
    }, [isPlaying]);

    const togglePlay = () => {
        onPlayStateChange(!isPlaying);
    };

    const toggleMute = () => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    const handleVolumeChange = (newVolume: number) => {
        const video = videoRef.current;
        if (!video) return;

        video.volume = newVolume;
        setVolume(newVolume);
        setIsMuted(newVolume === 0);
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const video = videoRef.current;
        if (!video) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const newTime = (clickX / width) * duration;

        video.currentTime = newTime;
    };

    const skipTime = (seconds: number) => {
        const video = videoRef.current;
        if (!video) return;

        video.currentTime = Math.max(0, Math.min(video.currentTime + seconds, duration));
    };

    const toggleFullscreen = () => {
        const container = containerRef.current;
        if (!container) return;

        if (!isFullscreen) {
            if (container.requestFullscreen) {
                container.requestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
        setIsFullscreen(!isFullscreen);
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleMouseMove = () => {
        setShowControls(true);
        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current);
        }
        if (isPlaying && !isMobile) {
            controlsTimeoutRef.current = setTimeout(() => {
                setShowControls(false);
            }, 3000);
        }
    };

    const handleTouch = () => {
        setShowControls(true);
        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current);
        }
        if (isPlaying) {
            controlsTimeoutRef.current = setTimeout(() => {
                setShowControls(false);
            }, 4000);
        }
    };

    const handleVideoClick = (e: React.MouseEvent) => {
        // Don't toggle play if clicking on navigation buttons
        const target = e.target as HTMLElement;
        if (target.closest('button')) {
            return;
        }
        togglePlay();
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full bg-black rounded-2xl overflow-hidden group"
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouch}
            onMouseLeave={() => isPlaying && !isMobile && setShowControls(false)}
        >
            {/* Video Element */}
            <video
                ref={videoRef}
                src={videoUrl}
                className="w-full h-full object-contain"
                onClick={handleVideoClick}
                preload="metadata"
                playsInline
            />

            {/* Loading Overlay */}
            <AnimatePresence>
                {(isLoading || isBuffering) && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
                    >
                        <div className="flex flex-col items-center gap-3">
                            <Loader2 className="w-8 h-8 text-white animate-spin" />
                            <span className="text-white text-sm font-medium">
                                {isLoading ? 'Loading...' : 'Buffering...'}
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Video Navigation Arrows - Always Visible with High Z-Index */}
            {/* Previous Video Button */}
            {hasPrevious && (
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onPrevious();
                    }}
                    className={`absolute ${isMobile ? 'left-2 top-1/2' : 'left-4 top-1/2'
                        } transform -translate-y-1/2 flex items-center justify-center ${isMobile ? 'w-12 h-12' : 'w-14 h-14'
                        } rounded-full bg-black/80 hover:bg-black/90 text-white transition-all duration-300 backdrop-blur-sm z-[60] border-2 border-white/20 hover:border-white/40 shadow-lg`}
                    style={{ zIndex: 60 }}
                >
                    <ChevronLeft className={`${isMobile ? 'w-6 h-6' : 'w-7 h-7'}`} />
                </button>
            )}

            {/* Next Video Button */}
            {hasNext && (
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onNext();
                    }}
                    className={`absolute ${isMobile ? 'right-2 top-1/2' : 'right-4 top-1/2'
                        } transform -translate-y-1/2 flex items-center justify-center ${isMobile ? 'w-12 h-12' : 'w-14 h-14'
                        } rounded-full bg-black/80 hover:bg-black/90 text-white transition-all duration-300 backdrop-blur-sm z-[60] border-2 border-white/20 hover:border-white/40 shadow-lg`}
                    style={{ zIndex: 60 }}
                >
                    <ChevronRight className={`${isMobile ? 'w-6 h-6' : 'w-7 h-7'}`} />
                </button>
            )}

            {/* Play Button Overlay */}
            <AnimatePresence>
                {!isPlaying && !isLoading && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 flex items-center justify-center bg-black/20 z-40"
                    >
                        <motion.button
                            onClick={togglePlay}
                            className={`flex items-center justify-center ${isMobile ? 'w-16 h-16' : 'w-20 h-20'
                                } rounded-full bg-white/90 hover:bg-white transition-all duration-300 shadow-2xl z-50`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Play className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} text-black ml-1`} fill="currentColor" />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Video Counter - Mobile Optimized */}
            <div className={`absolute ${isMobile ? 'top-2 right-2' : 'top-4 right-4'} z-20`}>
                <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className={`text-white ${isMobile ? 'text-xs' : 'text-sm'} font-medium`}>
                        {currentIndex + 1} / {totalVideos}
                    </span>
                </div>
            </div>

            {/* Video Info Overlay (when not playing) - Mobile Optimized */}
            <AnimatePresence>
                {!isPlaying && !isLoading && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent ${isMobile ? 'p-4' : 'p-6'
                            } z-10`}
                        style={{
                            paddingBottom: isMobile ? '20px' : '24px',
                            paddingLeft: hasPrevious ? (isMobile ? '60px' : '80px') : (isMobile ? '16px' : '24px'),
                            paddingRight: hasNext ? (isMobile ? '60px' : '80px') : (isMobile ? '16px' : '24px')
                        }}
                    >
                        <div className="flex items-center gap-4">
                            <div className={`flex ${isMobile ? 'h-10 w-10' : 'h-12 w-12'
                                } items-center justify-center rounded-full bg-white/20 backdrop-blur-md ${isMobile ? 'text-lg' : 'text-xl'
                                } border border-white/30`}>
                                {selectedVideo?.avatar}
                            </div>
                            <div className="flex-1">
                                <p className={`font-display ${isMobile ? 'text-base' : 'text-lg'
                                    } font-semibold text-white`}>
                                    {selectedVideo?.name}
                                </p>
                                <p className={`${isMobile ? 'text-xs' : 'text-sm'
                                    } text-white/80 font-medium`}>
                                    {selectedVideo?.role}
                                </p>
                            </div>
                        </div>
                        <div className="mt-3">
                            <p className={`${isMobile ? 'text-xs' : 'text-sm'
                                } text-white/90 leading-relaxed`}>
                                "{selectedVideo?.shortQuote}"
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Controls - Mobile Optimized */}
            <AnimatePresence>
                {showControls && isPlaying && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent ${isMobile ? 'p-3' : 'p-4'
                            } z-20`}
                    >
                        {/* Progress Bar */}
                        <div
                            className={`w-full h-1 bg-white/30 rounded-full ${isMobile ? 'mb-3' : 'mb-4'
                                } cursor-pointer group/progress`}
                            onClick={handleProgressClick}
                        >
                            <div
                                className="h-full bg-white rounded-full relative transition-all duration-150"
                                style={{ width: `${progress}%` }}
                            >
                                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity duration-200 shadow-lg" />
                            </div>
                        </div>

                        {/* Control Buttons */}
                        <div className="flex items-center justify-between">
                            <div className={`flex items-center ${isMobile ? 'gap-2' : 'gap-3'}`}>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => skipTime(-10)}
                                    className={`text-white hover:bg-white/20 ${isMobile ? 'p-1.5' : 'p-2'
                                        } rounded-full touch-manipulation`}
                                >
                                    <SkipBack className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`} />
                                </Button>

                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={togglePlay}
                                    className={`text-white hover:bg-white/20 ${isMobile ? 'p-1.5' : 'p-2'
                                        } rounded-full touch-manipulation`}
                                >
                                    {isPlaying ? (
                                        <Pause className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
                                    ) : (
                                        <Play className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} fill="currentColor" />
                                    )}
                                </Button>

                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => skipTime(10)}
                                    className={`text-white hover:bg-white/20 ${isMobile ? 'p-1.5' : 'p-2'
                                        } rounded-full touch-manipulation`}
                                >
                                    <SkipForward className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`} />
                                </Button>

                                {!isMobile && (
                                    <>
                                        <div className="flex items-center gap-2">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={toggleMute}
                                                className="text-white hover:bg-white/20 p-2 rounded-full"
                                            >
                                                {isMuted || volume === 0 ? (
                                                    <VolumeX className="w-4 h-4" />
                                                ) : (
                                                    <Volume2 className="w-4 h-4" />
                                                )}
                                            </Button>

                                            <input
                                                type="range"
                                                min="0"
                                                max="1"
                                                step="0.1"
                                                value={isMuted ? 0 : volume}
                                                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                                                className="w-16 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
                                            />
                                        </div>

                                        <span className="text-white text-sm font-medium">
                                            {formatTime(currentTime)} / {formatTime(duration)}
                                        </span>
                                    </>
                                )}
                            </div>

                            {!isMobile && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={toggleFullscreen}
                                    className="text-white hover:bg-white/20 p-2 rounded-full"
                                >
                                    {isFullscreen ? (
                                        <Minimize className="w-4 h-4" />
                                    ) : (
                                        <Maximize className="w-4 h-4" />
                                    )}
                                </Button>
                            )}
                        </div>

                        {/* Mobile-only time display */}
                        {isMobile && (
                            <div className="flex justify-center mt-2">
                                <span className="text-white text-xs font-medium">
                                    {formatTime(currentTime)} / {formatTime(duration)}
                                </span>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Simplified Review Card Component with Navigation
const ReviewCard = ({
    testimonial,
    onNext,
    onPrevious,
    currentIndex,
    totalReviews,
    hasNext,
    hasPrevious
}: {
    testimonial: any;
    onNext: () => void;
    onPrevious: () => void;
    currentIndex: number;
    totalReviews: number;
    hasNext: boolean;
    hasPrevious: boolean;
}) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="relative group">
            <div className="h-full p-8 rounded-2xl glass backdrop-blur-md bg-white/5 border border-border/50 hover:border-purple-500/30 transition-all duration-300 shadow-2xl">
                {/* Navigation Arrows - Always Visible with High Z-Index */}
                {/* Previous Review Button */}
                {hasPrevious && (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onPrevious();
                        }}
                        className={`absolute ${isMobile ? 'left-2 top-1/2' : 'left-4 top-1/2'
                            } transform -translate-y-1/2 flex items-center justify-center ${isMobile ? 'w-12 h-12' : 'w-14 h-14'
                            } rounded-full bg-black/80 hover:bg-black/90 text-white transition-all duration-300 backdrop-blur-sm z-[60] border-2 border-white/20 hover:border-white/40 shadow-lg touch-manipulation`}
                        style={{ zIndex: 60 }}
                    >
                        <ChevronLeft className={`${isMobile ? 'w-6 h-6' : 'w-7 h-7'}`} />
                    </button>
                )}

                {/* Next Review Button */}
                {hasNext && (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onNext();
                        }}
                        className={`absolute ${isMobile ? 'right-2 top-1/2' : 'right-4 top-1/2'
                            } transform -translate-y-1/2 flex items-center justify-center ${isMobile ? 'w-12 h-12' : 'w-14 h-14'
                            } rounded-full bg-black/80 hover:bg-black/90 text-white transition-all duration-300 backdrop-blur-sm z-[60] border-2 border-white/20 hover:border-white/40 shadow-lg touch-manipulation`}
                        style={{ zIndex: 60 }}
                    >
                        <ChevronRight className={`${isMobile ? 'w-6 h-6' : 'w-7 h-7'}`} />
                    </button>
                )}

                {/* Review Counter */}
                <div className="absolute top-4 right-4 z-20">
                    <div className="flex items-center gap-2 glass backdrop-blur-sm px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10">
                        <span className="text-purple-300 text-sm font-medium">
                            {currentIndex + 1} / {totalReviews}
                        </span>
                    </div>
                </div>

                {/* Review Content - Centered Layout with Padding for Navigation */}
                <div
                    className="flex flex-col items-center text-center space-y-8 py-8"
                    style={{
                        paddingLeft: hasPrevious ? (isMobile ? '60px' : '80px') : '32px',
                        paddingRight: hasNext ? (isMobile ? '60px' : '80px') : '32px'
                    }}
                >
                    {/* Avatar */}
                    <div className="flex h-20 w-20 items-center justify-center rounded-full glass backdrop-blur-md bg-white/10 text-4xl border-2 border-purple-500/30 shadow-lg">
                        {testimonial.avatar}
                    </div>

                    {/* Review Text */}
                    <div className="max-w-2xl">
                        <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-medium italic">
                            "{testimonial.text}"
                        </p>
                    </div>

                    {/* Author Info */}
                    <div className="text-center">
                        <p className="font-display text-2xl font-bold text-foreground mb-1">
                            {testimonial.name}
                        </p>
                        <p className="text-lg text-muted-foreground font-medium">
                            {testimonial.role}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const videoTestimonials = [
    {
        id: 1,
        name: "Avikalp",
        role: "Software Engineer",
        avatar: "👨‍💻",
        videoUrl: "/videos/Avikalp.mp4",
        shortQuote: "The AI integration module completely transformed my approach to backend development.",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        id: 2,
        name: "Charan",
        role: "Full Stack Developer",
        avatar: "👩‍💻",
        videoUrl: "/videos/Charan.mp4",
        shortQuote: "From marketing to Microsoft in 8 months - this program made it possible.",
        gradient: "from-green-500 to-emerald-500"
    },
    {
        id: 3,
        name: "Ganesh",
        role: "Senior Backend Engineer",
        avatar: "👨‍🚀",
        videoUrl: "/videos/Ganesh.mp4",
        shortQuote: "The microservices and AI modules gave me the edge I needed for promotion.",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        id: 4,
        name: "Likhitha",
        role: "Tech Lead",
        avatar: "👨‍💼",
        videoUrl: "/videos/Likhitha.mp4",
        shortQuote: "The system design and architecture modules prepared me for leadership roles.",
        gradient: "from-orange-500 to-red-500"
    },
    {
        id: 5,
        name: "Naga Lakshmi",
        role: "Senior SDE",
        avatar: "👩‍🚀",
        videoUrl: "/videos/NagaLakshmi.mp4",
        shortQuote: "From startup to Netflix - the interview prep and advanced concepts were game-changers.",
        gradient: "from-yellow-500 to-orange-500"
    },
    {
        id: 6,
        name: "Nikhil",
        role: "Principal Engineer",
        avatar: "👨‍🎓",
        videoUrl: "/videos/Nikhil.mp4",
        shortQuote: "The fintech and payment systems module directly helped me excel at Razorpay.",
        gradient: "from-indigo-500 to-purple-500"
    },
    {
        id: 7,
        name: "Sai Kumar",
        role: "Principal Engineer",
        avatar: "👨‍🎓",
        videoUrl: "/videos/SaiKumar.mp4",
        shortQuote: "The fintech and payment systems module directly helped me excel at Razorpay.",
        gradient: "from-indigo-500 to-purple-500"
    },
    {
        id: 8,
        name: "Sai Sateesh",
        role: "Principal Engineer",
        avatar: "👨‍🎓",
        videoUrl: "/videos/SaiSateesh.mp4",
        shortQuote: "The fintech and payment systems module directly helped me excel at Razorpay.",
        gradient: "from-indigo-500 to-purple-500"
    },
    {
        id: 9,
        name: "Triveni",
        role: "Principal Engineer",
        avatar: "👨‍🎓",
        videoUrl: "/videos/Triveni.mp4",
        shortQuote: "The fintech and payment systems module directly helped me excel at Razorpay.",
        gradient: "from-indigo-500 to-purple-500"
    },
    {
        id: 10,
        name: "Tulasi",
        role: "Principal Engineer",
        avatar: "👨‍🎓",
        videoUrl: "/videos/Tulasi.mp4",
        shortQuote: "The fintech and payment systems module directly helped me excel at Razorpay.",
        gradient: "from-indigo-500 to-purple-500"
    }
];

const textTestimonials = [
    {
        id: 1,
        name: "Sneha Reddy",
        role: "Software Developer",
        avatar: "👩‍💼",
        rating: 5,
        text: "I was stuck as a junior developer for 2 years. After completing this program, I not only got promoted but also received a 45% salary increase.",
        beforeAfter: { before: "Junior Developer - 3.5 LPA", after: "Software Developer - 8 LPA" },
        gradient: "from-green-500 to-emerald-500"
    },
    {
        id: 2,
        name: "Vikash Singh",
        role: "Backend Engineer",
        avatar: "👨‍💻",
        rating: 5,
        text: "Coming from a non-CS background, I thought backend development was impossible. The mentors broke down complex concepts into digestible parts.",
        beforeAfter: { before: "Mechanical Engineer - 4 LPA", after: "Backend Engineer - 12 LPA" },
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        id: 3,
        name: "Ananya Gupta",
        role: "Full Stack Developer",
        avatar: "👩‍🚀",
        rating: 5,
        text: "The AI integration modules are pure gold! I'm now the go-to person in my team for AI-powered features.",
        beforeAfter: { before: "Frontend Developer - 6 LPA", after: "Full Stack Developer - 15 LPA" },
        gradient: "from-purple-500 to-pink-500"
    },
    {
        id: 4,
        name: "Rohit Agarwal",
        role: "Senior Software Engineer",
        avatar: "👨‍🎓",
        rating: 5,
        text: "Best investment I made in my career. The mentorship was personalized, and the projects were industry-relevant. Got placed at Amazon within 4 months!",
        beforeAfter: { before: "Fresher - 0 LPA", after: "SDE at Amazon - 28 LPA" },
        gradient: "from-orange-500 to-red-500"
    },
    {
        id: 5,
        name: "Deepika Sharma",
        role: "DevOps Engineer",
        avatar: "👩‍💻",
        rating: 5,
        text: "The cloud and DevOps modules were incredibly comprehensive. I transitioned from development to DevOps seamlessly with a 60% salary jump!",
        beforeAfter: { before: "Backend Developer - 8 LPA", after: "DevOps Engineer - 18 LPA" },
        gradient: "from-indigo-500 to-purple-500"
    },
    {
        id: 6,
        name: "Karthik Nair",
        role: "Data Engineer",
        avatar: "👨‍🔬",
        rating: 5,
        text: "The big data and streaming modules opened up a completely new career path for me. From web development to data engineering at Airbnb!",
        beforeAfter: { before: "Web Developer - 7 LPA", after: "Data Engineer - 22 LPA" },
        gradient: "from-teal-500 to-cyan-500"
    }
];

export function Testimonials() {
    const [activeTab, setActiveTab] = useState<'video' | 'text'>('video');
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const nextVideo = () => {
        if (currentVideoIndex < videoTestimonials.length - 1) {
            setCurrentVideoIndex(currentVideoIndex + 1);
            setIsVideoPlaying(false);
        }
    };

    const previousVideo = () => {
        if (currentVideoIndex > 0) {
            setCurrentVideoIndex(currentVideoIndex - 1);
            setIsVideoPlaying(false);
        }
    };

    const nextReview = () => {
        if (currentReviewIndex < textTestimonials.length - 1) {
            setCurrentReviewIndex(currentReviewIndex + 1);
        }
    };

    const previousReview = () => {
        if (currentReviewIndex > 0) {
            setCurrentReviewIndex(currentReviewIndex - 1);
        }
    };

    const selectedVideo = videoTestimonials[currentVideoIndex];
    const selectedReview = textTestimonials[currentReviewIndex];

    return (
        <section className="relative overflow-hidden py-16" id="testimonials">
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
                            className="max-w-4xl mx-auto"
                        >
                            {/* Single Video Player */}
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <div className="aspect-video">
                                    <ModernVideoPlayer
                                        videoUrl={selectedVideo?.videoUrl || ''}
                                        isPlaying={isVideoPlaying}
                                        onPlayStateChange={setIsVideoPlaying}
                                        selectedVideo={selectedVideo}
                                        onNext={nextVideo}
                                        onPrevious={previousVideo}
                                        currentIndex={currentVideoIndex}
                                        totalVideos={videoTestimonials.length}
                                        hasNext={currentVideoIndex < videoTestimonials.length - 1}
                                        hasPrevious={currentVideoIndex > 0}
                                    />
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
                            className="max-w-4xl mx-auto"
                        >
                            {/* Single Review Card */}
                            <ReviewCard
                                testimonial={selectedReview}
                                onNext={nextReview}
                                onPrevious={previousReview}
                                currentIndex={currentReviewIndex}
                                totalReviews={textTestimonials.length}
                                hasNext={currentReviewIndex < textTestimonials.length - 1}
                                hasPrevious={currentReviewIndex > 0}
                            />
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
                            Join <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">2250+</span> Success Stories
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { value: "95%", label: "Placement Rate", icon: TrendingUp, gradient: "from-green-500 to-emerald-500" },
                                { value: "40%", label: "Avg Salary Hike", icon: ArrowRight, gradient: "from-blue-500 to-cyan-500" },
                                { value: "4.9★", label: "Student Rating", icon: CheckCircle, gradient: "from-yellow-500 to-orange-500" },
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

            <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .touch-manipulation {
          touch-action: manipulation;
        }
      `}</style>
        </section>
    );
}
