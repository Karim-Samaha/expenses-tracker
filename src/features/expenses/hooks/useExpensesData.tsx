import { useEffect, useRef, useState } from "react";
import { getExpenses } from "../services/GetExpenses";
import Expenses from "../types/Expenses";

const PAGE_SIZE = 10;
const useExpensesData = () => {
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
    setData((prev) => ({
      ...prev,
      data: storeData,
      render: storeData.slice(0, PAGE_SIZE),
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
  }, []);
  useEffect(() => {
    if (page === 1) return;
    const nextChunk = data.data.slice(0, PAGE_SIZE * page);
    setData((prev) => ({
      ...prev,
      render: nextChunk,
    }));
  }, [page]);

  return {
    data: data.render,
    loadMore,
    isEmpty: data.loaded && data.data.length === 0,
  };
};

export default useExpensesData;
