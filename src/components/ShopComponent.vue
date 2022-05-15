<template>
  <div class="col-8 d-flex">
    <div class="navigator">
      <div class="prev">
        <font-awesome-icon icon="fa-solid fa-chevron-left" class="fa-left fa" />
      </div>

      <div class="next">
        <font-awesome-icon
          icon="fa-solid fa-chevron-right"
          class="fa-right fa"
        />
      </div>
    </div>

    <img :src="item.src" class="item" />
  </div>
</template>

<script>
export default {
  name: "ShopComponent",

  props: {
    item: Object,
  },

  data() {
    return {
      images: [
        {
          src: require("@/assets/img/choco-chip-cookies.jpg"),
          title: "Choco Chips Cookies",
          type: "Cookies, Pasteries",
          price: "$19.00 $39.00",
        },
        {
          src: require("@/assets/img/strawberry-jam-cookies.jpg"),
          title: "Strawberry jam Cookies",
          type: "Cookies, Pasteries",
          price: "$21.00 $42.00",
        },
        {
          src: require("@/assets/img/cookies-with-ice-cream.jpg"),
          title: "Cookies with Ice Cream",
          type: "Cookies, Pasteries",
          price: "$18.00 $37.00",
        },
        {
          src: require("@/assets/img/glazed-pancake-with-lemon.jpg"),
          title: "Glazed Pancake-with Lemon",
          type: "Cookies, Pasteries",
          price: "$18.00 $37.00",
        },
        {
          src: require("@/assets/img/perfect-macarons.jpg"),
          title: "Perfect Macarons",
          type: "Cookies, Pasteries",
          price: "$14.00 $35.00",
        },
        {
          src: require("@/assets/img/strawberry-donut.jpg"),
          title: "Strawberry Donut",
          type: "Cookies, Pasteries",
          price: "$13.00 $31.00",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.col-8 {
  .item {
    width: calc(100% / 4);
  }
}
</style>
