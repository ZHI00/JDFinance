<!-- 神券满 -->
<template>
  <panel title="神券满" :class="$style.panel">
      <section :class="$style.content">
          <router-link :to="{name:'money'}">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t5842/235/8356236245/38364/2112fd7e/597a95d4Ne01da140.png?width=750&height=270" alt="">
          </router-link>
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
  }
}

</script>
<style lang='scss' module>
.panel{
    h4{
        display:none;
    }
    .content{
        width: 640px;
        height: 230px;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>