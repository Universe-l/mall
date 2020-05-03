<template>
  <div>
      <home-header></home-header>
      <cart-nav></cart-nav>
      <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from '../components/Header.vue';
import HomeFooter from '../components/Footer.vue';
import CartNav from '../components/CartNav.vue';

export default {
  name: "Cart",
  components: {
    HomeHeader,
    HomeFooter,
    CartNav
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
