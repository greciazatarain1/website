<template>
    <section id="Attraction" class="flex-center">
        <div class="coll-full">
            <div class="text-container flex-center">  
                <img class="flower" src="@/assets/flower.svg" alt="Flower"/>
                <h2 class="title">Hi, I'm Grecia</h2>
                <h3 class="p1">A creative Frontend developer base in Amsterdam, Netherlands.</h3>         
            </div>
        </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "Attraction",
  }
  </script>
  
<style scoped lang="scss">
#Attraction {
    text-align: center;
    height: 70vh;
    position: relative;
    width: 100%;

    &::after {
        content: "";
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

    .text-container {
        flex-direction: column;
    }

    .flower {
        width: 150px;
    }

}
</style>
  
  