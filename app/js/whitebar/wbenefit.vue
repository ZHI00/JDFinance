<!-- 白条界面白条福利 -->
<!-- 不常修改，写死吧 -->
<template>
  <panel title="白条福利" :class="$style.panel">
      <ul :class="$style.content">
          <li>
              <router-link :to="{name:'whitebar'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120" alt="">
                <div>
                    <h4>开通白条</h4>
                    <p>送188元礼包</p>
                    <span>立即开通 ></span>
                </div>
              </router-link> 
          </li>
          <li>
              <router-link :to="{name:'whitebar'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120" alt="">
                <div>
                    <h4>白条闪付</h4>
                    <p>新手享158元礼包</p>
                    <span>随机立减 ></span>
                </div>
              </router-link>
          </li>
          <li>
              <router-link :to="{name:'whitebar'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120" alt="">
                <div>
                    <h4>白条提额</h4>
                    <p>金融app专享提额礼包</p>
                    <span>去提额 ></span>
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
@import '../../css/element.scss';
.panel{
    .content{
        li{
            height: 140px;
            align-items: center;
            &:first-child{
                border-top: 1px solid #ddd;
            }
            &:nth-child(n+2) div{   
                border-top: 1px solid #ddd;
            }
            a{
                @include list(row);
                width: 100%;
                height: 100%;
                text-decoration: none;
            }
            img{
                width: 88px;
                height: 88px;
                margin: 0 32px;
                align-self: center;
            }
            div{
                @include list;
                justify-content: center;
                position: relative;
                text-align: left;
                width:488px;
                //n从零开始，所以
                // 0  2
                // 1  3  
                
                h4{
                    font-size: 32px;
                    color: #333;
                    margin-bottom: 12px;
                }
                p{
                    font-size: 24px;
                    color: #999;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
                span{
                    position: absolute;
                    font-size: 28px;
                    color: #FF801A;
                    right: 20px;
                    top:50px;
                }
            }
        }
    }
}
</style>