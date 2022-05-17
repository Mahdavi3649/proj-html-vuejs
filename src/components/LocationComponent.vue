<template>
  <section class="location mt-64">
    <div class="row">
      <div class="text-center mt-4">
        <p class="freshtext mb-3">locations</p>
        <h3>Visit our Bakeries</h3>
      </div>

      <div class="col-6">
        <div class="img-wrapper">
          <img src="@/assets/img/new-york-bk.jpg" class="img-fluid" />
        </div>
      </div>

      <div class="col-6">
        <div class="img-wrapper">
          <img src="@/assets/img/london-bk.jpg" class="img-fluid" />
        </div>
      </div>
    </div>

    <div class="row gx-1">
      <div class="col-6-s bg-ny d-flex text-center pt-5 pb-5">
        <div class="col-4 pt-56">
          <div class="freshtext">call us</div>
          <div class="caption">1.800.458.556</div>
        </div>
        <div class="col-4">
          <h3>New York</h3>
          <div class="freshtext pt-3">open all week</div>
          <div class="caption">9:00 am - 6:00 pm</div>
        </div>
        <div class="col-4 pt-56">
          <button class="btn-sefid">View Map</button>
        </div>
      </div>
      <div class="col-6-s bg-ln d-flex text-center pt-5 pb-5">
        <div class="col-4 pt-56">
          <div class="freshtext">call us</div>
          <div class="caption">1.800.458.556</div>
        </div>
        <div class="col-4">
          <h3>London</h3>
          <div class="freshtext pt-3">open all week</div>
          <div class="caption">9:00 am - 6:00 pm</div>
        </div>
        <div class="col-4 pt-56">
          <button class="btn-sefid">View Map</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LocationComponent",
};
</script>

<style lang="scss" scoped>
.location {
  .img-wrapper {
    overflow: hidden;
    max-width: 100%;
    height: 100%;
  }
  img {
    object-fit: cover;
    transition: 0.7s;
    max-width: 100%;
    height: 100%;

    &:hover {
      opacity: 0.9;
      transform: scale(1.2);
    }
  }

  .col-6-s {
    width: 556px;
  }

  .bg-ny {
    background-color: #f1f9fb;
  }

  .bg-ln {
    background-color: #faf3e3;
    width: 560px;
  }
}
</style>
