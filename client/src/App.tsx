import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Chapter from "./components/Chapter";
import Exercises from "./components/Exercises";
import Tools from "./components/Tools";
import Downloads from "./components/Downloads";

function Router() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/capitulo/:id" component={Chapter} />
          <Route path="/exercicios" component={Exercises} />
          <Route path="/ferramentas" component={Tools} />
          <Route path="/downloads" component={Downloads} />
          <Route path="/contato" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <ScrollToTop />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
