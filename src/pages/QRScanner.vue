<style lang="less" scoped>
.qrscanner {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
  margin: auto;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  .pnl-serverdecode {
  }
  .pnl-localreader {
  }
  .pnl-camerascan {
  }
}
</style>

<template>
  <section class="qrscanner">
    <div class="pnl-serverdecode" v-if="type == ETYPE.eServerDecode"></div>
    <div class="pnl-localreader" v-else-if="type == ETYPE.eLocalReader"></div>
    <div class="pnl-camerascan" v-else></div>
  </section>
</template>

<script>
const ETYPE = {
  eCameraScan: 0, //Use camera to scan: default or iOS | iPadOS >= 14.0.
  eLocalReader: 1, //Decode local image : iOS | iPadOS < 14.0 or all android.
  eServerDecode: 2 //Upload image to sever decode: old device or system, unsupport yet.
};
import { Versions } from "@lib/util/compare.js";
export default {
  name: "QRScanner",
  data() {
    return {
      type: ETYPE.eCameraScan
    };
  },
  created() {
    document.title = "QR Code Scanner";
    this.type = Versions.Compare(this.iOSVersion, "14.0", ">=") == true || Versions.Compare(this.iPadOSVersion, "14.0", ">=") == true ? ETYPE.eCameraScan : ETYPE.eLocalReader;
  },
  computed: {
    ETYPE: {
      get() {
        return ETYPE;
      },
      set() {}
    }
  },
  methods: {}
};
</script>
