<template>
    <section id="about-me">
        <div class="coll-full">
            <h2 class="title">About me</h2>
            <div class="profile-image">
                <img alt="Grecia Zatarain - Frontend Developer" src="@/assets/greciazatarain.jpg"/>
            </div>
            <p class="description">
                I'm a <strong>front-end developer</strong> with 5 years of experience working in web development.<br/><br/>
                I have built responsive user interfaces for all kinds of websites (retail, real estate, restaurants, services, events, music, etc.) and also have experience in quality assurance writing and running test cases.<br/> <br/>
                <span class="bold">I enjoy the art of creating by coding.</span>
            </p>
            <span class="separator"></span>
            <p class="title2">Skills</p>
            <ul class="skills">
                <li v-for="skill in skills" :key="index"><i class="fa-solid fa-check"></i>{{ skill }}</li>
            </ul>
        </div>
    </section>
</template>
  
<script>
export default {
    name: "AboutMe",
    data() {
    return {
      skills: [
        "HTML5",
        "CSS / SASS",
        "Javascript",
        "Vue 3",
        "Git / Github",
        "Responsive",
        "SEO",
        "Agile (Scrum)",
        "Emails templates",  
        "Test cases writing",
        "Running manual tests",
        "Passion for quality",
        "Adobe XD",
        "Photoshop",
        "Prestashop",
        "WordPress",
        "Analytical",
        "Teamwork"
      ],
    }
  },
  };
</script>
  

<style scoped lang="scss">

    #about-me {
        padding: 50px 0;

        .description {
            width: 80%;
            margin: 0 auto;
        }

        .title2 {
            margin: 20px 0;
        }
    }
    .profile-image {
        border-radius: 100%;
        width: 160px;
        margin: 30px auto;
        border: 5px solid #a48990;
        overflow: hidden;

        img {
            width: 100%;
        }
    }

    .skills {
        display: flex;
        flex-wrap: wrap;
        box-shadow: 0px 10px 40px 0px rgb(222 200 200 / 40%);
        background: #fff6f6;
        padding: 20px;
        border-radius: 15px;

        li {
            width: 50%;
            margin: 10px 0;
            display: flex;

            i {
                margin-right: 5px;
            }
        }
    }
    body {
        background: $light-pink;
    }


</style>
  
  