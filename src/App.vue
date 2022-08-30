<template>
  <div id="app">
    <NavBar/>
    <router-view />

  </div>
</template>
<style scoped>
     /* Mobile Styles */
  @media only screen and (max-width: 768px){
   NavBar{
     visibility: hidden;
   }
  }
</style>

<script type="text/javascript">
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar, // register component
  },
};
</script>