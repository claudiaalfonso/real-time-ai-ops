import { CheckCircle, AlertTriangle, Zap, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface Moment {
  id: string;
  type: "success" | "warning" | "info" | "alert";
  message: string;
  location?: string;
  timestamp: string;
  tag?: string;
}

interface LiveMomentItemProps {
  moment: Moment;
}

const MomentIcon = ({ type }: { type: Moment["type"] }) => {
  const config = {
    success: { icon: CheckCircle, className: "bg-emerald-500/10 text-emerald-500" },
    warning: { icon: AlertTriangle, className: "bg-amber-500/10 text-amber-500" },
    info: { icon: Zap, className: "bg-primary/10 text-primary" },
    alert: { icon: AlertTriangle, className: "bg-rose-400/10 text-rose-400" },
  };
  
  const { icon: Icon, className } = config[type];
  
  return (
    <div className={`p-1.5 rounded-md shrink-0 ${className}`}>
      <Icon className="w-3.5 h-3.5" />
    </div>
  );
};

const tagStyles: Record<string, string> = {
  "CSAT ↑": "border-emerald-500/30 text-emerald-500 bg-emerald-500/5",
  "Resolved": "border-emerald-500/30 text-emerald-500 bg-emerald-500/5",
  "Firmware": "border-primary/30 text-primary bg-primary/5",
  "Connectivity": "border-amber-500/30 text-amber-500 bg-amber-500/5",
  "Escalation": "border-rose-400/30 text-rose-400 bg-rose-400/5",
};

export const LiveMomentItem = ({ moment }: LiveMomentItemProps) => {
  return (
    <div className="flex items-start gap-2.5 p-3 rounded-lg bg-muted/30 border border-border/40">
      <MomentIcon type={moment.type} />
      <div className="flex-1 min-w-0">
        <p className="text-xs text-foreground leading-relaxed">{moment.message}</p>
        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
          {moment.tag && (
            <Badge 
              variant="outline" 
              className={`text-2xs py-0 px-1.5 font-normal ${tagStyles[moment.tag] || 'border-border text-muted-foreground'}`}
            >
              {moment.tag}
            </Badge>
          )}
          {moment.location && (
            <span className="flex items-center gap-0.5 text-2xs text-muted-foreground">
              <MapPin className="w-2.5 h-2.5" />
              {moment.location}
            </span>
          )}
          <span className="flex items-center gap-0.5 text-2xs text-muted-foreground">
            <Clock className="w-2.5 h-2.5" />
            {moment.timestamp}
          </span>
        </div>
      </div>
    </div>
  );
};
