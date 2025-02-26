import { notify } from "@kyvg/vue3-notification";
import { ref } from "vue";
import i18n from "../i18n";
import { useStore } from "../store";
import pinia from "../createPinia";

const store = useStore(pinia);
const { CREATE_RECORD } = store;

export const useNewPasswordCreation = () => {
  const newPasswordShown = ref(false);

  const create = record => {
    CREATE_RECORD(record);
    newPasswordShown.value = false;
    notify({ type: "success", text: i18n.global.t("added") });
  };

  return { newPasswordShown, create };
};
