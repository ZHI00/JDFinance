<!-- 理财精选 -->
<template>
  <panel title="理财精选" :class="$style.panel"> 
    <ul :class="$style.content">
        <li>
            <router-link :to="{name:'money'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76" alt="">
                <div>
                    <h4>月度理财</h4>
                    <p>预期年化收益率4.50%</p>
                    <span>去赚钱 ></span>
                </div>
            </router-link>
        </li>
        <li>
            <router-link :to="{name:'money'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76" alt="">
                <div>
                    <h4>季度理财</h4>
                    <p>历史年化回报率5.50%</p>
                    <span>去赚钱 ></span>
                </div>
            </router-link>
        </li>
        <li>
            <router-link :to="{name:'money'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76" alt="">
                <div>
                    <h4>一年理财</h4>
                    <p>历史年化回报率5.80%</p>
                    <span>去赚钱 ></span>
                </div>
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
.panel{
    .content{
        li{ 
            &:first-child>a>div{
                border: none;
            }
            &:nth-child(1){
                border-top: 1px solid #ddd;
            }
            a{
                text-decoration: none;
                display: flex;
                align-items: center;
                width: 640px;
                height: 140px;
                box-sizing: border-box;
            }
            img{
                width: 88px;
                height: 88px;
                margin: 0 32px; 
            }
            div{
                border-top: 1px solid #ddd;
                position: relative;
                width: 488px;
                height: 100%;
                h4{
                    height: 57px;
                    text-align: left;
                    line-height: 57px;
                    font-size: 32px;
                    color: #333;
                    margin-top: 20px;
                    // 用po re就只是自身移动，而用margin则可以挤一下
                }
                p{
                    font-size: 24px;
                    color: #ff3232;
                    margin-top: 4px;
                }
                span{
                    font-size: 28px;
                    color: #FF801A;
                    position: absolute;
                    top: 35%;
                    right: 26px;
                }
            }

        }
    }
}
</style>