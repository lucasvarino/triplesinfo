<template>
    <div class="flex flex-col h-full min-h-[calc(100vh-4rem)] pl-12 relative">
        <!-- Controles do carrossel posicionados acima da imagem -->
        <div class="absolute top-6 left-1/2 transform -translate-x-1/2 z-[60] flex space-x-4 items-center">
            <button @click="prevSlide"
                class="w-10 h-10 rounded-full bg-black flex items-center justify-center transition-colors border border-white"
                aria-label="Slide anterior">
                <ChevronLeft class="w-6 h-6" />
            </button>
            <p class="text-white text-sm font-bold">gallery</p>
            <button @click="nextSlide"
                class="w-10 h-10 rounded-full bg-black flex items-center justify-center transition-colors border border-white "
                aria-label="Próximo slide">
                <ChevronRight class="w-6 h-6" />
            </button>
        </div>

        <!-- Carrossel de imagens -->
        <div class="flex-1 relative overflow-hidden flex justify-center items-center h-full">
            <div class="h-[calc(100vh-16rem)] w-auto">
                <img :src="currentImage" :alt="memberName" class="h-full w-auto object-contain transition-opacity duration-500 rounded-lg" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { NuxtImg } from '#components'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

interface Props {
    images: string[],
    memberName: string,
    catchphrase?: string
}

const props = defineProps<Props>()

const currentIndex = ref(0)

// Computa a imagem atual com base no índice
const currentImage = computed(() => props.images[currentIndex.value])

// Função para ir para o slide anterior
function prevSlide() {
    currentIndex.value = currentIndex.value === 0
        ? props.images.length - 1
        : currentIndex.value - 1
}

// Função para ir para o próximo slide
function nextSlide() {
    currentIndex.value = currentIndex.value === props.images.length - 1
        ? 0
        : currentIndex.value + 1
}
</script>