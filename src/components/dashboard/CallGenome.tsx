import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Phone, Clock, Brain, MessageSquare, ChevronRight, 
  CheckCircle, UserX, ArrowUpRight, Zap, Activity
} from "lucide-react";

interface CallData {
  id: string;
  reason: string;
  outcome: "resolved" | "escalated" | "hung_up";
  confidence: number;
  latency: { stt: number; reasoning: number; tts: number };
  sentiment: { start: number; end: number };
  duration: string;
  summary: string;
  timestamp: string;
}

const mockCalls: CallData[] = [
  {
    id: "CG-001",
    reason: "Charger offline — Station ID #4782",
    outcome: "resolved",
    confidence: 94,
    latency: { stt: 180, reasoning: 420, tts: 150 },
    sentiment: { start: 32, end: 78 },
    duration: "2:34",
    summary: "Customer reported charger not responding. AI identified firmware sync issue, initiated remote restart. Charging resumed successfully.",
    timestamp: "2 min ago"
  },
  {
    id: "CG-002",
    reason: "Billing discrepancy — €47.50",
    outcome: "resolved",
    confidence: 89,
    latency: { stt: 195, reasoning: 380, tts: 145 },
    sentiment: { start: 25, end: 85 },
    duration: "1:52",
    summary: "Customer disputed overnight charging fee. AI explained time-of-use rates, applied €12 goodwill credit per policy.",
    timestamp: "5 min ago"
  },
  {
    id: "CG-003",
    reason: "Connectivity issues — Berlin grid",
    outcome: "escalated",
    confidence: 67,
    latency: { stt: 210, reasoning: 890, tts: 165 },
    sentiment: { start: 18, end: 42 },
    duration: "4:12",
    summary: "Multiple station outage affecting 12 chargers. AI detected systemic issue beyond self-resolution capabilities. Escalated to grid ops team.",
    timestamp: "8 min ago"
  },
  {
    id: "CG-004",
    reason: "App login failure",
    outcome: "hung_up",
    confidence: 45,
    latency: { stt: 175, reasoning: 1200, tts: 0 },
    sentiment: { start: 55, end: 22 },
    duration: "0:47",
    summary: "Customer disconnected before AI could complete authentication troubleshooting. Likely frustration with response latency.",
    timestamp: "12 min ago"
  },
];

const OutcomeBadge = ({ outcome }: { outcome: CallData["outcome"] }) => {
  const styles = {
    resolved: "bg-success/15 text-success border-success/30",
    escalated: "bg-warning/15 text-warning border-warning/30",
    hung_up: "bg-destructive/15 text-destructive border-destructive/30",
  };
  
  const icons = {
    resolved: CheckCircle,
    escalated: ArrowUpRight,
    hung_up: UserX,
  };
  
  const labels = {
    resolved: "AI Resolved",
    escalated: "Escalated",
    hung_up: "Hung Up",
  };
  
  const Icon = icons[outcome];
  
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${styles[outcome]}`}>
      <Icon className="w-3 h-3" />
      {labels[outcome]}
    </span>
  );
};

const SentimentBar = ({ start, end }: { start: number; end: number }) => {
  const delta = end - start;
  const isPositive = delta > 0;
  
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">Sentiment</span>
        <span className={isPositive ? "text-success" : "text-destructive"}>
          {isPositive ? "+" : ""}{delta}%
        </span>
      </div>
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${end}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`h-full rounded-full ${
            end > 60 ? "bg-success" : end > 40 ? "bg-warning" : "bg-destructive"
          }`}
        />
      </div>
    </div>
  );
};

const LatencyBreakdown = ({ latency }: { latency: CallData["latency"] }) => {
  const total = latency.stt + latency.reasoning + latency.tts;
  
  return (
    <div className="space-y-2">
      <p className="text-xs text-muted-foreground">Latency Breakdown</p>
      <div className="flex h-2 rounded-full overflow-hidden bg-secondary">
        <div className="bg-primary/70" style={{ width: `${(latency.stt / total) * 100}%` }} />
        <div className="bg-primary" style={{ width: `${(latency.reasoning / total) * 100}%` }} />
        <div className="bg-primary/50" style={{ width: `${(latency.tts / total) * 100}%` }} />
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>STT: {latency.stt}ms</span>
        <span>Reasoning: {latency.reasoning}ms</span>
        <span>TTS: {latency.tts}ms</span>
      </div>
    </div>
  );
};

export const CallGenome = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Call Genome</h2>
          <p className="text-sm text-muted-foreground">Real-time AI interaction analysis</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
          Live
        </div>
      </div>

      <div className="space-y-3">
        {mockCalls.map((call, index) => (
          <motion.div
            key={call.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-xl overflow-hidden"
          >
            <div
              onClick={() => setExpandedId(expandedId === call.id ? null : call.id)}
              className="p-4 cursor-pointer hover:bg-secondary/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className={`p-2 rounded-lg ${
                    call.outcome === "resolved" ? "bg-success/10" :
                    call.outcome === "escalated" ? "bg-warning/10" : "bg-destructive/10"
                  }`}>
                    <Phone className={`w-4 h-4 ${
                      call.outcome === "resolved" ? "text-success" :
                      call.outcome === "escalated" ? "text-warning" : "text-destructive"
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{call.reason}</p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {call.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Brain className="w-3 h-3" />
                        {call.confidence}% confidence
                      </span>
                      <span className="flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        {call.latency.stt + call.latency.reasoning + call.latency.tts}ms total
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <OutcomeBadge outcome={call.outcome} />
                  <span className="text-xs text-muted-foreground">{call.timestamp}</span>
                  <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform ${
                    expandedId === call.id ? "rotate-90" : ""
                  }`} />
                </div>
              </div>
            </div>

            <AnimatePresence>
              {expandedId === call.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="border-t border-border/50"
                >
                  <div className="p-4 bg-secondary/20 space-y-4">
                    <div className="flex items-start gap-2">
                      <MessageSquare className="w-4 h-4 text-primary mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">AI Summary</p>
                        <p className="text-sm text-foreground">{call.summary}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <SentimentBar start={call.sentiment.start} end={call.sentiment.end} />
                      <LatencyBreakdown latency={call.latency} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};