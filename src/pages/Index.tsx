import { useState, useEffect } from "react";
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
import { LayerNavigation } from "@/components/dashboard/LayerNavigation";
import { Phone, CheckCircle, Clock, Users } from "lucide-react";

// KPI Detail Data
const kpiDetails = {
  totalCalls: {
    breakdown: [
      { label: "Inbound", value: "2,412", trend: "+8%", trendPositive: true },
      { label: "Outbound", value: "435", trend: "+24%", trendPositive: true },
      { label: "Callbacks", value: "189", trend: "-5%", trendPositive: false },
      { label: "Transfers", value: "76", trend: "-12%", trendPositive: true },
    ],
    insights: [
      "Peak call volume between 10am-2pm EST",
      "Monday consistently highest volume day",
      "35% of calls are repeat customers",
    ],
    comparison: [
      { label: "Yesterday", value: "2,535 calls" },
      { label: "Last Week Avg", value: "2,621 calls" },
      { label: "Last Month Avg", value: "2,489 calls" },
    ],
  },
  resolutionRate: {
    breakdown: [
      { label: "First Contact", value: "89.1%", trend: "+1.2%", trendPositive: true },
      { label: "With Follow-up", value: "5.1%", trend: "-0.3%", trendPositive: true },
      { label: "Escalated", value: "5.8%", trend: "-0.9%", trendPositive: true },
      { label: "Unresolved", value: "0.0%", trend: "0%", trendPositive: true },
    ],
    insights: [
      "Billing inquiries have highest AI resolution rate at 97%",
      "Technical issues improved 4% after last model update",
      "Account changes automation reduced escalations by 28%",
    ],
    comparison: [
      { label: "Industry Average", value: "67%" },
      { label: "Your Target", value: "95%" },
      { label: "Best Day (Dec 2)", value: "96.8%" },
    ],
  },
  avgResolutionTime: {
    breakdown: [
      { label: "Simple Queries", value: "0:42", trend: "-8s", trendPositive: true },
      { label: "Medium Complexity", value: "1:58", trend: "-12s", trendPositive: true },
      { label: "Complex Issues", value: "3:24", trend: "-22s", trendPositive: true },
      { label: "Escalated", value: "8:15", trend: "+45s", trendPositive: false },
    ],
    insights: [
      "Password resets now average just 23 seconds",
      "Order status checks down to 31 seconds",
      "Complex billing disputes still averaging 4+ minutes",
    ],
    comparison: [
      { label: "Target Time", value: "< 2:00" },
      { label: "Last Week", value: "2:01" },
      { label: "Last Month", value: "2:14" },
    ],
  },
  humanInterventions: {
    breakdown: [
      { label: "Customer Request", value: "68", trend: "-8", trendPositive: true },
      { label: "AI Handoff", value: "52", trend: "-11", trendPositive: true },
      { label: "Supervisor Review", value: "31", trend: "-3", trendPositive: true },
      { label: "Policy Override", value: "14", trend: "-1", trendPositive: true },
    ],
    insights: [
      "Most escalations happen within first 45 seconds",
      "Refund requests > $100 trigger 42% of escalations",
      "Training on product returns reduced escalations 18%",
    ],
    comparison: [
      { label: "Yesterday", value: "188 interventions" },
      { label: "Last Week Avg", value: "192 interventions" },
      { label: "Target", value: "< 150 interventions" },
    ],
  },
};

const Index = () => {
  const [activeLayer, setActiveLayer] = useState("layer1");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["layer1", "layer2", "layer3"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLayer(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <CommandBar />
      <LayerNavigation activeLayer={activeLayer} onLayerChange={setActiveLayer} />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* LAYER 1 - Real-time Visibility */}
        <section id="layer1" className="scroll-mt-36">
          <header className="section-header">
            <p className="layer-label mb-3">Layer 1</p>
            <div className="flex items-center gap-4">
              <h2 className="section-title">Real-time Visibility</h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="relative w-2 h-2">
                  <span className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75" />
                  <span className="relative block w-2 h-2 bg-emerald-400 rounded-full" />
                </span>
                Live
              </div>
            </div>
            <p className="section-subtitle">What's happening now across your fleet</p>
          </header>

          {/* KPI Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            <KpiCard
              label="Total Calls Today"
              value="2,847"
              delta="+12.4%"
              deltaPositive={true}
              icon={Phone}
              subtitle="↑ 312 from yesterday"
              tooltip="Total inbound calls received in the last 24 hours"
              details={kpiDetails.totalCalls}
            />
            <KpiCard
              label="AI Resolution Rate"
              value="94.2%"
              delta="+2.1%"
              deltaPositive={true}
              icon={CheckCircle}
              subtitle="Industry avg: 67%"
              tooltip="Percentage of calls resolved without human intervention"
              details={kpiDetails.resolutionRate}
            />
            <KpiCard
              label="Avg Resolution Time"
              value="1:47"
              delta="-14s"
              deltaPositive={true}
              icon={Clock}
              subtitle="Target: < 2:00"
              tooltip="Average time to resolve customer issues"
              details={kpiDetails.avgResolutionTime}
            />
            <KpiCard
              label="Human Interventions"
              value="165"
              delta="-23"
              deltaPositive={true}
              icon={Users}
              subtitle="5.8% of calls"
              tooltip="Calls requiring human escalation"
              details={kpiDetails.humanInterventions}
            />
          </div>

          {/* Layer 1 Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
            <div className="lg:col-span-2">
              <CallGenome />
            </div>
            <div>
              <LiveMomentsFeed />
            </div>
          </div>
        </section>

        {/* LAYER 2 - AI Performance & Quality */}
        <section id="layer2" className="scroll-mt-36">
          <header className="section-header">
            <p className="layer-label mb-3">Layer 2</p>
            <h2 className="section-title">AI Performance & Quality</h2>
            <p className="section-subtitle">Is the AI doing a good job?</p>
          </header>

          {/* Layer 2 Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
            <ResolutionFunnel />
            <SentimentIntelligence />
            <CallDurationChart />
            <CallReasonFlow />
          </div>
        </section>

        {/* LAYER 3 - Optimization & Recommendations */}
        <section id="layer3" className="scroll-mt-36">
          <header className="section-header">
            <p className="layer-label mb-3">Layer 3</p>
            <h2 className="section-title">Optimization & Recommendations</h2>
            <p className="section-subtitle">What should we do next?</p>
          </header>

          {/* Layer 3 Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <div className="lg:col-span-2">
              <AICoaching />
            </div>
            <div className="space-y-6">
              <EscalationIntelligence />
              <RecommendedActions />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-border/30">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <span className="font-medium text-foreground/80">ENERA</span>
              <span className="text-border">•</span>
              <span className="flex items-center gap-2">
                <span className="relative w-2 h-2">
                  <span className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75" />
                  <span className="relative block w-2 h-2 bg-emerald-400 rounded-full" />
                </span>
                All systems operational
              </span>
            </div>
            <div className="flex items-center gap-4">
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