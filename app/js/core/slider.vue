<!-- swipwe基础组件 -->
<template>
  <section :class="cname">
      <swiper :options="options" :not-next-tick="options.notNextTick">
          <swiper-slide v-for="(item,index) in items" :key="index">
              <router-link :to="{name:item.href}">
                  <img :src="item.src" alt="">
              </router-link>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination" v-if="options.pagination"></div>
      </swiper>
  </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  props:{
      options:{
          type:Object,
          default(){
              return{
                  loop:true,
                  autoplay:true,
                  //分页器
                  pagination: {  
                      //分页器的元素
                      el: '.swiper-pagination'
                  },
                  notNextTick:false

              }
          }
      },
      items:{
          type:Array,
          default(){
              return[];
          }
      },
      cname:{
          type:String,
          default:''
      }
  },
  data () {
    return {
    };
  },
  components:{
      swiper,
      swiperSlide
  }
}

</script>
<style lang='css'>
@import '~swiper/dist/css/swiper.css';
</style>