<template>
    <section class="menu">
        <router-link to="/home" class="menu_item">Home</router-link>
        <router-link to="/admin" class="menu_item">Admin</router-link>
        <router-link to="/payment" class="menu_item">Payment</router-link>
        <!-- <a href="#" class="menu_item active">
            <img class="menu_item_img" src="../assets/home-m.svg" alt="" />
            <label class="menu_item_text">Home</label>
        </a>
        <a href="#" class="menu_item">
            <img class="menu_item_img" src="../assets/pay.svg" alt="" />
            <label class="menu_item_text">Cards</label>
        </a>
        <a href="#" class="menu_item">
            <img class="menu_item_img" src="../assets/Payments-m.svg" alt="" />
            <label class="menu_item_text">Payments</label>
        </a>
        <a href="#" class="menu_item">
            <img class="menu_item_img" src="../assets/Credit-m.svg" alt="" />
            <label class="menu_item_text">Credit</label>
        </a>
        <a href="#" class="menu_item">
            <img class="menu_item_img" src="../assets/Account-m.svg" alt="" />
            <label class="menu_item_text">Profile</label>
        </a> -->
    </section>
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style lang="scss" scoped>
    .menu {
        @include flex();
        @include justify-content(space-around);
        align-items: baseline;
        background: $white;
        position: fixed;
        bottom: 0;
        z-index: $index4;
        width: 100%;
        filter: drop-shadow(0 -3px 6px #00000014);

        &_item {
            @extend .header-text;
            padding: 0.9rem;
            text-decoration: none;
            text-align: center;
            cursor: pointer;
            
            &.router-link-active {
                color: $card-color;
            }
            &_text {
                @extend .grey-text;
                width: 100%;
                display: block;
            }
        }
    }
    @include MediaQueries($desktop-and-above) {
        .menu {
            position: static;
            background: transparent;
            display: block;
            box-shadow: none;
            &_item {
                @include flex();
                margin: 4rem 0;
                &_text {
                    font-size: $font-16;
                    text-align: left;
                    padding: 0 1.6rem; 
                }
            }
        }
    }
</style>