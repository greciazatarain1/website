<template>
    <section id="projects" class="projects">
        <ul class="cards">
            <li
                v-for="project in projects"
                :key="index"
                class="card">
                <img  class="card__image" :src="project.image" :alt="project.name"/>
                <div class="card__text-container">
                    <h3 class="text-heading-large">{{ project.name }}</h3>
                    <p class="paragraph-medium">{{ project.description }}</p>
                    <ul class="bullet-list">
                        <li class="bullet-list__item" v-for="item in project.tech">
                            {{ item }}<i class="bullet-list__icon fa-solid fa-circle"></i>
                        </li>
                    </ul>
                    <div class="card__links">
                        <a class="link" :href="project.githubUrl" target="_blank">Check code</a>
                        <a class="link" :href="project.liveUrl" target="_blank">View online</a>
                    </div>
                </div>
            </li>
        </ul>
        <span class="big-circles"></span>
    </section>
</template>

<script>
export default {
    name: "Projects",
    data(){
        return {
            projects: [
                {
                    name: "Restaurant website",
                    description: "A website for a restaurant with Menu, About and Contact pages.",
                    tech: ["Vue.js", "HTML", "SCSS"],
                    image: require("@/assets/img-project-01.jpg"),
                    githubUrl: "https://github.com/greciazatarain1/restaurant-website",
                    liveUrl: "https://greciazatarain1.github.io/project-restaurant/"
                },
                {
                    name: "Recipe app",
                    description: "App to search for recipes.",
                    tech: ["HTML", "JavaScript", "CSS"],
                    image: require("@/assets/img-project-02.jpg"),
                    githubUrl: "https://github.com/greciazatarain1/recipe-app",
                    liveUrl: "https://greciazatarain1.github.io/recipe-app/"
                }
            ]
        }
    }
}

</script>

<style scoped lang="scss">
.projects {
    position: relative;
    width: 100%;
    overflow: hidden;
}
.cards {
    display: flex;
    position: relative;
    z-index: 1;
    flex-direction: column;
    list-style: none;
    max-width: 1160px;
    margin: 0 auto;
}

.card{
        justify-content: space-between;
        flex-direction: column;
        padding: 30px 0;
        display: flex;
        align-items: center;

        @include desktop {
            padding: 50px 0;
            flex-direction: row;
        }

        &:nth-child(even){
            @include desktop {
                text-align: right;
                flex-direction: row-reverse;
            }
        }

    &__image {
        width: 100%;
        margin: 15px 0;
        @include desktop {
            width: 30%;
        }
    }

    &__text-container {
        width: 100%;

        @include desktop {
            width: 62%;
        }
    }
}

.bullet-list {
    margin: 20px 0;

    &__item {
        font-size: 1.1em;
        display: inline-flex;
        align-items: center;

        &:last-of-type {
            .bullet-list__icon {
                display: none;
            }
        }
    }

    &__icon {
        font-size: 5px;
        margin: 0 5px;
    }
}

.link {
    font-weight: 600;
    display: inline-block;
    margin-right: 20px;
    border-bottom: 2px solid #353535;

    &:hover {
        border-color: #78508f;
    }

    &:last-of-type{
        margin-right: 0;
    }
}

.big-circles {
    &::before {
        display: none;
        content: "";
        position: absolute;
        bottom: 198px;
        left: -561px;
        width: 800px;
        height: 800px;
        border: 3px solid #91937c;
        display: none;
        border-radius: 50%;

        @include desktop {
            left: -430px;
            display: block;
        }
    }

    &::after {
        content: "";
        position: absolute;
        bottom: -431px;
        left: -709px;
        width: 800px;
        height: 800px;
        border: 3px solid #8d6e85;
        display: none;
        border-radius: 50%;
        border-right: 10px solid #8d6e85;

        @include desktop {
            left: -430px;
            display: block;
        }
    }
}
</style>