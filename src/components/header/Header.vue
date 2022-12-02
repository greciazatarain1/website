<template>
  <header id="home">
    <div class="header-container">
      <Logo />
      <SideMenu />
    </div>
  </header>
</template>

<script>
import SideMenu from "@/components/header/SideMenu.vue";
import Logo from "@/components/header/Logo.vue";

export default {
  name: "Header",
  components: {
    SideMenu,
    Logo
  }, 
};
</script>

<style scoped lang="scss">
header {
    padding: 20px 0;
   .header-container {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    flex-direction: row-reverse;
   }
} 
</style>

