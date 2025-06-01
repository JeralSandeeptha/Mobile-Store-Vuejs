<script lang="ts" setup>
import { ref } from 'vue';
import type { ButtonProps } from '../../types/component.types';
 
const props = defineProps<ButtonProps>();
const isHovering = ref(false);
</script>

<template>
  <button
    @mouseover="isHovering = true"
    @mouseleave="isHovering = false"
    :class="`rounded max-w-[200px] w-[200px] border-[1.5px] outline-none px-[2rem] py-[1rem] cursor-pointer`"
    :style="{
      backgroundColor: isHovering ? props.hoverBgColor : props.bgColor,
      color: isHovering ? props.hoverTextColor : props.textColor,
      borderColor: props.borderColor,
    }"
  >
    {{ props.text }}
  </button>
</template>

<style scoped>
/* Optional styles */
</style>
