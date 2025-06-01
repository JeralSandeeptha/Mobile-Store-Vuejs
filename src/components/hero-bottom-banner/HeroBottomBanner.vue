<script lang="ts" setup>
import headset from "../../assets/images/headset.png";
import visionpro from "../../assets/images/vission-pro.png";
import macbook from "../../assets/images/MacBook Pro 14.png";
import ps5 from "../../assets/images/PlayStation.png";
import Button from "../button/Button.vue";
</script>

<template>
  <div class="w-full min-h-[80vh] grid grid-cols-2 max-lg:grid-cols-1">
    <div class="w-full grid grid-rows-2 min-h-[75vh]">
      <div
        class="flex flex-col items-end justify-center relative px-[3rem] max-lg:px-[10rem] max-md:px-[3rem] max-md:py-[3rem] max-md:items-center"
      >
        <img
          :src="ps5"
          alt="ps5"
          class="absolute left-0 w-[300px] h-full max-md:relative"
        />
        <div class="flex gap-4 flex-col z-10 relative w-[300px]">
          <h1 class="text-5xl font-light">Playstation 5</h1>
          <h5 class="text-[gray] text-sm max-md:text-center">
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </h5>
        </div>
      </div>
      <div class="grid grid-cols-2 max-md:grid-cols-1">
        <div
          class="bg-[#EDEDED] relative py-[3rem] flex items-center justify-end px-[1rem] max-lg:px-[4rem]"
        >
          <img
            :src="headset"
            alt="head-phone"
            class="absolute top-[30px] left-[-30px] h-[200px] w-[100px] max-lg:left-0"
          />
          <div class="flex flex-col gap-5 relative">
            <div class="flex flex-col">
              <h1 class="text-5xl font-light">Apple</h1>
              <h1 class="text-5xl font-light">Air Pods</h1>
              <h1 class="text-5xl font-light">Max</h1>
            </div>
            <h5 class="text-[gray] text-sm max-md:text-center w-[150px]">
              Computational audio. Listen, it's powerful
            </h5>
          </div>
        </div>
        <div
          class="bg-[#353535] relative max-md:hidden py-[3rem] flex items-center justify-end px-[1rem] max-lg:px-[4rem]"
        >
          <img
            :src="visionpro"
            alt="vision-pro"
            class="absolute top-[80px] left-0"
          />
          <div class="flex flex-col gap-5 relative">
            <div class="flex flex-col">
              <h1 class="text-5xl text-white font-light">Apple</h1>
              <h1 class="text-5xl text-white font-light">Vision Pro</h1>
            </div>
            <h5 class="text-[gray] text-sm max-md:text-center w-[200px]">
              An immersive way to experience entertainment
            </h5>
          </div>
        </div>
      </div>
    </div>


    <div class="bg-[#EDEDED] w-full relative flex flex-col items-start justify-center px-[4rem] max-lg:py-[4rem]">
      <img
        :src="macbook"
        alt="mac-book"
        class="absolute right-0 top-[50px] max-md:top-[0px] h-[500px] max-lg:h-full"
      />
      <div class="flex flex-col gap-5 relative">
        <div class="flex flex-col">
          <h1 class="text-5xl font-light">Macbook</h1>
          <h1 class="text-5xl font-bold">Air</h1>
        </div>
        <h5 class="text-[gray] text-sm max-md:text-center w-[300px]">
          The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
        </h5>
        <RouterLink to="/products">
          <Button 
            text="Shop Now"
            bgColor="#EDEDED"
            borderColor="black"
            textColor="black"
            hoverBgColor="black"
            hoverTextColor="white"
          />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optional styles */
</style>
