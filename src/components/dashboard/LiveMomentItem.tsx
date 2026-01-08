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
    success: { icon: CheckCircle, className: "text-emerald-400" },
    warning: { icon: AlertTriangle, className: "text-amber-400" },
    info: { icon: Zap, className: "text-primary" },
    alert: { icon: AlertTriangle, className: "text-rose-400" },
  };
  
  const { icon: Icon, className } = config[type];
  
  return <Icon className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${className}`} />;
};

const tagStyles: Record<string, string> = {
  "CSAT ↑": "border-emerald-400/30 text-emerald-400 bg-emerald-400/5",
  "Resolved": "border-emerald-400/30 text-emerald-400 bg-emerald-400/5",
  "Firmware": "border-primary/30 text-primary bg-primary/5",
  "Connectivity": "border-amber-400/30 text-amber-400 bg-amber-400/5",
  "Escalation": "border-rose-400/30 text-rose-400 bg-rose-400/5",
};

export const LiveMomentItem = ({ moment }: LiveMomentItemProps) => {
  return (
    <div className="flex items-start gap-2.5 py-2.5 px-3 rounded-lg hover:bg-muted/30 transition-colors">
      <MomentIcon type={moment.type} />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-foreground leading-snug">{moment.message}</p>
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          {moment.tag && (
            <Badge 
              variant="outline" 
              className={`text-xs py-0 px-1.5 font-normal ${tagStyles[moment.tag] || 'border-border text-muted-foreground'}`}
            >
              {moment.tag}
            </Badge>
          )}
          {moment.location && (
            <span className="flex items-center gap-0.5 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3" />
              {moment.location}
            </span>
          )}
          <span className="text-xs text-muted-foreground">{moment.timestamp}</span>
        </div>
      </div>
    </div>
  );
};
