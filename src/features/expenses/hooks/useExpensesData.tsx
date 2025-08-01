import { useEffect, useMemo, useState } from "react";
import { getExpenses } from "../services/GetExpenses";
import Expenses from "../types/Expenses";
import { filterByDate } from "../utils/filterExpensesByDate";
import useQueryString from "@shared/hooks/useQueryString";
import Default_Filter from "@features/dashboard/types/DefaultFilterEnum";

const PAGE_SIZE = 10;
const useExpensesData = () => {
  const { value } = useQueryString("filter");
  const filterOption = value || Default_Filter.VAL;
  const [data, setData] = useState<{
    data: Expenses[];
    render: Expenses[];
    loaded: boolean;
  }>({
    data: [],
    render: [],
    loaded: false,
  });
  const [page, setPage] = useState(1);

  const getData = () => {
    const storeData = getExpenses();
    const filtered = filterByDate(storeData, filterOption);
    setData((prev) => ({
      ...prev,
      data: filtered,
      render: filtered.slice(0, PAGE_SIZE),
      loaded: true,
    }));
  };
  const loadMore = () => {
    if (data.render.length < data.data.length) {
      setPage((prev) => prev + 1);
    }
  };
  useEffect(() => {
    getData();
  }, [filterOption]);
  useEffect(() => {
    if (page === 1) return;
    const nextChunk = data.data.slice(0, PAGE_SIZE * page);
    setData((prev) => ({
      ...prev,
      render: nextChunk,
    }));
  }, [page]);
  const headerText = useMemo(() => {
    if (["WEEK", "MONTH"].includes(filterOption)) return "Recent Expenses";
    if (filterOption === "YEAR") return "This Year Expenses";
    else return "Expenses";
  }, [filterOption]);

  return {
    data: data.render,
    loadMore,
    isEmpty: data.loaded && data.data.length === 0,
    headerText,
  };
};

export default useExpensesData;
