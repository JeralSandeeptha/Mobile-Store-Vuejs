<script lang="ts" setup>
import Button from '../button/Button.vue';
</script>

<template>
    <div class="banner w-full min-h-[50vh]">
        <div class="flex flex-col items-center justify-center min-h-[50vh]">
            <div class="flex gap-2 mb-[10px]">
                <h1 class="text-white text-4xl">Big Summer</h1>
                <h1 class="text-white text-4xl font-bold">Sale</h1>
            </div>
            <h5 class="text-[gray] text-sm max-md:text-center mb-[40px]">Commodo fames vitae vitae leo mauris in. Eu consequat.</h5>
            <RouterLink to="/products">
            <Button 
                text="Shop Now"
                bgColor="transparent"
                borderColor="white"
                textColor="white"
                hoverBgColor="white"
                hoverTextColor="black"
            />
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.banner{
    background-image: url('../../assets/images/sale-banner.png');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>

