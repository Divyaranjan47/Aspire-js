<template>
    <p class="input-text">
        <label :for="labelFor" class="input-text_label">{{labelText}}</label>
        <input type="text" class="input-text_input" :name="labelFor" @blur="validateInput()"  v-model="inputVal" />
        <FormError v-show="!isValid" :error="errorMsg"/>
    </p>
</template>

<script>
import FormError from '../FormError.vue';
import validationUtil from '../../../services/Validation';
import Errors from '../../../constants/Errors';

export default {
    name: 'InputText',
    components: {
        FormError
    },
    props: {
        validation: Object,
        labelText: String
    },
    computed: {
        labelFor() {
            if(this.labelText) {
                return this.labelText.toLowerCase().split(' ')[0];
            }
            return '';
        },
    },
    data() {
        return {
            inputVal: '',
            isValid: false,
            errorMsg: ''
        }
    },
    methods: {
        validateInput() {
            if (this.validation.required) {
                if(validationUtil.hasValue(this.inputVal)) {
                    this.isValid = true;
                    this.errorMsg = '';
                } else {
                    this.errorMsg = `${this.labelFor} ${Errors.required}`
                }
            }
            if (this.isValid && this.validation.email && !validationUtil.isValidEmail(this.inputVal)) {
                this.isValid = false;
                this.errorMsg = Errors.email;
            }
            if (this.isValid && this.validation.number && !validationUtil.isValidNumber(this.inputVal)) {
                this.isValid = false;
                this.errorMsg = Errors.number;
            }


            if(this.isValid) {
                const inputData = {};
                inputData[this.labelFor] = this.inputVal;
                this.$store.dispatch('updateInput', inputData);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.input-text {
    margin: 3rem;
    width: 100%;
    &_label {
        @extend .black-title;
        width: 100%;
        display: block;
    }

    &_input {
        padding: 0.8rem 2rem;
        min-width: 25rem;

        &.error {
            border: 2px solid $error-text;
        }
    }
}
</style>