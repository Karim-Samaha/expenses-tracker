import { useLocation } from "react-router-dom";

const useQueryString = (queryString: string) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const value = queryParams.get(queryString);
  return { value };
};
export default useQueryString;
