import { UserCheck, AlertCircle, Brain, Wrench, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const escalationReasons = [
  { reason: "Missing context", count: 23, percentage: 42, avoidable: true },
  { reason: "Permission limits", count: 18, percentage: 33, avoidable: true },
  { reason: "Complex multi-system", count: 8, percentage: 15, avoidable: false },
  { reason: "Customer requested", count: 6, percentage: 10, avoidable: false },
];

const metrics = [
  { label: "Unnecessary", value: "41", trend: "-12%", icon: AlertCircle, warning: true },
  { label: "Time to Escalate", value: "2:34", trend: "-18s", icon: Shield },
  { label: "Post-Resolution", value: "94%", trend: "+2%", icon: Brain },
];

export const EscalationIntelligence = () => {
  return (
    <Card className="card-elevated">
      <CardHeader className="pb-3 pt-4 px-4">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-md bg-warning/10">
            <UserCheck className="w-3.5 h-3.5 text-warning" />
          </div>
          <div>
            <CardTitle className="text-base font-semibold">Escalation Intelligence</CardTitle>
            <p className="text-2xs text-muted-foreground mt-0.5">Understanding why AI escalates</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`p-2.5 rounded-md ${metric.warning ? 'bg-warning/5 border border-warning/20' : 'bg-secondary/40'} animate-fade-in`}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="flex items-center gap-1.5 mb-1.5">
                <metric.icon className={`w-3 h-3 ${metric.warning ? 'text-warning' : 'text-muted-foreground'}`} />
                <span className="text-2xs text-muted-foreground">{metric.label}</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className={`text-lg font-semibold ${metric.warning ? 'text-warning' : 'text-foreground'}`}>
                  {metric.value}
                </span>
                <span className="text-2xs text-success">{metric.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Escalation Breakdown */}
        <div className="space-y-2.5">
          <p className="text-2xs text-muted-foreground font-medium uppercase tracking-wider">Why Escalations Happen</p>
          {escalationReasons.map((item, index) => (
            <div
              key={item.reason}
              className="flex items-center gap-2.5 animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 60}ms` }}
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-foreground">{item.reason}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-2xs font-medium text-foreground">{item.count}</span>
                    {item.avoidable && (
                      <Badge variant="outline" className="text-2xs py-0 px-1.5 border-warning/30 bg-warning/5 text-warning">
                        Avoidable
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="h-1 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${item.avoidable ? 'bg-warning' : 'bg-muted-foreground'}`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Improvement Actions */}
        <div className="mt-5 p-3 rounded-md gradient-warning-soft border border-warning/20">
          <div className="flex items-start gap-2.5">
            <Wrench className="w-4 h-4 text-warning mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-medium text-foreground">Reduce Avoidable Escalations</p>
              <p className="text-2xs text-muted-foreground mt-0.5 leading-relaxed">
                75% could be avoided with expanded AI permissions. Estimated savings: <span className="text-success font-medium">£12,400/month</span>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};