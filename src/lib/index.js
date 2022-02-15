import UA from "@/lib/core/ua.js";

export default {
  install: (Vue) => {
    Vue.config.globalProperties = {
      ...Vue.config.globalProperties,
      ...UA
    };
  }
};
