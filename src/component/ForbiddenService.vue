<template>
  <div class="grid grid-cols-12 w-full">
    <div
      class="col-span-12 md:col-span-6 xl:col-span-4 md:col-start-4 xl:col-start-5 flex flex-col items-center text-center leading-relaxed"
    >
      <icon-terrorist class="h-24 fill-current" />
      <p class="my-8">{{ t("forbiddenService") }}</p>
      <strong class="glory uppercase tracking-widest text-2xl md:text-3xl">{{
        t("gloryToUkraine")
      }}</strong>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import IconTerrorist from "../icon/terrorist.svg";

const { t } = useI18n();
</script>

<style scoped>
.glory {
  background: #02A181;
  background: linear-gradient(to bottom, #02A181 0%, #02A181 50%, #ffdd00 51%, #ffdd00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
