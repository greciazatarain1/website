<template>
  <header>
    <div class="coll-full header-container">
      <h1 class="logo">Grecia Zatarain</h1>
      <SideMenu />
    </div>
  </header>
</template>

<script>
import SideMenu from "@/components/SideMenu.vue";

export default {
  name: "Header",
  components: {
    SideMenu
  }, 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
    padding: 20px 0;
   .header-container {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    flex-direction: row-reverse;

    .logo {
      font-weight: bold;
      margin-left: 60px;
      font-size: 22px;
    }
   }
} 
</style>

