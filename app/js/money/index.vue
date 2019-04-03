<!-- 理财页面 -->
<template>
  <div>
      <mslider></mslider>
      <ada></ada>
      <mmoney></mmoney>
      <benefit></benefit>
      <pick></pick>
      <footor></footor>
  </div>
</template>

<script>
import navbar from '../public/navbar';
import mslider from './mslider';
import ada from './ada';
import mmoney from './mmoney';
import benefit from './benefit';
import pick from './pick';
import footor from './footer';
export default {
  data () {
    return {
    };
  },

  components: {
      navbar,
      mslider,
      ada,
      mmoney,
      benefit,
      pick,
      footor
  }
}

</script>
<style lang='scss' module>
</style>