<!-- 借贷 -->
<template>
  <panel title="极速借贷" :class="$style.panel">
      <div :class="$style.content">
          <router-link :to="{name:'home'}"></router-link>
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280">
      </div>
  </panel>
</template>

<script>
import panel from '../core/panel';
export default {
  name:'hborrow',
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
    .content{
        padding-bottom: 40px;
        img{
            width: 100%;
        }
    }
}
</style>