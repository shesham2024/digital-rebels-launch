import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { QUESTION_POOL } from "@/lib/eligibilityQuestions";
import { getRandomQuestions } from "@/lib/random";
import { CheckCircle, Target, Zap, Users, ArrowRight, Brain, ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import invokelogo from "../assets/invokelogo.png";

const PASS_MARK = 6;

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

export function EligibilityQuiz() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<typeof QUESTION_POOL>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    setQuestions(getRandomQuestions(QUESTION_POOL, 10));
  }, []);

  const selectAnswer = (index: number) => {
    const updated = [...answers];
    updated[current] = index;
    setAnswers(updated);
  };

  const next = () => {
    if (current < 9) setCurrent(current + 1);
    else calculateScore();
  };

  const calculateScore = () => {
    let s = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correct) s++;
    });
    setScore(s);
  };

  const resetQuiz = () => {
    setQuestions(getRandomQuestions(QUESTION_POOL, 10));
    setCurrent(0);
    setAnswers([]);
    setScore(null);
  };

  const goHome = () => {
    navigate('/');
  };

  if (!questions.length) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Custom Header */}
      <motion.header
        className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo Section */}
            <motion.div
              className="flex items-center gap-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-lg"></div>
                <div className="relative flex items-center justify-center h-12 w-12 rounded-2xl overflow-hidden glass backdrop-blur-md bg-white/5 border border-purple-500/30">
                  <img
                    src={invokelogo}
                    alt="InvokeIt Logo"
                    className="h-8 w-8 object-contain"
                  />
                </div>
              </div>
              <div>
                <h1 className="font-display text-lg font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  InvokeIt
                </h1>
                <p className="text-xs text-muted-foreground font-medium">
                  Eligibility Quiz
                </p>
              </div>
            </motion.div>

            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                variant="outline"
                onClick={goHome}
                className="border-purple-500/30 hover:bg-purple-500/10"
              >
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <section className="relative py-12 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-[200px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 max-w-4xl">
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
                <Brain className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                  Skill Check
                </span>
              </div>
            </motion.div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Check Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Eligibility</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Answer 10 quick questions to see if you're ready for the AI era.
              Get instant feedback on your programming knowledge and career readiness.
            </p>
          </motion.div>

          {/* Quiz Content */}
          {score === null ? (
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="p-8 rounded-2xl glass backdrop-blur-md bg-white/5 border border-border/50 hover:border-purple-500/30 transition-all duration-300 shadow-2xl shadow-purple-500/10">
                {/* Progress Section */}
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 glass px-3 py-1 rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
                      <Target className="w-3 h-3 text-blue-400" />
                      <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">
                        Question {current + 1} / 10
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground font-medium">Progress</span>
                    <div className="h-2 w-32 bg-muted/30 rounded-full overflow-hidden glass backdrop-blur-sm">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: `${((current + 1) / 10) * 100}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Question */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8"
                >
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground leading-relaxed">
                    {questions[current].question}
                  </h3>
                </motion.div>

                {/* Answer Options */}
                <motion.div
                  className="grid gap-4 mb-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {questions[current].options.map((opt, idx) => {
                    const active = answers[current] === idx;

                    return (
                      <motion.button
                        key={idx}
                        variants={itemVariants}
                        onClick={() => selectAnswer(idx)}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className={`group p-4 rounded-xl border text-left transition-all duration-300 ${active
                            ? "border-purple-500/50 bg-gradient-to-r from-purple-500/20 to-pink-500/10 shadow-lg shadow-purple-500/20"
                            : "border-border/50 bg-white/5 hover:border-purple-500/30 hover:bg-purple-500/5"
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${active
                              ? "border-purple-400 bg-purple-400"
                              : "border-muted-foreground/50 group-hover:border-purple-400/70"
                            }`}>
                            {active && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-full h-full rounded-full bg-white/90"
                              />
                            )}
                          </div>
                          <span className="font-medium text-foreground group-hover:text-purple-300 transition-colors duration-300">
                            {opt}
                          </span>
                        </div>
                      </motion.button>
                    );
                  })}
                </motion.div>

                {/* Next Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    disabled={answers[current] === undefined}
                    onClick={next}
                    size="lg"
                    variant="aurora"
                    className="w-full shadow-2xl shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {current === 9 ? "Submit Test" : "Next Question"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <ResultBlock score={score} onRetake={resetQuiz} />
          )}

          {/* Form Section */}
          {score !== null && score >= PASS_MARK && (
            <EligibilityForm score={score} />
          )}
        </div>
      </section>
    </div>
  );
}

/* ---------------- RESULT BLOCK ---------------- */
const ResultBlock = ({ score, onRetake }: { score: number; onRetake: () => void }) => {
  const passed = score >= PASS_MARK;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="p-8 rounded-2xl glass backdrop-blur-md bg-white/5 border border-border/50 text-center shadow-2xl shadow-purple-500/10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
          className="mb-6"
        >
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${passed
              ? "bg-gradient-to-r from-green-500 to-emerald-500"
              : "bg-gradient-to-r from-yellow-500 to-orange-500"
            } shadow-lg`}>
            <span className="text-3xl font-bold text-white">{score}</span>
          </div>
        </motion.div>

        <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Your Score: <span className={passed ? "text-green-400" : "text-yellow-400"}>{score}/10</span>
        </h3>

        {passed ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <p className="text-green-400 text-lg font-semibold">
                🎉 Congratulations! You're Eligible
              </p>
            </div>
            <p className="text-muted-foreground mb-6">
              Complete your registration below to secure your spot in our program.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-yellow-400 text-lg font-semibold mb-4">
              You need some basics first - Let's talk to our counselor
            </p>
            <p className="text-muted-foreground mb-6">
              Don't worry! Our counselors will help you get started on the right path.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="aurora"
                size="lg"
                asChild
                className="shadow-lg shadow-green-500/25"
              >
                <a href="https://wa.me/918501003087" target="_blank" rel="noopener noreferrer">
                  <Users className="mr-2 h-5 w-5" />
                  WhatsApp Counselor
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onRetake}
                className="border-purple-500/30 hover:bg-purple-500/10"
              >
                Retake Quiz
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

/* ---------------- FORM ---------------- */
const EligibilityForm = ({ score }: { score: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="p-8 rounded-2xl glass backdrop-blur-md bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-purple-500/10 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

        <div className="text-center mb-8">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Book Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Free Demo</span>
          </h3>
          <p className="text-muted-foreground">
            Fill this form — our team will reach out within 24 hours.
          </p>
        </div>

        <form
          action='https://forms.zohopublic.in/rahulrocks9876543210gm1/form/eligibility/formperma/mGW2hDAjdmVuUCKPwIRC36g04JAGUz4Bq_xDskpHqss/htmlRecords/submit'
          name='form'
          id='form'
          method='POST'
          acceptCharset='UTF-8'
          className="space-y-6"
        >
          {/* Hidden Fields */}
          <input type="hidden" name="SingleLine" value={score} />
          <input type="hidden" name="SingleLine1" value="passed" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <input
                name="Name_First"
                placeholder="First Name"
                required
                className="w-full px-4 py-3 rounded-xl bg-background/70 border border-border/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <input
                name="Name_Last"
                placeholder="Last Name"
                required
                className="w-full px-4 py-3 rounded-xl bg-background/70 border border-border/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <input
              name="Email"
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 rounded-xl bg-background/70 border border-border/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <input
              name="PhoneNumber_countrycode"
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full px-4 py-3 rounded-xl bg-background/70 border border-border/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type="submit"
              size="lg"
              variant="aurora"
              className="w-full shadow-2xl shadow-purple-500/30 font-semibold"
            >
              Submit & Book Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </form>
      </div>
    </motion.div>
  );
};
