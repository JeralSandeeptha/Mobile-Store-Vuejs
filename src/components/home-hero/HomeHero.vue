<script lang="ts" setup>
import phone from "../../assets/images/HeroIphone.png";
import Button from "../button/Button.vue";
</script>

<template>
  <div class="w-full min-h-[80vh] bg-[#211C24] px-[3rem] max-md:pt-[2rem]">
    <div class="max-w-[1000px] mx-auto min-h-[80vh] grid grid-cols-[2fr_1fr] max-md:grid-cols-1">
      <div class="flex items-center justify-start w-full ">
        <div class="flex flex-col gap-[20px] max-md:justify-center max-md:items-center w-full">
          <h5 class="text-[gray] font-bold text-2xl">Go Beyond</h5>
          <h1 class="text-[white] text-6xl max-md:text-center">
            IPhone 14 <span class="font-bold">Pro</span>
          </h1>
          <h5 class="text-[gray] font-bold max-md:text-center">
            Created to change everything for the better. For everyone
          </h5>
          <RouterLink to="/products">
            <Button
              bgColor="transparent"
              textColor="white"
              hoverBgColor="white"
              hoverTextColor="#211C24"
              text="Shop Now"
              borderColor="whtie"
            />
          </RouterLink>
        </div>
      </div>
      <div>
        <img :src="phone" alt="iphone-image" class="w-full h-full max-md:min-h-[50vh]" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optional styles */
</style>
