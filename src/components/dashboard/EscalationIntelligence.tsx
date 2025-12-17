import { motion } from "framer-motion";
import { UserCheck, AlertCircle, Brain, Wrench, Shield, TrendingDown } from "lucide-react";

const escalationReasons = [
  { reason: "Missing context", count: 23, percentage: 42, avoidable: true },
  { reason: "Permission limits", count: 18, percentage: 33, avoidable: true },
  { reason: "Complex multi-system", count: 8, percentage: 15, avoidable: false },
  { reason: "Customer requested", count: 6, percentage: 10, avoidable: false },
];

const metrics = [
  { label: "Unnecessary Escalations", value: "41", trend: "-12%", icon: AlertCircle, warning: true },
  { label: "Avg Time to Escalate", value: "2:34", trend: "-18s", icon: Shield },
  { label: "Post-Escalation Resolution", value: "94%", trend: "+2%", icon: Brain },
];

export const EscalationIntelligence = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-xl p-5"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-warning/20">
            <UserCheck className="w-5 h-5 text-warning" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Escalation Intelligence</h3>
            <p className="text-sm text-muted-foreground">Understanding why AI escalates</p>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-3 rounded-lg ${metric.warning ? 'bg-warning/10 border border-warning/20' : 'bg-secondary/50'}`}
          >
            <div className="flex items-center gap-2 mb-2">
              <metric.icon className={`w-4 h-4 ${metric.warning ? 'text-warning' : 'text-muted-foreground'}`} />
              <span className="text-xs text-muted-foreground">{metric.label}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className={`text-xl font-bold ${metric.warning ? 'text-warning' : 'text-foreground'}`}>
                {metric.value}
              </span>
              <span className="text-xs text-success">{metric.trend}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Escalation Breakdown */}
      <div className="space-y-3">
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Why Escalations Happen</p>
        {escalationReasons.map((item, index) => (
          <motion.div
            key={item.reason}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="flex items-center gap-3"
          >
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-foreground">{item.reason}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-foreground">{item.count}</span>
                  {item.avoidable && (
                    <span className="px-1.5 py-0.5 text-xs bg-warning/15 text-warning rounded">
                      Avoidable
                    </span>
                  )}
                </div>
              </div>
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.percentage}%` }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className={`h-full rounded-full ${item.avoidable ? 'bg-warning' : 'bg-muted-foreground'}`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Improvement Actions */}
      <div className="mt-6 p-4 rounded-lg gradient-warning border border-warning/20">
        <div className="flex items-start gap-3">
          <Wrench className="w-5 h-5 text-warning mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">Reduce Avoidable Escalations</p>
            <p className="text-xs text-muted-foreground mt-1">
              75% of escalations could be avoided with expanded AI permissions and better knowledge base coverage. 
              Estimated savings: <span className="text-success font-semibold">€12,400/month</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};