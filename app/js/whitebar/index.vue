<!-- 白条入口 -->
<template>
  <div>
      <wslider></wslider>
      <wbenefit></wbenefit>
      <wmore></wmore>
      <footor></footor>
  </div>
</template>

<script>
import wslider from './wslider';
import wbenefit from './wbenefit';
import wmore from './wmore';
import footor from '../public/footer';
export default {
  data () {
    return {
    };
  },

  components: {
      wslider,
      wbenefit,
      wmore,
      footor
  },

  computed: {},

  methods: {},

  mounted() {}
}

</script>
<style lang='scss' module>
</style>