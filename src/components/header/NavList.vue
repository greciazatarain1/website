<template>
    <nav class="main-nav">
        <ul class="main-nav__list">
            <li v-for="item in menu" class="main-nav__item">
                <a 
                    class="main-nav__link"  
                    @click="$emit('activeLink')"
                    :href="item.href">{{ item.name }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "NavList",
    data(){
        return{
            menu: [
                {
                    name: 'home',
                    href: '/#home'
                },
                {
                    name: 'about',
                    href: '/#about-me'
                },
                {
                    name: 'skills',
                    href: '/#skills'
                },
                {
                    name: 'projects',
                    href: '/#projects'
                }
            ]
        }
    }
};

</script>

<style scoped lang="scss">
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