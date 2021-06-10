<template>
    <InputText :labelText="formInfo.label" :validation="formInfo.validation" v-if="formInfo.type == 'text'" />
</template>

<script>
import InputText from'./inputs/InputText.vue';

export default {
    name: 'FormInput',
    components: {
        InputText
    },
    props: {
        formInfo: Object
    }
}
</script>

<style>

</style>