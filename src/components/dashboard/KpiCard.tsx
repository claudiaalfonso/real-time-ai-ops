import { useState } from "react";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { KpiDetailDialog } from "./KpiDetailDialog";

interface KpiCardProps {
  label: string;
  value: string;
  delta?: string;
  deltaPositive?: boolean;
  icon: LucideIcon;
  subtitle?: string;
  tooltip?: string;
  details?: {
    breakdown: { label: string; value: string; trend?: string; trendPositive?: boolean }[];
    insights: string[];
    comparison: { label: string; value: string }[];
  };
}

export const KpiCard = ({
  label,
  value,
  delta,
  deltaPositive = true,
  icon: Icon,
  subtitle,
  tooltip,
  details,
}: KpiCardProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClick = () => {
    if (details) {
      setDialogOpen(true);
    }
  };

  const content = (
    <Card 
      className={`bg-card border-border/50 rounded-xl transition-all duration-200 ${details ? 'cursor-pointer hover:border-primary/30 hover:shadow-md hover:shadow-primary/5' : ''}`}
      onClick={handleClick}
    >
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{label}</p>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-semibold leading-none text-foreground">{value}</p>
              {delta && (
                <span className={`flex items-center gap-0.5 text-xs font-medium ${deltaPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {deltaPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {delta}
                </span>
              )}
            </div>
            {subtitle && (
              <p className="text-xs text-muted-foreground/80">{subtitle}</p>
            )}
          </div>
          <Icon className="w-5 h-5 text-muted-foreground/40" />
        </div>
      </CardContent>
    </Card>
  );

  const cardElement = tooltip ? (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          {content}
        </TooltipTrigger>
        <TooltipContent side="bottom" className="max-w-xs">
          <p className="text-xs">{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ) : content;

  return (
    <>
      {cardElement}
      {details && (
        <KpiDetailDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          label={label}
          value={value}
          delta={delta}
          deltaPositive={deltaPositive}
          icon={Icon}
          details={details}
        />
      )}
    </>
  );
};
