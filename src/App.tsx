import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout, NotFound } from "./components";
import {
  About,
  Contact,
  Home,
  Location,
  Login,
  Product,
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
