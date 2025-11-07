import { Header } from "@/components/Header";
import { DevControls } from "@/components/DevControls";
import { StatsCard } from "@/components/StatsCard";
import { NFTSection } from "@/components/NFTSection";
import { PerksSection } from "@/components/PerksSection";
import { Sparkles, Flame, TrendingUp, Award } from "lucide-react";

interface FractalsProps {
  isWalletConnected: boolean;
  walletAddress?: string;
  nfts: any[];
  showNFTs: boolean;
  onToggleNFTs: (checked: boolean) => void;
  onConnectWallet: () => void;
  onDisconnectWallet: () => void;
}

const Fractals = ({ isWalletConnected, walletAddress, nfts, showNFTs, onToggleNFTs, onConnectWallet, onDisconnectWallet }: FractalsProps) => {
  const boostPercentage = nfts.length > 0 ? 35 : 0;

  return (
    <div className="min-h-screen bg-background">
      <Header
        isWalletConnected={isWalletConnected}
        walletAddress={walletAddress}
        onConnectWallet={onConnectWallet}
      />
      <main className="container mx-auto px-4 py-8">
        <DevControls 
          isWalletConnected={isWalletConnected} 
          nftCount={nfts.length}
          showNFTs={showNFTs}
          onToggleNFTs={onToggleNFTs}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-primary">Fractals</span>
            <span className="text-foreground"> Earnings</span>
          </h1>
          <p className="text-muted-foreground">
            Earn Fractals through sessions and referrals. Boost your rewards with FOXX NFTs!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatsCard title="Total Fractals" value="0.00" subtitle="Your Rank: 92893" icon={Sparkles} />
          <StatsCard title="Daily Earnings" value="0.00" change="+0.0% vs last day" icon={Flame} />
          <StatsCard title="Monthly Earnings" value="0.00" change="+0.0% vs last month" icon={TrendingUp} />
          <StatsCard title="Weekly Earnings" value="0.00" change="+0.0% vs last week" icon={Award} />
        </div>

        <NFTSection
          pageType="Fractals"
          isWalletConnected={isWalletConnected}
          walletAddress={walletAddress}
          nfts={nfts}
          boostPercentage={boostPercentage}
          onConnectWallet={onConnectWallet}
          onDisconnectWallet={onDisconnectWallet}
        />

        <PerksSection />
      </main>
    </div>
  );
};

export default Fractals;
