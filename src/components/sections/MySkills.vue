<template>
    <section id="skills">
        <div class="coll-full max-width-small">
            <p  class="title2">My Skills</p>
            <ul class="skills flex-center">
                <li class="flex-center"
                    v-for="skill in skills" 
                    :key="index">
                    <i :class="skill.icon"></i>{{ skill.name }}
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: "MySkills",    
    data() {
        return {
            skills: [
                {
                    name: "HTML5",
                    icon: "fa-brands fa-html5"
                },
                {
                    name: "CSS / SASS",
                    icon: "fa-brands fa-css3-alt"
                },
                {
                    name: "Javascript",
                    icon: "fa-brands fa-js"
                },
                {
                    name: "Vue 3",
                    icon: "fa-brands fa-vuejs"
                },
                {
                    name: "Git / Github",
                    icon: "fa-brands fa-github"
                },
                {
                    name: "Responsive",
                    icon: "fa-solid fa-mobile"
                },
                {
                    name: "SEO",
                    icon: "fa-brands fa-searchengin"
                },
                {
                    name: "Agile(Scrum)",
                    icon: "fa-solid fa-arrows-split-up-and-left"
                },
                {
                    name: "Email templates",
                    icon: "fa-solid fa-envelope-open-text"
                },
                {
                    name: "Test cases writing",
                    icon: "fa-solid fa-pen-to-square"
                },
                {
                    name: "Running manual tests",
                    icon: "fa-solid fa-list"
                },    
                {
                    name: "Passion for quality",
                    icon: "fa-solid fa-check-double"
                },
                {
                    name: "Adobe XD",
                    icon: "fa-solid fa-pen-nib"
                },
                {
                    name: "Photoshop",
                    icon: "fa-solid fa-paintbrush"
                },
                {
                    name: "Prestashop",
                    icon: "fa-solid fa-store"
                },
                {
                    name: "Wordpress",
                    icon: "fa-brands fa-wordpress"
                },
                {
                    name: "Analytical",
                    icon: "fa-solid fa-chart-simple"
                },
                {
                    name: "Teamwork",
                    icon: "fa-solid fa-people-group"
                }
            ],
        }
    },
  };
</script>

<style scoped lang="scss">
#skills {
    background-color:#fffbf2;

}
.skills {
    background: white;
    flex-wrap: wrap;
    box-shadow: 0px 10px 40px 0px rgb(222 200 200 / 40%);
    padding: 20px;
    border-radius: 15px;
    justify-content: space-between;
    position: relative;
    z-index: 1;

    li {
        flex-direction: column;
        max-width: 105px;
        text-align: center;
        font-weight: 400;
        margin: 20px;
        line-height: 1.2em;

        @include phone-only {
            width: 50%;
        }

        i {
            font-size: 30px;
        }

        svg {
            margin: 10px;
            height: 30px;
        }
    }
}
</style>