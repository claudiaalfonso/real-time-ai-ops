import { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, Zap, Target, Brain, ArrowUpRight, Activity, 
  Lightbulb, Heart, TrendingUp, Users, Sparkles
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const principles = [
  { icon: Zap, title: "Latency = Trust", desc: "Fast responses are not a performance metric — they are the product." },
  { icon: Target, title: "Outcomes over Interactions", desc: "We don't measure calls. We measure problems solved." },
  { icon: Brain, title: "AI Should Explain Itself", desc: "The dashboard must expose why the AI succeeded or failed." },
  { icon: ArrowUpRight, title: "Escalation Is Signal, Not Failure", desc: "Every escalation teaches the system how to improve." },
  { icon: Lightbulb, title: "The Dashboard Must Think", desc: "Not just display data — recommend actions." },
];

const layers = [
  { layer: 1, title: "What is happening right now?", desc: "Real-time operational visibility.", color: "text-primary" },
  { layer: 2, title: "Is the AI doing a good job?", desc: "AI quality, confidence, and performance.", color: "text-emerald-500" },
  { layer: 3, title: "What should we do next?", desc: "Optimization, coaching, and decision-making.", color: "text-amber-500" },
];

const modules = [
  { icon: Activity, title: "Call Genome", desc: "Each interaction analyzed by problem vector, AI confidence, latency breakdown, and user sentiment." },
  { icon: TrendingUp, title: "Resolution Funnel", desc: "AI-first, Human-last flow showing how problems resolve across the system." },
  { icon: Heart, title: "Sentiment Intelligence", desc: "Emotional journey analysis turning user feelings into actionable business metrics." },
  { icon: Sparkles, title: "AI Coaching", desc: "Weekly recommendations with impact estimates and one-click policy updates." },
  { icon: Users, title: "Escalation Intelligence", desc: "Understanding why AI escalates and identifying avoidable interventions." },
];

export const DashboardGuide = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg gap-2"
          size="sm"
        >
          <BookOpen className="w-4 h-4" />
          Platform Guide
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-xl bg-background border-border/50">
        <SheetHeader className="pb-6">
          <SheetTitle className="flex items-center gap-3 text-xl font-semibold text-foreground">
            <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            ENERA AI Platform
          </SheetTitle>
        </SheetHeader>
        
        <ScrollArea className="h-[calc(100vh-140px)] pr-4">
          <div className="space-y-8 pb-8">
            {/* Mission Card */}
            <Card className="bg-muted/30 border-border/40 rounded-xl">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-2">Our Mission</p>
                <p className="text-lg font-medium text-foreground leading-relaxed">
                  "ENERA AI doesn't help teams answer calls.
                  <br />
                  <span className="text-primary">It helps companies never need them.</span>"
                </p>
              </CardContent>
            </Card>

            {/* First Principles */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold">1</span>
                <h3 className="text-sm font-semibold text-foreground tracking-wide">First Principles</h3>
              </div>
              <div className="space-y-2">
                {principles.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Card className="bg-muted/20 border-border/30 rounded-lg">
                      <CardContent className="p-4 flex items-start gap-3">
                        <div className="p-1.5 rounded-md bg-primary/10 shrink-0">
                          <p.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{p.title}</p>
                          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{p.desc}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            <Separator className="bg-border/40" />

            {/* Dashboard Architecture */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold">2</span>
                <h3 className="text-sm font-semibold text-foreground tracking-wide">Dashboard Architecture</h3>
              </div>
              <p className="text-xs text-muted-foreground">The dashboard operates across three cognitive layers:</p>
              <div className="space-y-2">
                {layers.map((l) => (
                  <Card key={l.layer} className="bg-muted/20 border-border/30 rounded-lg">
                    <CardContent className="p-4 flex items-center gap-4">
                      <span className={`text-2xl font-bold ${l.color}`}>{l.layer}</span>
                      <div>
                        <p className="text-sm font-medium text-foreground">{l.title}</p>
                        <p className="text-xs text-muted-foreground">{l.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <Separator className="bg-border/40" />

            {/* Core Modules */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold">3</span>
                <h3 className="text-sm font-semibold text-foreground tracking-wide">Core Modules</h3>
              </div>
              <div className="grid gap-2">
                {modules.map((m, i) => (
                  <Card key={i} className="bg-muted/20 border-border/30 rounded-lg">
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="p-1.5 rounded-md bg-muted/50 shrink-0">
                        <m.icon className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{m.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{m.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
