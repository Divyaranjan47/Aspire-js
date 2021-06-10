<template>
  <div id="app" class="app">
    <Nav />
    <article class="app_container">
      <router-view></router-view>
    </article>
  </div>
</template>

<script>
import Nav from './components/Nav';

export default {
  name: 'App',
  components: {
    Nav,
  }
}
</script>

<style lang="scss">
.app {
  &_container {
    &_top {
      background: $background-blue;
      width: 100%;
      z-index: $index2;
      top: 0;
    }

    &_bottom {
      position: relative;
      z-index: $index3;
      background: $white;
      padding-bottom: 5rem;
      border-radius: 16px;
    }
  }
}

@include MediaQueries($desktop-and-above) {
  .app {
    @include flex();
    width: 100%;

    &_container {
      width: 75%;
      background: $white;
      &_top {
        position: relative;
        background: $white;
      }
      .menu {
        display: none;
      }
    }
  }
}
</style>
