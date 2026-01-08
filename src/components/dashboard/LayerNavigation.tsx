import { Eye, Brain, Lightbulb } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface LayerNavigationProps {
  activeLayer: string;
  onLayerChange: (layer: string) => void;
}

const layers = [
  { id: "layer1", label: "Real-time", icon: Eye },
  { id: "layer2", label: "AI Performance", icon: Brain },
  { id: "layer3", label: "Recommendations", icon: Lightbulb },
];

export const LayerNavigation = ({ activeLayer, onLayerChange }: LayerNavigationProps) => {
  const handleLayerClick = (layerId: string) => {
    onLayerChange(layerId);
    const element = document.getElementById(layerId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border/50 py-3">
      <div className="max-w-screen-2xl mx-auto px-6">
        <Tabs value={activeLayer} onValueChange={handleLayerClick}>
          <TabsList className="bg-muted/50 h-9">
            {layers.map((layer) => {
              const Icon = layer.icon;
              return (
                <TabsTrigger
                  key={layer.id}
                  value={layer.id}
                  className="gap-1.5 text-xs px-4 data-[state=active]:bg-background"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {layer.label}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};
