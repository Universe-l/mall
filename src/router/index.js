import Vue from "vue";
import VueRouter from "vue-router";
import Cart from "../pages/Cart.vue";
import Address from "../pages/Address.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Cart",
    component: Cart
  },
  {
    path: "/Address",
    name: "Address",
    component: Address
  }
];

const router = new VueRouter({
  routes
});

export default router;
