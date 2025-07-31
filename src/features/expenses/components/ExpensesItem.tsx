import Expenses from "../types/Expenses";

interface ExpensesItemProps {
  data: Expenses;
  i: number;
}
const ExpensesItem: React.FC<ExpensesItemProps> = ({ data, i }) => {
  return (
    <li
      key={data.date ? new Date(data.date).getDate() : i}
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
        <p className="text-sm text-gray-400">Today 12:00 PM</p>
      </div>
    </li>
  );
};
export default ExpensesItem;
