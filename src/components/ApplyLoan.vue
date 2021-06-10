<template>
  <section class="apply-loan">
        <Form @submitform="applyLoan" :buttonText="btnText" :fields="fields" v-if="!success">
            <FormInput v-for="field in fields" :key="field.id" :formInfo="field" />
        </Form>
        <div class="apply-loan_succes" v-else>
            <p class="success">Your loan has been successfully submitted for Approval. </p>
        </div>
  </section>
</template>

<script>
import Form from './common/Form.vue';
import FormInput from './common/FormInput.vue';
import { calculatePayment } from '../services/PaymentCalculator';
import { mapState } from 'vuex';

export default {
    name: "ApplyLoan",
    components: {
        Form,
        FormInput
    },
    computed: mapState({
        success: state => state.apply.isSubmiited
    }),
    data() {
        return {
            btnText: 'Submit For Approval',
            fields: [
                {
                    id: '01',
                    type: 'text',
                    label: 'Name',
                    validation: {
                        required: true,
                        character: true
                    }
                },
                {
                    id: '02',
                    type: 'text',
                    label: 'Email',
                    validation: {
                        required: true,
                        email: true
                    }
                },
                {
                    id: '03',
                    type: 'text',
                    label: 'Amount Required',
                    validation: {
                        required: true,
                        number: true
                    }
                },
                {
                    id: '04',
                    type: 'text',
                    label: 'Tenure',
                    validation: {
                        required: true,
                        number: true
                    }
                }
            ],
            interestRate: 12
        }
    },
    methods: {
        applyLoan(data) {
            data.emi = calculatePayment(data.amount, data.tenure, this.interestRate);
            this.$store.dispatch('approveLoan', data)
        }
    }
}
</script>

<style lang="scss" scoped>
.apply-loan {
    margin: 3rem auto;
    width: 50%;
    box-shadow: 0 0 6px rgb(0 0 0 / 10%);
    padding: 2rem;

    .success {
        @extend .green-text;
        text-align: center;
    }
}
</style>