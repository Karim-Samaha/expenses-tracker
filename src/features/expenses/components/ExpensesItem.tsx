import FadeIn from "@shared/ui/FadeIn";
import Expenses from "../types/Expenses";
import handleDateString from "../utils/handleDateString";

interface ExpensesItemProps {
  data: Expenses;
}
const ExpensesItem: React.FC<ExpensesItemProps> = ({ data }) => {
  return (
    <FadeIn>
      <li
        className="bg-white rounded-xl px-4 py-2 shadow flex items-center "
      >
        <div className="text-2xl mr-4 rounded-[50%] bg-[#E7E4F5] flex items-center justify-center p-[3px] ">
          <div> {data?.categoryIcon}</div>
        </div>
        <div className="flex-1">
          <p className="font-semibold">{data.category}</p>
          <p className="text-sm text-gray-400">Manually</p>
        </div>
        <div>
          <p className="font-semibold text-right">{data.amount} $</p>
          <p className="text-sm text-gray-400 text-right">
            {data?.date && handleDateString(data.date)}
          </p>
        </div>
      </li>
    </FadeIn>
  );
};
export default ExpensesItem;
