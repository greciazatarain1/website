<template>
  <header id="home" class="header">
    <div class="header__container">
      <Logo />
      <MainMenu />
    </div>
  </header>
</template>

<script>
import MainMenu from "@/components/header/MainMenu.vue";
import Logo from "@/components/header/Logo.vue";

export default {
  name: "Header",
  components: {
    MainMenu,
    Logo
  }, 
};
</script>

<style scoped lang="scss">
.header {
    padding: 20px 0;
    
   &__container {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    flex-direction: row-reverse;
   }
} 
</style>

