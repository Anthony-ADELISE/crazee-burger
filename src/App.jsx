import { Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import { Login } from "./pages/Login";
import Order from "./pages/Order";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/order/:firstName" element={<Order />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
