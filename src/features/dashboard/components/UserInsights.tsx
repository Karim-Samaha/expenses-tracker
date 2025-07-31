import { ArrowDown, ArrowUp, ChevronUp, Ellipsis } from "lucide-react";
import useInsights from "../hooks/useInsights";
import formatMoney from "../utils/formatMoney";

const UserInsights = () => {
  const { totalExpenses, totalIncome, totalBalance } = useInsights();
  return (
    <div className="bg-[#496EF3] text-white rounded-2xl p-6 shadow-lg relative overflow-hidden relative top-[30px]">
      <div className="flex justify-between">
        <div className="flex items-center gap-x-1">
          <p className="text-sm ">Total Balance</p>
          <ChevronUp size={15} />
        </div>
        <Ellipsis size={18} />
      </div>
      <h1 className="text-3xl font-bold">${formatMoney(totalIncome)}</h1>
      <div className="flex justify-between mt-4">
        <div>
          <div className="flex items-center gap-x-1">
            <span className="bg-[#5D80F9] p-[2px] rounded-[50%]">
              <ArrowDown size={15} />
            </span>
            <p className="text-sm opacity-75"> Income</p>
          </div>
          <p className="text-lg font-semibold">${formatMoney(totalBalance)}</p>
        </div>
        <div>
          <div className="flex items-center gap-x-1">
            <span className="bg-[#5D80F9] p-[2px] rounded-[50%]">
              <ArrowUp size={15} />
            </span>
            <p className="text-sm opacity-75">Expenses</p>
          </div>
          <p className="text-lg font-semibold">
            ${formatMoney(totalExpenses)}
            {/* $1,884.00 */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInsights;
