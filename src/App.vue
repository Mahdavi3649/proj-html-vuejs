<template>
  <div id="app">
    <header>
      <div
        class="site-header d-flex justify-content-between align-items-center"
      >
        <div class="logo">
          <img src="@/assets/img/avada-bakery-logo.png" alt="" />
        </div>
        <div class="menu-header">
          <a v-for="item in menu" :key="item.id" :href="item.href">
            {{ item.text }}
          </a>
          <font-awesome-icon
            icon="fa-solid fa-cart-shopping"
            style="color: #5b2ca2"
          />
        </div>
      </div>
    </header>
    <main></main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      menu: [
        {
          id: 1,
          href: "#",
          text: "home",
        },
        {
          id: 2,
          href: "#",
          text: "shop",
        },
        {
          id: 3,
          href: "#",
          text: "about",
        },
        {
          id: 4,
          href: "#",
          text: "gallery",
        },
        {
          id: 5,
          href: "#",
          text: "location",
        },
        {
          id: 6,
          href: "#",
          text: "journal",
        },
        {
          id: 7,
          href: "#",
          text: "contact",
        },
        {
          id: 8,
          href: "#",
          text: "my account",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
