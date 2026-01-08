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
      className={`bg-card border-border/40 rounded-2xl transition-all duration-150 ${details ? 'cursor-pointer hover:border-border/60 hover:shadow-md' : ''}`}
      onClick={handleClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">{label}</p>
            <div className="flex items-baseline gap-3">
              <p className="text-3xl font-semibold leading-none text-foreground tracking-tight">{value}</p>
              {delta && (
                <span className={`flex items-center gap-1 text-sm font-medium ${deltaPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {deltaPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  {delta}
                </span>
              )}
            </div>
            {subtitle && (
              <p className="text-sm text-muted-foreground/70">{subtitle}</p>
            )}
          </div>
          <Icon className="w-6 h-6 text-muted-foreground/30" />
        </div>
      </CardContent>
    </Card>
  );

  const cardElement = tooltip ? (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          {content}
        </TooltipTrigger>
        <TooltipContent side="bottom" className="max-w-xs">
          <p className="text-sm">{tooltip}</p>
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