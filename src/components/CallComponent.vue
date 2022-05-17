<template>
  <section class="call">
    <div class="row">
      <div class="call-to-action mt-64 position-relative">
        <img src="@/assets/img/call-to-action-bg.jpg" alt="" />
        <div class="caption-call">
          <p class="freshtext mb-3">try our seasonal products</p>
          <h2 class="text-white">Order for pick-up or delivery to your home</h2>
          <button class="btn-sefid mt-5">Shop Now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CallComponent",
};
</script>

<style lang="scss" scoped>
.call-to-action {
  img {
    width: 1118px;
    height: 400px;
    object-fit: cover;
  }

  .caption-call {
    position: absolute;
    left: 200px;
    top: 80px;
    width: 40%;
  }
}
</style>
