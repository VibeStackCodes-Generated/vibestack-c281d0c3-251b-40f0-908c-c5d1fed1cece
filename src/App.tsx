import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "@/pages/Index";
import PostDetail from "@/pages/PostDetail";
import Destinations from "@/pages/Destinations";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
