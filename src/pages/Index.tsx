import { CommandBar } from "@/components/dashboard/CommandBar";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { CallGenome } from "@/components/dashboard/CallGenome";
import { LiveMomentsFeed } from "@/components/dashboard/LiveMomentsFeed";
import { RecommendedActions } from "@/components/dashboard/RecommendedActions";
import { DashboardGuide } from "@/components/dashboard/DashboardGuide";
import { Separator } from "@/components/ui/separator";
import { Phone, CheckCircle, Clock, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CommandBar />

      <main className="max-w-screen-2xl mx-auto px-6 py-8">
        {/* Section Header */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <h2 className="text-lg font-semibold text-foreground">Real-time Visibility</h2>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="relative w-1.5 h-1.5">
                <span className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75" />
                <span className="relative block w-1.5 h-1.5 bg-emerald-400 rounded-full" />
              </span>
              Live
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Live operational signal across the fleet</p>
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

        <Separator className="mb-8 bg-border/30" />

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Call Genome (2/3) */}
          <div className="lg:col-span-2">
            <CallGenome />
          </div>

          {/* Right Column - Live Moments + Recommended Actions (1/3) */}
          <div className="space-y-6">
            <LiveMomentsFeed />
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
