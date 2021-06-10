<template>
    <form class="form" @submit="submitForm">
        <slot />
        <button type="submit" class="form_submit" @click="submitForm" :disabled="disable">{{buttonText}}</button>
    </form>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'Form',
    props: {
        buttonText: String,
        fields: Array
    },
    computed: {
        ...mapState({
          formData: state => state.form.formData
        }),
        disable() {
            return Object.keys(this.formData).length !== this.fields.length;
        }
    },
    data() {
        return {
            isValid: true
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();
            if(Object.keys(this.formData))
            this.$emit('submitform', this.formData);
        }
    }
}
</script>

<style lang="scss">
.form {
    width: 70%;
    margin: 0 auto;
    &_submit {
        background: $background-blue;
        padding: 1rem;
        color: $white;
        border: 0;
        border-radius: 4px;
        margin: 0 3rem;

        &:disabled {
            opacity: 0.5;
        }
    }
}
</style>