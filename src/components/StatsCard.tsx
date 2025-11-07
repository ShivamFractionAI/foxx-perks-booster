import { Card } from "./ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  subtitle?: string;
  change?: string;
  icon: LucideIcon;
}

export const StatsCard = ({ title, value, subtitle, change, icon: Icon }: StatsCardProps) => {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-start justify-between mb-4">
        <span className="text-sm text-muted-foreground">{title}</span>
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div className="space-y-1">
        <div className="text-3xl font-bold text-foreground">{value}</div>
        {subtitle && <div className="text-sm text-muted-foreground">{subtitle}</div>}
        {change && <div className="text-sm text-destructive">{change}</div>}
      </div>
    </Card>
  );
};
