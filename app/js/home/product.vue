<!-- 新品推荐 -->
<template>
  <panel title="新品推荐" :class="$style.panel">
      <div :class="$style.content">
        <slider :cname="$style.slider" :options="options" :items="items" ></slider>
        <router-link :class="$style.link" :to="{name:'home'}">更多尖货&nbsp;></router-link>
      </div>
      
  </panel>
</template>

<script>
import panel from '../core/panel';
import slider from '../core/slider';
export default {
  data () {
    return {
        options:{
            slidesPerView: 2.3,
            spaceBetween: 30,
            freeMode: true
        },
        items:[
            {
                href:'home',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t13963/267/2355123229/48850/254f797a/5a3c59aeN9cb550f6.jpg?width=335&height=421'
            },{
                href:'home',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t13021/306/1996997425/21953/bda69db3/5a2f6a17N9da099b1.jpg?width=335&height=421'
            },{
                href:'home',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421'
            },{
                href:'home',
                src:'//img12.360buyimg.com/jrpmobile/jfs/t15784/188/381232069/39444/8878571d/5a2f6a4aNbd5a574c.jpg?width=335&height=421'
            }]
    };
  },

  components: {
      panel,
      slider
  }
}

</script>
<style lang='scss' module>
@import '../../css/element.scss';
.panel{
    .content{
        padding:0 24px;
        position: relative;

        .slider{
            padding-bottom: 40px;

            img{
                width:242.42px;
                height: 316px;
            }
        }  
    }

    .link{
        text-decoration: none;
        font-size: 28px;
        position: absolute;
        color: #999;
        right: 20px;
        top: -72px;

    }

}
</style>

