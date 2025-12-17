import { motion } from "framer-motion";
import { Activity, Zap, Users, Brain, AlertTriangle } from "lucide-react";

const metrics = [
  { label: "AI Resolution Rate", value: "94.2%", trend: "+2.1%", icon: Brain, positive: true },
  { label: "Avg Latency", value: "847ms", trend: "-12ms", icon: Zap, positive: true },
  { label: "Human Escalation", value: "5.8%", trend: "-0.4%", icon: Users, positive: true },
  { label: "AI Trust Index", value: "91.7", trend: "+1.2", icon: Activity, positive: true },
];

const anomalies = [
  { text: "Spike in charger connectivity — Berlin", severity: "warning" },
  { text: "Latency degradation on firmware v3.2", severity: "alert" },
];

export const CommandBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-strong sticky top-0 z-50 px-6 py-4"
    >
      <div className="flex items-center justify-between gap-8">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center glow-primary">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-pulse" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground tracking-tight">ENERA AI</h1>
            <p className="text-xs text-muted-foreground">Command Center</p>
          </div>
        </div>

        {/* Metrics */}
        <div className="flex items-center gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 px-4 py-2 rounded-lg bg-secondary/50 border border-border/30"
            >
              <metric.icon className="w-4 h-4 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">{metric.label}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-foreground">{metric.value}</span>
                  <span className={`text-xs ${metric.positive ? 'text-success' : 'text-destructive'}`}>
                    {metric.trend}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Anomaly Chips */}
        <div className="flex items-center gap-2">
          {anomalies.map((anomaly, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
                anomaly.severity === 'warning' 
                  ? 'bg-warning/10 text-warning border border-warning/20' 
                  : 'bg-destructive/10 text-destructive border border-destructive/20'
              }`}
            >
              <AlertTriangle className="w-3 h-3" />
              <span>{anomaly.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};