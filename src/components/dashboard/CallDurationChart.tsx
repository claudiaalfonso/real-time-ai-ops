import { Clock, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const durationBuckets = [
  { range: "< 30s", count: 234, percentage: 8, color: "bg-success" },
  { range: "30s-1m", count: 567, percentage: 20, color: "bg-success/80" },
  { range: "1m-2m", count: 892, percentage: 31, color: "bg-primary" },
  { range: "2m-3m", count: 654, percentage: 23, color: "bg-primary/70" },
  { range: "3m-5m", count: 389, percentage: 14, color: "bg-warning" },
  { range: "> 5m", count: 111, percentage: 4, color: "bg-destructive/60" },
];

export const CallDurationChart = () => {
  const maxPercentage = Math.max(...durationBuckets.map(b => b.percentage));
  
  return (
    <Card className="card-elevated h-full">
      <CardHeader className="pb-3 pt-4 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-md bg-primary/10">
              <Clock className="w-3.5 h-3.5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-base font-semibold">Call Duration</CardTitle>
              <p className="text-2xs text-muted-foreground mt-0.5">Distribution by time bucket</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-semibold text-foreground">1:47</p>
            <p className="text-2xs text-muted-foreground">avg duration</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        {/* Bar Chart */}
        <div className="flex items-end gap-1.5 h-28 mb-3">
          {durationBuckets.map((bucket, index) => (
            <div
              key={bucket.range}
              className="flex-1 relative group"
            >
              <div 
                className={`w-full ${bucket.color} rounded-t transition-all duration-500 ease-out hover:opacity-80`}
                style={{ 
                  height: `${(bucket.percentage / maxPercentage) * 100}%`,
                  animationDelay: `${index * 80}ms`
                }}
              />
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                <div className="bg-popover px-2 py-1 rounded text-2xs text-foreground shadow-md whitespace-nowrap border border-border">
                  {bucket.count} calls
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Labels */}
        <div className="flex gap-1.5">
          {durationBuckets.map((bucket) => (
            <div key={bucket.range} className="flex-1 text-center">
              <p className="text-2xs text-muted-foreground">{bucket.range}</p>
              <p className="text-2xs font-medium text-foreground">{bucket.percentage}%</p>
            </div>
          ))}
        </div>

        {/* Insight */}
        <div className="mt-3 pt-3 border-t border-border/50">
          <div className="flex items-center gap-1.5 text-success">
            <TrendingDown className="w-3.5 h-3.5" />
            <span className="text-xs">Average duration decreased by 14s this week</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};