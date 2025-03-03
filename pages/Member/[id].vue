<template>
    <div class="min-h-screen bg-black">
        teste
    </div>
    <NavigationMenu :members="members" :active-member-id="memberId" />
</template>

<script setup lang="ts">
import { members } from '~/data/members';

const route = useRoute();
const memberId = route.params.id as string;
</script>