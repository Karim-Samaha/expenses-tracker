import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import AddExpensesForm from "../components/AddExpensesForm";
import ModalComponet from "@shared/ui/Modal";
import { ReactNode } from "react";
import useQueryString from "@shared/hooks/useQueryString";

export default function AddExpensesPage() {
  const {value: prevPage } = useQueryString("source")
  return (
    <div className="min-h-screen font-sans max-w-sm mx-auto p-4">
      <div className="text-lg font-semibold text-center mb-6 mt-4 relative">
        <Link
          to={prevPage || "/"}
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
