import { GitBranch } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const flowData = {
  total: 2847,
  categories: [
    { name: "Charger Issues", count: 1124, percentage: 39.5, color: "bg-primary" },
    { name: "Billing & Payments", count: 682, percentage: 24, color: "bg-success" },
    { name: "General Support", count: 498, percentage: 17.5, color: "bg-warning" },
    { name: "App & Connectivity", count: 389, percentage: 13.7, color: "bg-purple-500" },
    { name: "Abandoned (< 10s)", count: 154, percentage: 5.4, color: "bg-muted-foreground" },
  ],
};

export const CallReasonFlow = () => {
  return (
    <Card className="card-elevated h-full">
      <CardHeader className="pb-4 pt-6 px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-secondary">
              <GitBranch className="w-4 h-4 text-muted-foreground" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold">Call Reason Flow</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">What customers call about</p>
            </div>
          </div>
          <span className="text-sm font-medium text-muted-foreground">
            {flowData.total.toLocaleString()} total
          </span>
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        {/* Flow Visualization */}
        <div className="relative">
          {/* Source Node */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-24 py-3 px-4 rounded-xl bg-secondary text-center">
              <p className="text-sm text-muted-foreground">All Calls</p>
              <p className="text-xl font-semibold text-foreground">{flowData.total.toLocaleString()}</p>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-muted-foreground/40 to-transparent" />
          </div>

          {/* Category Nodes */}
          <div className="space-y-3 pl-8 relative">
            {/* Connecting line */}
            <div className="absolute left-12 top-0 bottom-0 w-px bg-border" />
            
            {flowData.categories.map((category, index) => (
              <div
                key={category.name}
                className="flex items-center gap-4 relative animate-fade-in"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {/* Connector */}
                <div className="absolute left-4 w-4 h-px bg-border" />
                <div className={`w-2.5 h-2.5 rounded-full ${category.color} z-10 shrink-0`} />
                
                <div className="flex-1 flex items-center gap-3 p-4 rounded-xl bg-secondary/40 hover:bg-secondary/60 transition-colors duration-150">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{category.name}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden max-w-[180px]">
                        <div
                          className={`h-full rounded-full ${category.color} transition-all duration-500`}
                          style={{ width: `${category.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground">{category.percentage}%</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-lg font-semibold text-foreground">{category.count.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">calls</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insight */}
        <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
          <p className="text-sm text-foreground leading-relaxed">
            <span className="font-medium text-primary">Charger Issues</span> dominate at 39.5% — 
            consider proactive status monitoring to reduce inbound volume.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};