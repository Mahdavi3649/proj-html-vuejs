<template>
  <header>
    <div class="site-header d-flex justify-content-between align-items-center">
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
    <div class="container">
      <div class="row">
        <div class="col-4">
          <p class="freshtext">Fresh & tasty bakery every day</p>
          <h1>The Perfect fresh Bread</h1>
          <p class="caption">
            Cras consequent lectus vestibulum tortor pulvinar, quis quismond
            nist varius. Aliquim erat volutpat. Nullam quis sagittis nibh ac
            nulla id orci tempor
          </p>

          <button class="btn-sefid">Explore our products</button>
        </div>
      </div>
    </div>
    <div class="icon-hero">
      <div class="option-hero">
        <font-awesome-icon icon="fa-solid fa-folder-open" class="fa" />
        <div class="fs-11">Demos</div>
      </div>
      <div class="option-hero">
        <div class="color-green">
          <font-awesome-icon icon="fa-solid fa-dollar-sign" class="dollar" />
          <span class="fw-bolder fs-3">39</span>
        </div>
        <div class="fs-11">On Sale</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
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

<style scoped lang="scss">
header {
  height: 600px;
  background-image: url("@/assets/img/hero-header-bakery.jpg");
  background-size: contain;
  position: relative;

  .site-header {
    padding: 1rem 1.6rem;
  }

  img {
    height: 60px;
  }

  a {
    list-style: none;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 13px;
    color: #5b2ca2;
    padding: 12px;
    font-weight: 600;
    &:hover {
      color: #5b2ca2;
      border-bottom: 2px solid #5b2ca2;
    }
  }

  h1 {
    color: #5b2ca2;
    margin-bottom: 16px;
  }

  .col-4 {
    margin-top: 6rem;
  }

  .icon-hero {
    position: absolute;
    right: 20px;
    top: 150px;
    text-align: center;

    .option-hero {
      background-color: white;
      padding: 10px;
      border-radius: 8px;
      position: relative;
      margin-bottom: 10px;
    }
    .dollar {
      position: absolute;
      top: 16px;
      left: 6px;
      font-size: 16px;
    }
  }

  .color-green {
    color: #287a00;
  }

  .fs-11 {
    font-size: 11px;
    font-weight: 600;
  }

  .fa {
    font-size: 20px;
    color: #555052;
  }
}
</style>
