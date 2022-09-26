<template>
  <div class="flex cursor-pointer" @click="SET_LABEL(null)">
    <button
        type="button"
        class="border-none bg-none uppercase text-xs px-2 py-1 text-gray-400 hover:opacity-70"
      >
       Passworth
      </button>
  </div>
</template>

<script setup>
import { useStore } from "../store";

const store = useStore();
const { SET_LABEL } = store;
</script>
