import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

const guarantees = [
  { icon: Shield, text: "100% Money-Back Guarantee" },
  { icon: Clock, text: "Weekend-Friendly Schedule" },
  { icon: Award, text: "No Prior Experience Needed" },
];

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background gradient orbs */}
      <div className="absolute left-1/4 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute right-1/4 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/20 blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard
            variant="gradient"
            className="mx-auto max-w-4xl p-12 text-center"
          >
            <motion.h2
              className="font-display text-4xl font-bold md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Ready to Join the{" "}
              <span className="gradient-text">Revolution?</span>
            </motion.h2>

            <motion.p
              className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Book your free demo and start your AI journey today.
              Limited seats available for the upcoming batch.
            </motion.p>

            {/* Guarantees */}
            <motion.div
              className="my-8 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {guarantees.map((guarantee) => (
                <div
                  key={guarantee.text}
                  className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm"
                >
                  <guarantee.icon className="h-4 w-4 text-primary" />
                  <span>{guarantee.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button variant="aurora" size="xl">
                Book Free Demo
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
              <Button variant="outline" size="xl">
                Download Curriculum PDF
              </Button>
            </motion.div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
