<template>
    <header class="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <!-- Usando router-link para navegação -->
                    <nuxt-link to="/" class="flex items-center">
                        <div class="relative w-10 h-10">
                            <!-- Substituindo o componente Next.js Image pelo elemento img -->
                            <img src="/images/tripleslogo.webp" alt="TripleS Logo" width="40" height="40" />
                        </div>
                    </nuxt-link>

                    <nav class="hidden md:flex ml-10 space-x-8">
                        <nuxt-link v-for="link in links" :key="link.href" :to="link.href"
                            class="text-gray-300 hover:text-white transition-colors">
                            {{ link.label }}
                        </nuxt-link>
                    </nav>
                </div>

                <button class="md:hidden p-2 text-white" @click="isOpen = !isOpen" aria-label="Toggle menu">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-6 h-6">
                        <path v-if="isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Menu mobile -->
        <div :class="{ 'md:hidden': true, 'block': isOpen, 'hidden': !isOpen }">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
                <nuxt-link v-for="link in links" :key="link.href" :to="link.href"
                    class="block px-3 py-2 text-gray-300 hover:text-white" @click="isOpen = false">
                    {{ link.label }}
                </nuxt-link>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NuxtLink } from '#components'

const isOpen = ref(false)

const links = [
    { href: '/introduction', label: 'introduction' },
    { href: '/members', label: 'members' },
    { href: '/units', label: 'units' },
    { href: '/discography', label: 'discography' },
]
</script>