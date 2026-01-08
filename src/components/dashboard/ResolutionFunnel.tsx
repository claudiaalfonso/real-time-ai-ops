import { PhoneCall, Bot, UserCheck, PhoneOff, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const funnelData = [
  { label: "Total Calls", value: 2847, percentage: 100, color: "bg-primary", icon: PhoneCall },
  { label: "AI Resolved", value: 2682, percentage: 94.2, color: "bg-success", icon: Bot },
  { label: "First Answer", value: 2156, percentage: 75.7, color: "bg-success/70", indent: true },
  { label: "After Clarification", value: 526, percentage: 18.5, color: "bg-success/50", indent: true },
  { label: "Escalated to Human", value: 112, percentage: 3.9, color: "bg-warning", icon: UserCheck },
  { label: "Hung Up / Abandoned", value: 53, percentage: 1.9, color: "bg-destructive/60", icon: PhoneOff },
];

export const ResolutionFunnel = () => {
  return (
    <TooltipProvider delayDuration={200}>
      <Card className="card-elevated h-full">
        <CardHeader className="pb-4 pt-4 px-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-semibold">Resolution Funnel</CardTitle>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" className="h-6 px-2 text-2xs text-muted-foreground hover:text-foreground">
                  <Info className="w-3 h-3 mr-1" />
                  Insights
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left" className="max-w-xs">
                <p className="text-xs">Click to view detailed breakdown of resolution paths and escalation reasons.</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <p className="text-2xs text-muted-foreground mt-0.5">Last 24 hours</p>
        </CardHeader>
        <CardContent className="px-4 pb-4">
          <div className="space-y-2.5">
            {funnelData.map((item, index) => (
              <div
                key={item.label}
                className={`${item.indent ? "ml-5" : ""} animate-fade-in`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    {item.icon && <item.icon className="w-3.5 h-3.5 text-muted-foreground" />}
                    <span className={`text-xs ${item.indent ? "text-muted-foreground" : "text-foreground font-medium"}`}>
                      {item.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-medium text-foreground">
                      {item.value.toLocaleString()}
                    </span>
                    <span className="text-2xs text-muted-foreground">
                      ({item.percentage}%)
                    </span>
                  </div>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color} transition-all duration-700 ease-out`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Insight Cards */}
          <div className="mt-5 pt-4 border-t border-border/50">
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-2.5 rounded-md bg-success/5 border border-success/20">
                <p className="text-2xs text-success font-medium">First Contact Resolution</p>
                <p className="text-lg font-semibold text-success mt-0.5">75.7%</p>
                <p className="text-2xs text-muted-foreground mt-0.5">+3.2% this week</p>
              </div>
              <div className="p-2.5 rounded-md bg-warning/5 border border-warning/20">
                <p className="text-2xs text-warning font-medium">Avoidable Escalations</p>
                <p className="text-lg font-semibold text-warning mt-0.5">23</p>
                <p className="text-2xs text-muted-foreground mt-0.5">Improve with better tools</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};