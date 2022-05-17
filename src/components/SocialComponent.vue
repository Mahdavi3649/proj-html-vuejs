<template>
  <section class="social mt-64">
    <div class="row">
      <div class="col-3">
        <div class="img-wrapper">
          <img class="img-fluid" src="@/assets/img/social-1.jpg" alt="" />
        </div>
      </div>
      <div
        class="col-6-s bg-color d-flex flex-column justify-content-center align-items-center"
      >
        <p class="freshtext mb-3">made for sharing</p>
        <h3>let's stay in touch</h3>
        <button class="btn-banafsh mt-3">
          <font-awesome-icon icon="fa-brands fa-instagram" class="pe-1" />
          Follow Us
        </button>
      </div>
      <div class="col-3">
        <div class="img-wrapper">
          <img class="img-fluid" src="@/assets/img/social-2.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-3">
        <div class="img-wrapper">
          <img class="img-fluid" src="@/assets/img/social-3.jpg" alt="" />
        </div>
      </div>
      <div class="col-3">
        <div class="img-wrapper">
          <img class="img-fluid" src="@/assets/img/social-4.jpg" alt="" />
        </div>
      </div>
      <div class="col-3">
        <div class="img-wrapper">
          <img class="img-fluid" src="@/assets/img/social-5.jpg" alt="" />
        </div>
      </div>

      <div class="col-3">
        <div class="img-wrapper">
          <img class="img-fluid" src="@/assets/img/social-6.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SocialComponent",
};
</script>

<style lang="scss" scoped>
.social {
  .bg-color {
    background-color: #f7f0f2;
    margin: 0px 7px;
  }
  .img-wrapper {
    overflow: hidden;
  }
  img {
    object-fit: cover;
    transition: 1s;

    &:hover {
      opacity: 0.9;
      transform: scale(1.2);
      height: 100%;
      max-width: 100%;
    }
  }
}
</style>
