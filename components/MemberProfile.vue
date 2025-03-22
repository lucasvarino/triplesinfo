<template>
    <div class="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
        <!-- Left side - Member info -->
        <div class="flex-1 p-6 md:p-12 flex flex-col justify-center items-between">
            <div class="flex items-center justify-between">
                <h1 class="text-5xl md:text-7xl font-bold mb-12">{{ member.name }}</h1>
                <h1 class="text-5xl md:text-7xl font-bold mb-12 text-gray-800">{{ member.stageName }}</h1>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                    <h3 class="text-sm text-gray-400 mb-1">Full name</h3>
                    <p class="text-xl">{{ member.fullName }}</p>
                </div>

                <div>
                    <h3 class="text-sm text-gray-400 mb-1">Original</h3>
                    <p class="text-xl">{{ member.originalName }}</p>
                </div>

                <div>
                    <h3 class="text-sm text-gray-400 mb-1">Date of birth</h3>
                    <p class="text-xl">{{ member.birthDate }}</p>
                </div>

                <div>
                    <h3 class="text-sm text-gray-400 mb-1">Reveal date</h3>
                    <p class="text-xl">{{ member.revealDate }}</p>
                </div>

                <div>
                    <h3 class="text-sm text-gray-400 mb-1">Nationality</h3>
                    <div class="flex items-center gap-2">
                        <p class="text-xl">{{ member.nationality }}</p>
                        <span v-if="member.flag" class="text-xl">{{ member.flag }}</span>
                    </div>
                </div>

                <div>
                    <h3 class="text-sm text-gray-400 mb-1">Designated color</h3>
                    <div class="flex items-center gap-2">
                        <div class="w-4 h-4 rounded-full" :style="{ backgroundColor: member.color }"></div>
                        <p class="text-xl">{{ member.colorName }}</p>
                    </div>
                </div>

                <div>
                    <h3 class="text-sm text-gray-400 mb-1">Emoji</h3>
                    <p class="text-xl">{{ member.emoji }}</p>
                </div>
            </div>

            <div class="mt-12">
                <h3 class="text-sm text-gray-400 mb-4">Unit activity</h3>
                <div class="flex flex-wrap gap-2">
                    <button v-for="unit in commonUnits" :key="unit.name" class="unit-button"
                        :style="member.units.includes(unit) ? { backgroundColor: unit.color || '#333', color: unit.textColor || 'white' } : { backgroundColor: '#0d0d0d', color: '#1c1c1c' }">
                        {{ unit.name }}
                    </button>
                </div>
            </div>
        </div>

        <!-- Right side - Member image -->
        <div class="flex-1">
            <MemberCarousel :images="memberImages" :memberName="member.name" :catchphrase="member.catchphrase" /> 
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { NuxtImg } from '#components'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { members, commonUnits } from '~/data/members'
import type { Member } from '~/types/member'
import MemberCarousel from './MemberCarousel.vue'

const props = defineProps<{
    member: Member
}>()

const router = useRouter()

const currentIndex = members.findIndex((m) => m.id === props.member.id)
const prevMember = members[currentIndex - 1] || members[members.length - 1]
const nextMember = members[currentIndex + 1] || members[0]

const memberImages = computed(() => 
    Array.from({ length: 3 }, (_, i) => `/images/members/profile/s${props.member.number}/${i + 1}.jpeg`)
)

function navigateToPrev() {
    router.push(`/member/${prevMember.id}`)
}

function navigateToNext() {
    router.push(`/member/${nextMember.id}`)
}
</script>

<style scoped>
.unit-button {
  @apply px-4 py-2 rounded-full text-sm font-medium transition-all;
}
</style>
