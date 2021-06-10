<template>
    <p class="form-error">
        {{error}}
    </p>
</template>

<script>
export default {
    name: 'FormError',
    props: {
        error: String
    }
}
</script>

<style lang="scss">
.form-error {
    @extend .error-text;
}
</style>