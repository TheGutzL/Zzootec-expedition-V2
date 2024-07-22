import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { AdminRoute, Layout, NotFound, ProtectedRoute } from "./components";
import {
  About,
  Cart,
  CategoryPanel,
  Contact,
  Home,
  Location,
  Login,
  Order,
  OrderDetail,
  OrderPanel,
  PaymentFail,
  PaymentSuccess,
  ProductDetail,
  ProductPanel,
  ProductPanelForm,
  Profile,
  Settings,
  Signup,
  Store,
  UserPanel,
} from "./pages";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import { useAuthStore } from "./store";

function App() {
  const { isAuth } = useAuthStore();

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
          <Route element={<ProtectedRoute />}>
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
          </Route>

          <Route
            path="/login"
            element={!isAuth ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!isAuth ? <Signup /> : <Navigate to="/" />}
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
        <Route
          path="/admin"
          element={<AdminRoute />}
        >
          <Route
            index
            element={<Dashboard />}
          />
          <Route
            path="/admin/users"
            element={<UserPanel />}
          />
          <Route
            path="/admin/products"
            element={<ProductPanel />}
          />
          <Route
            path="/admin/products/:id"
            element={<ProductPanelForm />}
          />
          <Route
            path="/admin/categories"
            element={<CategoryPanel />}
          />
          <Route
            path="/admin/orders"
            element={<OrderPanel />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
