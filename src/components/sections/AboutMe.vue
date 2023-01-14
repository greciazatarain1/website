<template>
    <section id="about-me" class="profile">
        <div class="profile__container">
            <div class="profile__image-container">
                <img class="profile__image" alt="Grecia Zatarain - Frontend Developer" src="@/assets/greciazatarain.jpg"/>
                <span class="profile__circles"></span>
            </div>
            <div class="profile__description">
                <h3 class="text-heading-medium">About me</h3>
                <p class="paragraph-small">
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
.profile {
    padding-top: 90px;
    padding-bottom: 80px;
    position: relative;
    background: #fff2d7;
    
    @include desktop {
        padding-top: 180px;
        padding-bottom: 125px;
    }

    &__container {
        margin: 0 auto;
        max-width: 1000px;
        display: flex;
        
        @include mobile {
            flex-direction: column;
            align-items: center;
        }

        @include desktop {
            justify-content: space-between;
        }
    }

    &__image-container {
        width: 90%;
        position: relative;
        margin: 30px 5%;
        box-sizing: border-box;

        @include mobile {
            max-width: 275px;
        }

        @include desktop {
            width: 30%;
            margin: 0;
        }
    }

    &__image {
        width: 100%;
        overflow: hidden;
        box-shadow: 0px 10px 40px 0px rgb(50 36 55 / 40%);
        border-radius: 50%;
        z-index: 1;
        position: relative;
    }

    &__description {
        width: 100%;

        @include desktop {
            width: 62%; 
        }
    }

    &__circles {
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
}
</style>
  
  