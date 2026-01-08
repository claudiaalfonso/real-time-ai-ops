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
import { Phone, CheckCircle, Clock, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CommandBar />

      <main className="px-6 py-6 max-w-[1600px] mx-auto">
        {/* Layer 1: Real-time Visibility */}
        <section className="mb-8 animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-0.5 h-5 bg-primary rounded-full" />
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Layer 1 — Real-time Visibility
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-5">
            <MetricCard
              title="Total Calls Today"
              value="2,847"
              trend="+12.4%"
              trendPositive={true}
              icon={Phone}
              subtitle="↑ 312 from yesterday"
              variant="primary"
              tooltip="Total inbound calls received in the last 24 hours"
            />
            <MetricCard
              title="AI Resolution Rate"
              value="94.2%"
              trend="+2.1%"
              trendPositive={true}
              icon={CheckCircle}
              subtitle="Industry avg: 67%"
              variant="success"
              tooltip="Percentage of calls resolved without human intervention"
            />
            <MetricCard
              title="Avg Resolution Time"
              value="1:47"
              trend="-14s"
              trendPositive={true}
              icon={Clock}
              subtitle="Target: < 2:00"
              tooltip="Average time to resolve customer issues"
            />
            <MetricCard
              title="Human Interventions"
              value="165"
              trend="-23"
              trendPositive={true}
              icon={Users}
              subtitle="5.8% of calls"
              tooltip="Calls requiring human escalation"
            />
          </div>

          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2">
              <CallGenome />
            </div>
            <div>
              <LiveMomentsFeed />
            </div>
          </div>
        </section>

        {/* Layer 2: AI Performance & Quality */}
        <section className="mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-0.5 h-5 bg-success rounded-full" />
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Layer 2 — AI Performance & Quality
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-5">
            <ResolutionFunnel />
            <SentimentIntelligence />
            <CallDurationChart />
          </div>
        </section>

        {/* Layer 3: Optimization & Recommendations */}
        <section className="animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-0.5 h-5 bg-warning rounded-full" />
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Layer 3 — Optimization & Recommendations
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2">
              <AICoaching />
            </div>
            <EscalationIntelligence />
          </div>

          <div className="mt-5">
            <CallReasonFlow />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 pt-5 border-t border-border/40">
          <div className="flex items-center justify-between text-2xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <span>ENERA Command Center</span>
              <span className="text-border">•</span>
              <span className="flex items-center gap-1.5">
                <span className="relative w-1.5 h-1.5">
                  <span className="absolute inset-0 bg-success rounded-full animate-ping opacity-75" />
                  <span className="relative block w-1.5 h-1.5 bg-success rounded-full" />
                </span>
                All systems operational
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span>Last sync: 3s ago</span>
              <span className="text-border">•</span>
              <span>v2.4.1</span>
            </div>
          </div>
        </footer>
      </main>

      <DashboardGuide />
    </div>
  );
};

export default Index;