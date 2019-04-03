<!-- 导航条不常换的，写死就行 -->
<template>
  <panel title="导航条" :class="$style.panel">
      <ul :class="$style.content">
          <li>
              <router-link :to="{name:'home'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3451/188/644771475/2428/800d7cb7/580f2435Nbfaa8055.png?width=66&height=66" alt="">
                <p>首页</p> 
              </router-link>
          </li>
          <li>
              <router-link :to="{name:'money'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66" alt="">
                <p>理财</p>
              </router-link>
          </li>
          <li>
              <router-link :to="{name:'whitebar'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66" alt="">
                <p>白条</p>
              </router-link>
          </li>
          <li>
              <router-link :to="{name:'crowdfunding'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66" alt="">
                <p>众筹</p>
              </router-link>
          </li>
          <li>
              <router-link :to="{name:'wode'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66" alt="">
                <p>我的</p>
              </router-link>
          </li>
          
      </ul>
  </panel>
</template>

<script>
import panel from '../core/panel';
export default {
  data () {
    return {
    };
  },

  components: {
      panel
  }
}

</script>
<style lang='scss' module>
@import '../../css/element.scss';
.panel{
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    margin: 0 !important;
    z-index: 999;
    // 有时候闪动，用层级
    h4{
        display: none;
    }
  .content{
      @include list(row);
      height: 100px;
      li{
          width: 20%;
          box-sizing: border-box;
          text-align: center;
          a{
              text-decoration: none;
          }
          img{
              width: 44px;
              height: 44px;
              margin-top: 12px;
              margin-bottom: 6px;
            
          }
          p{
              font-size: 22px;
              color: #656565;
          }
      }
  }  
}
</style>
<style lang="scss" scoped>
.router-link-active>p{
    color: red !important;
}
</style>
