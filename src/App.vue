<template>
  <div>
    <router-view></router-view>
    <footer-guide v-show="$route.meta.isShow"></footer-guide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components: {
    FooterGuide
  }

}
</script>

 <style lang='stylus' rel='stylesheet/stylus'>

 </style>
