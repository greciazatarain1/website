<template>
  <header>
    <div class="coll-full header-container">
      <h1 class="logo">GRECIA ZATARAIN</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/about">Pojects</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
   .header-container {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;

    .logo {
      font-weight: bold;
    }
   }
} 

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

nav a.router-link-exact-active {
  color: #f9a936;
}
</style>

