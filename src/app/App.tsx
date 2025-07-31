import Router from "./Router";
import { AuthProvider } from "@shared/context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
