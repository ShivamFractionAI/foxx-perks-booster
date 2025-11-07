import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Wallet, X } from "lucide-react";

interface NFT {
  id: string;
  rarity: "COMMON" | "RARE" | "LEGENDARY";
  number: string;
  image: string;
}

interface NFTSectionProps {
  pageType: "FAPs" | "Fractals";
  isWalletConnected: boolean;
  walletAddress?: string;
  nfts: NFT[];
  boostPercentage: number;
  onConnectWallet: () => void;
  onDisconnectWallet: () => void;
}

export const NFTSection = ({
  pageType,
  isWalletConnected,
  walletAddress,
  nfts,
  boostPercentage,
  onConnectWallet,
  onDisconnectWallet,
}: NFTSectionProps) => {
  return (
    <div className="mb-12">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-1">Your FOXX NFTs</h2>
          <p className="text-sm text-primary font-medium">
            Total {pageType} Boost: +{boostPercentage}%
          </p>
        </div>
        {!isWalletConnected ? (
          <Button
            onClick={onConnectWallet}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Connect Wallet
          </Button>
        ) : (
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10"
            >
              {walletAddress}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={onDisconnectWallet}
              className="border-primary/30 text-primary hover:bg-primary/10 hover:text-destructive"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>

      {!isWalletConnected ? (
        <Card className="bg-card border-border p-16">
          <div className="text-center max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Wallet className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Connect Your Wallet</h3>
            <p className="text-muted-foreground mb-6">
              Connect your wallet to view your FOXX NFTs and unlock boosts on your {pageType} earnings.
            </p>
            <Button onClick={onConnectWallet} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Connect Wallet
            </Button>
          </div>
        </Card>
      ) : nfts.length === 0 ? (
        <Card className="bg-card border-border p-16">
          <div className="text-center max-w-md mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-2">No FOXX NFTs Yet</h3>
            <p className="text-muted-foreground">
              Minting is paused for now. Don't miss your chance when Season 2 opens!
            </p>
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nfts.map((nft) => (
            <Card key={nft.id} className="bg-card border-border overflow-hidden">
              <div className="relative">
                <img src={nft.image} alt={`NFT ${nft.number}`} className="w-full aspect-square object-cover" />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded text-xs font-bold uppercase ${
                      nft.rarity === "LEGENDARY"
                        ? "bg-nft-legendary text-background"
                        : nft.rarity === "RARE"
                        ? "bg-info text-background"
                        : "bg-nft-common text-foreground"
                    }`}
                  >
                    {nft.rarity}
                  </span>
                  <span className="px-3 py-1 rounded bg-background/90 text-foreground text-xs font-bold">
                    #{nft.number}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <Button variant="outline" className="w-full border-primary/30 text-foreground hover:bg-primary/10">
                  ↗ DETAILS ↗
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
