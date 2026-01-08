import { AlertTriangle, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AlertBannerProps {
  message: string;
  severity?: "warning" | "alert";
  action?: string;
  onAction?: () => void;
}

export const AlertBanner = ({ 
  message, 
  severity = "warning",
  action = "Investigate",
  onAction 
}: AlertBannerProps) => {
  const severityStyles = {
    warning: "border-amber-500/20 bg-amber-500/5",
    alert: "border-rose-500/20 bg-rose-500/5",
  };

  const iconStyles = {
    warning: "text-amber-500",
    alert: "text-rose-400",
  };

  return (
    <Card className={`flex items-center justify-between gap-3 px-3 py-2 rounded-lg border ${severityStyles[severity]}`}>
      <div className="flex items-center gap-2 min-w-0">
        <AlertTriangle className={`w-3.5 h-3.5 shrink-0 ${iconStyles[severity]}`} />
        <span className="text-xs text-foreground/90 truncate">{message}</span>
      </div>
      {onAction && (
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-6 px-2 text-xs text-muted-foreground hover:text-foreground shrink-0"
          onClick={onAction}
        >
          {action}
          <ArrowRight className="w-3 h-3 ml-1" />
        </Button>
      )}
    </Card>
  );
};
