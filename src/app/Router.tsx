import { Outlet, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import DashboardPage from "@features/dashboard/pages/DashboardPage";
import AddExpensesPage from "@features/expenses/pages/AddExpensesPage";
import LoginPage from "@features/login/pages/LoginPage";
import AuthProtectedLayout from "@shared/layout/AuthProtectedLayout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <AuthProtectedLayout>
              <Outlet />
            </AuthProtectedLayout>
          }
        >
          <Route path="/" element={<DashboardPage />} />
          <Route path="/add-expenses" element={<AddExpensesPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
