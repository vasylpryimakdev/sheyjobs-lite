import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <ProtectedRoute>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
