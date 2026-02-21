import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle, XCircle, User, Mail, Phone, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

interface UserDetails {
    name: string;
    email: string;
    phone: string;
    education: string;
    experience: string;
}

const quizQuestions: Question[] = [
    {
        id: 1,
        question: "What is the primary advantage of using AI in modern web development?",
        options: [
            "Faster loading times",
            "Automated code generation and optimization",
            "Better color schemes",
            "Smaller file sizes"
        ],
        correctAnswer: 1,
        explanation: "AI helps automate code generation, optimize performance, and enhance development workflows."
    },
    {
        id: 2,
        question: "Which technology is essential for building modern full-stack applications?",
        options: [
            "jQuery and PHP",
            "React/Next.js with Node.js",
            "HTML and CSS only",
            "Flash and ActionScript"
        ],
        correctAnswer: 1,
        explanation: "Modern full-stack development relies on frameworks like React/Next.js for frontend and Node.js for backend."
    },
    {
        id: 3,
        question: "What is the most important skill for a developer in 2024?",
        options: [
            "Memorizing syntax",
            "AI integration and prompt engineering",
            "Using outdated frameworks",
            "Working in isolation"
        ],
        correctAnswer: 1,
        explanation: "AI integration and prompt engineering are crucial skills for modern developers to stay competitive."
    },
    {
        id: 4,
        question: "Which approach is best for learning new technologies?",
        options: [
            "Only reading documentation",
            "Building real projects with mentorship",
            "Watching videos without practice",
            "Copying code without understanding"
        ],
        correctAnswer: 1,
        explanation: "Hands-on project building with proper mentorship ensures practical learning and skill retention."
    },
    {
        id: 5,
        question: "What makes a developer job-ready in today's market?",
        options: [
            "Knowing only one programming language",
            "Having certificates without projects",
            "Full-stack skills with AI integration",
            "Only theoretical knowledge"
        ],
        correctAnswer: 2,
        explanation: "Modern employers seek developers with full-stack capabilities and AI integration skills backed by real projects."
    }
];

