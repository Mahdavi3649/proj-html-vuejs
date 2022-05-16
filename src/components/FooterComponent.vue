<template>
  <footer>
    <div class="container">
      <div class="row d-flex justify-content-between align-items-center">
        <div class="col-3">
          <img src="@/assets/img/avada-bakery-logo.png" alt="" />
        </div>
        <div class="col-3">
          <h5>Subscribe to our Newsletter</h5>
        </div>
      </div>

      <div class="row">
        <div class="col-6-s menuFooter mt-4">
          <a v-for="item in menuFooter" :key="item.id" :href="item.href">
            {{ item.text }}
          </a>
          <font-awesome-icon
            icon="fa-solid fa-cart-shopping"
            style="color: #5b2ca2"
          />
          <span class="order-number">0</span>
        </div>
        <div class="col-6-s">
          <form class="d-flex justify-content-end">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Enter email address*"
              aria-label="Search"
            />
            <button class="btn-banafsh d-flex align-items-center" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div class="row mt-7 mb-5">
        <div class="col-8">
          <p class="copyright">
            &copy; Copyright 2012 - 2020 | Avanda Theme by ThemeFusion | All
            Rights reserved | Powered by WordPress
          </p>
        </div>
        <div class="col-4 d-flex justify-content-end">
          <font-awesome-icon
            icon="fa-brands fa-instagram"
            class="social-icon"
          />
          <font-awesome-icon icon="fa-brands fa-twitter" class="social-icon" />
          <font-awesome-icon
            icon="fa-brands fa-facebook-f"
            class="social-icon"
          />
          <font-awesome-icon
            icon="fa-brands fa-pinterest-p"
            class="social-icon"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",

  data() {
    return {
      menuFooter: [
        {
          id: 1,
          href: "#",
          text: "Shop",
        },
        {
          id: 2,
          href: "#",
          text: "About",
        },
        {
          id: 3,
          href: "#",
          text: "Gallery",
        },
        {
          id: 4,
          href: "#",
          text: "Locations",
        },
        {
          id: 5,
          href: "#",
          text: "Journal",
        },
        {
          id: 6,
          href: "#",
          text: "Contact",
        },
        {
          id: 7,
          href: "#",
          text: "Orders",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  margin-top: 3rem;

  h5 {
    color: #5b2ca2;
    font-family: "Source Serif Pro", serif;
  }

  img {
    height: 60px;
  }

  a {
    list-style: none;
    text-decoration: none;
    font-size: 12px;
    padding: 0 12px;
    color: #5b2ca2;
  }

  input {
    width: 60% !important;
  }

  ::placeholder {
    font-size: 12px;
  }

  .copyright {
    color: #878589;
    font-size: 10px;
  }

  .mt-7 {
    margin-top: 7rem;
  }
  .social-icon {
    padding-left: 1.5rem;
    color: #5b2ca2;
  }

  .order-number {
    background-color: #e9dedc;
    padding: 3px 5px;
    font-size: 11px;
    border-radius: 8px;
    margin-left: 9px;
  }
}
</style>
