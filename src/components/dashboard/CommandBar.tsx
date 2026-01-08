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
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-screen-2xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between gap-6">
            {/* Logo & Title */}
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 border border-primary/20">
                <Zap className="w-4 h-4 text-primary" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              </div>
              <div>
                <h1 className="text-sm font-semibold text-foreground tracking-tight">ENERA</h1>
                <p className="text-2xs text-muted-foreground">Command Center</p>
              </div>
            </div>

            <Separator orientation="vertical" className="h-8 bg-border/50" />

            {/* Metrics */}
            <div className="flex items-center gap-3 flex-1">
              {metrics.map((metric) => (
                <Tooltip key={metric.label}>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/30 border border-border/40 cursor-default transition-colors hover:bg-muted/50">
                      <metric.icon className="w-3.5 h-3.5 text-muted-foreground/60" />
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xs font-medium text-foreground">{metric.value}</span>
                        <span className={`text-2xs ${metric.positive ? 'text-emerald-500' : 'text-rose-400'}`}>
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

            {/* Anomaly Alerts */}
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
