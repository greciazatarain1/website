<template>
    <h1 class="logo">
        <RouterLink to="/">Grecia Zatarain<span class="logo__description"> - Frontend Developer in Amsterdam, Netherlands</span></RouterLink>
    </h1>
</template>
  
<script>
export default {
    name: "Logo",
};
</script>
  
<style scoped lang="scss">
.logo {
        font-weight: bold;
        margin-right: 20px;
        font-size: 22px;
        font-family: "Lora", serif;
        position: relative;
        overflow: hidden;

        &__description {
            position: absolute;
            opacity: 0;
            right: 0;
            font-size: 0em;
        }
}
</style>
  
  