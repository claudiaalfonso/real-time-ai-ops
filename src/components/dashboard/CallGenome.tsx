import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CallTimelineItem, type CallData } from "./CallTimelineItem";
import { ExplainSheet } from "./ExplainSheet";

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
    reason: "Billing discrepancy — £47.50",
    outcome: "resolved",
    confidence: 89,
    latency: { stt: 195, reasoning: 380, tts: 145 },
    sentiment: { start: 25, end: 85 },
    duration: "1:52",
    summary: "Customer disputed overnight charging fee. AI explained time-of-use rates, applied £12 goodwill credit per policy.",
    timestamp: "5 min ago"
  },
  {
    id: "CG-003",
    reason: "Connectivity issues — UK National Grid",
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

export const CallGenome = () => {
  const [selectedCall, setSelectedCall] = useState<CallData | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleExplain = (call: CallData) => {
    setSelectedCall(call);
    setSheetOpen(true);
  };

  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-foreground">Call Genome</h2>
            <p className="text-xs text-muted-foreground mt-0.5">Real-time AI interaction analysis</p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="relative w-1.5 h-1.5">
              <span className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75" />
              <span className="relative block w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            </span>
            Live
          </div>
        </div>

        <ScrollArea className="h-[400px] pr-2">
          <div className="space-y-2">
            <AnimatePresence mode="popLayout">
              {mockCalls.map((call, index) => (
                <motion.div
                  key={call.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  <CallTimelineItem
                    call={call}
                    onExpand={() => handleExplain(call)}
                    onExplain={() => handleExplain(call)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </ScrollArea>
      </div>

      <ExplainSheet 
        call={selectedCall} 
        open={sheetOpen} 
        onOpenChange={setSheetOpen} 
      />
    </>
  );
};
