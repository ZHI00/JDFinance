<!-- 每日签到 -->
<template>
  <panel title="每日签到" :class="$style.panel">
      <section :class="$style.content">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160" alt="">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160" alt="">
          <span>不抢白不抢</span>
      </section>
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
        position: relative;
        @include list(row);
        img{
            width: 50%;
            box-sizing: border-box;
            height: 136px;
        }
        span{
            position: absolute;
            top: -70px;
            right: 20px;
            color: #999;
            font-size: 28px;
        }
    }
}
</style>