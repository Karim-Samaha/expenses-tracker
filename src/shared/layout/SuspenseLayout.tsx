import Spinner from "@shared/ui/Spinner";
import { ReactNode, Suspense } from "react";

export default function SuspenseLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="mt-[35vh]">
          <Spinner className="border-blue-600" />
        </div>
      }
    >
      {children}
    </Suspense>
  );
}
