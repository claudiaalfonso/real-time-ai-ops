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
    <Card className="card-elevated h-full">
      <CardHeader className="pb-4 pt-6 px-6">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-3">
            <span className="relative w-2 h-2">
              <span className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75" />
              <span className="relative block w-2 h-2 bg-emerald-400 rounded-full" />
            </span>
            Live Moments
          </CardTitle>
          <span className="text-sm text-muted-foreground">Real-time</span>
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <ScrollArea className="h-[360px] pr-3">
          <div className="space-y-2">
            <AnimatePresence mode="popLayout">
              {moments.map((moment) => (
                <motion.div
                  key={moment.id}
                  layout
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
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