const Quiz = () => {
    const [currentStep, setCurrentStep] = useState<'details' | 'quiz' | 'results'>('details');
    const [userDetails, setUserDetails] = useState<UserDetails>({
        name: '',
        email: '',
        phone: '',
        education: '',
        experience: ''
    });
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
    const [showExplanation, setShowExplanation] = useState(false);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const { toast } = useToast();

    const handleDetailsSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!userDetails.name || !userDetails.email || !userDetails.phone) {
            toast({
                title: "Missing Information",
                description: "Please fill in all required fields.",
                variant: "destructive"
            });
            return;
        }
        setCurrentStep('quiz');
    };

    const handleAnswerSelect = (answerIndex: number) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[currentQuestion] = answerIndex;
        setSelectedAnswers(newAnswers);
        setShowExplanation(true);
    };

    const handleNextQuestion = () => {
        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setShowExplanation(false);
        } else {
            setQuizCompleted(true);
            setCurrentStep('results');
            // Here you would typically send the lead data to your backend
            submitLead();
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setShowExplanation(selectedAnswers[currentQuestion - 1] !== undefined);
        }
    };

    const submitLead = async () => {
        const score = calculateScore();
        const leadData = {
            ...userDetails,
            score,
            totalQuestions: quizQuestions.length,
            answers: selectedAnswers,
            timestamp: new Date().toISOString()
        };

        // Here you would send leadData to your backend/CRM
        console.log('Lead Data:', leadData);

        toast({
            title: "Quiz Completed!",
            description: "Your results have been saved. We'll contact you soon!",
        });
    };

    const calculateScore = () => {
        return selectedAnswers.reduce((score, answer, index) => {
            return score + (answer === quizQuestions[index].correctAnswer ? 1 : 0);
        }, 0);
    };

    const getQualificationStatus = () => {
        const score = calculateScore();
        const percentage = (score / quizQuestions.length) * 100;

        if (percentage >= 80) return { status: 'Excellent', color: 'text-green-500', message: 'You\'re perfect for our advanced track!' };
        if (percentage >= 60) return { status: 'Good', color: 'text-blue-500', message: 'You qualify for our program!' };
        if (percentage >= 40) return { status: 'Fair', color: 'text-yellow-500', message: 'You can join with our foundation module!' };
        return { status: 'Needs Improvement', color: 'text-red-500', message: 'Our beginner track is perfect for you!' };
    };

    // User Details Form
    if (currentStep === 'details') {
        return (
            <div className="min-h-screen bg-background py-12">
                <div className="container mx-auto px-4 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-8"
                    >
                        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Check If You <span className="text-gradient-rebel">Qualify</span>
                        </h1>
                        <p className="text-muted-foreground">
                            Take our quick assessment to see if you're ready for the InvokeIt program
                        </p>
                    </motion.div>

                    <Card className="p-8">
                        <form onSubmit={handleDetailsSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="name">Full Name *</Label>
                                    <Input
                                        id="name"
                                        value={userDetails.name}
                                        onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="email">Email Address *</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={userDetails.email}
                                        onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="phone">Phone Number *</Label>
                                    <Input
                                        id="phone"
                                        value={userDetails.phone}
                                        onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="education">Education Level</Label>
                                    <select
                                        id="education"
                                        value={userDetails.education}
                                        onChange={(e) => setUserDetails({ ...userDetails, education: e.target.value })}
                                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                                    >
                                        <option value="">Select your education</option>
                                        <option value="2nd Year BTech">2nd Year BTech</option>
                                        <option value="3rd Year BTech">3rd Year BTech</option>
                                        <option value="4th Year BTech">4th Year BTech</option>
                                        <option value="MCA">MCA</option>
                                        <option value="Recent Graduate">Recent Graduate</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="experience">Experience Level</Label>
                                <select
                                    id="experience"
                                    value={userDetails.experience}
                                    onChange={(e) => setUserDetails({ ...userDetails, experience: e.target.value })}
                                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                                >
                                    <option value="">Select your experience</option>
                                    <option value="No Experience">No Experience</option>
                                    <option value="0-1 Years">0-1 Years</option>
                                    <option value="1-3 Years">1-3 Years</option>
                                    <option value="3-5 Years">3-5 Years</option>
                                    <option value="5+ Years">5+ Years</option>
                                </select>
                            </div>

                            <Button type="submit" variant="rebel" size="lg" className="w-full">
                                Start Quiz Assessment
                                <ChevronRight className="w-5 h-5" />
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        );
    }

    // Quiz Section
    if (currentStep === 'quiz') {
        const question = quizQuestions[currentQuestion];
        const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

        return (
            <div className="min-h-screen bg-background py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Progress Bar */}
                    <div className="mb-8">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">
                                Question {currentQuestion + 1} of {quizQuestions.length}
                            </span>
                            <span className="text-sm text-muted-foreground">
                                {Math.round(progress)}% Complete
                            </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                            <motion.div
                                className="bg-primary h-2 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    </div>

                    <Card className="p-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentQuestion}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="font-display text-xl md:text-2xl font-bold mb-6">
                                    {question.question}
                                </h2>

                                <div className="space-y-3 mb-6">
                                    {question.options.map((option, index) => (
                                        <motion.button
                                            key={index}
                                            onClick={() => handleAnswerSelect(index)}
                                            disabled={showExplanation}
                                            className={`w-full p-4 text-left rounded-lg border transition-all duration-200 ${selectedAnswers[currentQuestion] === index
                                                    ? index === question.correctAnswer
                                                        ? 'border-green-500 bg-green-50 dark:bg-green-950'
                                                        : 'border-red-500 bg-red-50 dark:bg-red-950'
                                                    : showExplanation && index === question.correctAnswer
                                                        ? 'border-green-500 bg-green-50 dark:bg-green-950'
                                                        : 'border-border hover:border-primary'
                                                }`}
                                            whileHover={{ scale: showExplanation ? 1 : 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span>{option}</span>
                                                {showExplanation && selectedAnswers[currentQuestion] === index && (
                                                    index === question.correctAnswer ? (
                                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                                    ) : (
                                                        <XCircle className="w-5 h-5 text-red-500" />
                                                    )
                                                )}
                                                {showExplanation && index === question.correctAnswer && selectedAnswers[currentQuestion] !== index && (
                                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                                )}
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>

                                {showExplanation && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-muted rounded-lg mb-6"
                                    >
                                        <p className="text-sm text-muted-foreground">
                                            <strong>Explanation:</strong> {question.explanation}
                                        </p>
                                    </motion.div>
                                )}

                                <div className="flex justify-between">
                                    <Button
                                        onClick={handlePreviousQuestion}
                                        disabled={currentQuestion === 0}
                                        variant="outline"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                        Previous
                                    </Button>

                                    <Button
                                        onClick={handleNextQuestion}
                                        disabled={!showExplanation}
                                        variant="rebel"
                                    >
                                        {currentQuestion === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next'}
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </Card>
                </div>
            </div>
        );
    }

    // Results Section
    if (currentStep === 'results') {
        const score = calculateScore();
        const percentage = (score / quizQuestions.length) * 100;
        const qualification = getQualificationStatus();

        return (
            <div className="min-h-screen bg-background py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-8"
                    >
                        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Quiz <span className="text-gradient-rebel">Results</span>
                        </h1>
                        <p className="text-muted-foreground">
                            Here's how you performed, {userDetails.name}!
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Score Card */}
                        <Card className="p-8 text-center">
                            <div className="mb-6">
                                <div className="text-6xl font-bold text-primary mb-2">
                                    {Math.round(percentage)}%
                                </div>
                                <p className="text-muted-foreground">
                                    {score} out of {quizQuestions.length} correct
                                </p>
                            </div>

                            <div className={`text-xl font-semibold mb-2 ${qualification.color}`}>
                                {qualification.status}
                            </div>
                            <p className="text-muted-foreground mb-6">
                                {qualification.message}
                            </p>

                            <Button variant="rebel" size="lg" className="w-full">
                                Join Us Now
                            </Button>
                        </Card>

                        {/* Next Steps */}
                        <Card className="p-8">
                            <h3 className="font-display text-xl font-bold mb-4">What's Next?</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs font-bold text-primary">1</span>
                                    </div>
                                    <div>
                                        <p className="font-medium">Personal Consultation</p>
                                        <p className="text-sm text-muted-foreground">
                                            Our team will contact you within 24 hours for a detailed discussion
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs font-bold text-primary">2</span>
                                    </div>
                                    <div>
                                        <p className="font-medium">Customized Learning Path</p>
                                        <p className="text-sm text-muted-foreground">
                                            Get a personalized curriculum based on your assessment
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs font-bold text-primary">3</span>
                                    </div>
                                    <div>
                                        <p className="font-medium">Start Your Journey</p>
                                        <p className="text-sm text-muted-foreground">
                                            Begin your transformation into a Digital Rebel
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Contact Info */}
                    <Card className="p-6 mt-8 bg-primary/5">
                        <div className="text-center">
                            <p className="text-sm text-muted-foreground mb-2">
                                Questions? Contact us directly:
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 text-sm">
                                <span>📧 hello@InvokeIt.com</span>
                                <span>📱 +91 9876543210</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }

    return null;
};

export default Quiz;
