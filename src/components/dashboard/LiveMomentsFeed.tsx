import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { CheckCircle, AlertTriangle, Zap, TrendingUp, Clock, MapPin } from "lucide-react";

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
  const icons = {
    success: <CheckCircle className="w-4 h-4 text-success" />,
    warning: <AlertTriangle className="w-4 h-4 text-warning" />,
    info: <Zap className="w-4 h-4 text-primary" />,
    alert: <AlertTriangle className="w-4 h-4 text-destructive" />,
  };
  
  const backgrounds = {
    success: "bg-success/15",
    warning: "bg-warning/15",
    info: "bg-primary/15",
    alert: "bg-destructive/15",
  };
  
  return (
    <div className={`p-2 rounded-lg ${backgrounds[type]}`}>
      {icons[type]}
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-xl p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="w-2 h-2 bg-success rounded-full" />
            <div className="absolute inset-0 w-2 h-2 bg-success rounded-full animate-ping" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Live Moments</h3>
        </div>
        <span className="text-xs text-muted-foreground">Real-time feed</span>
      </div>

      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
        <AnimatePresence mode="popLayout">
          {moments.map((moment, index) => (
            <motion.div
              key={moment.id}
              layout
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ 
                type: "spring", 
                stiffness: 500, 
                damping: 30,
                delay: index === 0 ? 0 : 0 
              }}
              className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-border/30"
            >
              <MomentIcon type={moment.type} />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground">{moment.message}</p>
                <div className="flex items-center gap-2 mt-1">
                  {moment.location && (
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {moment.location}
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {moment.timestamp}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};