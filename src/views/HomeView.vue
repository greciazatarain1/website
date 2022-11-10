<template>
  <div class="home">
    <Header />
    <Slider />
    <AboutMe />
    <Footer />

  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Slider from "@/components/Slider.vue";
import AboutMe from "@/components/AboutMe.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "HomeView",
  components: {
    Header,
    Slider,
    AboutMe,
    Footer
},
};
</script>
