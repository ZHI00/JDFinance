<!-- 白条更多服务 -->
<template>
  <panel title="更多服务" :class="$style.panel">
      <ul :class="$style.content">
          <!-- 这里业务不常改，应该写死 -->
          <li>
              <router-link :to="{name:'whitebar'}">
                  <img src="//img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135" alt="">
                  <p>小白卡</p>
              </router-link>
          </li>
          <li>
              <router-link :to="{name:'whitebar'}">
                  <img src="//img12.360buyimg.com/jrpmobile/jfs/t5269/224/1031852465/12646/40e0f799/590aca55N22a6f274.png?width=135&height=135" alt="">
                  <p>白条商城</p>
              </router-link>
          </li>
          <li>
              <router-link :to="{name:'whitebar'}">
                  <img src="//img12.360buyimg.com/jrpmobile/jfs/t5095/216/1045040184/12370/564ae632/590ac7deN9a0eac2a.png?width=135&height=135" alt="">
                  <p>消费分期</p>
              </router-link>
          </li>
          <li>
              <router-link :to="{name:'whitebar'}">
                  <img src="//img12.360buyimg.com/jrpmobile/jfs/t8311/300/1385281399/9501/130a0046/59b8da06N14f62cf3.png?width=120&height=120" alt="">
                  <p>借钱</p>
              </router-link>
          </li>
          <li>
              <router-link :to="{name:'whitebar'}">
                  <img src="//img12.360buyimg.com/jrpmobile/jfs/t8311/300/1385281399/9501/130a0046/59b8da06N14f62cf3.png?width=120&height=120" alt="">
                  <p>白条提额</p>
              </router-link>
          </li>
          <li>
              <router-link :to="{name:'whitebar'}">
                  <img src="//img12.360buyimg.com/jrpmobile/jfs/t4417/98/4154366136/13785/5433ca92/590ac8afN5dd91d6e.png?width=135&height=135" alt="">
                  <p>白条闪付</p>
              </router-link>
          </li>
          <li>
              <router-link :to="{name:'whitebar'}">
                  <img src="//img12.360buyimg.com/jrpmobile/jfs/t4453/75/4132459214/14188/939b7f34/590ac860N752d5738.png?width=135&height=135" alt="">
                  <p>小白会玩</p>
              </router-link>
          </li>
          <li>
              <router-link :to="{name:'whitebar'}">
                  <img src="//img12.360buyimg.com/jrpmobile/jfs/t5371/323/1038197138/12031/3ec72f6c/590aca20N089fd34a.png?width=135&height=135" alt="">
                  <p>钢镚</p>
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
  },

  computed: {},

  methods: {},

  mounted() {}
}

</script>
<style lang='scss' module>
@import '../../css/element.scss';
.panel{
    .content{
        @include list(row);
        li{
            width: 25%;
            box-sizing: border-box;
            margin-bottom: 40px;
            a{
                width: 100%;
                height: 100%;
                text-align: center;
                text-decoration: none;
                display: block;
                // 刚才因为a不是块状没法100%，也就没法让里面元素居中了
                // 是大小问题
            }
            img{
                width: 90px;
                height: 90px;
            }
            p{
                font-size: 26px;
                margin-top: 12px;
                color: #333;
            }
        }
    }
}
</style>