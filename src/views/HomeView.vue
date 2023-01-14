<template>
    <Hero />
    <AboutMe />
    <MySkills />
    <Projects />
</template>

<script>
import Hero from "@/components/sections/Hero.vue";
import AboutMe from "@/components/sections/AboutMe.vue";
import MySkills from "@/components/sections/MySkills.vue";
import Projects from "@/components/sections/Projects.vue";



export default {
  name: "HomeView",
  components: {
    AboutMe,
    MySkills,
    Hero,
    Projects
},
};
</script>
