import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { QUESTION_POOL } from "@/lib/eligibilityQuestions";
import { getRandomQuestions } from "@/lib/random";

const PASS_MARK = 6;

export default function EligibilityPage() {
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

  if (!questions.length) return null;

  return (
    <section className="relative py-28 bg-background overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,120,40,0.15),transparent_60%)]" />

      <div className="relative container max-w-4xl mx-auto space-y-20">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm uppercase tracking-wider">
            Skill Check
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Check Your <span className="text-gradient-rebel">Eligibility</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Answer 10 quick questions to see if you're ready for the AI era.
          </p>
        </motion.div>

        {/* QUIZ */}
        {score === null ? (
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-card/90 backdrop-blur rounded-2xl border border-primary/30 p-10 shadow-[0_0_60px_rgba(255,120,40,0.2)]"
          >
            {/* Progress */}
            <div className="mb-6 flex items-center justify-between text-sm text-muted-foreground">
              <span>
                Question {current + 1} / 10
              </span>
              <div className="h-2 w-40 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary transition-all"
                  style={{ width: `${((current + 1) / 10) * 100}%` }}
                />
              </div>
            </div>

            <p className="text-xl font-semibold mb-8">
              {questions[current].question}
            </p>

            <div className="grid gap-4">
              {questions[current].options.map((opt, idx) => {
                const active = answers[current] === idx;

                return (
                  <button
                    key={idx}
                    onClick={() => selectAnswer(idx)}
                    className={`group p-4 rounded-xl border text-left transition-all duration-300 ${
                      active
                        ? "border-primary bg-primary/10 shadow-[0_0_25px_rgba(255,120,40,0.3)]"
                        : "border-border hover:border-primary/50 hover:bg-primary/5"
                    }`}
                  >
                    <span className="font-medium">{opt}</span>
                  </button>
                );
              })}
            </div>

            <Button
              disabled={answers[current] === undefined}
              onClick={next}
              size="lg"
              className="mt-10 w-full bg-gradient-to-r from-primary via-orange-500 to-secondary shadow-[0_0_40px_rgba(255,120,40,0.4)] hover:scale-[1.02]"
            >
              {current === 9 ? "Submit Test" : "Next Question"}
            </Button>
          </motion.div>
        ) : (
          <ResultBlock score={score} />
        )}

        {/* FORM */}
        {score !== null && score >= PASS_MARK && (
          <EligibilityForm score={score} />
        )}
      </div>
    </section>
  );
}

/* ---------------- RESULT BLOCK ---------------- */

const ResultBlock = ({ score }: { score: number }) => {
  const passed = score >= PASS_MARK;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-card/90 backdrop-blur p-12 rounded-2xl border border-primary/30 text-center shadow-[0_0_60px_rgba(255,120,40,0.2)]"
    >
      <h3 className="text-4xl font-bold mb-4">Score: {score}/10</h3>

      {passed ? (
        <p className="text-green-400 text-lg font-semibold">
          🎉 You're Eligible — Complete Registration Below
        </p>
      ) : (
        <div>
          <p className="text-yellow-400 mb-8">
            Needs Basics — Talk to Our Counselor
          </p>
          <a href="https://wa.me/918501003087">
            <Button variant="neon" size="xl">
              WhatsApp Us
            </Button>
          </a>
        </div>
      )}
    </motion.div>
  );
};

/* ---------------- FORM ---------------- */

const EligibilityForm = ({ score }: { score: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-gradient-to-br from-card via-card/95 to-card/90 rounded-2xl border border-primary/30 p-12 shadow-[0_0_60px_rgba(255,120,40,0.25)]"
    >
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent" />

      <h3 className="text-3xl font-display font-bold mb-3 text-center">
        Book Your <span className="text-gradient-rebel">Free Demo</span>
      </h3>

      <p className="text-sm text-muted-foreground text-center mb-10">
        Fill this form — our team will reach out within 24 hours.
      </p>

     <form action='https://forms.zohopublic.in/rahulrocks9876543210gm1/form/eligibility/formperma/mGW2hDAjdmVuUCKPwIRC36g04JAGUz4Bq_xDskpHqss/htmlRecords/submit' name='form' id='form' method='POST' accept-charset='UTF-8'>

        {/* Hidden */}
        <input type="hidden" name="SingleLine" value={score} />
        <input type="hidden" name="SingleLine1" value="passed" />

        <input
          name="Name_First"
          placeholder="First Name"
          className="w-full px-4 py-3 rounded-xl bg-background/70 border border-border focus:border-primary focus:ring-2 focus:ring-primary/40 transition"
        />

        <input
          name="Name_Last"
          placeholder="Last Name"
          className="w-full px-4 py-3 rounded-xl bg-background/70 border border-border focus:border-primary focus:ring-2 focus:ring-primary/40 transition"
        />

        <input
          name="Email"
          placeholder="Email Address"
          className="w-full px-4 py-3 rounded-xl bg-background/70 border border-border focus:border-primary focus:ring-2 focus:ring-primary/40 transition"
        />

        <input
          name="PhoneNumber_countrycode"
          placeholder="Phone Number"
          className="w-full px-4 py-3 rounded-xl bg-background/70 border border-border focus:border-primary focus:ring-2 focus:ring-primary/40 transition"
        />

        <Button
          type="submit"
          size="xl"
          className="w-full bg-gradient-to-r from-primary via-orange-500 to-secondary hover:scale-[1.03] transition shadow-[0_0_50px_rgba(255,120,40,0.45)]"
        >
          Submit & Book Demo
        </Button>
      </form>
    </motion.div>
  );
};
