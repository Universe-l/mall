<template>
  <div class="nav">
    <div class="container">
      <a>首页</a>
      <span>购物车</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartNav"
};
</script>

<style scoped lang="stylus">
  .nav
    background #f0f0f0
    width 100%
    .container
      height 40px
      font-size 14px
      width 200px
      margin-left 55px
      height 40px
      a
        line-height 40px
        color #999
        padding-right 10px
      span
        line-height 40px
        color red
      a::after
        content "/"
        padding-left 10px
</style>
