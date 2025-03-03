<template>
  <div class="fixed z-100 bottom-6 left-0 right-0 flex justify-center">
    <div class="flex items-center gap-2 px-4 py-2 bg-black text-white backdrop-blur-md rounded-full">
      <NuxtLink v-for="member in members" :key="member.id" :to="`/member/${member.id}`"
        :aria-label="`View ${member.name}'s profile`" :class="['member-dot', { active: member.id === activeMemberId }]">
        <span>{{ member.number }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Member } from '~/types/member'

const props = defineProps<{
  members: Member[]
  activeMemberId: string
}>()
</script>

<style scoped>
.member-dot {
  @apply w-10 h-10 rounded-full flex items-center justify-center border border-white/20 transition-all;
}

.member-dot.active {
  @apply bg-white text-black;
}

.member-dot:hover {
  @apply bg-white/10;
}

.member-dot.active:hover {
  @apply bg-white;
}
</style>