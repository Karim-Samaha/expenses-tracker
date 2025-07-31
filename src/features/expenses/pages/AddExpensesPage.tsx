import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import AddExpensesForm from "../components/AddExpensesForm";
import ModalComponet from "@shared/ui/Modal";
import { ReactNode } from "react";

export default function AddExpensesPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const prevPage = queryParams.get("source");
  return (
    <div className="min-h-screen font-sans max-w-sm mx-auto p-4">
      <div className="text-lg font-semibold text-center mb-6 mt-4 relative">
        <Link
          to={prevPage || "/dashboard"}
          className="absolute top-[3px] left-[0]"
        >
          <ArrowLeft strokeWidth={1.25} />
        </Link>
        <p>Add Expense</p>
      </div>
      <AddExpensesForm />
    </div>
  );
}
