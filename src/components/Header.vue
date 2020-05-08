<template>
  <div class="header">
    <div class="header-left">
      <img src="../assets/logo.png" />
    </div>
    <div class="header-right">
      <a href="https://www.imooc.com/u/index/allcourses">
        渡与生
      </a>
      <span class="iconfont">&#xe658;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.header
  width: 100%;
  height: 80px;
  background white;
  .header-left
    margin-left: 30px;
    width: 40%;
    float: left;
  .header-right
    width: 110px;
    float: right;
    margin-right: 40px;
    a
      line-height: 80px;
      text-decoration: none;
      color: black;
    span
      margin-left: 25px;
</style>
