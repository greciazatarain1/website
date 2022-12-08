<template>
    <section id="about-me">
        <div class="coll-full row-direction max-width-small">
            <div class="profile-image">
                <img alt="Grecia Zatarain - Frontend Developer" src="@/assets/greciazatarain.jpg"/>
                <span class="circles"></span>
            </div>
            <div class="text-container">
                <h3 class="title2">About me</h3>
                <p class="description">
                    I'm a <strong>front-end developer</strong> with 5 years of experience working in web development.<br/><br/>
                    I have built responsive user interfaces for all kinds of websites (retail, real estate, restaurants, services, events, music, etc.) and also have experience in quality assurance writing and running test cases.<br/> <br/>
                    <span class="bold">I enjoy the art of creating by coding.</span>
                </p>
            </div>
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
    padding-top: 90px;
    padding-bottom: 80px;
    position: relative;
    background: #fff2d7;
    
    @include desktop {
        padding-top: 180px;
        padding-bottom: 125px;
    }

    .coll-full {
        align-items: center;
        justify-content: center;

        @include desktop {
            justify-content: space-between;
        }
    }
}
.profile-image {
    width: 90%;
    position: relative;
    margin: 30px 5%;
    box-sizing: border-box;

    @include phone-only {
        max-width: 275px;
    }

    @include desktop {
        width: 30%;
        margin: 0;
    }

    img {
        width: 100%;
        overflow: hidden;
        box-shadow: 0px 10px 40px 0px rgb(50 36 55 / 40%);
        border-radius: 50%;
        z-index: 1;
        position: relative;
    }
}

.text-container {
    width: 100%;

    @include desktop {
        width: 62%; 
    }
}

.circles {
    &::before, &::after {
        content: "";
        width: 100%;
        height: 100%;
        border: 3px solid #91937c;
        left: -21px;
        top: -9px;
        display: block;
        position: absolute;
        transform: rotate(14deg);
        border-radius: 50%;
    }
    &::after {
        right: -6px;
        top: inherit;
        bottom: -23px;
        left: inherit;
        border-radius: 50%;
        border-color: #8d6e85;
        border-right: 10px solid #8d6e85;
    }
}
</style>
  
  