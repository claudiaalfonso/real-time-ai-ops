import { useState } from "react";
import { AlertTriangle, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AlertBannerProps {
  message: string;
  severity?: "warning" | "alert";
  action?: string;
  onAction?: () => void;
  onDismiss?: () => void;
}

export const AlertBanner = ({ 
  message, 
  severity = "warning",
  action = "Investigate",
  onAction,
  onDismiss
}: AlertBannerProps) => {
  const [isDismissed, setIsDismissed] = useState(false);

  const severityStyles = {
    warning: "border-amber-400/20 bg-amber-400/5",
    alert: "border-rose-400/20 bg-rose-400/5",
  };

  const iconStyles = {
    warning: "text-amber-400",
    alert: "text-rose-400",
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    onDismiss?.();
  };

  if (isDismissed) return null;

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
      <Button 
        variant="ghost" 
        size="sm" 
        className="h-5 w-5 p-0 text-muted-foreground hover:text-foreground shrink-0 ml-auto"
        onClick={handleDismiss}
      >
        <X className="w-3 h-3" />
      </Button>
    </div>
  );
};
