<template>
  <section class="shop mt-64">
    <div class="row">
      <div class="col-4 text-center">
        <h3>Find a freshly backed producted perfect for you</h3>
        <p class="f-s12">
          integer a nibh vitae ex porttitor rutrum et ut velit. etiam ac felic
          at lieo feuggiat piacerat. sed ac nulla id orci tempor convallis sed.
        </p>
        <button class="btn-banafsh">Shop All Products</button>
      </div>

      <div class="col-8 d-flex position-relative">
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
        <div class="img-wrapper" v-for="(item, index) in items" :key="index">
          <img :src="item.src" class="item" />
          <div class="content text-center">
            <h6 class="mt-3 bf-color">{{ item.title }}</h6>
            <p class="bf-color fs-13">{{ item.price }}</p>
          </div>
          <div class="content-center fade">
            <p>{{ item.option }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ShopComponent",
  data() {
    return {
      items: [
        {
          src: require("@/assets/img/choco-chip-cookies.jpg"),
          title: "Choco Chips Cookies",
          type: "Cookies, Pasteries",
          price: "$19.00 - $39.00",
          option: "select option  /  quick view",
        },
        {
          src: require("@/assets/img/strawberry-jam-cookies.jpg"),
          title: "Strawberry jam Cookies",
          type: "Cookies, Pasteries",
          price: "$21.00 - $42.00",
          option: "select option  /  quick view",
        },
        {
          src: require("@/assets/img/strawberry-donut.jpg"),
          title: "Strawberry Donut",
          type: "Cookies, Pasteries",
          price: "$17.00 - $34.00",
          option: "select option  /  quick view",
        },
        {
          src: require("@/assets/img/perfect-macarons.jpg"),
          title: "Perfect Macarons",
          type: "Cookies, Pasteries",
          price: "$23.00 - $41.00",
          option: "select option  /  quick view",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.shop {
  .col-8 {
    .img-wrapper {
      position: relative;
    }
    .item {
      width: 100%;
    }
    .prev {
      position: absolute;
      left: 0;
      top: 35%;
    }
    .next {
      position: absolute;
      left: 713px;
      top: 35%;
    }
    .content-center {
      position: absolute;
      width: 100%;
      height: 75%;
      inset: 0;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
      font-family: "Montserrat", sans-serif;
      text-transform: uppercase;
      font-weight: 700;
      color: white;
      z-index: 1;
      transition: 200ms ease-in-out;
      background: rgba(152, 148, 148, 0.6);
    }

    .img-wrapper:hover > .content-center.fade {
      opacity: 1;
    }
  }
}
</style>
