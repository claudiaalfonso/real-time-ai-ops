import { UserCheck, AlertCircle, Brain, Shield, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      <CardHeader className="pb-4 pt-6 px-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-warning/10">
            <UserCheck className="w-4 h-4 text-warning" />
          </div>
          <div>
            <CardTitle className="text-lg font-semibold">Escalation Intelligence</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">Understanding why AI escalates</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`p-3 rounded-xl ${metric.warning ? 'bg-warning/5 border border-warning/20' : 'bg-secondary/40'} animate-fade-in`}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="flex items-center gap-2 mb-2">
                <metric.icon className={`w-4 h-4 ${metric.warning ? 'text-warning' : 'text-muted-foreground'}`} />
                <span className="text-sm text-muted-foreground">{metric.label}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className={`text-xl font-semibold ${metric.warning ? 'text-warning' : 'text-foreground'}`}>
                  {metric.value}
                </span>
                <span className="text-sm text-success">{metric.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Escalation Breakdown */}
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Why Escalations Happen</p>
          {escalationReasons.map((item, index) => (
            <div
              key={item.reason}
              className="flex items-center gap-3 animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 60}ms` }}
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-foreground">{item.reason}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{item.count}</span>
                    {item.avoidable && (
                      <Badge variant="outline" className="text-xs py-0.5 px-2 border-warning/30 bg-warning/5 text-warning">
                        Avoidable
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
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
        <div className="mt-6 p-4 rounded-xl gradient-warning-soft border border-warning/20">
          <div className="flex items-start gap-3">
            <Wrench className="w-5 h-5 text-warning mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">Reduce Avoidable Escalations</p>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                75% could be avoided with expanded AI permissions. Estimated savings: <span className="text-success font-medium">£12,400/month</span>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};