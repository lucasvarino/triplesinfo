
<template>
    <div class="min-h-screen flex items-center">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                <nuxt-link :to="`/member/${member.id}`" v-for="member in members" :key="member.id" class="flex flex-col items-center gap-2">
                    <MemberIcon :member-id="member.number" />
                    <p>{{ member.name }}</p>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import MemberIcon from '~/components/MemberIcon.vue';
import { members } from '~/data/members';

</script>