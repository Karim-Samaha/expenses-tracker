import useExpensesData from "../hooks/useExpensesData";
import ExpensesItem from "./ExpensesItem";
import usePaginationOnScroll from '@shared/hooks/usePaginationOnScroll'
export default function ListingExpenses() {
  const { data, loadMore } = useExpensesData();
  const { observerRef } = usePaginationOnScroll({loadMore})
  return (
    <div className="mt-5">
      <div className="flex justify-between items-center mb-1 p-4">
        <h3 className="text-lg font-semibold">Recent Expenses</h3>
        <button className="text-black text-sm font-medium">see all</button>
      </div>
      <ul className="space-y-3 px-4">
        {data?.map((item, i) => (
          <ExpensesItem data={item} i={i} />
        ))}
      </ul>
      <div ref={observerRef} className="h-8"></div>
    </div>
  );
}

{
  /* <ul className="space-y-3 px-4">
        {[
          { icon: "🛒", title: "Groceries", amount: "- $100" },
          { icon: "🎮", title: "Entertainment", amount: "- $100" },
          { icon: "🚗", title: "Transportation", amount: "- $100" },
          { icon: "🏠", title: "Rent", amount: "- $100" },
        ].map((item, i) => (
          <li
            key={i}
            className="bg-white rounded-xl px-4 py-2 shadow flex items-center"
          >
            <div className="text-2xl mr-4 rounded-[50%] bg-[#E7E4F5] flex items-center justify-center p-[3px]">
              <div> {item.icon}</div>
            </div>
            <div className="flex-1">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-400">Manually • Today 12:00 PM</p>
            </div>
            <p className="font-semibold">{item.amount}</p>
          </li>
        ))}
      </ul> */
}
function useScrollPagination(arg0: { loadMore: () => void; }): { observerRef: any; } {
  throw new Error("Function not implemented.");
}

