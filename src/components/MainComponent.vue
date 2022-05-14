<template>
  <main>
    <div class="container">
      <section class="first-section">
        <div class="row">
          <div class="col-4">
            <p class="freshtext">our product</p>
            <h3>
              All our delectable pastries are backed fresh in our kitchen very
              morning, and are made with all-natural, all organic ingredients.
            </h3>
            <button class="btn-banafsh">Start Shopping</button>
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

            <img
              :src="thumb.src"
              class="thumb"
              v-for="(thumb, index) in images"
              :key="index"
            />
          </div>
        </div>
      </section>

      <section class="corporate mt-64">
        <div class="row">
          <p class="freshtext text-center">corporate & wedding</p>
          <h3 class="text-center mb-4">Baking Special Moment</h3>

          <div class="col-6 position-relative">
            <div class="">
              <img src="@/assets/img/corporate-bg.jpg" alt="" />
            </div>

            <div class="description">
              <p class="freshtext">Internation bakery</p>
              <h4 class="text-white">Corporation Event</h4>
              <button class="btn-banafsh">Explore more</button>
            </div>
          </div>
          <div class="col-6 position-relative">
            <img src="@/assets/img/wedding-bg.jpg" alt="" />
            <div class="description">
              <p class="freshtext">Internation bakery</p>
              <h4 class="text-white">Corporation Event</h4>
              <button class="btn-banafsh">Explore more</button>
            </div>
          </div>
        </div>
      </section>

      <section class="shop mt-64">
        <div class="row">
          <div class="col-3 text-center">
            <h3>Find a freshly backed producted perfect for you</h3>
            <p class="f-s12">
              integer a nibh vitae ex porttitor rutrum et ut velit. etiam ac
              felic at lieo feuggiat piacerat. sed ac nulla id orci tempor
              convallis sed.
            </p>
            <button class="btn-banafsh">Shop All Products</button>
          </div>
          <div class="col-9"></div>
        </div>
      </section>

      <section class="manual mt-64">
        <div class="row">
          <div class="col-12 position-relative">
            <img src="@/assets/img/bakery-process-1.jpg" />

            <div class="title text-white">
              <h2>Tell us what you have in mind</h2>
            </div>
            <div class="number text-white">
              <h2>01</h2>
            </div>
            <div class="desc">
              <p class="freshtext">manual ingredient selection</p>
              <p class="text-white">
                Cras consequent lectus vestibulum tortor pulvinar, quis quismond
                nist varius. Ut en laoreet ex. Aliquim erat volutpat. Nullam
                quis sagittis nibh. Morbi consectetur ultricies ante ac conque.
                donec lorem erat, finibus in velit placerat, rutrum augue
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-6 position-relative mt-4">
            <img src="@/assets/img/bakery-process-2.jpg" alt="" />
            <div class="title text-white">
              <h2>We Start Baking</h2>
            </div>
            <div class="number text-white">
              <h2>02</h2>
            </div>
            <div class="desc-2">
              <p class="freshtext">sweet & delicious</p>
              <p class="text-white">
                Cras consequent lectus vestibulum tortor pulvinar, quis quismond
                nist varius. Ut en laoreet ex. Aliquim erat volutpat. Nullam
                quis sagittis nibh. Morbi consectetur ultricies ante ac conque.
                donec lorem erat, finibus in velit placerat,
              </p>
            </div>
          </div>

          <div class="col-6 mt-4">
            <div class="bg-pearl p-5">
              <p class="freshtext mb-5">dont just take word for it</p>
              <h3>
                "Finally found an alternative to the mass produced products.
                something that incorporates real organic ingredients, nutrient
                dense wellness while promoting sustainablity and activity."
              </h3>
              <p class="caption mt-5">Rachel cooper, Founder</p>
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
              <p class="freshtext">baked to order & gift wrapped</p>
              <p class="text-white">
                Cras consequent lectus vestibulum tortor pulvinar, quis quismond
                nist varius. Ut en laoreet ex. Aliquim erat volutpat. Nullam
                quis sagittis nibh. Morbi consectetur ultricies ante ac conque.
                donec lorem erat, finibus in velit placerat, rutrum augue
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="location mt-64">
        <div class="row">
          <div class="text-center mt-4">
            <p class="freshtext">location</p>
            <h3>Visit our Bakeries</h3>
            <div class="col-12">
              <img src="@/assets/img/new-york-bk.jpg" alt="" />
              <img src="@/assets/img/london-bk.jpg" alt="" />
            </div>
            <div class="row">
              <div class="col-6 bg-ny d-flex p-4">
                <div class="col-4 pt-56">
                  <div class="freshtext">call us</div>
                  <div class="freshtext">1.800.458.556</div>
                </div>
                <div class="col-4">
                  <h3>New York</h3>
                  <div class="freshtext pt-3">open all week</div>
                  <div class="freshtext">9:00 am - 6:00 pm</div>
                </div>
                <div class="col-4 pt-56">
                  <button class="btn-sefid">View Map</button>
                </div>
              </div>
              <div class="col-6 bg-ln d-flex pt-4">
                <div class="col-4 pt-56">
                  <div class="freshtext">call us</div>
                  <div class="freshtext">1.800.458.556</div>
                </div>
                <div class="col-4">
                  <h3>London</h3>
                  <div class="freshtext pt-3">open all week</div>
                  <div class="freshtext">9:00 am - 6:00 pm</div>
                </div>
                <div class="col-4 pt-56">
                  <button class="btn-sefid">View Map</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="social mt-64">
        <div class="row">
          <div class="col-3">
            <img src="@/assets/img/social-1.jpg" alt="" />
          </div>
          <div
            class="col-6 bg-color d-flex flex-column justify-content-center align-items-center"
          >
            <p class="freshtext">made for sharing</p>
            <h3>let's stay in touch</h3>
            <button class="btn-banafsh mt-3">Follow Us</button>
          </div>
          <div class="col-3">
            <img src="@/assets/img/social-2.jpg" alt="" />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-3">
            <img src="@/assets/img/social-3.jpg" alt="" />
          </div>
          <div class="col-3">
            <img src="@/assets/img/social-4.jpg" alt="" />
          </div>
          <div class="col-3">
            <img src="@/assets/img/social-5.jpg" alt="" />
          </div>
          <div class="col-3">
            <img src="@/assets/img/social-6.jpg" alt="" />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "MainComponent",
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
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  h3 {
    color: #5b2ca2;
  }
  .first-section {
    padding: 3rem 0;

    .thumb {
      width: calc(100% / 2);
    }

    .navigator {
      position: relative;
      font-size: 22px;

      .fa {
        background-color: rgb(163, 161, 161);
        color: white;
        padding: 11px 7px;
        position: absolute;
      }
      .fa-left {
        top: 45%;
        left: 0;
      }

      .fa-right {
        top: 45%;
        left: 708px;
      }
    }
  }

  .corporate {
    img {
      max-width: 100%;
    }

    .description {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: none;
      margin-top: 1rem;
    }

    .col-6:hover .description {
      display: block;
    }
  }

  .manual {
    img {
      max-width: 100%;
      height: 400px;
      filter: brightness(0.5);
      object-fit: cover;
      object-position: center;
    }

    .title {
      position: absolute;
      top: 40px;
      left: 50px;
    }

    .number {
      position: absolute;
      top: 40px;
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
      bottom: 3px;
      left: 55px;
      width: 40%;
    }

    .bg-pearl {
      background-color: #e9dedc;
      max-width: 98%;
      height: 400px;
    }
  }

  .location {
    img {
      float: left;
      max-width: 50%;
    }

    .bg-ny {
      background-color: #f1f9fb;
    }

    .bg-ln {
      background-color: #faf3e3;
    }
  }

  .social {
    .bg-color {
      background-color: #e9dedc;
    }

    img {
      max-width: 100%;
    }
  }
}
</style>
