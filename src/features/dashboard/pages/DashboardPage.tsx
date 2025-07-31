import FooterBarLayout from "@shared/layout/FooterBarLayout";
import ListingExpenses from "../../expenses/components/ListingExpenses";
import { useAuth } from "@shared/context/AuthContext";
import Avatar from "@shared/ui/Avatar";
import UserInsights from "../components/UserInsights";
import FilterSelect from "../components/FilterSelect";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <FooterBarLayout>
      <div className="min-h-screen bg-gray-50 font-sans max-w-sm mx-auto">
        <div className="bg-[#1D55F3] p-4">
          <div className="flex justify-between items-start py-4">
            <div className="flex items-center gap-x-2">
              <Avatar user={user?.email || ""} />
              <div>
                <p className="text-sm text-white">Good Morning</p>
                <h2 className="text-lg font-semibold text-white">
                  {user?.email.split("@")[0]}
                </h2>
              </div>
            </div>
            <div>
              <FilterSelect />
            </div>
          </div>

          <UserInsights />
        </div>

        <ListingExpenses />
      </div>
    </FooterBarLayout>
  );
}
