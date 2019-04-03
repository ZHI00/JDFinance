<template lang="html">
    <div :class="$style.home">
        <!-- <heador></heador> -->
        <hslider></hslider>
        <hnovice></hnovice>
        <hborrow></hborrow>
        <hmoney></hmoney>
        <product/>
        <life/>
        <footor></footor>
        <!-- <navbar></navbar> -->
    </div>
</template>

<script>
import heador from '../public/header';
import hslider from './hslider';
import hnovice from './novice';
// import test from './hslider_';
import hborrow from './borrow';
import hmoney from './money';
import product from './product';
import life from './life';
import footor from '../public/footer';
import navbar from '../public/navbar';
export default {
  components:{
    heador,
    hslider,
    hnovice,
    hborrow,
    hmoney,
    product,
    life,
    footor,
    navbar
    // test
  }
}
</script>

<style lang="scss" module>
</style>
