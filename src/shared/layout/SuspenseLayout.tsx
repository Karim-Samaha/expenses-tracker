import Spinner from "@shared/ui/Spinner";
import { ReactNode, Suspense } from "react";

export default function SuspenseLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense
      fallback={
        <section className="min-h-screen flex items-center justify-center">
          <Spinner className="border-blue-600" />
        </section>
      }
    >
      {children}
    </Suspense>
  );
}
