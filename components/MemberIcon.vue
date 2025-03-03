<template>
    <div class="p-4 border border-gray-700 rounded-full w-fit">
        <nuxt-img :src="`/images/members/icons/s${memberId}.png`" alt="" class="w-24 h-24 rounded-full object-cover" />
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
    memberId: {
        type: Number,
        required: true
    },
})
</script>