import About from "@pages/About.vue";
import Account from "@pages/Account.vue";
import Cart from "@pages/Cart.vue";
import Delivery from "@pages/Delivery.vue";
import Pizzas from "@pages/Pizzas.vue";

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", name: "Pizzas", component: Pizzas },
  { path: "/about", name: "About us", component: About },
  { path: "/delivery", name: "Delivery", component: Delivery },
  { path: "/cart", name: "Cart", component: Cart },
  { path: "/authorization", name: "Account", component: Account },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
