 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/src/App.tsx b/src/App.tsx
index 66421fb933715caa682dfaa284e47599f3a54ab9..9c31ac1f4d04537f7f523b48a1fbeea35a23c196 100644
--- a/src/App.tsx
+++ b/src/App.tsx
@@ -2,73 +2,162 @@ import { Toaster } from "@/components/ui/toaster";
 import { Toaster as Sonner } from "@/components/ui/sonner";
 import { TooltipProvider } from "@/components/ui/tooltip";
 import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
 import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
 import { ThemeProvider } from "@/components/theme-provider";
 import { AuthProvider } from "@/contexts/AuthContext";
 import Index from "./pages/Index";
 import Login from "./pages/Login";
 import Signup from "./pages/Signup";
 import ResetPassword from "./pages/ResetPassword";
 import Dashboard from "./pages/Dashboard";
 import Products from "./pages/Products";
 import ProductForm from "./pages/ProductForm";
 import Bookings from "./pages/Bookings";
 import Analytics from "./pages/Analytics";
 import DMCampaigns from "./pages/DMCampaigns";
 import Emails from "./pages/Emails";
 import Integrations from "./pages/Integrations";
 import Settings from "./pages/Settings";
 import Billing from "./pages/Billing";
 import Onboarding from "./pages/Onboarding";
 import Storefront from "./pages/Storefront";
 import Checkout from "./pages/Checkout";
 import Success from "./pages/Success";
 import NotFound from "./pages/NotFound";
+import ComingSoon from "./pages/ComingSoon";
 
 const queryClient = new QueryClient();
 
+const placeholderRoutes = [
+  {
+    path: "/features",
+    title: "Feature breakdown",
+    description:
+      "We’re putting the finishing touches on a full walkthrough of everything ReFurrm Shops can do. Check back soon!",
+  },
+  {
+    path: "/pricing",
+    title: "Pricing & plans",
+    description:
+      "Simple, creator-friendly pricing is on the way. In the meantime, start a free trial to see how ReFurrm fits your business.",
+    ctaText: "Start free trial",
+    ctaHref: "/signup",
+  },
+  {
+    path: "/demo",
+    title: "Live demo",
+    description: "We’re curating a guided demo experience. Explore the sample shop or book a walkthrough soon.",
+    ctaText: "View sample shop",
+    ctaHref: "/shop/demo",
+  },
+  {
+    path: "/blog",
+    title: "Creator growth blog",
+    description: "Articles, playbooks, and case studies are on the way. Stay tuned for launch announcements.",
+  },
+  {
+    path: "/help",
+    title: "Help center",
+    description: "We’re building an in-depth help center. Reach out through contact for now and we’ll get you answers fast.",
+    ctaText: "Contact support",
+    ctaHref: "/contact",
+  },
+  {
+    path: "/api",
+    title: "API docs",
+    description: "Developer documentation is coming soon so you can extend ReFurrm Shops with your own workflows.",
+  },
+  {
+    path: "/about",
+    title: "About ReFurrm",
+    description: "Learn more about the team and mission powering ReFurrm Shops. We’re polishing this page right now.",
+  },
+  {
+    path: "/contact",
+    title: "Contact",
+    description: "Need help or want to partner? Drop us a note and we’ll get back to you shortly.",
+    ctaText: "Start free trial",
+    ctaHref: "/signup",
+  },
+  {
+    path: "/careers",
+    title: "Careers",
+    description: "We’re not hiring just yet, but we’re always excited to meet talented builders. Check back soon!",
+  },
+  {
+    path: "/privacy",
+    title: "Privacy policy",
+    description: "Our updated privacy policy will be posted here. We take your data seriously and will outline our practices clearly.",
+  },
+  {
+    path: "/terms",
+    title: "Terms of service",
+    description: "Our terms are being finalized and will live here for easy reference.",
+  },
+  {
+    path: "/cookies",
+    title: "Cookie policy",
+    description: "We’ll publish details about how we use cookies and similar technologies here soon.",
+  },
+];
+
 const App = () => (
   <ThemeProvider defaultTheme="light">
     <QueryClientProvider client={queryClient}>
       <TooltipProvider>
         <AuthProvider>
           <Toaster />
           <Sonner />
           <BrowserRouter>
             <Routes>
               {/* Public routes */}
               <Route path="/" element={<Index />} />
               <Route path="/login" element={<Login />} />
               <Route path="/signup" element={<Signup />} />
               <Route path="/reset-password" element={<ResetPassword />} />
               
               {/* Creator dashboard routes */}
               <Route path="/dashboard" element={<Dashboard />} />
               <Route path="/products" element={<Products />} />
               <Route path="/products/new" element={<ProductForm />} />
               <Route path="/products/:id" element={<ProductForm />} />
               <Route path="/bookings" element={<Bookings />} />
               <Route path="/analytics" element={<Analytics />} />
               <Route path="/dm-campaigns" element={<DMCampaigns />} />
               <Route path="/emails" element={<Emails />} />
               <Route path="/integrations" element={<Integrations />} />
               <Route path="/settings" element={<Settings />} />
               <Route path="/billing" element={<Billing />} />
               <Route path="/onboarding" element={<Onboarding />} />
-              
+
               {/* Public storefront routes */}
               <Route path="/shop/:username" element={<Storefront />} />
               <Route path="/checkout/:productId" element={<Checkout />} />
               <Route path="/success" element={<Success />} />
-              
+
+              {placeholderRoutes.map((route) => (
+                <Route
+                  key={route.path}
+                  path={route.path}
+                  element={
+                    <ComingSoon
+                      title={route.title}
+                      description={route.description}
+                      ctaText={route.ctaText}
+                      ctaHref={route.ctaHref}
+                    />
+                  }
+                />
+              ))}
+
               {/* Catch all */}
               <Route path="*" element={<NotFound />} />
             </Routes>
           </BrowserRouter>
         </AuthProvider>
       </TooltipProvider>
     </QueryClientProvider>
   </ThemeProvider>
 );
 
 export default App;
\ No newline at end of file
 
EOF
)