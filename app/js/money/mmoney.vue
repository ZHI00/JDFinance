<!-- 理财推荐 -->
<template>
  <panel title="理财精选" :class="$style.panel">
      <!-- 内容可能很多用个div包起来方便啊，加油 -->
      <section :class="$style.content">
          <router-link :to="{name:item.name}" v-for="(item,index) in items" :key="index">
            <dl>
                <dt>{{ item.title }} <span>{{ item.sub }}</span></dt>
                <dd>{{ item.rate }}</dd>
                <dd>{{ item.text}}</dd>
            </dl>
          </router-link>
          
      </section>
  </panel>
</template>

<script>
import panel from '../core/panel';
export default {
  data () {
    return {
        items:[
            {
                name:'money',
                title:"定期理财",
                sub:"理财首选",
                rate:"5.60%",
                text:"历史年化回报率"
            },
            {
                name:'money',
                title:"小白理财",
                sub:"理财首选",
                rate:"4.22%",
                text:"7日年化收益率"
            },
            {
                name:'money',
                title:"月月盈",
                sub:"养老保障",
                rate:"5%",
                text:"七日年化收益率"
            },
            {
                name:'money',
                title:"小白基金",
                sub:"天天赚钱",
                rate:"4.27%",
                text:"7日年化收益率"
            }
        ]
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
    position: relative;
    .content{
        @include list(row);
        &::after{
            content: "";
            display: block;
            height: 1px;
            width: 100%;
            background-color: #ddd;
            position:absolute;
            top: 60%;
        }
        a{
            text-decoration: none;
            display: block;
            width: 50%;
            padding: 32px 16px;
            box-sizing: border-box;
            position: relative;
            &:nth-child(odd)::after{
                content:'';
                display: block;
                width: 1px;
                height: 70%;
                background-color: #ddd;
                position: absolute;
                top: 15%;
                right: 0;
            }
        }
        dl{
            position: relative;
            dt{
                font-size: 30px;
                color: #333;
                span{
                    font-size: 22px;
                    color: #ff5155;
                    border: 1px solid #ff5155;
                    // 设置span里面文字垂直对齐位置，文字专用
                    vertical-align: 1px;
                }
                
            }
            dd:nth-child(2){
                font-weight: 700;
                height: 58px;
                line-height: 58px;
                color: #ff5155;
                
            }
            dd:last-child{
                font-size: 24px;
                height: 32px;
                line-height: 34px;
                color: #999;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            
            // 算了不专牛角尖了，特别是工作中，解决了再来套索原因
            // &:nth-child(odd)::after{
            //     content:'';
            //     display: block;
            //     width: 1px;
            //     height: 70%;
            //     background-color: #999;
            //     position: absolute;
            //     top: 15%;
            //     right: 0;
            // }
        }
    }
}
</style>