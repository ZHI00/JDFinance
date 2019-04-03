<!-- 理财页面滑动组件 -->
<template>
  <panel title="理财页面滚动图" :class="$style.panel">
      <section>
          <slider :items="items" :cname="$style.slider"></slider>
            <!-- 默认配置参数够用 -->
      </section>
      
  </panel>
</template>

<script>
import panel from '../core/panel';
import slider from '../core/slider';
export default {
  data () {
    return {
        items:[
            {
                src:'//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400',
                href:'money'
            },
            {
                src:'//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400',
                href:'money'
            }
        ]
    };
  },

  components: {
      panel,
      slider
  }
}

</script>
<style lang='scss' module>
.panel{
    h4{
        display: none;
    }
    margin-top: 120px !important;
    // padding-top: 100px !important;
    // 用内边距就挡住背景图了
    .slider{
        width: 640px;
        img{
            width: 100%;
        }
    }
}
</style>