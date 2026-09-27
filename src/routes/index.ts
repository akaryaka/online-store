import Home from "@pages/Home";
import Orders from "@pages/Orders";
import Favorites from "@pages/Favorites";
import ShoppingCart from "@pages/ShoppingCart";
import Page_404 from "@pages/404";
import About from "@pages/About";
import Vacancies from "@pages/Vacancies";
import Contacts from "@pages/Contacts";
import Search from "@pages/Search";
import Catalog from "@pages/Catalog";
import Category from "@pages/Category";
import OrdersManager from "@pages/OrdersManager/OrdersManager";

export const routes = [
  { id: 1, path: "/", element: Home },
  { id: 2, path: "/orders", element: Orders },
  { id: 3, path: "/favorites", element: Favorites },
  { id: 4, path: "/shoppingcart", element: ShoppingCart },
  { id: 5, path: "/about", element: About },
  { id: 6, path: "/catalog", element: Catalog },
  { id: 7, path: "/category", element: Category },
  { id: 8, path: "/vacancies", element: Vacancies },
  //  для теста
  { id: 9, path: "/ordersmanager", element: OrdersManager },
  { id: 10, path: "/contacts", element: Contacts },
  // для теста, исправлю)
  { id: 11, path: "/search", element: Search },
  { id: 12, path: "*", element: Page_404 },
];
