import { PhoneCall, Bot, UserCheck, PhoneOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <Card className="card-elevated h-full">
      <CardHeader className="pb-4 pt-6 px-6">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold">Resolution Funnel</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">Last 24 hours</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <div className="space-y-4">
          {funnelData.map((item, index) => (
            <div
              key={item.label}
              className={`${item.indent ? "ml-6" : ""} animate-fade-in`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {item.icon && <item.icon className="w-4 h-4 text-muted-foreground" />}
                  <span className={`text-sm ${item.indent ? "text-muted-foreground" : "text-foreground font-medium"}`}>
                    {item.label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">
                    {item.value.toLocaleString()}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    ({item.percentage}%)
                  </span>
                </div>
              </div>
              <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${item.color} transition-all duration-700 ease-out`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Insight Cards */}
        <div className="mt-8 pt-6 border-t border-border/40">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-success/5 border border-success/20">
              <p className="text-sm text-success font-medium">First Contact Resolution</p>
              <p className="text-2xl font-semibold text-success mt-2">75.7%</p>
              <p className="text-sm text-muted-foreground mt-1">+3.2% this week</p>
            </div>
            <div className="p-4 rounded-xl bg-warning/5 border border-warning/20">
              <p className="text-sm text-warning font-medium">Avoidable Escalations</p>
              <p className="text-2xl font-semibold text-warning mt-2">23</p>
              <p className="text-sm text-muted-foreground mt-1">Improve with better tools</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};