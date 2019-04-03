<!-- footer -->
<template>
  <footor :cname="$style.pic" :src="src"></footor>
</template>

<script>
import footor from '../public/footer';
export default {
  data () {
    return {
        src:'//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120'
    };
  },

  components: {
      footor
  },

  computed: {},

  methods: {},

  mounted() {}
}

</script>
<style lang='scss' module>
.pic{
    width:100%;
    height: 102px;
    img{
        width: 100%;
        height: 102px !important;
    }
}
</style>