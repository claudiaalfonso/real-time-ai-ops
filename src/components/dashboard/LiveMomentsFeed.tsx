import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertTriangle, Zap, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Moment {
  id: string;
  type: "success" | "warning" | "info" | "alert";
  message: string;
  location?: string;
  timestamp: string;
}

const initialMoments: Moment[] = [
  {
    id: "1",
    type: "success",
    message: "AI resolved charger outage in 23s",
    location: "London",
    timestamp: "Just now"
  },
  {
    id: "2",
    type: "info",
    message: "Human escalation avoided — AI workaround accepted",
    location: "Birmingham",
    timestamp: "1 min ago"
  },
  {
    id: "3",
    type: "warning",
    message: "Spike detected: Model Y charging confusion after update",
    timestamp: "2 min ago"
  },
  {
    id: "4",
    type: "success",
    message: "Billing dispute resolved with £15 credit",
    location: "Manchester",
    timestamp: "3 min ago"
  },
  {
    id: "5",
    type: "success",
    message: "First-call resolution streak: 47 consecutive",
    timestamp: "5 min ago"
  },
];

const newMomentsPool: Moment[] = [
  {
    id: "new1",
    type: "success",
    message: "AI completed firmware diagnosis remotely",
    location: "Edinburgh",
    timestamp: "Just now"
  },
  {
    id: "new2",
    type: "info",
    message: "Customer satisfaction improved mid-call",
    location: "Bristol",
    timestamp: "Just now"
  },
  {
    id: "new3",
    type: "success",
    message: "Complex multi-charger issue resolved",
    location: "Leeds",
    timestamp: "Just now"
  },
];

const MomentIcon = ({ type }: { type: Moment["type"] }) => {
  const config = {
    success: { icon: CheckCircle, className: "bg-success/10 text-success" },
    warning: { icon: AlertTriangle, className: "bg-warning/10 text-warning" },
    info: { icon: Zap, className: "bg-primary/10 text-primary" },
    alert: { icon: AlertTriangle, className: "bg-destructive/10 text-destructive" },
  };
  
  const { icon: Icon, className } = config[type];
  
  return (
    <div className={`p-1.5 rounded-md ${className}`}>
      <Icon className="w-3.5 h-3.5" />
    </div>
  );
};

export const LiveMomentsFeed = () => {
  const [moments, setMoments] = useState<Moment[]>(initialMoments);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const randomMoment = newMomentsPool[Math.floor(Math.random() * newMomentsPool.length)];
      const newMoment = {
        ...randomMoment,
        id: `moment-${Date.now()}`,
        timestamp: "Just now"
      };
      
      setMoments((prev) => [newMoment, ...prev.slice(0, 5)]);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="card-elevated h-full">
      <CardHeader className="pb-3 pt-4 px-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold flex items-center gap-2">
            <span className="relative w-1.5 h-1.5">
              <span className="absolute inset-0 bg-success rounded-full animate-ping opacity-75" />
              <span className="relative block w-1.5 h-1.5 bg-success rounded-full" />
            </span>
            Live Moments
          </CardTitle>
          <span className="text-2xs text-muted-foreground">Real-time</span>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
          <AnimatePresence mode="popLayout">
            {moments.map((moment) => (
              <motion.div
                key={moment.id}
                layout
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="flex items-start gap-2.5 p-2.5 rounded-md bg-secondary/40 border border-border/40"
              >
                <MomentIcon type={moment.type} />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-foreground leading-relaxed">{moment.message}</p>
                  <div className="flex items-center gap-2 mt-1">
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
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  );
};