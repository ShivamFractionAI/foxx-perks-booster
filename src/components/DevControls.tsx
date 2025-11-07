import { cn } from "@/lib/utils";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

interface DevControlsProps {
  isWalletConnected: boolean;
  nftCount: number;
  showNFTs: boolean;
  onToggleNFTs: (checked: boolean) => void;
}

export const DevControls = ({ isWalletConnected, nftCount, showNFTs, onToggleNFTs }: DevControlsProps) => {
  return (
    <div className="border border-warning/30 bg-warning/5 rounded-lg p-4 mb-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4 text-sm">
          <span className="text-muted-foreground">Dev Controls:</span>
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "w-2 h-2 rounded-full",
                !isWalletConnected ? "bg-foreground" : "bg-muted"
              )}
            />
            <span className="text-foreground">Wallet Disconnected</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "w-2 h-2 rounded-full",
                isWalletConnected && nftCount === 0 ? "bg-warning" : "bg-muted"
              )}
            />
            <span className="text-foreground">Connected - 0 NFTs</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "w-2 h-2 rounded-full",
                isWalletConnected && nftCount > 0 ? "bg-info" : "bg-muted"
              )}
            />
            <span className="text-foreground">Connected - {nftCount} NFTs</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox 
            id="show-nfts" 
            checked={showNFTs}
            onCheckedChange={onToggleNFTs}
          />
          <Label htmlFor="show-nfts" className="text-sm text-foreground cursor-pointer">
            Show NFTs (when connected)
          </Label>
        </div>
      </div>
    </div>
  );
};
