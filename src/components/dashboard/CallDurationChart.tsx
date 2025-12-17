import { motion } from "framer-motion";
import { Clock, TrendingDown } from "lucide-react";

const durationBuckets = [
  { range: "< 30s", count: 234, percentage: 8, color: "bg-success" },
  { range: "30s - 1m", count: 567, percentage: 20, color: "bg-success/80" },
  { range: "1m - 2m", count: 892, percentage: 31, color: "bg-primary" },
  { range: "2m - 3m", count: 654, percentage: 23, color: "bg-primary/70" },
  { range: "3m - 5m", count: 389, percentage: 14, color: "bg-warning" },
  { range: "> 5m", count: 111, percentage: 4, color: "bg-destructive/70" },
];

export const CallDurationChart = () => {
  const maxPercentage = Math.max(...durationBuckets.map(b => b.percentage));
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-xl p-5"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/20">
            <Clock className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Call Duration</h3>
            <p className="text-sm text-muted-foreground">Distribution by time bucket</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-foreground">1:47</p>
          <p className="text-xs text-muted-foreground">avg duration</p>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="flex items-end gap-2 h-32 mb-4">
        {durationBuckets.map((bucket, index) => (
          <motion.div
            key={bucket.range}
            initial={{ height: 0 }}
            animate={{ height: `${(bucket.percentage / maxPercentage) * 100}%` }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-1 relative group"
          >
            <div className={`w-full h-full ${bucket.color} rounded-t-lg`} />
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-popover px-2 py-1 rounded text-xs text-foreground shadow-lg whitespace-nowrap">
                {bucket.count} calls
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Labels */}
      <div className="flex gap-2">
        {durationBuckets.map((bucket) => (
          <div key={bucket.range} className="flex-1 text-center">
            <p className="text-xs text-muted-foreground">{bucket.range}</p>
            <p className="text-xs font-medium text-foreground">{bucket.percentage}%</p>
          </div>
        ))}
      </div>

      {/* Insight */}
      <div className="mt-4 pt-4 border-t border-border/50">
        <div className="flex items-center gap-2 text-success">
          <TrendingDown className="w-4 h-4" />
          <span className="text-sm">Average call duration decreased by 14s this week</span>
        </div>
      </div>
    </motion.div>
  );
};