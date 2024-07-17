import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout, NotFound, ThemeProvider } from "./components";
import {
  About,
  Contact,
  Home,
  Location,
  Login,
  Product,
  Signup,
} from "./pages";

function App() {
  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="vite-ui-theme"
    >
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
              path="/products"
              element={<Product />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
