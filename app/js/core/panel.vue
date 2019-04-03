<!-- panel基础组件 -->
<template>
<!-- 加载组件上的class，对应根div -->
  <section :class="[panelClass,cname]">  
      <h4>-{{ title }}-</h4>
      <div>
          <slot></slot>
      </div>
  </section>
</template>

<script>
export default {
  name:'corePanel',
  data () {
    return {
        panelClass:'panel'
    };
  },
  props:{
    title:{
        type:String,
        default:''
    },
    cname:{
        type:String,
        default:''
    }
  }
}

</script>
<style lang='scss'>
@import '../../css/element.scss';
.panel{
    @include panel;
    // 这里引用了panel的基础样式，所以在业务组件就没有必要再次调用了
}
</style>