import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LiveMomentItem, type Moment } from "./LiveMomentItem";

const initialMoments: Moment[] = [
  {
    id: "1",
    type: "success",
    message: "AI resolved charger outage in 23s",
    location: "London",
    timestamp: "Just now",
    tag: "Resolved"
  },
  {
    id: "2",
    type: "info",
    message: "Human escalation avoided — AI workaround accepted",
    location: "Birmingham",
    timestamp: "1 min ago",
    tag: "CSAT ↑"
  },
  {
    id: "3",
    type: "warning",
    message: "Spike detected: Model Y charging confusion after update",
    timestamp: "2 min ago",
    tag: "Firmware"
  },
  {
    id: "4",
    type: "success",
    message: "Billing dispute resolved with £15 credit",
    location: "Manchester",
    timestamp: "3 min ago",
    tag: "Resolved"
  },
  {
    id: "5",
    type: "success",
    message: "First-call resolution streak: 47 consecutive",
    timestamp: "5 min ago",
    tag: "CSAT ↑"
  },
];

const newMomentsPool: Moment[] = [
  {
    id: "new1",
    type: "success",
    message: "AI completed firmware diagnosis remotely",
    location: "Edinburgh",
    timestamp: "Just now",
    tag: "Firmware"
  },
  {
    id: "new2",
    type: "info",
    message: "Customer satisfaction improved mid-call",
    location: "Bristol",
    timestamp: "Just now",
    tag: "CSAT ↑"
  },
  {
    id: "new3",
    type: "success",
    message: "Complex multi-charger issue resolved",
    location: "Leeds",
    timestamp: "Just now",
    tag: "Resolved"
  },
  {
    id: "new4",
    type: "warning",
    message: "Connectivity degradation detected in Manchester area",
    location: "Manchester",
    timestamp: "Just now",
    tag: "Connectivity"
  },
];

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
    <Card className="bg-card/50 border-border/40 rounded-xl h-full">
      <CardHeader className="pb-3 pt-4 px-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-semibold flex items-center gap-2">
            <span className="relative w-1.5 h-1.5">
              <span className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75" />
              <span className="relative block w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            </span>
            Live Moments
          </CardTitle>
          <span className="text-2xs text-muted-foreground">Real-time</span>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <ScrollArea className="h-[300px] pr-2">
          <div className="space-y-2">
            <AnimatePresence mode="popLayout">
              {moments.map((moment) => (
                <motion.div
                  key={moment.id}
                  layout
                  initial={{ opacity: 0, y: -12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <LiveMomentItem moment={moment} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
