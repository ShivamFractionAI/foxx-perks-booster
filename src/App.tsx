import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import FAPs from "./pages/FAPs";
import Fractals from "./pages/Fractals";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string>();
  const [showNFTs, setShowNFTs] = useState(false);

  const mockNfts = [
    { id: "1", rarity: "COMMON", number: "587", image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=500&h=500&fit=crop" },
    { id: "2", rarity: "COMMON", number: "1654", image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=500&h=500&fit=crop" },
    { id: "3", rarity: "RARE", number: "1738", image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=500&h=500&fit=crop" },
    { id: "4", rarity: "LEGENDARY", number: "1776", image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500&h=500&fit=crop" },
  ];

  const nfts = isWalletConnected && showNFTs ? mockNfts : [];

  const handleConnectWallet = () => {
    if (!isWalletConnected) {
      setIsWalletConnected(true);
      setWalletAddress("0xd4c2...1eC3");
    }
  };

  const handleDisconnectWallet = () => {
    setIsWalletConnected(false);
    setWalletAddress(undefined);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <FAPs
                  isWalletConnected={isWalletConnected}
                  walletAddress={walletAddress}
                  nfts={nfts}
                  showNFTs={showNFTs}
                  onToggleNFTs={setShowNFTs}
                  onConnectWallet={handleConnectWallet}
                  onDisconnectWallet={handleDisconnectWallet}
                />
              }
            />
            <Route
              path="/fractals"
              element={
                <Fractals
                  isWalletConnected={isWalletConnected}
                  walletAddress={walletAddress}
                  nfts={nfts}
                  showNFTs={showNFTs}
                  onToggleNFTs={setShowNFTs}
                  onConnectWallet={handleConnectWallet}
                  onDisconnectWallet={handleDisconnectWallet}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
