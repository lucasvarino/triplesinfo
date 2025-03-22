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
            <div class="h-[calc(100vh-16rem)] w-auto relative">
                <div class="relative h-full w-auto">
                    <!-- Imagem atual -->
                    <img :src="currentImage" :alt="memberName" 
                        class="h-full w-auto object-contain rounded-lg"
                        :style="{
                            filter: `drop-shadow(0 0 12px ${memberColor})`
                        }" />
                    
                    <!-- Próxima imagem (para transição) -->
                    <div v-show="isTransitioning" class="absolute inset-0">
                        <img :src="nextImage" :alt="memberName"
                            class="h-full w-auto object-contain rounded-lg"
                            :style="{
                                filter: `drop-shadow(0 0 12px ${memberColor})`,
                                clipPath: clipPathValue
                            }" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

interface Props {
    images: string[],
    memberName: string,
    memberColor: string,
    catchphrase?: string
}

const props = defineProps<Props>()

const currentIndex = ref(0)
const nextIndexValue = ref(0)
const isTransitioning = ref(false)
const transitionProgress = ref(0)
const direction = ref<'next' | 'prev'>('next')

const currentImage = computed(() => props.images[currentIndex.value])
const nextImage = computed(() => props.images[nextIndexValue.value])

const clipPathValue = computed(() => {
    const progress = transitionProgress.value
    if (direction.value === 'next') {
        return `polygon(${100 - progress * 100}% ${100 - progress * 100}%, 100% 0%, 100% 100%, ${100 - progress * 100}% 100%)`
    } else {
        return `polygon(${progress * 100}% ${progress * 100}%, 0% 0%, 0% 100%, ${progress * 100}% 100%)`
    }
})

function animate(start: number, end: number, duration: number, callback: (value: number) => void, onComplete?: () => void) {
    const startTime = performance.now()
    
    function update() {
        const currentTime = performance.now()
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        const value = start + (end - start) * progress
        callback(value)
        
        if (progress < 1) {
            requestAnimationFrame(update)
        } else if (onComplete) {
            onComplete()
        }
    }
    
    requestAnimationFrame(update)
}

function handleTransition(dir: 'next' | 'prev') {
    if (isTransitioning.value) return
    
    direction.value = dir
    isTransitioning.value = true
    
    const nextIndex = dir === 'next'
        ? (currentIndex.value + 1) % props.images.length
        : (currentIndex.value - 1 + props.images.length) % props.images.length
    
    nextIndexValue.value = nextIndex
    
    animate(0, 1, 250, (value) => {
        transitionProgress.value = value
    }, () => {
        currentIndex.value = nextIndex
        isTransitioning.value = false
        transitionProgress.value = 0
    })
}

function playInitialAnimation() {
    setTimeout(() => {
        handleTransition('next')
        setTimeout(() => {
            handleTransition('prev')
        }, 1000)
    }, 1000)
}

onMounted(() => {
    playInitialAnimation()
})

function prevSlide() {
    handleTransition('prev')
}

function nextSlide() {
    handleTransition('next')
}
</script>