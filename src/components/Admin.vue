<template>
  <article class="admin">
      <Tile v-for="user in users" :key="user.id" :tileInfo="user" />
  </article>
</template>

<script>
import { mapState } from 'vuex';
import Tile from './common/Tile.vue';

export default {
    name: 'Admin',
    components: {
        Tile
    },
    computed: mapState({
        users: state =>  {
            let items = state.admin.users.filter(item => !item.isApproved);
            // console.log('items: ', items);
            return items;
        }
    }),
    created() {
        this.$store.dispatch('getUsers');
    }
}
</script>

<style lang="scss" scoped>
.admin {
    margin: 5rem;
}
</style>