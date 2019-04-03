<!-- 众筹金融头条 -->
<!-- 由于可复用性太低，故不妨到组件里 -->
<!-- 在这里重新写一个 -->
<template>
  <panel title="金融头条" :class="$style.panel">
      <swiper :options="options">
          <swiper-slide v-for="(item,index) in items" :key="index">
              <router-link :to="{name:'crowdfunding'}">
                <p>{{ item.text }}</p>
                <em>></em>  
              </router-link>
          </swiper-slide>
      </swiper>
  </panel>
</template>

<script>
import panel from '../core/panel';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  data () {
    return {
        options:{
            loop:true,
            autoplay:true,
            //分页器
            direction:'vertical',
            notNextTick:false
        },
        items:[
            {
                text:'签到领流量，1元500M！'
            },
            {
                text:'百万白条券免费送，速来领取！！ '
            },
            {
                text:'test '
            }
        ]
    };
  },

  components: {
      panel,
      swiper, 
      swiperSlide
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
    >div{
        width: 100%;
        height: 100%;
        
    }
    width: 100%;
    height: 72px;
    margin-top: 120px !important;
}
</style>
<style scoped>
@import '~swiper/dist/css/swiper.css';
.swiper-container,.swiper-wrapper,.swiper-slide{
    width: 100%;
    height: 100%;
}
.swiper-container{
    padding-left: 178px;
    background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left top no-repeat;
    box-sizing: border-box;
}
a{
    display: block;
    text-decoration: none;
    width: 100%;
    height: 72px;
    
}
p{
    width: 100%;
    height: 72px;
    font-size: 28px;
    text-align: left;
    line-height: 72px;
    color: #333;
    padding-right: 36px;
    box-sizing: border-box;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
em{
    position: relative;
    float: right;
    color: #ddd;
    right: 15px; 
    top: 13px; 
}

</style>
