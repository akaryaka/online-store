- макет

https://www.figma.com/design/HCWLFGKr39O9p3If9g7MIA/%D0%9C%D0%B0%D0%BA%D0%B5%D1%82%D1%8B-%D1%81-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%BE%D0%B9-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%D0%B0-%D0%B8-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F.--Community-?node-id=0-1&p=f&t=xnCQG24ep6O1QYnb-0

my-shop/
├── client/ # React-приложение
│ ├── src/
│ │ ├── components/ # UI-компоненты
│ │ ├── pages/ # Страницы (Home, Product, Cart, Checkout…)
│ │ ├── hooks/ # Кастомные хуки
│ │ ├── store/ # Zustand / Redux
│ │ ├── services/ # API-вызовы (axios)
│ │ └── utils/
│ └── package.json
├── server/ # Express-сервер
│ ├── src/
│ │ ├── controllers/ # Логика обработки запросов
│ │ ├── models/ # Схемы БД
│ │ ├── routes/ # Маршруты API
│ │ ├── middleware/ # Auth, error handling, validation
│ │ ├── services/ # Бизнес-логика (Stripe, email)
│ │ └── config/ # Конфигурация (DB, env)
│ └── package.json
├── docker-compose.yml
└── README.md

Функциональные фичи (от базовых к продвинутым)
🟡 Средний уровень
Поиск с debounce и подсветкой совпадений
Избранное / Wishlist
Отзывы и рейтинг товаров (с модерацией)
Купоны и промокоды (скидка в % или фиксированная)
Email-уведомления (подтверждение заказа, статус доставки)
Пагинация / Infinite scroll в каталоге
Сортировка (по цене, популярности, новизне)
