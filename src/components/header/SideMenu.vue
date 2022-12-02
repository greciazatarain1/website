<template>
    <div class="menu-bars-container" @click="activeMenu()">
        <span class="menu-bars" :class="{ activeMenuBars: isOpen }"></span>
    </div>
    <div class="side-menu" :class="{ openMenu: isOpen }">
        <nav class="side-menu-inner-container menu-container">
            <ul class="menu-list">
                <li><a @click="activeMenu()" href="/#home">home</a></li>
                <li><a @click="activeMenu()" href="/#about-me">about</a></li>
                <li><a @click="activeMenu()" href="/#skills">skills</a></li>
                <li><a @click="activeMenu()" href="/#projects">projects</a></li>
            </ul>
        </nav>
        <div class="side-menu-inner-container contact-info-container">
            <div class="contact-info">
                <p class="greeting">hola</p>
                <p>
                    Get in touch via<br/>
                    <a href="https://www.linkedin.com/in/greciazatarain/" target="blank"><i class="fa-brands fa-linkedin"></i> LinkedIn</a><br/>
                    or check my code on<br/><a href="https://github.com/greciazatarain1" target="blank"><i class="fa-brands fa-github"></i> GitHub</a>.
                </p>
            </div>
        </div>
    </div>
</template>
  
<script>
  export default {
    name: "SideMenu",
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
.menu-bars-container {
    position: fixed;
    top: 19px;
    z-index: 22000;
    left: 20px;
    width: 35px;
    height: 24px;
    cursor: pointer;
}
.menu-bars {
    height: 3px;
    background-color: $dark-grey;
    transition: all .5s ease;
    position: absolute;
    left: 0;
    top: 11px;
    width: 100%;
    

    &.activeMenuBars {
        transform: rotate(45deg);
        transform-origin: 50% 0;
        background-color: #fdf2fb;

        &::after {
            transform: rotate(90deg);
        }

        &::before, &::after {
            top: 0;
        }
    }

    &::before, &::after {
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        position: absolute;
        left: 0;
        background-color: $dark-grey;
        transition: all .5s ease;
    }

    &::before {
        top: -10px;
    }

    &::after {
        bottom: -10px;
    }
}

.side-menu {
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
    &.openMenu {
        transition: all .5s ease;
        width: 100vw;
        transition-delay: 0s;
       
        .menu-list, .contact-info {
            opacity: 1;
            transition: all .5s ease;
            transition-delay: 0.5s;
            visibility: visible;
            pointer-events: initial;
        }
    }

    .side-menu-inner-container {
        height: 50%;
        width: 100%;
        transition: all .5s ease;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        @include desktop { 
            height: 100%;
            align-items: center;
        }
    }

    .menu-container{ 
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

        .menu-list {
            a {
                font-family: 'Lora', serif;
                font-size: 40px;
                padding: 10px 0;
                text-decoration: none;
                display: block;
                transition: all .3s ease;

                @include desktop {  
                    font-size: 90px;
                }
            }
        }
    }

    .contact-info-container {
        .contact-info { 
            .greeting {
                font-family: 'Lora', serif;
                font-size: 35px;
                position: relative;
                width: 135px;
                margin-bottom: 30px;

                &::after {
                    content: "";
                    display: block;
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: $dark-grey;
                }
            }

            a {
                font-weight: 600;
                display: inline-block;
                margin-bottom: 7px;
                
                i {
                    font-size: 18px;
                    margin-right: 5px;
                }
            }
        }
    }

    .menu-list, .contact-info {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: all .3s ease;
        transition-delay: 0s;
        padding: 30px 15%;
    }
}
</style>
    