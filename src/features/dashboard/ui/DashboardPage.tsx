import { ArrowDown, ArrowUp, ChevronUp, Ellipsis } from "lucide-react";
import FooterBarLayout from "@shared/layout/FooterBarLayout";
import Select from "@shared/ui/Select";
import ListingExpenses from "../../expenses/components/ListingExpenses";
import { useAuth } from "@shared/context/AuthContext";
import Avatar from "@shared/ui/Avatar";

export default function DashboardPage() {
  const { user } = useAuth();
  return (
    <FooterBarLayout>
      <div className="min-h-screen bg-gray-50 font-sans max-w-sm mx-auto">
        <div className="bg-[#1D55F3] p-4">
          <div className="flex justify-between items-start py-4">
            <div className="flex items-center gap-x-2">
              {/* <img
                src="./profile2.webp"
                alt=""
                className="w-[38px] h-[38px] rounded-[50%]"
              /> */}
              <Avatar user={user?.email || ""} />
              <div>
                <p className="text-sm text-white">Good Morning</p>
                <h2 className="text-lg font-semibold text-white">
                  Shihab Rahman
                </h2>
              </div>
            </div>
            <div>
              <Select
                options={["This month", "This year", "All"]}
                onSelect={() => null}
              />
            </div>
          </div>

          <div className="bg-[#496EF3] text-white rounded-2xl p-6 shadow-lg relative overflow-hidden relative top-[30px]">
            <div className="flex justify-between">
              <div className="flex items-center gap-x-1">
                <p className="text-sm ">Total Balance</p>
                <ChevronUp size={15} />
              </div>
              <Ellipsis size={18} />
            </div>
            <h1 className="text-3xl font-bold">$2,548.00</h1>
            <div className="flex justify-between mt-4">
              <div>
                <div className="flex items-center gap-x-1">
                  <span className="bg-[#5D80F9] p-[2px] rounded-[50%]">
                    <ArrowDown size={15} />
                  </span>
                  <p className="text-sm opacity-75"> Income</p>
                </div>
                <p className="text-lg font-semibold">$10,840.00</p>
              </div>
              <div>
                <div className="flex items-center gap-x-1">
                  <span className="bg-[#5D80F9] p-[2px] rounded-[50%]">
                    <ArrowUp size={15} />
                  </span>
                  <p className="text-sm opacity-75">Expenses</p>
                </div>
                <p className="text-lg font-semibold">$1,884.00</p>
              </div>
            </div>
          </div>
        </div>

        <ListingExpenses />
      </div>
    </FooterBarLayout>
  );
}
