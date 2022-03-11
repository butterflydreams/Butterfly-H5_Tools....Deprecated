import UA from "@/lib/core/ua.js";

import "@/lib/dev/vconsole.js";

export default {
  install: (Vue) => {
    Vue.config.globalProperties = Object.assign(Vue.config.globalProperties, UA);
  }
};
