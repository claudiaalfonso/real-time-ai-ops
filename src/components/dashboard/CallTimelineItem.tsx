import { 
  Phone, Clock, Brain, Zap, ChevronRight, 
  CheckCircle, ArrowUpRight, UserX, HelpCircle
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export interface CallData {
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

interface CallTimelineItemProps {
  call: CallData;
  onExpand: () => void;
  onExplain: () => void;
}

const OutcomeBadge = ({ outcome }: { outcome: CallData["outcome"] }) => {
  const config = {
    resolved: { 
      label: "AI Resolved", 
      icon: CheckCircle, 
      className: "border-emerald-500/30 text-emerald-500" 
    },
    escalated: { 
      label: "Escalated", 
      icon: ArrowUpRight, 
      className: "border-amber-500/30 text-amber-500" 
    },
    hung_up: { 
      label: "Hung Up", 
      icon: UserX, 
      className: "border-rose-400/30 text-rose-400/80" 
    },
  };
  
  const { label, icon: Icon, className } = config[outcome];
  
  return (
    <Badge variant="outline" className={`text-xs py-0.5 px-2 font-medium ${className}`}>
      <Icon className="w-3 h-3 mr-1" />
      {label}
    </Badge>
  );
};

export const CallTimelineItem = ({ call, onExpand, onExplain }: CallTimelineItemProps) => {
  const totalLatency = call.latency.stt + call.latency.reasoning + call.latency.tts;
  
  const statusIconStyles = {
    resolved: "bg-emerald-500/10 text-emerald-500",
    escalated: "bg-amber-500/10 text-amber-500",
    hung_up: "bg-rose-400/10 text-rose-400",
  };

  return (
    <TooltipProvider delayDuration={200}>
      <Card className="bg-card/50 border-border/40 rounded-xl hover:border-border/60 transition-colors duration-150 overflow-hidden">
        <div className="p-4">
          <div className="flex items-start gap-3">
            {/* Status Icon */}
            <div className={`p-2 rounded-lg shrink-0 ${statusIconStyles[call.outcome]}`}>
              <Phone className="w-4 h-4" />
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="text-sm font-medium text-foreground leading-snug">{call.reason}</h4>
                <OutcomeBadge outcome={call.outcome} />
              </div>
              
              {/* Meta Row */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
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
                  {totalLatency}ms
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 shrink-0">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-7 w-7 p-0 text-muted-foreground hover:text-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      onExplain();
                    }}
                    aria-label="Explain AI decision"
                  >
                    <HelpCircle className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p className="text-xs">Explain AI decision</p>
                </TooltipContent>
              </Tooltip>
              
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="hidden sm:inline">{call.timestamp}</span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="h-7 w-7 p-0"
                  onClick={onExpand}
                  aria-label="View details"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </TooltipProvider>
  );
};
