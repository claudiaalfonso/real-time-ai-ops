import { CommandBar } from "@/components/dashboard/CommandBar";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { CallGenome } from "@/components/dashboard/CallGenome";
import { LiveMomentsFeed } from "@/components/dashboard/LiveMomentsFeed";
import { RecommendedActions } from "@/components/dashboard/RecommendedActions";
import { ResolutionFunnel } from "@/components/dashboard/ResolutionFunnel";
import { SentimentIntelligence } from "@/components/dashboard/SentimentIntelligence";
import { CallDurationChart } from "@/components/dashboard/CallDurationChart";
import { CallReasonFlow } from "@/components/dashboard/CallReasonFlow";
import { AICoaching } from "@/components/dashboard/AICoaching";
import { EscalationIntelligence } from "@/components/dashboard/EscalationIntelligence";
import { DashboardGuide } from "@/components/dashboard/DashboardGuide";
import { Separator } from "@/components/ui/separator";
import { Phone, CheckCircle, Clock, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CommandBar />

      <main className="max-w-screen-2xl mx-auto px-6 py-8">
        {/* LAYER 1 - Real-time Visibility */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs font-medium text-primary/70 uppercase tracking-wider">Layer 1</span>
            <span className="text-muted-foreground/40">—</span>
            <h2 className="text-lg font-semibold text-foreground">Real-time Visibility</h2>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="relative w-1.5 h-1.5">
                <span className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75" />
                <span className="relative block w-1.5 h-1.5 bg-emerald-400 rounded-full" />
              </span>
              Live
            </div>
          </div>
          <p className="text-sm text-muted-foreground">What's happening now across the fleet</p>
        </section>

        {/* KPI Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <KpiCard
            label="Total Calls Today"
            value="2,847"
            delta="+12.4%"
            deltaPositive={true}
            icon={Phone}
            subtitle="↑ 312 from yesterday"
            tooltip="Total inbound calls received in the last 24 hours"
          />
          <KpiCard
            label="AI Resolution Rate"
            value="94.2%"
            delta="+2.1%"
            deltaPositive={true}
            icon={CheckCircle}
            subtitle="Industry avg: 67%"
            tooltip="Percentage of calls resolved without human intervention"
          />
          <KpiCard
            label="Avg Resolution Time"
            value="1:47"
            delta="-14s"
            deltaPositive={true}
            icon={Clock}
            subtitle="Target: < 2:00"
            tooltip="Average time to resolve customer issues"
          />
          <KpiCard
            label="Human Interventions"
            value="165"
            delta="-23"
            deltaPositive={true}
            icon={Users}
            subtitle="5.8% of calls"
            tooltip="Calls requiring human escalation"
          />
        </div>

        {/* Layer 1 Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2">
            <CallGenome />
          </div>
          <div className="space-y-6">
            <LiveMomentsFeed />
          </div>
        </div>

        <Separator className="mb-10 bg-border/30" />

        {/* LAYER 2 - AI Performance & Quality */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs font-medium text-primary/70 uppercase tracking-wider">Layer 2</span>
            <span className="text-muted-foreground/40">—</span>
            <h2 className="text-lg font-semibold text-foreground">AI Performance & Quality</h2>
          </div>
          <p className="text-sm text-muted-foreground">Is the AI doing a good job?</p>
        </section>

        {/* Layer 2 Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <ResolutionFunnel />
          <SentimentIntelligence />
          <CallDurationChart />
          <CallReasonFlow />
        </div>

        <Separator className="mb-10 bg-border/30" />

        {/* LAYER 3 - Optimization & Recommendations */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs font-medium text-primary/70 uppercase tracking-wider">Layer 3</span>
            <span className="text-muted-foreground/40">—</span>
            <h2 className="text-lg font-semibold text-foreground">Optimization & Recommendations</h2>
          </div>
          <p className="text-sm text-muted-foreground">What should we do next?</p>
        </section>

        {/* Layer 3 Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2">
            <AICoaching />
          </div>
          <div className="space-y-6">
            <EscalationIntelligence />
            <RecommendedActions />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-border/30">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <span>ENERA Command Center</span>
              <span className="text-border">•</span>
              <span className="flex items-center gap-1.5">
                <span className="relative w-1.5 h-1.5">
                  <span className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75" />
                  <span className="relative block w-1.5 h-1.5 bg-emerald-400 rounded-full" />
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
