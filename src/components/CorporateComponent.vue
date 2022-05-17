<template>
  <section class="corporate mt-64">
    <div class="row">
      <p class="freshtext text-center mb-3">corporate & wedding</p>
      <h3 class="text-center mb-4">Baking Special Moment</h3>

      <div class="col-6 position-relative d-flex">
        <img src="@/assets/img/corporate-bg.jpg" alt="" />
        <img class="top-img" src="@/assets/img/corporate-hover-bg.jpg" alt="" />

        <div class="description">
          <p class="freshtext text-white">International bakery</p>
          <h4 class="text-white mt-3">Corporation Event</h4>
          <button class="btn-banafsh mt-3">Explore more</button>
        </div>
      </div>
      <div class="col-6 position-relative">
        <img src="@/assets/img/wedding-bg.jpg" />
        <img class="top-img" src="@/assets/img/wedding-hover-bg.jpg" alt="" />
        <div class="description">
          <p class="freshtext text-white">International bakery</p>
          <h4 class="text-white mt-3">Corporation Event</h4>
          <button class="btn-banafsh mt-3">Explore more</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CorporateComponent",
};
</script>

<style lang="scss" scoped>
.corporate {
  img {
    width: 557px;
    height: 520px;
  }

  .description {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }

  .col-6:hover .description {
    display: block;
  }

  .top-img {
    position: absolute;
    top: 0;
    left: 10;
    opacity: 0;
    transition: all 0.7s ease;
    width: 557px;
    height: 520px;
  }

  .top-img:hover {
    opacity: 1;
    max-width: 100%;
    height: 100%;
  }
}
</style>
