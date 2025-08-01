import { lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import AuthProtectedLayout from "@shared/layout/AuthProtectedLayout";
import SuspenseLayout from "@shared/layout/SuspenseLayout";
const DashboardPage = lazy(
  () => import("@features/dashboard/pages/DashboardPage")
);
const AddExpensesPage = lazy(
  () => import("@features/expenses/pages/AddExpensesPage")
);
const LoginPage = lazy(() => import("@features/login/pages/LoginPage"));

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <AuthProtectedLayout>
              <SuspenseLayout>
                <Outlet />
              </SuspenseLayout>
            </AuthProtectedLayout>
          }
        >
          <Route path="/" element={<DashboardPage />} />
          <Route path="/add-expenses" element={<AddExpensesPage />} />
        </Route>
        <Route
          path="/login"
          element={
            <SuspenseLayout>
              <LoginPage />
            </SuspenseLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
