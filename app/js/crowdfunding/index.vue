<!-- 众筹页面 -->
<template>
  <div>
      <cslider></cslider>
      <csign></csign>
      <recommend></recommend>
      <cfooter></cfooter>
  </div>
</template>

<script>
import cslider from './cslider';
import csign from './csign';
import recommend from './recommend'
import cfooter from './cfooter';
export default {
  data () {
    return {
    };
  },

  components: {
      cslider,
      csign,
      recommend,
      cfooter
  },

  computed: {},

  methods: {},

  mounted() {}
}

</script>
<style lang='scss' module>
</style>