<template>
    <div class="group relative p-4 border border-gray-700 rounded-full w-fit">
        <nuxt-img :src="`/images/members/icons/s${memberId}.png`" alt="" class="w-24 h-24 rounded-full object-cover" />
        <span
            class="absolute inset-0 flex items-center justify-center text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 outline-text">
            S{{ memberId }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
    memberId: {
        type: Number,
        required: true
    }
})
</script>

<style scoped>
.outline-text {
    color: transparent;
    -webkit-text-stroke: 1px black;
}
</style>