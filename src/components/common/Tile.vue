<template>
  <article class="tile">
      <div class="tile_left">
          <p class="tile_left_name">
              Name: {{tileInfo.name}}</p>
          <p class="tile_left_name">
              Amount: {{tileInfo.amount}}</p>
          <p class="tile_left_name">
              Tenure: {{tileInfo.tenure}}</p>
      </div>
      <div class="tile_right">
          <button class="tile_right_btn" @click="approve">Approve</button>
      </div>
  </article>
</template>

<script>
export default {
    name: 'Tile',
    props: {
        tileInfo: Object
    },
    methods: {
        approve() {
            this.tileInfo.isApproved = true;
            this.$store.dispatch('approve', this.tileInfo);
        }
    }
}
</script>

<style lang="scss">
.tile, .repayment {
    @include flex();
    @include justify-content(space-between);
    padding: 2rem;
    margin: 2rem;
    border: 1px solid $border-grey;
    border-radius: 4px;
    box-shadow: 0 0 6px rgb(0 0 0 / 10%);

    &_right {
        &_btn {
            background: $background-blue;
            padding: 1rem;
            color: $white;
            border: 0;
            border-radius: 4px;
        }
    }

    &_left {
        &_name, &_text {
            @extend .pay-text;
            padding: 0.2rem;
        }
    }
}
</style>