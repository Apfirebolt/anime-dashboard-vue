<template>
    <div class="loader">
        <div class="loader-circle"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isLoading = ref(true);

onMounted(() => {
    // Simulating loading delay
    setTimeout(() => {
        isLoading.value = false;
    }, 2000);
});
</script>

<style scoped>
.loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.loader-circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid #901313;
    border-top-color: transparent;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
