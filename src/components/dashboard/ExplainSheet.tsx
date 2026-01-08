import { 
  Brain, MessageSquare, TrendingUp, TrendingDown, 
  Clock, Zap, Lightbulb, X 
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { CallData } from "./CallTimelineItem";

interface ExplainSheetProps {
  call: CallData | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ExplainSheet = ({ call, open, onOpenChange }: ExplainSheetProps) => {
  if (!call) return null;

  const sentimentDelta = call.sentiment.end - call.sentiment.start;
  const isSentimentPositive = sentimentDelta > 0;
  const totalLatency = call.latency.stt + call.latency.reasoning + call.latency.tts;

  const outcomeLabels = {
    resolved: { label: "AI Resolved", color: "text-emerald-500" },
    escalated: { label: "Escalated to Human", color: "text-amber-500" },
    hung_up: { label: "Call Ended Prematurely", color: "text-rose-400" },
  };

  const outcomeReasons = {
    resolved: "AI successfully identified the root cause and applied an automated resolution within policy parameters.",
    escalated: "Issue complexity exceeded AI confidence threshold, or customer explicitly requested human assistance.",
    hung_up: "Call terminated before resolution. Possible causes: high latency, user frustration, or environmental factors.",
  };

  const signalsDetected = {
    resolved: ["Root cause identified", "Solution within policy", "Customer satisfied"],
    escalated: ["Low confidence score", "Multi-system dependency", "Edge case detected"],
    hung_up: ["Response latency spike", "Negative sentiment trend", "Incomplete interaction"],
  };

  const recommendedFollowups = {
    resolved: ["None required — resolution confirmed"],
    escalated: ["Review escalation necessity", "Expand AI permissions for similar cases"],
    hung_up: ["Proactive callback recommended", "Investigate latency source", "Review for training data"],
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg bg-background border-border">
        <SheetHeader className="pb-4">
          <SheetTitle className="flex items-center gap-3 text-foreground">
            <div className="p-2 rounded-lg bg-primary/10">
              <Brain className="w-5 h-5 text-primary" />
            </div>
            AI Decision Explained
          </SheetTitle>
        </SheetHeader>
        
        <ScrollArea className="h-[calc(100vh-120px)] pr-4">
          <div className="space-y-6 pb-6">
            {/* Call Summary */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground tracking-wide">Issue</h3>
              <p className="text-base font-medium text-foreground">{call.reason}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>ID: {call.id}</span>
                <span>•</span>
                <span>{call.timestamp}</span>
              </div>
            </div>

            <Separator className="bg-border/50" />

            {/* Outcome */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground tracking-wide">Why {outcomeLabels[call.outcome].label}?</h3>
              <p className="text-sm text-foreground leading-relaxed">{outcomeReasons[call.outcome]}</p>
            </div>

            {/* Signals Detected */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground tracking-wide">Signals Detected</h3>
              <div className="flex flex-wrap gap-2">
                {signalsDetected[call.outcome].map((signal, i) => (
                  <Badge key={i} variant="secondary" className="text-xs font-normal">
                    {signal}
                  </Badge>
                ))}
              </div>
            </div>

            {/* AI Summary */}
            <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
              <div className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">AI Summary</p>
                  <p className="text-sm text-foreground leading-relaxed">{call.summary}</p>
                </div>
              </div>
            </div>

            <Separator className="bg-border/50" />

            {/* Performance Metrics */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-muted-foreground tracking-wide">Performance Metrics</h3>
              
              {/* Confidence */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Reasoning Confidence</span>
                  <span className="font-medium text-foreground">{call.confidence}%</span>
                </div>
                <Progress value={call.confidence} className="h-1.5" />
              </div>

              {/* Sentiment */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Sentiment Change</span>
                  <span className={`flex items-center gap-1 font-medium ${isSentimentPositive ? 'text-emerald-500' : 'text-rose-400'}`}>
                    {isSentimentPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {isSentimentPositive ? '+' : ''}{sentimentDelta}%
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>Start: {call.sentiment.start}%</span>
                  <span>→</span>
                  <span>End: {call.sentiment.end}%</span>
                </div>
              </div>

              {/* Latency Breakdown */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Total Latency</span>
                  <span className="font-medium text-foreground">{totalLatency}ms</span>
                </div>
                <div className="flex h-1.5 rounded-full overflow-hidden bg-secondary">
                  <div className="bg-primary/50" style={{ width: `${(call.latency.stt / totalLatency) * 100}%` }} />
                  <div className="bg-primary" style={{ width: `${(call.latency.reasoning / totalLatency) * 100}%` }} />
                  <div className="bg-primary/30" style={{ width: `${(call.latency.tts / totalLatency) * 100}%` }} />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>STT: {call.latency.stt}ms</span>
                  <span>Reasoning: {call.latency.reasoning}ms</span>
                  <span>TTS: {call.latency.tts}ms</span>
                </div>
              </div>
            </div>

            <Separator className="bg-border/50" />

            {/* Recommended Follow-up */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground tracking-wide flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-primary" />
                Recommended Follow-up
              </h3>
              <ul className="space-y-2">
                {recommendedFollowups[call.outcome].map((item, i) => (
                  <li key={i} className="text-sm text-foreground flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
