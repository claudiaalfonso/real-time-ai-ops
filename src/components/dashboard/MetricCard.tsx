import { motion } from "framer-motion";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  trend?: string;
  trendPositive?: boolean;
  icon: LucideIcon;
  subtitle?: string;
  className?: string;
  variant?: "default" | "success" | "warning" | "primary";
}

export const MetricCard = ({
  title,
  value,
  trend,
  trendPositive = true,
  icon: Icon,
  subtitle,
  className = "",
  variant = "default",
}: MetricCardProps) => {
  const variantStyles = {
    default: "gradient-card",
    success: "gradient-success",
    warning: "gradient-warning",
    primary: "gradient-primary",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`glass rounded-xl p-5 ${variantStyles[variant]} ${className}`}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-foreground tracking-tight">{value}</p>
            {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
          </div>
          {trend && (
            <div className={`flex items-center gap-1 text-sm ${trendPositive ? 'text-success' : 'text-destructive'}`}>
              {trendPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              <span className="font-medium">{trend}</span>
              <span className="text-muted-foreground text-xs">vs last week</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-lg ${
          variant === "success" ? "bg-success/20" :
          variant === "warning" ? "bg-warning/20" :
          variant === "primary" ? "bg-primary/20" : "bg-secondary"
        }`}>
          <Icon className={`w-5 h-5 ${
            variant === "success" ? "text-success" :
            variant === "warning" ? "text-warning" :
            variant === "primary" ? "text-primary" : "text-muted-foreground"
          }`} />
        </div>
      </div>
    </motion.div>
  );
};