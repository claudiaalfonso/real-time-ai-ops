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
      <CardHeader className="pb-4 pt-6 px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Clock className="w-4 h-4 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold">Call Duration</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">Distribution by time bucket</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-semibold text-foreground">1:47</p>
            <p className="text-sm text-muted-foreground">avg duration</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        {/* Bar Chart */}
        <div className="flex items-end gap-2 h-32 mb-4">
          {durationBuckets.map((bucket, index) => (
            <div
              key={bucket.range}
              className="flex-1 relative group"
            >
              <div 
                className={`w-full ${bucket.color} rounded-t-md transition-all duration-500 ease-out hover:opacity-80`}
                style={{ 
                  height: `${(bucket.percentage / maxPercentage) * 100}%`,
                  animationDelay: `${index * 80}ms`
                }}
              />
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                <div className="bg-popover px-2.5 py-1.5 rounded-lg text-sm text-foreground shadow-md whitespace-nowrap border border-border">
                  {bucket.count} calls
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Labels */}
        <div className="flex gap-2">
          {durationBuckets.map((bucket) => (
            <div key={bucket.range} className="flex-1 text-center">
              <p className="text-sm text-muted-foreground">{bucket.range}</p>
              <p className="text-sm font-medium text-foreground mt-0.5">{bucket.percentage}%</p>
            </div>
          ))}
        </div>

        {/* Insight */}
        <div className="mt-6 pt-4 border-t border-border/40">
          <div className="flex items-center gap-2 text-success">
            <TrendingDown className="w-4 h-4" />
            <span className="text-sm">Average duration decreased by 14s this week</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};