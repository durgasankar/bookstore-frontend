import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={ <Homepage /> } />
        <Route path='/signup' element={ <Registration /> } />
        <Route path='/signin' element={ <Login /> } />
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
    </div>
  );
}

export default App;
