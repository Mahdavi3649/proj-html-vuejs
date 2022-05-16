<template>
  <main>
    <div class="container">
      <section class="first-section">
        <div class="row">
          <div class="col-4">
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
            <div
              class="img-wrapper"
              v-for="(thumb, index) in images"
              :key="index"
            >
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

      <section class="corporate mt-64">
        <div class="row">
          <p class="freshtext text-center mb-3">corporate & wedding</p>
          <h3 class="text-center mb-4">Baking Special Moment</h3>

          <div class="col-6 position-relative d-flex">
            <img src="@/assets/img/corporate-bg.jpg" alt="" />
            <img
              class="top-img"
              src="@/assets/img/corporate-hover-bg.jpg"
              alt=""
            />

            <div class="description">
              <p class="freshtext text-white">International bakery</p>
              <h4 class="text-white mt-3">Corporation Event</h4>
              <button class="btn-banafsh mt-3">Explore more</button>
            </div>
          </div>
          <div class="col-6 position-relative">
            <img src="@/assets/img/wedding-bg.jpg" />
            <img
              class="top-img"
              src="@/assets/img/wedding-hover-bg.jpg"
              alt=""
            />
            <div class="description">
              <p class="freshtext text-white">International bakery</p>
              <h4 class="text-white mt-3">Corporation Event</h4>
              <button class="btn-banafsh mt-3">Explore more</button>
            </div>
          </div>
        </div>
      </section>

      <section class="shop mt-64">
        <div class="row">
          <div class="col-4 text-center">
            <h3>Find a freshly backed producted perfect for you</h3>
            <p class="f-s12">
              integer a nibh vitae ex porttitor rutrum et ut velit. etiam ac
              felic at lieo feuggiat piacerat. sed ac nulla id orci tempor
              convallis sed.
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

            <img
              :src="item.src"
              v-for="(item, index) in items"
              :key="index"
              class="item"
            />
          </div>
        </div>
      </section>

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
                nist varius. Ut en laoreet ex. Aliquim erat volutpat. Nullam
                quis sagittis nibh. Morbi consectetur ultricies ante ac conque.
                donec lorem erat, finibus in velit placerat,
              </p>
            </div>
          </div>

          <div class="col-6 mt-4">
            <div class="bg-pearl p-6">
              <p class="freshtext mb-5">dont just take word for it</p>
              <h3 class="mb-5">
                "Finally found an alternative to the mass produced products.
                something that incorporates real organic ingredients, nutrient
                dense wellness while promoting sustainablity and activity."
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

      <div class="row">
        <div class="call-to-action mt-64 position-relative">
          <img src="@/assets/img/call-to-action-bg.jpg" alt="" />
          <div class="caption-call">
            <p class="freshtext mb-3">try our seasonal products</p>
            <h2 class="text-white">
              Order for pick-up or delivery to your home
            </h2>
            <button class="btn-sefid mt-5">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "MainComponent",
  components: {},
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

      items: [
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
          src: require("@/assets/img/strawberry-donut.jpg"),
          title: "Strawberry Donut",
          type: "Cookies, Pasteries",
          price: "$17.00 $34.00",
        },
        {
          src: require("@/assets/img/perfect-macarons.jpg"),
          title: "Perfect Macarons",
          type: "Cookies, Pasteries",
          price: "$23.00 $41.00",
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
    font-family: "Source Serif Pro", serif;
  }
  .first-section {
    padding: 3rem 0;

    .img-wrapper {
      position: relative;

      .content {
        position: absolute;
        width: 100%;
        inset: 0;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: 200ms ease-in-out;
      }

      img {
        width: 98%;
        object-fit: cover;
        object-position: center;
      }
    }

    .img-wrapper:hover > img.blur {
      filter: blur(1px);
      color: #a691b2;
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

  .shop {
    .col-8 {
      .item {
        width: calc(100% / 4);
      }

      .prev {
        position: absolute;
        left: 0;
        top: 45%;
      }
      .next {
        position: absolute;
        left: 713px;
        top: 45%;
      }
    }
  }

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
      bottom: 3px;
      left: 55px;
      width: 55%;
      padding-bottom: 16px;
    }

    .bg-pearl {
      background-color: #e9dedc;
      max-width: 100%;
      height: 100%;
    }
  }

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

  .social {
    .bg-color {
      background-color: #e9dedc;
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
  .call-to-action {
    img {
      width: 1140px;
      height: 400px;
      object-fit: cover;
    }

    h2 {
      font-family: "Source Serif Pro", serif;
    }

    .caption-call {
      position: absolute;
      left: 200px;
      top: 80px;
      width: 35%;
    }
  }
}
</style>
