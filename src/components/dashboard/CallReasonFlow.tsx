import { motion } from "framer-motion";
import { GitBranch } from "lucide-react";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-xl p-5"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-secondary">
            <GitBranch className="w-5 h-5 text-muted-foreground" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Call Reason Flow</h3>
            <p className="text-sm text-muted-foreground">What customers call about</p>
          </div>
        </div>
        <span className="text-sm font-medium text-muted-foreground">
          {flowData.total.toLocaleString()} total calls
        </span>
      </div>

      {/* Flow Visualization */}
      <div className="relative">
        {/* Source Node */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-24 py-3 px-4 rounded-lg bg-secondary text-center">
            <p className="text-xs text-muted-foreground">All Calls</p>
            <p className="text-lg font-bold text-foreground">{flowData.total.toLocaleString()}</p>
          </div>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-muted-foreground/50 to-transparent" />
        </div>

        {/* Category Nodes */}
        <div className="space-y-3 pl-8 relative">
          {/* Connecting line */}
          <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-border" />
          
          {flowData.categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 relative"
            >
              {/* Connector */}
              <div className="absolute left-4 w-4 h-0.5 bg-border" />
              <div className={`w-3 h-3 rounded-full ${category.color} z-10`} />
              
              <div className="flex-1 flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors">
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{category.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden max-w-[200px]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${category.percentage}%` }}
                        transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                        className={`h-full rounded-full ${category.color}`}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">{category.percentage}%</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-foreground">{category.count.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">calls</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Insight */}
      <div className="mt-6 p-3 rounded-lg bg-primary/10 border border-primary/20">
        <p className="text-sm text-foreground">
          <span className="font-semibold text-primary">Charger Issues</span> dominate at 39.5% — 
          consider proactive status monitoring to reduce inbound volume.
        </p>
      </div>
    </motion.div>
  );
};