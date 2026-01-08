import { Lightbulb, ArrowRight, AlertTriangle, TrendingUp, Wifi } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Action {
  id: string;
  title: string;
  category: string;
  icon: React.ElementType;
  cta: string;
  urgent?: boolean;
}

const actions: Action[] = [
  {
    id: "1",
    title: "Investigate firmware v3.2 latency degradation",
    category: "Performance",
    icon: AlertTriangle,
    cta: "View",
    urgent: true,
  },
  {
    id: "2",
    title: "Connectivity spike: Manchester region",
    category: "Infrastructure",
    icon: Wifi,
    cta: "Open incidents",
  },
  {
    id: "3",
    title: "Escalations trending up for billing queries",
    category: "Pattern",
    icon: TrendingUp,
    cta: "Review",
  },
];

export const RecommendedActions = () => {
  return (
    <Card className="bg-card/50 border-border/40 rounded-xl">
      <CardHeader className="pb-3 pt-4 px-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-md bg-primary/10">
            <Lightbulb className="w-3.5 h-3.5 text-primary" />
          </div>
          <CardTitle className="text-sm font-semibold">Recommended Actions</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <div className="space-y-2">
          {actions.map((action, index) => (
            <div key={action.id}>
              <div className="flex items-start justify-between gap-3 py-2">
                <div className="flex items-start gap-2.5 min-w-0">
                  <action.icon className={`w-4 h-4 shrink-0 mt-0.5 ${action.urgent ? 'text-amber-500' : 'text-muted-foreground'}`} />
                  <div className="min-w-0">
                    <span className="text-2xs text-muted-foreground block mb-0.5">{action.category}</span>
                    <p className="text-xs text-foreground leading-snug">{action.title}</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 px-2 text-xs text-muted-foreground hover:text-foreground shrink-0"
                >
                  {action.cta}
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
              {index < actions.length - 1 && <Separator className="bg-border/40" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
