import { Activity, Zap, Users, Brain } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { AlertBanner } from "./AlertBanner";

const metrics = [
  { label: "AI Resolution", value: "94.2%", trend: "+2.1%", icon: Brain, positive: true, tooltip: "Percentage of calls resolved by AI without human intervention" },
  { label: "Avg Latency", value: "847ms", trend: "-12ms", icon: Zap, positive: true, tooltip: "Average response time across all AI interactions" },
  { label: "Escalation Rate", value: "5.8%", trend: "-0.4%", icon: Users, positive: true, tooltip: "Rate of calls requiring human intervention" },
  { label: "Trust Index", value: "91.7", trend: "+1.2", icon: Activity, positive: true, tooltip: "Composite score measuring AI reliability and user satisfaction" },
];

const anomalies = [
  { text: "Charger connectivity spike — Manchester", severity: "warning" as const },
  { text: "Latency on firmware v3.2", severity: "alert" as const },
];

export const CommandBar = () => {
  return (
    <TooltipProvider delayDuration={200}>
      <header className="sticky top-0 z-50 bg-background border-b border-border/40">
        <div className="max-w-screen-2xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-8">
            {/* Logo & Title */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h1 className="text-sm font-semibold text-foreground">ENERA</h1>
                <p className="text-xs text-muted-foreground">Command Center</p>
              </div>
            </div>

            <Separator orientation="vertical" className="h-6 bg-border/40" />

            {/* Metrics - cleaner, lighter */}
            <div className="flex items-center gap-6 flex-1">
              {metrics.map((metric) => (
                <Tooltip key={metric.label}>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-2 cursor-default">
                      <metric.icon className="w-4 h-4 text-muted-foreground/50" />
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-sm font-medium text-foreground">{metric.value}</span>
                        <span className={`text-xs ${metric.positive ? 'text-emerald-400' : 'text-rose-400'}`}>
                          {metric.trend}
                        </span>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="max-w-xs">
                    <p className="font-medium text-sm">{metric.label}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{metric.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>

            {/* Anomaly Alerts - more subtle */}
            <div className="flex items-center gap-2">
              {anomalies.map((anomaly, i) => (
                <AlertBanner
                  key={i}
                  message={anomaly.text}
                  severity={anomaly.severity}
                  onAction={() => console.log('Investigate:', anomaly.text)}
                />
              ))}
            </div>
          </div>
        </div>
      </header>
    </TooltipProvider>
  );
};
