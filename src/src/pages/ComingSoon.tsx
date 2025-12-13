 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/src/pages/ComingSoon.tsx b/src/pages/ComingSoon.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..d81fe2c0bbb93453f5371fc55a80fe1cbe786079
--- /dev/null
+++ b/src/pages/ComingSoon.tsx
@@ -0,0 +1,37 @@
+import React from "react";
+import { Link } from "react-router-dom";
+import { Button } from "@/components/ui/button";
+
+interface ComingSoonProps {
+  title: string;
+  description: string;
+  ctaText?: string;
+  ctaHref?: string;
+}
+
+export default function ComingSoon({ title, description, ctaText, ctaHref }: ComingSoonProps) {
+  return (
+    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 py-16">
+      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-2xl p-10 text-center">
+        <p className="text-purple-200 uppercase tracking-[0.3em] text-xs font-semibold mb-4">ReFurrm Shops</p>
+        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
+        <p className="text-lg text-slate-200 mb-8">{description}</p>
+
+        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
+          <Link to="/">
+            <Button variant="outline" className="text-white border-white hover:bg-white/10">
+              Back to home
+            </Button>
+          </Link>
+          {ctaHref && ctaText && (
+            <Link to={ctaHref}>
+              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
+                {ctaText}
+              </Button>
+            </Link>
+          )}
+        </div>
+      </div>
+    </div>
+  );
+}
 
EOF
)