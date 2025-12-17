import { motion } from "framer-motion";
import { Lightbulb, ArrowRight, Sparkles, TrendingUp, Zap, Clock } from "lucide-react";

const recommendations = [
  {
    id: 1,
    title: "Add charger ID clarification step",
    description: "Many hang-ups occur when customers struggle to identify their charger. Add an early ID confirmation.",
    impact: "−18% hang-ups",
    confidence: 94,
    category: "Script Improvement",
    effort: "Low",
  },
  {
    id: 2,
    title: "Improve UK National Grid outage context",
    description: "AI lacks real-time grid status for UK regions. Connect to National Grid ESO API for live updates.",
    impact: "+12% resolution",
    confidence: 87,
    category: "Knowledge Base",
    effort: "Medium",
  },
  {
    id: 3,
    title: "Shorten billing explanations",
    description: "Billing clarifications average 45s. Customers prefer concise summaries with optional detail.",
    impact: "−8s avg duration",
    confidence: 91,
    category: "Response Optimization",
    effort: "Low",
  },
  {
    id: 4,
    title: "Pre-authenticate returning callers",
    description: "67% of callers have called before. Skip verification using voice print matching.",
    impact: "+23% satisfaction",
    confidence: 78,
    category: "Authentication",
    effort: "High",
  },
];

const ConfidenceBadge = ({ confidence }: { confidence: number }) => {
  const color = confidence >= 90 ? "text-success" : confidence >= 80 ? "text-primary" : "text-warning";
  return (
    <div className="flex items-center gap-1">
      <div className={`w-1.5 h-1.5 rounded-full ${color.replace('text-', 'bg-')}`} />
      <span className={`text-xs ${color}`}>{confidence}% confidence</span>
    </div>
  );
};

const EffortBadge = ({ effort }: { effort: string }) => {
  const colors = {
    Low: "bg-success/15 text-success border-success/30",
    Medium: "bg-warning/15 text-warning border-warning/30",
    High: "bg-destructive/15 text-destructive border-destructive/30",
  };
  
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium border ${colors[effort as keyof typeof colors]}`}>
      {effort} effort
    </span>
  );
};

export const AICoaching = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-xl p-5"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/20">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">AI Coaching</h3>
            <p className="text-sm text-muted-foreground">This week, ENERA AI recommends</p>
          </div>
        </div>
        <span className="text-xs text-muted-foreground px-2 py-1 bg-secondary rounded-full">
          4 new insights
        </span>
      </div>

      <div className="space-y-3">
        {recommendations.map((rec, index) => (
          <motion.div
            key={rec.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.01 }}
            className="p-4 rounded-lg bg-secondary/30 border border-border/30 hover:border-primary/30 transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-primary font-medium">{rec.category}</span>
                  <EffortBadge effort={rec.effort} />
                </div>
                <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {rec.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{rec.description}</p>
                <div className="flex items-center gap-4 mt-3">
                  <ConfidenceBadge confidence={rec.confidence} />
                  <div className="flex items-center gap-1 text-success">
                    <TrendingUp className="w-3 h-3" />
                    <span className="text-xs font-semibold">{rec.impact}</span>
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-4 p-4 rounded-lg gradient-primary border border-primary/20">
        <div className="flex items-center gap-3">
          <Lightbulb className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm font-medium text-foreground">Projected Weekly Impact</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Implementing all recommendations could improve resolution by <span className="text-success font-semibold">+8.3%</span> and reduce avg call time by <span className="text-primary font-semibold">12 seconds</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};