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
            path="/product/:productId"
            element={<ProductDetail />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
