import Router from "./Router";
import { AuthProvider } from "@shared/context/AuthContext";
import ErrorBoundary from "@shared/layout/ErrorBoundryLayout";
function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
