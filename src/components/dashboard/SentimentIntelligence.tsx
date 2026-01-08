import { TrendingUp, AlertTriangle, Heart, Meh } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      <CardHeader className="pb-4 pt-6 px-6">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold">Sentiment Intelligence</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">Emotional journey analysis</p>
          </div>
          <Heart className="w-5 h-5 text-primary" />
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        {/* Distribution */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-3">Sentiment Distribution</p>
          <div className="flex h-3 rounded-full overflow-hidden bg-secondary">
            {sentimentData.distribution.map((item) => (
              <div
                key={item.label}
                className={`${item.color} first:rounded-l-full last:rounded-r-full transition-all duration-500`}
                style={{ width: `${item.value}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-3">
            {sentimentData.distribution.map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${item.color}`} />
                <span className="text-sm text-muted-foreground">{item.label}</span>
                <span className="text-sm font-medium text-foreground">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="space-y-3">
          {sentimentData.metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="flex items-center justify-between p-4 rounded-xl bg-secondary/40 animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center gap-3">
                {metric.positive ? (
                  <TrendingUp className="w-4 h-4 text-success" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-warning" />
                )}
                <div>
                  <p className="text-sm font-medium text-foreground">{metric.label}</p>
                  <p className="text-sm text-muted-foreground">{metric.subtitle}</p>
                </div>
              </div>
              <span className={`text-lg font-semibold ${metric.positive ? 'text-success' : 'text-warning'}`}>
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        {/* Insight */}
        <div className="mt-6 p-4 rounded-xl gradient-warning-soft border border-warning/20">
          <div className="flex items-start gap-3">
            <Meh className="w-4 h-4 text-warning mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">Silent Dissatisfaction Alert</p>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                119 calls ended neutral but show early churn indicators. Consider proactive follow-up.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};