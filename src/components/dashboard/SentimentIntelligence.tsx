import { TrendingUp, AlertTriangle, Heart, Meh } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const sentimentData = {
  distribution: [
    { label: "Positive", value: 62, color: "bg-success" },
    { label: "Neutral", value: 28, color: "bg-muted-foreground" },
    { label: "Negative", value: 10, color: "bg-destructive" },
  ],
  metrics: [
    { label: "Avg Sentiment Delta", value: "+34%", subtitle: "Start → End improvement", positive: true },
    { label: "Recovery Rate", value: "78%", subtitle: "Negative → Positive conversions", positive: true },
    { label: "Silent Dissatisfaction", value: "4.2%", subtitle: "Neutral calls with churn risk", positive: false },
  ],
};

export const SentimentIntelligence = () => {
  return (
    <Card className="card-elevated h-full">
      <CardHeader className="pb-3 pt-4 px-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold">Sentiment Intelligence</CardTitle>
          <Heart className="w-4 h-4 text-primary" />
        </div>
        <p className="text-2xs text-muted-foreground mt-0.5">Emotional journey analysis</p>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        {/* Distribution */}
        <div className="mb-5">
          <p className="text-2xs text-muted-foreground mb-2">Sentiment Distribution</p>
          <div className="flex h-2 rounded-full overflow-hidden bg-secondary">
            {sentimentData.distribution.map((item) => (
              <div
                key={item.label}
                className={`${item.color} first:rounded-l-full last:rounded-r-full transition-all duration-500`}
                style={{ width: `${item.value}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2">
            {sentimentData.distribution.map((item) => (
              <div key={item.label} className="flex items-center gap-1">
                <span className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                <span className="text-2xs text-muted-foreground">{item.label}</span>
                <span className="text-2xs font-medium text-foreground">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="space-y-2">
          {sentimentData.metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="flex items-center justify-between p-2.5 rounded-md bg-secondary/40 animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center gap-2.5">
                {metric.positive ? (
                  <TrendingUp className="w-3.5 h-3.5 text-success" />
                ) : (
                  <AlertTriangle className="w-3.5 h-3.5 text-warning" />
                )}
                <div>
                  <p className="text-xs font-medium text-foreground">{metric.label}</p>
                  <p className="text-2xs text-muted-foreground">{metric.subtitle}</p>
                </div>
              </div>
              <span className={`text-sm font-semibold ${metric.positive ? 'text-success' : 'text-warning'}`}>
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        {/* Insight */}
        <div className="mt-4 p-2.5 rounded-md gradient-warning-soft border border-warning/20">
          <div className="flex items-start gap-2">
            <Meh className="w-3.5 h-3.5 text-warning mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-medium text-foreground">Silent Dissatisfaction Alert</p>
              <p className="text-2xs text-muted-foreground mt-0.5 leading-relaxed">
                119 calls ended neutral but show early churn indicators. Consider proactive follow-up.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};