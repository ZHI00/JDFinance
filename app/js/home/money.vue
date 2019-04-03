<!-- 理财精选 -->
<template>
  <panel title="理财精选" :class="$style.panel">
    <section :class="$style.content">
      <dl :class="$style.item" v-for="item in items" :key="item.title">
        <dt>{{item.title}}<span>{{item.sub}}</span></dt>
        <dd>{{item.rate}}</dd>
        <dd>{{item.text}}</dd>
      </dl>
    </section>
  </panel>
</template>

<script>
import panel from '../core/panel';
export default {
  name:"money",
  data () {
    return {
      items:[
        {
          title:"定期理财",
          sub:"理财首选",
          rate:"5.60%",
          text:"历史年化回报率"
        },
        {
          title:"小白理财",
          sub:"理财首选",
          rate:"4.22%",
          text:"7日年化收益率"
        },
        {
          title:"月月盈",
          sub:"养老保障",
          rate:"5%",
          text:"七日年化收益率"
        },
        {
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
  .content{
    @include list(row);
    &:after{
      content: ' ';
      display:block;
      width: 100%;
      height: 0;
      border-top: 1px solid #ddd;
      position: relative;
      top:-190.5px ;//难怪百分比没用，相对本身高度为0啊
      // top: 300px;
    }
    .item{
      width: 50%;
      position: relative;
      padding: 34px 16px;
      box-sizing: border-box;

      &:nth-child(odd)::after{
        content: "";
        display: block;
        height: 70%;
        width: 0;
        border-left: 1px solid #ddd;
        position: absolute;
        right: 0;
        top: 15%;
      }
      dt{
        font-size: 30px;
        line-height: 42px;
        color: #333;
        span{
          color: #ff5155;
          font-size: 22px;
          border: 1px solid #ff5155;;
          padding: 0 8px;
          vertical-align: 1px;//好像是文字基线对齐什么的
          margin-left:2px; 
        }
      }
      dd{
        &:nth-child(2){
          font-weight: 700;
          font-size: 44px;
          height: 44px;
          line-height: 44px;
          color:#ff5155;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        &:nth-child(3){
          font-size: 24px;
          height: 34px;
          line-height: 34px;
          color: #999;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
}
</style>