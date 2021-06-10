<template>
    <article class="left-nav">
        <div class="wrapper">
            <div class="left-nav_header">
                <img class="left-nav_img" src="../assets/D-Logo.svg" alt="" />
            </div>
            <p class="left-nav_desc">Trusted way of banking for 3,000+ SMEs and startups in Singapore </p>
            <Menu />
        </div>
    </article>
</template>

<script>
import Menu from './Menu';
export default {
    components: {
        Menu
    }
}
</script>

<style lang="scss" scoped>
.left-nav {
    display: none;
    background: $background-blue;

    &_desc {
        @extend .nav-text;
        margin: 2rem 0;
        opacity: 0.5;
    }

    .wrapper {
        padding: 4.8rem;
        position: sticky;
        top: 0;
    }
}
@include MediaQueries($desktop-and-above) {
    .left-nav {
        display: block;
        width: 25%;
    }
}
</style>