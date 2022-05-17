<template>
  <section class="products">
    <div class="row">
      <div class="col-4 mt-4">
        <p class="freshtext mb-3">our products</p>
        <h3>
          All our delectable pastries are backed fresh in our kitchen very
          morning, and are made with all-natural, all organic ingredients.
        </h3>
        <button class="btn-banafsh mt-5">Start Shopping</button>
      </div>
      <div class="col-8 d-flex">
        <div class="navigator">
          <div class="prev">
            <font-awesome-icon
              icon="fa-solid fa-chevron-left"
              class="fa-left fa"
            />
          </div>

          <div class="next">
            <font-awesome-icon
              icon="fa-solid fa-chevron-right"
              class="fa-right fa"
            />
          </div>
        </div>
        <div class="img-wrapper" v-for="(thumb, index) in images" :key="index">
          <img :src="thumb.src" class="thumb blur" />
          <div class="content fade text-white">
            <h4>{{ thumb.title }}</h4>
            <p>{{ thumb.type }}</p>
            <h5>{{ thumb.price }}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductsComponent",

  data() {
    return {
      images: [
        {
          src: require("@/assets/img/choco-chip-cookies.jpg"),
          title: "Choco Chips Cookies",
          type: "Cookies, Pasteries",
          price: "$19.00 - $39.00",
        },
        {
          src: require("@/assets/img/strawberry-jam-cookies.jpg"),
          title: "Strawberry jam Cookies",
          type: "Cookies, Pasteries",
          price: "$21.00 - $42.00",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.products {
  padding: 3rem 0;

  .img-wrapper {
    position: relative;

    .content {
      position: absolute;
      width: 98%;
      inset: 0;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: 200ms ease-in-out;
      background: rgba(152, 148, 148, 0.6);
    }

    img {
      width: 98%;
      object-fit: cover;
      object-position: center;
    }
  }

  .img-wrapper:hover > .content.fade {
    opacity: 1;
  }

  .fa-left {
    top: 45%;
    left: 0px;
  }

  .fa-right {
    top: 45%;
    left: 704px;
  }
}
</style>
