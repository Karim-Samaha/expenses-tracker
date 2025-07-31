import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import DashboardPage from "@features/dashboard/ui/DashboardPage";
import AddExpensesPage from "@features/expenses/pages/AddExpensesPage";
import LoginPage from "@features/login/pages/LoginPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/add-expenses" element={<AddExpensesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
