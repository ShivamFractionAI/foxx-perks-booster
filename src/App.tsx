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
  const [nfts, setNfts] = useState<any[]>([]);

  const handleConnectWallet = () => {
    if (!isWalletConnected) {
      // Simulate wallet connection
      setIsWalletConnected(true);
      setWalletAddress("0xb2...897f");
      // Uncomment to test with NFTs
      // setNfts([
      //   { id: "1", rarity: "COMMON", number: "2386", image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=500" },
      //   { id: "2", rarity: "LEGENDARY", number: "1155", image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=500" },
      //   { id: "3", rarity: "COMMON", number: "1290", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500" },
      // ]);
    }
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
                  onConnectWallet={handleConnectWallet}
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
                  onConnectWallet={handleConnectWallet}
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
