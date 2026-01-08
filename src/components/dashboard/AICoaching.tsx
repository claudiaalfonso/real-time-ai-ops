import { Lightbulb, ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const recommendations = [
  {
    id: 1,
    title: "Add charger ID clarification step",
    description: "Many hang-ups occur when customers struggle to identify their charger. Add an early ID confirmation.",
    impact: "−18% hang-ups",
    confidence: 94,
    category: "Script",
    effort: "Low",
  },
  {
    id: 2,
    title: "Improve UK National Grid outage context",
    description: "AI lacks real-time grid status for UK regions. Connect to National Grid ESO API for live updates.",
    impact: "+12% resolution",
    confidence: 87,
    category: "Knowledge",
    effort: "Medium",
  },
  {
    id: 3,
    title: "Shorten billing explanations",
    description: "Billing clarifications average 45s. Customers prefer concise summaries with optional detail.",
    impact: "−8s duration",
    confidence: 91,
    category: "Response",
    effort: "Low",
  },
  {
    id: 4,
    title: "Pre-authenticate returning callers",
    description: "67% of callers have called before. Skip verification using voice print matching.",
    impact: "+23% satisfaction",
    confidence: 78,
    category: "Auth",
    effort: "High",
  },
];

const ConfidenceBadge = ({ confidence }: { confidence: number }) => {
  const color = confidence >= 90 ? "text-success" : confidence >= 80 ? "text-primary" : "text-warning";
  const bgColor = confidence >= 90 ? "bg-success" : confidence >= 80 ? "bg-primary" : "bg-warning";
  return (
    <div className="flex items-center gap-1">
      <div className={`w-1 h-1 rounded-full ${bgColor}`} />
      <span className={`text-2xs ${color}`}>{confidence}%</span>
    </div>
  );
};

const EffortBadge = ({ effort }: { effort: string }) => {
  const colors: Record<string, string> = {
    Low: "border-success/30 bg-success/5 text-success",
    Medium: "border-warning/30 bg-warning/5 text-warning",
    High: "border-destructive/30 bg-destructive/5 text-destructive",
  };
  
  return (
    <Badge variant="outline" className={`text-2xs py-0 px-1.5 ${colors[effort]}`}>
      {effort}
    </Badge>
  );
};

export const AICoaching = () => {
  return (
    <Card className="card-elevated">
      <CardHeader className="pb-3 pt-4 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-md bg-primary/10">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-base font-semibold">AI Coaching</CardTitle>
              <p className="text-2xs text-muted-foreground mt-0.5">This week, ENERA AI recommends</p>
            </div>
          </div>
          <Badge variant="secondary" className="text-2xs">
            4 insights
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <div className="space-y-2">
          {recommendations.map((rec, index) => (
            <div
              key={rec.id}
              className="p-3 rounded-md bg-secondary/30 border border-border/40 hover:border-primary/30 transition-all cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-2xs text-primary font-medium">{rec.category}</span>
                    <EffortBadge effort={rec.effort} />
                  </div>
                  <h4 className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                    {rec.title}
                  </h4>
                  <p className="text-2xs text-muted-foreground mt-0.5 line-clamp-2 leading-relaxed">{rec.description}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <ConfidenceBadge confidence={rec.confidence} />
                    <div className="flex items-center gap-1 text-success">
                      <TrendingUp className="w-3 h-3" />
                      <span className="text-2xs font-medium">{rec.impact}</span>
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-4 p-3 rounded-md gradient-primary-soft border border-primary/20">
          <div className="flex items-center gap-2.5">
            <Lightbulb className="w-4 h-4 text-primary shrink-0" />
            <div>
              <p className="text-xs font-medium text-foreground">Projected Weekly Impact</p>
              <p className="text-2xs text-muted-foreground mt-0.5">
                Implementing all recommendations: <span className="text-success font-medium">+8.3% resolution</span>, <span className="text-primary font-medium">−12s avg time</span>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};