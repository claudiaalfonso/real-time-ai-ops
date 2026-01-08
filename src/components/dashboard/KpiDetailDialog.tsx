import { LucideIcon, TrendingUp, TrendingDown, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface KpiDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  label: string;
  value: string;
  delta?: string;
  deltaPositive?: boolean;
  icon: LucideIcon;
  subtitle?: string;
  details: {
    breakdown: { label: string; value: string; trend?: string; trendPositive?: boolean }[];
    insights: string[];
    comparison: { label: string; value: string }[];
  };
}

export const KpiDetailDialog = ({
  open,
  onOpenChange,
  label,
  value,
  delta,
  deltaPositive = true,
  icon: Icon,
  details,
}: KpiDetailDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-lg">{label}</DialogTitle>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-bold text-foreground">{value}</span>
                {delta && (
                  <span className={`flex items-center gap-0.5 text-sm font-medium ${deltaPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {deltaPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    {delta}
                  </span>
                )}
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-5 mt-4">
          {/* Breakdown Section */}
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-3">Breakdown</h4>
            <div className="grid grid-cols-2 gap-3">
              {details.breakdown.map((item, i) => (
                <Card key={i} className="bg-muted/30 border-border/50">
                  <CardContent className="p-3">
                    <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-semibold">{item.value}</span>
                      {item.trend && (
                        <span className={`text-xs ${item.trendPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
                          {item.trend}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator />

          {/* Comparison Section */}
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-3">Comparison</h4>
            <div className="space-y-2">
              {details.comparison.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 px-3 rounded-lg bg-muted/20">
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <span className="text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Insights Section */}
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-3">Key Insights</h4>
            <div className="space-y-2">
              {details.insights.map((insight, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{insight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
