
<template>
    <div class="h-screen flex items-center">
        <div class="container mx-auto">
            <div class="grid grid-cols-8 gap-4">
                <div v-for="member in members" :key="member.id" class="flex flex-col items-center gap-2">
                    <MemberIcon :member-id="member.number" />
                    <p>{{ member.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import MemberIcon from '~/components/MemberIcon.vue';
import { members } from '~/data/members';

</script>