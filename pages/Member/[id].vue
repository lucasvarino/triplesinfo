<template>
    <div class="h-screen bg-black text-white">
        <div class="container mx-auto">
            <MemberProfile :member="member" />

        </div>
    </div>
    <NavigationMenu :members="members" :active-member-id="memberId" />
</template>

<script setup lang="ts">
import { members } from '~/data/members';

const route = useRoute();
const memberId = route.params.id as string;

const member = computed(() => members.find((m) => m.id === memberId) || members[0]);
</script>