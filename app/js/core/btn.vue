<!-- btn基础组件 -->
<template>
    <!-- 通过传入类名，业务组件写这个类名的css就可以调整样式 -->
    <!-- 类名传递样式，好主意 -->
  <div :class="[btnClass,cname]">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name:'coreBtn',
  data () {
    return {
        btnClass:'btn'
    };
  },
  props:{
      cname:{
          type:String,
          default:''
      }
  }
}

</script>
<style lang='scss'>
    @import '../../css/element.scss';
    .btn{
        // 对了有默认样式，这不填参数
        @include btn;
    }
</style>