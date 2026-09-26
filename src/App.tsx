import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./pages/layout/Layout";
import Orders from "./pages/Orders";
import Favorites from "./pages/Favorites";
import ShoppingCart from "./pages/ShoppingCart";
import Page_404 from "./pages/404";
import About from "./pages/About";
import Vacancies from "./pages/Vacancies";
import Contacts from "./pages/Contacts";
import Search from "./pages/Search";
import Catalog from "./pages/Catalog";
import Category from "./pages/Category";
import OrdersManager from "./pages/OrdersManager";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/category" element={<Category />} />
          <Route path="/vacancies" element={<Vacancies />} />
          {/* для теста */}
          <Route path="/ordersmanager" element={<OrdersManager />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* для теста, исправлю) */}
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<Page_404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
