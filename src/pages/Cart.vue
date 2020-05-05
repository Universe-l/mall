<template>
  <div>
    <home-header></home-header>
    <cart-nav></cart-nav>
    <cart-content></cart-content>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from "../components/Header.vue";
import HomeFooter from "../components/Footer.vue";
import CartNav from "../components/CartNav.vue";
import CartContent from "../components/CartContent.vue";

export default {
  name: "Cart",
  components: {
    HomeHeader,
    HomeFooter,
    CartNav,
    CartContent
  }
};
</script>

<style scoped lang="stylus">
  *
    background #f5f7fc
</style>
