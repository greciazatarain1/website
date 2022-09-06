<template>
  <div class="home">
    <Header />
    <Slider />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Slider from "@/components/Slider.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Slider,
  },
};
</script>
