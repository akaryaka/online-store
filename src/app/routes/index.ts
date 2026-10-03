import Home from "@pages/home/Home";
import Orders from "@pages/orders/Orders";
import Favorites from "@pages/favorites/Favorites";
import ShoppingCart from "@pages/shoppingcart/ShoppingCart";
import Page_404 from "@/pages/404/404";
import About from "@/pages/about/About";
import Vacancies from "@pages/vacancies/Vacancies";
import Contacts from "@pages/contacts/Contacts";
import Search from "@pages/search/Search";
import Catalog from "@/pages/catalog/Catalog";
import Category from "@pages/category/Category";
import OrdersManager from "@/pages/manager/OrdersManager";
import Product from "@/pages/product/Product";

export const routes = [
  { id: 1, path: "/", element: Home },
  { id: 2, path: "/orders", element: Orders },
  { id: 3, path: "/favorites", element: Favorites },
  { id: 4, path: "/shoppingcart", element: ShoppingCart },
  { id: 5, path: "/about", element: About },
  {
    id: 6,
    path: "/catalog",
    element: Catalog,
    children: [
      {
        path: "/:productId",
      },
    ],
  },
  { id: 7, path: "/catalog/category", element: Category },
  { id: 8, path: "/vacancies", element: Vacancies },
  //  для теста
  { id: 9, path: "/ordersmanager", element: OrdersManager },
  //  для теста
  { id: 10, path: "/product", element: Product },
  { id: 11, path: "/contacts", element: Contacts },
  // для теста, исправлю)
  { id: 12, path: "/search", element: Search },
  { id: 13, path: "*", element: Page_404 },
];
