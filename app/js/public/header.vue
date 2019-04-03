<!-- 通用头部 -->
<template>
  <div :class="$style.header">
      <div :class="$style.left">
          <em>注册</em>&nbsp; | &nbsp;<em>登陆</em>
      </div>
      <btn :class="$style.btnDownload">APP下载</btn>
  </div>
</template>

<script>
import btn from '../core/btn';
export default {
  name:"heador",
  data () {
    return {
    };
  },
  components:{
    btn
  }
}

</script>
<style lang='scss' module>
  .header{
    color: #666;
    height: 100px;
    // 行高可以继承
    line-height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    font-size: 32px;
    background: #fff url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center center no-repeat;
    z-index: 100;
    // 高度变成父容器一半
    background-size: auto 50%;//请记住这里

    .left{
      display: inline-block;
      font-size: 28px;
      margin: 17px 0 0 18px;
      height: 30px;
      line-height: 30px;
    // 这里还差两句
    }

    .btnDownload{
      float: right;
      font-size: 24px;
      border-width: 0;
      height: 56px;
      line-height: 56px;
      min-width: 120px;
      padding: 0;
      border-radius: 4px;
      margin: 28px 24px 0 0;
    }
  }
  
  
</style>