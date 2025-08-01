import type { ReactNode } from "react";
import {
  House,
  Plus,
  Signal,
  UserRoundSearch,
  WalletMinimal,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function FooterBarLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const fullPath = location.pathname + location.search;
  return (
    <section className="pb-[70px] bg-[#FAFCFC] w-full mx-auto">
      {children}
      <div className="fixed bottom-0 left-0 right-0 bg-white inset-shadow-sm p-2 flex justify-around items-center max-w-[880px] mx-auto h-[60px]">
        <House className="text-xl text-[#1D55F3] " />
        <Signal className="text-xl text-gray-500" />{" "}
        <Link
          to={`/add-expenses?source=${fullPath}`}
          className="4xl bg-[#1D55F3]  rounded-full p-2"
        >
          <Plus strokeWidth={1.5} className="text-4xl text-white" />
        </Link>
        <WalletMinimal className="text-xl text-gray-500" />
        <UserRoundSearch className="text-xl text-gray-500" />
      </div>
    </section>
  );
}
