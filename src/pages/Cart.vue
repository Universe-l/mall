<template>
  <div>
      <home-header></home-header>
      <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from '../components/Header.vue';
import HomeFooter from '../components/Footer.vue';

export default {
  name: "Cart",
  components: {
    HomeHeader,
    HomeFooter
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
