<!-- footer -->
<template>
  <panel title="底部公司信息" :class="$style.panel">
      <ul :class="$style.content">
          <li :class="cname">
              <img :src="src" alt="">
          </li>
          <li>
              <div>
                  <img src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108" alt="">
                  <p>客户端</p>
              </div>
              <div>
                  <img src="//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108" alt="">
                  <p>触屏版</p>
              </div>
              <div>
                  <img src="//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108" alt="">
                  <p>电脑版</p>
              </div>
          </li>
          <li>Copyright © 2004-2017 京东JD.com 版权所有</li>
          <li>投资有风险，购买需谨慎</li>
          <li>京东金融平台服务协议</li>
          <li>京东金融隐私政策</li>
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
  props:{
      cname:{
          type:String,
          default:''
      },
      src:{
          type:String,
          default:'//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252'
      }
  },

  components: {
      panel
  }
}

</script>
<style lang='scss' module>
@import '../../css/element.scss';
.panel{
    >h4{
        display: none;
    }
    .content{
        background-color: rgb(245, 245, 245);
        margin-bottom: 88px;
        @include list;
        li>img{
            width: 100%;
            height: 143px;
        }
        li:nth-child(2){
            @include list(columns);
            padding-top: 20px;
            height: 166px;;
            div{
                text-align: center;
                width: 33.3333%;
                box-sizing: border-box;
                img{
                    width: 90px;
                }
                p{
                    font-size: 26px;
                    margin-top: 12px;
                    color: #999;
                }
            }
        }
        li:nth-child(n+3){
            text-align: center;
            color: #999;
            font-size: 24px;
            height: 86px;
            line-height: 86px;
            width: 100%;
        }
    }
}
</style>