<template>
  <div class="content">
    <div class="container">
      <div class="page-tittle">
        <h2>我的购物车</h2>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <td></td>
              <td>商品信息</td>
              <td>商品金额</td>
              <td>商品数量</td>
              <td>总金额</td>
              <td>编辑</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button></button>
              </td>
              <td>
                <div class="info">
                  <div class="info-img">
                    <img src="../assets/imgs/1.jpg" />
                  </div>
                  <div class="info-title">
                    <span>小度人工智能音箱</span>
                  </div>
                </div>
              </td>
              <td class="td">89</td>
              <td class="td">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </td>
              <td class="td">89</td>
              <td class="td">
                <button>删除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="result">
        <div class="result-left">
          <button></button>
          <span>全选</span>
        </div>
        <div class="result-right">
          <span>总价：</span>
          <span class="total-price">￥89.00元</span>
          <button>结算</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartContent"
};
</script>

<style scoped lang="stylus">
body
  background #f5f7fc
  .content
    margin 0 auto
    padding 0 10px
    max-width 1280px
    h2
      padding 40px 0 20px 0
      margin 0
    .result
      width 1260px
      border 1px solid #e9e9e9
      height 80px
      background white
      margin 20px 0px
      .result-left
        display inline-block
        height 80px
        line-height 80px
        padding-left 20px
      .result-right
        display inline-block
        float right 
        height 80px
        margin-right 30px
        line-height 80px
        .total-price
          color red
        button
          margin-left 10px
    table
      width 1260px
      border 1px solid #e9e9e9
      border-collapse collapse
      thead
        background #605f5f
        color white
        tr
          height 40px
        td
          text-align center
          line-height 40px
          letter-spacing .25em
      tbody
        background white
        tr
          height 145px
          .info
            height 145px
            padding-top 43px
            .info-img
              float: left;
              width: 80px;
              height: 80px;
              margin-left: 20px;
              border: 1px solid #e9e9e9;
              overflow: hidden;
              img
                width 100%
            .info-title
              display flex
              min-height 76px
              padding 0 20px 0 20px
              -webkit-flex-wrap wrap
              -ms-flex-wrap wrap
              flex-wrap wrap
              span
                width 100%
                line-height 76px
                color #000
                font-family "moderat", sans-serif
                font-weight bold
          .td
            text-align center
</style>
