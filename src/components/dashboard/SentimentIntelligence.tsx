import { motion } from "framer-motion";
import { TrendingUp, AlertTriangle, Heart, Meh } from "lucide-react";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-xl p-5"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Sentiment Intelligence</h3>
          <p className="text-sm text-muted-foreground">Emotional journey analysis</p>
        </div>
        <Heart className="w-5 h-5 text-primary" />
      </div>

      {/* Distribution */}
      <div className="mb-6">
        <p className="text-xs text-muted-foreground mb-3">Sentiment Distribution</p>
        <div className="flex h-4 rounded-full overflow-hidden bg-secondary">
          {sentimentData.distribution.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ width: 0 }}
              animate={{ width: `${item.value}%` }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`${item.color} first:rounded-l-full last:rounded-r-full`}
            />
          ))}
        </div>
        <div className="flex justify-between mt-2">
          {sentimentData.distribution.map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${item.color}`} />
              <span className="text-xs text-muted-foreground">{item.label}</span>
              <span className="text-xs font-medium text-foreground">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="space-y-3">
        {sentimentData.metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="flex items-center justify-between p-3 rounded-lg bg-secondary/50"
          >
            <div className="flex items-center gap-3">
              {metric.positive ? (
                <TrendingUp className="w-4 h-4 text-success" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-warning" />
              )}
              <div>
                <p className="text-sm text-foreground font-medium">{metric.label}</p>
                <p className="text-xs text-muted-foreground">{metric.subtitle}</p>
              </div>
            </div>
            <span className={`text-lg font-bold ${metric.positive ? 'text-success' : 'text-warning'}`}>
              {metric.value}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Insight */}
      <div className="mt-4 p-3 rounded-lg gradient-warning border border-warning/20">
        <div className="flex items-start gap-2">
          <Meh className="w-4 h-4 text-warning mt-0.5" />
          <div>
            <p className="text-sm text-foreground font-medium">Silent Dissatisfaction Alert</p>
            <p className="text-xs text-muted-foreground mt-1">
              119 calls ended neutral but show early churn indicators. Consider proactive follow-up.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};