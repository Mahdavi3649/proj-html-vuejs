<template>
  <main>
    <div class="container">
      <ProductsComponent />
      <CorporateComponent />
      <ShopComponent />
      <ManualComponent />
      <LocationComponent />
      <SocialComponent />
      <CallComponent />
    </div>
  </main>
</template>

<script>
import ProductsComponent from "@/components/ProductsComponent.vue";
import CorporateComponent from "@/components/CorporateComponent.vue";
import ShopComponent from "@/components/ShopComponent.vue";
import ManualComponent from "@/components/ManualComponent.vue";
import LocationComponent from "@/components/LocationComponent.vue";
import SocialComponent from "@/components/SocialComponent.vue";
import CallComponent from "@/components/CallComponent.vue";
export default {
  name: "MainComponent",
  components: {
    ProductsComponent,
    CorporateComponent,
    ShopComponent,
    ManualComponent,
    LocationComponent,
    SocialComponent,
    CallComponent,
  },
};
</script>

<style lang="scss" scoped></style>
