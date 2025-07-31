// components/FadeIn.tsx
import { ReactNode } from "react";

export default function FadeIn({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`animate-fadeIn ${className}`}>{children}</div>;
}
