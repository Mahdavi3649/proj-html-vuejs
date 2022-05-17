<template>
  <section class="manual mt-64">
    <div class="row p-11">
      <div class="col-12 position-relative">
        <img src="@/assets/img/bakery-process-1.jpg" />

        <div class="title text-white">
          <h2>Tell us what you have in mind</h2>
        </div>
        <div class="number text-white">
          <h2>01</h2>
        </div>
        <div class="desc">
          <p class="freshtext mb-3">manual ingredient selection</p>
          <p class="text-white">
            Cras consequent lectus vestibulum tortor pulvinar, quis quismond
            nist varius. Ut en laoreet ex. Aliquim erat volutpat. Nullam quis
            sagittis nibh. Morbi consectetur ultricies ante ac conque. donec
            lorem erat, finibus in velit placerat, rutrum augue
          </p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-6 position-relative mt-4">
        <img src="@/assets/img/bakery-process-2.jpg" alt="" />
        <div class="title text-white w-50">
          <h2>We Start Baking</h2>
        </div>
        <div class="number text-white">
          <h2>02</h2>
        </div>
        <div class="desc-2">
          <p class="freshtext mb-3">sweet & delicious</p>
          <p class="text-white fs-13">
            Cras consequent lectus vestibulum tortor pulvinar, quis quismond
            nist varius. Ut en laoreet ex. Aliquim erat volutpat. Nullam quis
            sagittis nibh. Morbi consectetur ultricies ante ac conque. donec
            lorem erat, finibus in velit placerat,
          </p>
        </div>
      </div>

      <div class="col-6 mt-4">
        <div class="bg-pearl p-6">
          <p class="freshtext mb-5">dont just take word for it</p>
          <h3 class="mb-5">
            "Finally found an alternative to the mass produced products.
            something that incorporates real organic ingredients, nutrient dense
            wellness while promoting sustainablity and activity."
          </h3>
          <p class="caption mt-5 mb-1">Rachel cooper, Founder</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 position-relative mt-4">
        <img src="@/assets/img/bakery-process-3.jpg" alt="" />

        <div class="title text-white">
          <h2>Delivered to your home</h2>
        </div>
        <div class="number text-white">
          <h2>03</h2>
        </div>
        <div class="desc-2">
          <p class="freshtext mb-3">baked to order & gift wrapped</p>
          <p class="text-white fs-13">
            Cras consequent lectus vestibulum tortor pulvinar, quis quismond
            nist varius. Ut en laoreet ex. Aliquim erat volutpat. Nullam quis
            sagittis nibh. Morbi consectetur ultricies ante ac conque. donec
            lorem erat, finibus in velit placerat, rutrum augue
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ManualComponent",
};
</script>

<style lang="scss" scoped>
.manual {
  img {
    max-width: 100%;
    height: 100%;
    filter: brightness(0.5);
    object-fit: cover;
    object-position: center;
  }

  .p-11 {
    padding: 0 11px;
  }

  .title {
    position: absolute;
    top: 30px;
    left: 50px;
    width: 35%;
    font-family: "Source Serif Pro", serif;
  }

  .number {
    position: absolute;
    top: 30px;
    right: 90px;
  }

  .desc {
    position: absolute;
    bottom: 30px;
    right: 80px;
    width: 40%;
  }

  .desc-2 {
    position: absolute;
    bottom: 6px;
    left: 55px;
    width: 40%;
    padding-bottom: 16px;
  }

  .bg-pearl {
    background-color: #f3eef3;
    max-width: 100%;
    height: 100%;
  }
}
</style>
