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
    warning: "border-amber-400/20 bg-amber-400/5",
    alert: "border-rose-400/20 bg-rose-400/5",
  };

  const iconStyles = {
    warning: "text-amber-400",
    alert: "text-rose-400",
  };

  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border ${severityStyles[severity]}`}>
      <AlertTriangle className={`w-3.5 h-3.5 shrink-0 ${iconStyles[severity]}`} />
      <span className="text-xs text-foreground/80 truncate max-w-[180px]">{message}</span>
      {onAction && (
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-5 px-1.5 text-xs text-muted-foreground hover:text-foreground shrink-0"
          onClick={onAction}
        >
          <ArrowRight className="w-3 h-3" />
        </Button>
      )}
    </div>
  );
};
