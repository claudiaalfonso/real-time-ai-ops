import { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, Zap, Target, Brain, ArrowUpRight, Activity, 
  Layers, Eye, BarChart3, Lightbulb, ChevronRight, X,
  Heart, TrendingUp, Users, MessageSquare, Sparkles
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const principles = [
  { icon: Zap, title: "Latency = Trust", desc: "Fast responses are not a performance metric — they are the product." },
  { icon: Target, title: "Outcomes over Interactions", desc: "We don't measure calls. We measure problems solved." },
  { icon: Brain, title: "AI Should Explain Itself", desc: "The dashboard must expose why the AI succeeded or failed." },
  { icon: ArrowUpRight, title: "Escalation Is Signal, Not Failure", desc: "Every escalation teaches the system how to improve." },
  { icon: Lightbulb, title: "The Dashboard Must Think", desc: "Not just display data — recommend actions." },
];

const layers = [
  { layer: 1, title: "What is happening right now?", desc: "Real-time operational visibility.", color: "text-primary" },
  { layer: 2, title: "Is the AI doing a good job?", desc: "AI quality, confidence, and performance.", color: "text-success" },
  { layer: 3, title: "What should we do next?", desc: "Optimization, coaching, and decision-making.", color: "text-warning" },
];

export const DashboardGuide = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-primary-foreground shadow-lg glow-primary"
        >
          <BookOpen className="w-4 h-4" />
          <span className="text-sm font-medium">Platform Guide</span>
        </motion.button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-xl bg-background border-border">
        <SheetHeader className="pb-4 border-b border-border">
          <SheetTitle className="flex items-center gap-3 text-foreground">
            <div className="p-2 rounded-lg bg-primary/20">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            ENERA AI Platform Guide
          </SheetTitle>
        </SheetHeader>
        
        <ScrollArea className="h-[calc(100vh-100px)] pr-4">
          <div className="py-6 space-y-8">
            {/* One-liner */}
            <div className="p-4 rounded-xl gradient-primary border border-primary/20">
              <p className="text-sm italic text-muted-foreground mb-1">Our Mission</p>
              <p className="text-base font-medium text-foreground">
                "ENERA AI doesn't help teams answer calls.<br />
                <span className="text-primary">It helps companies never need them.</span>"
              </p>
            </div>

            {/* First Principles */}
            <section>
              <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs">1</span>
                First Principles
              </h3>
              <div className="space-y-2">
                {principles.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-border/30"
                  >
                    <p.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{p.title}</p>
                      <p className="text-xs text-muted-foreground">{p.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Dashboard Architecture */}
            <section>
              <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs">2</span>
                Dashboard Architecture
              </h3>
              <p className="text-xs text-muted-foreground mb-3">The dashboard operates across three cognitive layers:</p>
              <div className="space-y-2">
                {layers.map((l, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border/30">
                    <span className={`text-lg font-bold ${l.color}`}>{l.layer}</span>
                    <div>
                      <p className="text-sm font-medium text-foreground">{l.title}</p>
                      <p className="text-xs text-muted-foreground">{l.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Core Modules Accordion */}
            <section>
              <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs">3</span>
                Core Modules
              </h3>
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="genome" className="border border-border/30 rounded-lg bg-secondary/30 px-3">
                  <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-3">
                    <span className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-primary" />
                      Call Genome (Not a Call Log)
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-xs text-muted-foreground pb-3 space-y-2">
                    <p>Each interaction is represented as a call genome:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li><strong>Problem Vector</strong> — charger offline, billing confusion, range anxiety</li>
                      <li><strong>AI Reasoning Confidence</strong> — "93% confidence in root cause"</li>
                      <li><strong>Latency Breakdown</strong> — STT, Reasoning, TTS</li>
                      <li><strong>User Stress Curve</strong> — Sentiment evolution throughout</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="funnel" className="border border-border/30 rounded-lg bg-secondary/30 px-3">
                  <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-3">
                    <span className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-success" />
                      Resolution Funnel
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-xs text-muted-foreground pb-3 space-y-2">
                    <p>AI-first, Human-last flow:</p>
                    <div className="font-mono text-[10px] bg-secondary/50 p-2 rounded">
                      All Calls<br />
                      ├─ Resolved by AI (68%)<br />
                      │&nbsp;&nbsp;├─ First answer (41%)<br />
                      │&nbsp;&nbsp;└─ After clarification (27%)<br />
                      ├─ Escalated to Human (7%)<br />
                      └─ Hung Up (25%)
                    </div>
                    <p>Each node explains why escalation happened and if it was avoidable.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="sentiment" className="border border-border/30 rounded-lg bg-secondary/30 px-3">
                  <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-3">
                    <span className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-destructive" />
                      Sentiment Intelligence
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-xs text-muted-foreground pb-3 space-y-2">
                    <p>Sentiment is not decoration. We track:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li><strong>Sentiment Delta</strong> — how much better the user felt</li>
                      <li><strong>Negative Recovery Rate</strong> — turning frustration around</li>
                      <li><strong>Silent Dissatisfaction</strong> — neutral calls with churn risk</li>
                    </ul>
                    <p className="text-primary">This turns emotion into a business metric.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="coaching" className="border border-border/30 rounded-lg bg-secondary/30 px-3">
                  <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-3">
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-warning" />
                      AI Coaching Layer
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-xs text-muted-foreground pb-3 space-y-2">
                    <p className="font-medium text-foreground">"This Week, ENERA AI Recommends"</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>Add charger ID clarification → −18% hang-ups</li>
                      <li>Improve grid outage context → +12% resolution</li>
                      <li>Shorten billing explanations → faster recovery</li>
                    </ul>
                    <p className="text-primary">Transforms dashboard from reporting → control system.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="escalation" className="border border-border/30 rounded-lg bg-secondary/30 px-3">
                  <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-3">
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Escalation Intelligence
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-xs text-muted-foreground pb-3 space-y-2">
                    <p>Escalations are analyzed as learning events:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>Was it necessary?</li>
                      <li>Was it too late?</li>
                      <li>Could AI solve with better context/permissions/tooling?</li>
                    </ul>
                    <p><strong className="text-foreground">Key metric:</strong> <span className="text-warning">Unnecessary Escalation Rate</span></p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Executive Metrics */}
            <section>
              <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs">4</span>
                Executive Metrics
              </h3>
              <p className="text-xs text-muted-foreground mb-3">What the VP of CS sees immediately:</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Cost per resolved issue",
                  "Resolution speed delta",
                  "AI Trust Index",
                  "Human hours saved",
                  "Churn prevented by AI",
                  "Unnecessary escalation rate"
                ].map((metric, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded bg-secondary/30 text-xs text-muted-foreground">
                    <TrendingUp className="w-3 h-3 text-success" />
                    {metric}
                  </div>
                ))}
              </div>
            </section>

            {/* Visual Language */}
            <section>
              <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs">5</span>
                Visual Language
              </h3>
              <div className="text-xs text-muted-foreground space-y-1.5 p-3 rounded-lg bg-secondary/30 border border-border/30">
                <p>• Soft gradients, no harsh charts</p>
                <p>• Cards over tables</p>
                <p>• Motion that communicates confidence</p>
                <p>• White space = authority</p>
                <p>• Minimal emojis, used intentionally</p>
                <p className="text-primary pt-2">Think Stripe × Linear × Palantir — not Zendesk.</p>
              </div>
            </section>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
