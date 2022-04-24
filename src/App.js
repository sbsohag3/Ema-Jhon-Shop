import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import Inventory from "./component/Inventory/Inventory";
import Login from "./component/Login/Login";
import Orders from "./component/Orders/Orders";
import RequireAuth from "./component/RequireAuth/RequireAuth";
import Shipment from "./component/Shipment/Shipment";
import Shop from "./component/Shop/Shop";
import SignUp from "./component/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/shipment"
          element={
            <RequireAuth>
              <Shipment />
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
