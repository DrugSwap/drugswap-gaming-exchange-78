import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              {navItems.map(({ to, page }) => (
                <Route key={to} path={to} element={page} />
              ))}
            </Routes>
          </main>
          <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
              <p>&copy; 2024 DrugSwap. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;