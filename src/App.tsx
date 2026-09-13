import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Orders from "./pages/Orders"
import Favorites from "./pages/Favorites"
import ShoppingCart from "./pages/ShoppingCart"
import Page_404 from "./pages/404"
import About from "./pages/About"
import Vacancies from "./pages/Vacancies"
import Contacts from "./pages/Contacts"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/orders" element={<Orders />}/>
          <Route path="/favorites" element={<Favorites />}/>
          <Route path="/shoppingcart" element={<ShoppingCart />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/vacancies" element={<Vacancies />}/>
          <Route path="/contacts" element={<Contacts />}/>
          <Route path="*" element={<Page_404 />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
