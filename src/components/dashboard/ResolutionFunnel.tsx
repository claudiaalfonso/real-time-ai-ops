import { motion } from "framer-motion";
import { PhoneCall, Bot, UserCheck, PhoneOff, HelpCircle } from "lucide-react";

const funnelData = [
  { label: "Total Calls", value: 2847, percentage: 100, color: "bg-primary", icon: PhoneCall },
  { label: "AI Resolved", value: 2682, percentage: 94.2, color: "bg-success", icon: Bot },
  { label: "First Answer", value: 2156, percentage: 75.7, color: "bg-success/80", icon: null, indent: true },
  { label: "After Clarification", value: 526, percentage: 18.5, color: "bg-success/60", icon: null, indent: true },
  { label: "Escalated to Human", value: 112, percentage: 3.9, color: "bg-warning", icon: UserCheck },
  { label: "Hung Up / Abandoned", value: 53, percentage: 1.9, color: "bg-destructive/70", icon: PhoneOff },
];

export const ResolutionFunnel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-xl p-5"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Resolution Funnel</h3>
          <p className="text-sm text-muted-foreground">Last 24 hours</p>
        </div>
        <button className="text-xs text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
          <HelpCircle className="w-3 h-3" />
          View insights
        </button>
      </div>

      <div className="space-y-3">
        {funnelData.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${item.indent ? "ml-6" : ""}`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                {item.icon && <item.icon className="w-4 h-4 text-muted-foreground" />}
                <span className={`text-sm ${item.indent ? "text-muted-foreground" : "text-foreground font-medium"}`}>
                  {item.label}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground">
                  {item.value.toLocaleString()}
                </span>
                <span className="text-xs text-muted-foreground">
                  ({item.percentage}%)
                </span>
              </div>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.percentage}%` }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className={`h-full rounded-full ${item.color}`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Insight Cards */}
      <div className="mt-6 pt-4 border-t border-border/50">
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-success/10 border border-success/20">
            <p className="text-xs text-success font-medium">First Contact Resolution</p>
            <p className="text-xl font-bold text-success">75.7%</p>
            <p className="text-xs text-muted-foreground mt-1">+3.2% this week</p>
          </div>
          <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
            <p className="text-xs text-warning font-medium">Avoidable Escalations</p>
            <p className="text-xl font-bold text-warning">23</p>
            <p className="text-xs text-muted-foreground mt-1">Could be reduced with better tools</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};