import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface MetricCardProps {
  title: string;
  value: string;
  trend?: string;
  trendPositive?: boolean;
  icon: LucideIcon;
  subtitle?: string;
  tooltip?: string;
  variant?: "default" | "success" | "warning" | "primary";
}

export const MetricCard = ({
  title,
  value,
  trend,
  trendPositive = true,
  icon: Icon,
  subtitle,
  tooltip,
  variant = "default",
}: MetricCardProps) => {
  const variantStyles = {
    default: "border-border/60",
    success: "border-success/20 gradient-success-soft",
    warning: "border-warning/20 gradient-warning-soft",
    primary: "border-primary/20 gradient-primary-soft",
  };

  const iconStyles = {
    default: "bg-secondary text-muted-foreground",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    primary: "bg-primary/10 text-primary",
  };

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card className={`card-interactive ${variantStyles[variant]}`}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground font-medium">{title}</p>
                  <div className="space-y-0.5">
                    <p className="text-2xl font-semibold text-foreground tracking-tight">{value}</p>
                    {subtitle && (
                      <p className="text-2xs text-muted-foreground">{subtitle}</p>
                    )}
                  </div>
                  {trend && (
                    <div className={`flex items-center gap-1 text-xs ${trendPositive ? 'text-success' : 'text-destructive'}`}>
                      {trendPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      <span className="font-medium">{trend}</span>
                      <span className="text-muted-foreground text-2xs">vs last week</span>
                    </div>
                  )}
                </div>
                <div className={`p-2 rounded-md ${iconStyles[variant]}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TooltipTrigger>
        {tooltip && (
          <TooltipContent side="bottom">
            <p className="text-xs">{tooltip}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};