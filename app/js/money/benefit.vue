<!-- 理财金入口 -->
<template>
  <panel :class="$style.panel">
      <section :class="$style.content">
          <router-link :to="{name:'money'}">
              <img src="//img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png?width=1080&height=240" alt="">
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
  },

  computed: {},

  methods: {},

  mounted() {}
}

</script>
<style lang='scss' module>
.panel{
    >h4{
        display: none;
    }
    .content{

        img{
            height: 142px;
            width: 640px;
        }
    }
}
</style>