<!-- swipwe基础组件 -->
<template>
  <section :class="cname">
      <swiper ref="swiper" :options="options" :not-next-tick="options.notNextTick" :key="keyId">
          <swiper-slide v-for="(item,index) in items" :key="index">
              <router-link :to="{name:item.href}">
                  <!-- 添加轮播方式 -->
                  <!-- 图片或者文字，通过业务的选择，这里只提供容器 -->
                  <!-- 可能在业务中会需要插入在文本中插入标签，这里提供读取html的功能 -->
                  <img :src="item.src" alt="" v-if="item.src">
                  <p v-else-if="item.text" v-html="item.text"></p>
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
        // swiperOptions:{},
        itemsdata:this.items,
        keyId:Math.random()
    };
  },
  methods:{
    //   init(data){
    //     //   第一个swiper是组件  后面那个才是swiper对象
    //     console.log(data)
    //     this.itemsdata=this.items;
    //     this.swiperOptions=this.options;
    //   }
    updata(){
        this.keyId=Math.random();
    }
  },
  components:{
      swiper,
      swiperSlide
  },
  watch:{
    //   this.init();

    // 对象需要深度监听
    // itemsdata(newItemdata){
    //    console.log("1111")
    //    this.keyId=Math.random(); 
    // },
    // test(newTest){
    //     console.log("222")
    // }
   
  }
}

</script>
<style lang='css'>
@import '~swiper/dist/css/swiper.css';
</style>