<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  components: {
    Header,
    Footer,
},
};
</script>

<style lang="scss">
*{
  box-sizing:border-box;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
