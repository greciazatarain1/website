<template>
    <div class="contact-info">
        <p class="underline-text">hola</p>
        <p class="paragraph-small">
            Get in touch via<br/>
            <a class="link-icon" href="https://www.linkedin.com/in/greciazatarain/" target="blank"><i class="fa-brands fa-linkedin"></i> LinkedIn</a><br/>
            or check my code on<br/><a class="link-icon" href="https://github.com/greciazatarain1" target="blank"><i class="fa-brands fa-github"></i> GitHub</a>.
       </p>
    </div>
</template>

<script>
export default {
    name: "ContactInfo",
};
</script>

<style scoped lang="scss">

.underline-text {
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

.link-icon {
    font-weight: 600;
    display: inline-block;
    margin-bottom: 7px;
                
    i {
        font-size: 18px;
        margin-right: 5px;
    }
}  
</style>