<template>
    <MenuIcon @activeIcon="activeMenu()" :activeClass="isOpen" />
    <div class="menu" :class="{ 'menu--open': isOpen }">
        <div class="menu__container menu__container--border">
            <div class="menu__fade-effect">
                <NavList @activeLink="activeMenu()"/>
            </div>
        </div>
        <div class="menu__container">
            <div class="menu__fade-effect">
                <ContactInfo />
            </div>
        </div>
    </div>
</template>
  
<script>
import MenuIcon from "@/components/header/MenuIcon.vue";
import NavList from "@/components/header/NavList.vue";
import ContactInfo from "@/components/header/ContactInfo.vue";

  export default {
    name: "MainMenu",

    components: {
        MenuIcon,
        NavList,
        ContactInfo
    },

    data() {
      return {
        isOpen: false,
      }
    },

    methods: {
        activeMenu() {
            this.isOpen = !this.isOpen;
        }
    }
  };
</script>
  
<style scoped lang="scss">
.menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    transition: all .7s ease;
    z-index: 20000;
    background-color: $light-pink;
    flex-direction: column;
    transition-delay: 0.4s;
    justify-content: space-between;
    align-items: flex-start;

    @include desktop {
        flex-direction: row;
    }

    /* Styles when menu is open */
    &--open {
        transition: all .5s ease;
        width: 100vw;
        transition-delay: 0s;
        
        .menu__fade-effect {
            opacity: 1;
            transition: all .5s ease;
            transition-delay: 0.5s;
            visibility: visible;
            pointer-events: initial;
        }
    }
    

    &__container {
        height: 50%;
        width: 100%;
        transition: all .5s ease;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        &--border {
            position: relative;

            &::after {
                content: "";
                position: absolute;
                background-color: $dark-grey;
                display: block;
                right: 0;
                left: 15%;
                top: 100%;
                width: 70%;
                height: 1px;

                @include desktop {
                    top: 10%;
                    width: 1px;
                    height: 80%;
                    left: inherit;
                }
            }
        }

        @include desktop { 
            height: 100%;
            align-items: center;
            width: 50%;
        }
    }

    &__fade-effect {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: all .3s ease;
        transition-delay: 0s;
        padding: 30px 15%;
    }
}

//Main Nav List
.main-nav {
    width: 100%;
    display: flex;
    
    &__list {
        list-style: none;
    }
    
    &__link {
        font-family: 'Lora', serif;
        font-size: 40px;
        padding: 5px 0;
        text-decoration: none;
        display: block;
        transition: all .3s ease;

        @include desktop {  
            font-size: 90px;
            padding: 10px 0;
        }
    }
}
</style>
    