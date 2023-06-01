import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show";
import Edit from "./pages/Edit";
import PageWrapper from "./components/global/PageWrapper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PageNotFound from "./pages/global/PageNotFound";
import { ClerkProvider } from "@clerk/clerk-react";

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <ClerkProvider publishableKey={clerkPubKey}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <PageWrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Index />} />
                <Route path="/books/new" element={<New />} />
                <Route path="/books/:id" element={<Show />} />
                <Route path="/books/:id/edit" element={<Edit />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </PageWrapper>
          </Router>
        </QueryClientProvider>
      </ClerkProvider>
    </>
  );
}
