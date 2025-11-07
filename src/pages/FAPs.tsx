import { Header } from "@/components/Header";
import { DevControls } from "@/components/DevControls";
import { StatsCard } from "@/components/StatsCard";
import { NFTSection } from "@/components/NFTSection";
import { PerksSection } from "@/components/PerksSection";
import { Link, Flame, TrendingUp, Award } from "lucide-react";

interface FAPsProps {
  isWalletConnected: boolean;
  walletAddress?: string;
  nfts: any[];
  onConnectWallet: () => void;
}

const FAPs = ({ isWalletConnected, walletAddress, nfts, onConnectWallet }: FAPsProps) => {
  const boostPercentage = nfts.length > 0 ? 70 : 0;

  return (
    <div className="min-h-screen bg-background">
      <Header
        isWalletConnected={isWalletConnected}
        walletAddress={walletAddress}
        onConnectWallet={onConnectWallet}
      />
      <main className="container mx-auto px-4 py-8">
        <DevControls isWalletConnected={isWalletConnected} nftCount={nfts.length} />

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-foreground">Fraction AI </span>
            <span className="text-primary">Attention Points</span>
          </h1>
          <p className="text-muted-foreground">
            Earn FAPs by engaging with Fraction AI. Your FOXX NFTs boost your earnings!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatsCard title="Total FAPs" value="0.00" subtitle="Your Rank: #NA" icon={Link} />
          <StatsCard title="Daily Earnings" value="0.00" change="+0.0% vs last day" icon={Flame} />
          <StatsCard title="Weekly Earnings" value="0.00" change="+0.0% vs last week" icon={TrendingUp} />
          <StatsCard title="Current Streak" value="0 days" subtitle="in a row" icon={Award} />
        </div>

        <NFTSection
          pageType="FAPs"
          isWalletConnected={isWalletConnected}
          walletAddress={walletAddress}
          nfts={nfts}
          boostPercentage={boostPercentage}
          onConnectWallet={onConnectWallet}
        />

        <PerksSection />
      </main>
    </div>
  );
};

export default FAPs;
