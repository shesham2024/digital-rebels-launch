import { motion } from "framer-motion";
import { CheckCircle, Calendar, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function ThankYou() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto text-center"
            >
                <div className="glass backdrop-blur-md bg-white/5 border border-border/50 rounded-2xl p-8 md:p-12">
                    {/* Success Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
                        className="flex justify-center mb-6"
                    >
                        <div className="p-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shadow-2xl">
                            <CheckCircle className="w-12 h-12 text-white" />
                        </div>
                    </motion.div>

                    {/* Thank You Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Thank You for <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Registering!</span>
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            We've received your registration for the free demo session. Our team will get back to you within 24 hours to schedule your personalized demo.
                        </p>
                    </motion.div>

                    {/* Next Steps */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="space-y-4 mb-8"
                    >
                        <div className="flex items-center gap-4 p-4 rounded-xl glass backdrop-blur-md bg-white/5 border border-border/30">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                                <Mail className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-foreground">Check Your Email</h3>
                                <p className="text-sm text-muted-foreground">We've sent you a confirmation email with demo details</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-xl glass backdrop-blur-md bg-white/5 border border-border/30">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                                <Calendar className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-foreground">Demo Scheduling</h3>
                                <p className="text-sm text-muted-foreground">Our counselor will contact you to schedule your free demo</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Back to Home Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                    >
                        <Button
                            onClick={() => navigate('/')}
                            variant="outline"
                            className="glass border-border/50 hover:border-purple-500/50 hover:bg-purple-500/10"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
