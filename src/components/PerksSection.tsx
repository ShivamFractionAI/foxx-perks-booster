import { Card } from "./ui/card";
import { TrendingUp, Zap, Lock, MessageSquare } from "lucide-react";

export const PerksSection = () => {
  const perks = [
    {
      icon: TrendingUp,
      title: "Increased Fractals Earnings",
      description: "Boost your Fractals rewards based on NFT rarity",
    },
    {
      icon: Zap,
      title: "Extra FAPs Boosts",
      description: "Earn additional Fraction AI Attention Points",
    },
    {
      icon: Lock,
      title: "Premium Access",
      description: "Access exclusive spaces & alpha drops on the dapp",
    },
    {
      icon: MessageSquare,
      title: "Community Influence",
      description: "Participate in discussions on new spaces and missions",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        <span className="text-foreground">FOXX NFT </span>
        <span className="text-primary">Perks</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {perks.map((perk, index) => (
          <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                <perk.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{perk.title}</h3>
                <p className="text-sm text-muted-foreground">{perk.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
