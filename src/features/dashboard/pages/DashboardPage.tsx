import FooterBarLayout from "@shared/layout/FooterBarLayout";
import ListingExpenses from "../../expenses/components/ListingExpenses";
import { useAuth } from "@shared/context/AuthContext";
import Avatar from "@shared/ui/Avatar";
import UserInsights from "../components/UserInsights";
import FilterSelect from "../components/FilterSelect";
import FadeIn from "@shared/ui/FadeIn";
import minimizeString from "@shared/utils/minimizeString";
export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <FooterBarLayout>
      <div className="min-h-screen bg-gray-50 font-sans max-w-[880px] mx-auto">
        <div className="bg-[#1D55F3] p-4">
          <div className="flex justify-between items-start py-4">
            <FadeIn>
              <div className="flex items-start gap-x-2">
                <Avatar user={user?.email || ""} />
                <div>
                  <p className="text-sm text-white">Good Morning</p>
                  <h2 className="text-lg font-semibold text-white">
                    {minimizeString(user?.email.split("@")[0] || "", 12)}
                  </h2>
                </div>
              </div>
            </FadeIn>
            <div>
              <FilterSelect />
            </div>
          </div>
          <FadeIn>
            <UserInsights />
          </FadeIn>
        </div>
        <ListingExpenses />
      </div>
    </FooterBarLayout>
  );
}
