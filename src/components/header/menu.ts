import FavoritesIcon from "../icons/FavoritesIcon";
import OrdersIcon from "../icons/OrdersIcon";
import ShoppingCart from "../icons/ShoppingCart";

export const menu = [
  {
    id: 1,
    title: "Избранное",
    icon: FavoritesIcon,
    link: "/favorites",
  },
  {
    id: 2,
    title: "Заказы",
    icon: OrdersIcon,
    link: "/orders",
  },
  {
    id: 3,
    title: "Корзина",
    icon: ShoppingCart,
    link: "/shoppingcart",
  },
];
