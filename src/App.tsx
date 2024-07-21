import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout, NotFound } from "./components";
import {
  About,
  Cart,
  Contact,
  Home,
  Location,
  Login,
  Order,
  OrderDetail,
  PaymentFail,
  PaymentSuccess,
  ProductDetail,
  Profile,
  Settings,
  Signup,
  Store,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
          errorElement={<NotFound />}
        >
          <Route
            index={true}
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route
            path="/settings"
            element={<Settings />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
          <Route
            path="/orders"
            element={<Order />}
          />
          <Route
            path="/orders/:id"
            element={<OrderDetail />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/location"
            element={<Location />}
          />
          <Route
            path="/store"
            element={<Store />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetail />}
          />
          <Route
            path="/payment/success/:id"
            element={<PaymentSuccess />}
          />
          <Route
            path="/payment/fail"
            element={<PaymentFail />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
