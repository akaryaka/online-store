import Home from "@pages/home";
import Orders from "@pages/orders";
import Favorites from "@pages/favorites";
import ShoppingCart from "@/pages/shoppingCart";
import Page_404 from "@/pages/404/404";
import About from "@/pages/about";
import Vacancies from "@pages/vacancies";
import Contacts from "@pages/contacts";
import Search from "@pages/search";
import Catalog from "@/pages/catalog";
import Category from "@pages/category";
import OrdersManager from "@/pages/manager";
import Product from "@/pages/product";
import AllBoughtBefore from "@/pages/allBoughtBefore";
import AllNewProducts from "@/pages/allNewProducts";
import AllSales from "@/pages/allSales";
import AllArticles from "@/pages/allArticles";

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
  { id: 9, path: "/allboughtbefore", element: AllBoughtBefore },
  { id: 10, path: "/allnewproducts", element: AllNewProducts },
  { id: 11, path: "/allsales", element: AllSales },
  { id: 12, path: "/allarticles", element: AllArticles },
  //  для теста
  { id: 13, path: "/ordersmanager", element: OrdersManager },
  //  для теста
  { id: 14, path: "/catalog/category/product", element: Product },
  { id: 15, path: "/contacts", element: Contacts },
  // для теста, исправлю)
  { id: 16, path: "/search", element: Search },
  { id: 17, path: "*", element: Page_404 },
];
