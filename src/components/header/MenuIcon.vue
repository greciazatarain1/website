<template>
    <div class="menu-icon" @click="$emit('activeIcon')" :class="{ 'menu-icon--active': activeClass }"> 
        <span class="menu-icon__bars" ></span>
    </div>
</template>

<script>
export default {
    name: "MenuIcon",

    props: {
        activeClass: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style scoped lang="scss">
.menu-icon {
    position: fixed;
    top: 19px;
    z-index: 22000;
    left: 20px;
    width: 35px;
    height: 24px;
    cursor: pointer;

    &__bars {
        height: 3px;
        background-color: $dark-grey;
        transition: all .5s ease;
        position: absolute;
        left: 0;
        top: 11px;
        width: 100%;

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

    &--active {
        .menu-icon__bars {
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
    }
}

</style>