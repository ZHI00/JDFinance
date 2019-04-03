<!-- 白条页面slider -->
<template>
  <panel title="众筹页面轮播图" :class="$style.panel">
      <section :class="$style.content">
          <slider :items="items" :class="$style.slider"></slider>
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
          href:'crowdfunding',
          src:'//img12.360buyimg.com/jrpmobile/jfs/t8491/303/504628479/60643/100648de/59a94358N92475fca.jpg?width=750&height=320'
        },{
          href:'crowdfunding',
          src:'//img12.360buyimg.com/jrpmobile/jfs/t8437/321/1758527686/40952/f66d552f/59bf1f41N50d846f9.jpg?width=750&height=320'
        }
      ]
    };
  },

  components: {
    panel,
    slider
  },

  computed: {},

  methods: {},

  mounted() {}
}

</script>
<style lang='scss' module>
.panel{
  h4{
    display: none;
  }
  // margin-top: 120px;  
  background-color: transparent !important;
  padding-top: 100px !important;
  .content{
    .slider{
      a{
        width: 100%;
        height: 100%;
        img{
          width: 640px;
        }
      }
      
    }
  }
}
</style>