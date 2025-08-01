import { Link } from "react-router-dom";
import useExpensesData from "../hooks/useExpensesData";
import ExpensesItem from "./ExpensesItem";
import usePaginationOnScroll from "@shared/hooks/usePaginationOnScroll";
import { Download, PlusCircle } from "lucide-react";
import FadeIn from "@shared/ui/FadeIn";
import downloadCsv from "../utils/DownloadCsv";

export default function ListingExpenses() {
  const { data, isEmpty, loadMore } = useExpensesData();
  const { observerRef } = usePaginationOnScroll({ loadMore });
  return (
    <div className="mt-5">
      <div className="flex justify-between items-center mb-1 p-4">
        <h3 className="text-lg font-semibold">Recent Expenses</h3>
        <button
          className="text-blue-600 text-sm font-medium flex items-center gap-x-1 cursor-pointer"
          onClick={() => downloadCsv(data)}
        >
          <Download size={14} /> <span>csv</span>
        </button>
      </div>
      {isEmpty ? (
        <FadeIn>
          <div className="flex flex-col items-center justify-center py-12 text-center text-gray-500">
            <p className="mb-2 text-base font-medium">No recent expenses yet</p>
            <Link
              to="/add-expenses"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
            >
              <PlusCircle className="w-4 h-4" />
              Add your your expenses now
            </Link>
          </div>
        </FadeIn>
      ) : (
        <ul className="space-y-3 px-4">
          {data?.map((item, i) => (
            <ExpensesItem data={item} key={i} />
          ))}
        </ul>
      )}

      <div ref={observerRef} className="h-8"></div>
    </div>
  );
}
