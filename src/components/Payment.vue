<template>
    <article class="payment">
        <Repayment v-for="loan in loans" :key="loan.id" :loan="loan" />
    </article>
</template>

<script>
import Repayment from './common/Repayment.vue';
import {mapState} from 'vuex';

export default {
    name: 'Payment',
    computed: mapState({
        loans: state => {
            const approvedUsers = state.admin.users.filter(user => user.isApproved);
            return approvedUsers;
        }
    }),
    components: {
        Repayment
    },
    created() {
        this.$store.dispatch('getUsers');
    }
}
</script>

<style lang="scss" scoped>

</style>