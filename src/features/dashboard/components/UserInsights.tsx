import { ArrowDown, ArrowUp, ChevronUp, Ellipsis } from "lucide-react";

const UserInsights = () => {
  return (
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
  );
};

export default UserInsights;
