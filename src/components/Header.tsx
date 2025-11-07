import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  isWalletConnected: boolean;
  walletAddress?: string;
  onConnectWallet: () => void;
}

export const Header = ({ isWalletConnected, walletAddress, onConnectWallet }: HeaderProps) => {
  const location = useLocation();

  return (
    <header className="border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold">
              <span className="text-primary">FOXX</span> NFT
            </h1>
            <nav className="flex gap-2">
              <Link to="/">
                <Button
                  variant={location.pathname === "/" ? "default" : "ghost"}
                  className={cn(
                    "text-sm",
                    location.pathname === "/" && "bg-primary/10 text-primary hover:bg-primary/20"
                  )}
                >
                  FAPs
                </Button>
              </Link>
              <Link to="/fractals">
                <Button
                  variant={location.pathname === "/fractals" ? "default" : "ghost"}
                  className={cn(
                    "text-sm",
                    location.pathname === "/fractals" && "bg-primary/10 text-primary hover:bg-primary/20"
                  )}
                >
                  Fractals
                </Button>
              </Link>
            </nav>
          </div>
          <Button
            variant="outline"
            onClick={onConnectWallet}
            className="border-primary/30 hover:border-primary text-foreground"
          >
            {isWalletConnected && walletAddress ? walletAddress : "Connect Wallet"}
          </Button>
        </div>
      </div>
    </header>
  );
};
