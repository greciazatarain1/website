<template>
    <section id="projects">
        <div class="coll-full">
            <ul class="project-list">
                <li
                    v-for="project in projects"
                    :key="index"
                    class="item-project flex-center">
                    <div class="image-container">
                        <img :src="project.image" :alt="project.name"/>
                    </div>
                    <div class="text-container">
                        <h3 class="title3">{{ project.name }}</h3>
                        <p class="p2">{{ project.description }}</p>
                        <ul class="tech">
                            <li v-for="item in project.tech">
                                {{ item }}<i class="fa-solid fa-circle"></i>
                            </li>
                        </ul>
                        <div class="links">
                            <a :href="project.githubUrl" target="_blank">Check code</a>
                            <a :href="project.liveUrl" target="_blank">View online</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
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
section {
    position: relative;
    width: 100%;
    overflow: hidden;
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
.project-list {
    display: flex;
    position: relative;
    z-index: 1;
    flex-direction: column;

    .item-project {
        justify-content: space-between;
        flex-direction: column;
        padding: 30px 0;

        @include desktop {
            padding: 50px 0;
            flex-direction: row;
        }

        &:nth-child(even){

            @include desktop {
            flex-direction: row-reverse;

                .text-container {
                    text-align: right;
                }

                .tech {
                    justify-content: flex-end;
                }
            }
        }
    }

    .image-container {
        width: 100%;
        margin: 15px 0;
        @include desktop {
            width: 30%;
        }
    }

    .text-container {
        width: 100%;

        @include desktop {
            width: 62%;
        }
    }

    .tech {
        display: flex;
        margin: 20px 0;

        li{
            font-size: 1.1em;
            display: flex;
            align-items: center;

            svg {
                font-size: 5px;
                margin: 0 5px;
            }

            &:last-child {
                svg {
                    display: none;
                }
            }
        }
    }

    .links {
        a {
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
    }
}
</style>