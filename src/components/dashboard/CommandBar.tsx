import { Activity, Zap, Users, Brain, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

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
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between gap-6">
            {/* Logo & Title */}
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 border border-primary/20">
                <Zap className="w-4 h-4 text-primary" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-success rounded-full animate-pulse-subtle" />
              </div>
              <div>
                <h1 className="text-sm font-semibold text-foreground tracking-tight">ENERA</h1>
                <p className="text-2xs text-muted-foreground">Command Center</p>
              </div>
            </div>

            <Separator orientation="vertical" className="h-8" />

            {/* Metrics */}
            <div className="flex items-center gap-4 flex-1">
              {metrics.map((metric) => (
                <Tooltip key={metric.label}>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-secondary/50 border border-border/50 cursor-default transition-colors hover:bg-secondary/70">
                      <metric.icon className="w-3.5 h-3.5 text-muted-foreground" />
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs font-medium text-foreground">{metric.value}</span>
                        <span className={`text-2xs ${metric.positive ? 'text-success' : 'text-destructive'}`}>
                          {metric.trend}
                        </span>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="max-w-xs">
                    <p className="font-medium">{metric.label}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{metric.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>

            {/* Anomaly Alerts */}
            <div className="flex items-center gap-2">
              {anomalies.map((anomaly, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className={`text-2xs py-1 px-2.5 font-normal ${
                    anomaly.severity === 'warning' 
                      ? 'border-warning/30 bg-warning/5 text-warning' 
                      : 'border-destructive/30 bg-destructive/5 text-destructive'
                  }`}
                >
                  <AlertTriangle className="w-3 h-3 mr-1.5" />
                  {anomaly.text}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </header>
    </TooltipProvider>
  );
};