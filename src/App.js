import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
// import NotFound from "./components/NotFound";
// import Registration from "./pages/Registration";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";

const Registration = lazy(() => import("./pages/Registration"));
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={ <>Loading...</> }  >
        <Routes>
          <Route path='/' element={ <Navigate to='/signin' replace /> } />
          <Route path="/signup" element={ <Registration /> } />
          <Route
            path="/signin"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
