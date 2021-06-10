<template>
    <header class="header">
        <h2 class="header_title">You can apply loan in 3 easy steps</h2>
    </header>
</template>
<script>
export default {
    name: 'Header'
}
</script>
<style lang="scss" scoped>
.header{
    &_title {
        @extend .bold-text ;
        text-align: center;
        padding: 2rem;
    }
}
</style>