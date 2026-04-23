import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Home from "./pages/Home";

/**
 * Design Philosophy: Minimalist Scientific Precision
 * - Swiss Modernism aesthetic with data visualization focus
 * - Clean typography hierarchy, generous whitespace
 * - Teal accent used sparingly for critical elements
 * - Smooth, professional animations (no bounce)
 */

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <ScrollProgressBar />
          <Navbar />
          <Home />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

// Error Boundary Component
function ErrorBoundary({ children }: { children: React.ReactNode }) {
  try {
    return <>{children}</>;
  } catch (error) {
    console.error("Error:", error);
    return <div className="min-h-screen bg-background text-foreground flex items-center justify-center">An error occurred</div>;
  }
}

export default App;
