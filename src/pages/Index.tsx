import { CommandBar } from "@/components/dashboard/CommandBar";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { CallGenome } from "@/components/dashboard/CallGenome";
import { ResolutionFunnel } from "@/components/dashboard/ResolutionFunnel";
import { SentimentIntelligence } from "@/components/dashboard/SentimentIntelligence";
import { AICoaching } from "@/components/dashboard/AICoaching";
import { LiveMomentsFeed } from "@/components/dashboard/LiveMomentsFeed";
import { EscalationIntelligence } from "@/components/dashboard/EscalationIntelligence";
import { CallDurationChart } from "@/components/dashboard/CallDurationChart";
import { CallReasonFlow } from "@/components/dashboard/CallReasonFlow";
import { DashboardGuide } from "@/components/dashboard/DashboardGuide";
import { motion } from "framer-motion";
import { Phone, CheckCircle, Clock, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Command Bar - Fixed Top */}
      <CommandBar />

      {/* Main Content */}
      <main className="px-6 py-6 max-w-[1800px] mx-auto">
        {/* Layer 1: Real-time Visibility */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-primary rounded-full" />
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Layer 1 — Real-time Visibility
            </h2>
          </div>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <MetricCard
              title="Total Calls Today"
              value="2,847"
              trend="+12.4%"
              trendPositive={true}
              icon={Phone}
              subtitle="↑ 312 from yesterday"
              variant="primary"
            />
            <MetricCard
              title="AI Resolution Rate"
              value="94.2%"
              trend="+2.1%"
              trendPositive={true}
              icon={CheckCircle}
              subtitle="Industry avg: 67%"
              variant="success"
            />
            <MetricCard
              title="Avg Resolution Time"
              value="1:47"
              trend="-14s"
              trendPositive={true}
              icon={Clock}
              subtitle="Target: < 2:00"
            />
            <MetricCard
              title="Human Interventions"
              value="165"
              trend="-23"
              trendPositive={true}
              icon={Users}
              subtitle="5.8% of calls"
            />
          </div>

          {/* Live Feed + Call Genome */}
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <CallGenome />
            </div>
            <div>
              <LiveMomentsFeed />
            </div>
          </div>
        </motion.section>

        {/* Layer 2: AI Performance & Quality */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-success rounded-full" />
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Layer 2 — AI Performance & Quality
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <ResolutionFunnel />
            <SentimentIntelligence />
            <CallDurationChart />
          </div>
        </motion.section>

        {/* Layer 3: Optimization & Recommendations */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-warning rounded-full" />
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Layer 3 — Optimization & Recommendations
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <AICoaching />
            </div>
            <EscalationIntelligence />
          </div>

          {/* Call Reason Flow - Full Width */}
          <div className="mt-6">
            <CallReasonFlow />
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-border/50">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>ENERA AI Command Center</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                All systems operational
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span>Last sync: 3 seconds ago</span>
              <span>•</span>
              <span>v2.4.1</span>
            </div>
          </div>
        </footer>
      </main>

      {/* Floating Guide Button */}
      <DashboardGuide />
    </div>
  );
};

export default Index;