<template>
    <section class="hero flex-center">
        <div class="hero__container">
            <div class="hero__text-container flex-center">  
                <img class="hero__image" src="@/assets/flower.svg" alt="Flower"/>
                <h2 class="text-heading-xlarge">Hi, I'm Grecia</h2>
                <p class="paragraph-large">I am a highly motivated and results-driven Frontend developer with a creative edge.</p>         
            </div>
        </div>
        <span class="hero__polygon"></span>
    </section>
  </template>
  
  <script>
  export default {
    name: "Hero",
  }
  </script>
  
<style scoped lang="scss">
.hero {
    text-align: center;
    height: 70vh;
    position: relative;
    width: 100%;
    
    &__container {
        margin: 0 auto;
        max-width: 1200px;
    }

    &__text-container {
        flex-direction: column;
    }

    &__image {
        width: 150px;
    }

    &__polygon {
        background-color: $light-pink;
        clip-path: polygon(100% 100%, 100% 0, 0 0);
        height: 62px;
        width: 100%;
        z-index: 1;
        position: absolute;
        left: 0;
        bottom: -61px;

        @include desktop {
            height: 160px;
            bottom: -160px;
        }
    }
}
</style>
  
  