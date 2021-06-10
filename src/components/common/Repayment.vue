<template>
  <article class="repayment">
      <div class="repayment_left">
          <p class="repayment_left_text">Total Loan Amount: ${{loan.amount}}</p>
          <p class="repayment_left_text">Remaining Loan Amount: ${{loan.remainingAmount || loan.amount}}</p>
          <p class="repayment_left_text">Weekly EMI: {{loan.emi}}</p>
      </div>
      <div class="repayment_right">
         <button class="repayment_right_btn" @click="payInstallment" v-if="payAmount > 0">Pay ${{payAmount}}</button>
      </div>
  </article>
</template>

<script>
export default {
    name: 'Repayment',
    computed: {
        payAmount() {
            const remaining = isNaN(this.loan.remainingAmount) ? Number(this.loan.amount) : Number(this.loan.remainingAmount);
            if(Number(this.loan.emi) > remaining) {
                return remaining;
            }
            return Number(this.loan.emi);
        }
    },
    props: {
        loan: Object
    },
    methods: {
        payInstallment() {
            let data = this.loan;
            data.remainingAmount = (data.remainingAmount || data.amount) - this.payAmount;
            this.$store.dispatch('approve', data);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>