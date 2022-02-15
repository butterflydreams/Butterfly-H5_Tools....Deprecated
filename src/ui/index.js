import UIToast from "@/ui/Toast.vue";
import UIAlert from "@/ui/Alert.vue";
import { createVNode, render } from "vue";

export default {
  install: (Vue) => {
    const root = document.createElement("div");
    root.setAttribute("id", "ui");
    document.body.appendChild(root);

    const toasts = {};
    Vue.config.globalProperties.$toast = {};
    Vue.config.globalProperties.$toast.present = function (args) {
      let params = {};
      if (typeof args == "object") {
        params = args;
      } else if (typeof args == "string") {
        params.message = args;
      }
      let id = Object.keys(toasts).length;
      let parent = document.createElement("div");
      parent.setAttribute("id", `ui_toast${id}`);
      root.appendChild(parent);
      let toast = createVNode(UIToast, { _myself: Vue.config.globalProperties.$toast, id, ...params });
      render(toast, parent);
      toasts[id] = parent;
    };
    Vue.config.globalProperties.$toast.dismiss = function (id) {
      let toast = toasts[id];
      if (!!toast) {
        render(null, toast);
        toast.remove();
      }
      delete toasts[id];
    };

    const alerts = {};
    Vue.config.globalProperties.$alert = {};
    Vue.config.globalProperties.$alert.present = function (args) {
      let id = Object.keys(alerts).length;
      let parent = document.createElement("div");
      parent.setAttribute("id", `ui_alert${id}`);
      root.appendChild(parent);
      let alert = createVNode(UIAlert, { _myself: Vue.config.globalProperties.$alert, id, ...args });
      render(alert, parent);
      alerts[id] = parent;
    };
    Vue.config.globalProperties.$alert.dismiss = function (id) {
      let alert = alerts[id];
      if (!!alert) {
        render(null, alert);
        alert.remove();
      }
      delete alerts[id];
    };
  }
};
