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
  .ui-serverdecode {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    .txt-tips {
      position: absolute;
      margin: auto;
      top: 40%;
      right: 0;
      left: 0;
      transform: translateY(-50%);
      width: 100%;
      line-height: 0.8rem;
      letter-spacing: 0;
      font-size: 0.6rem;
      font-weight: 600;
      text-align: center;
      color: #000000;
    }
  }
  .ui-localreader {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    .wrapper {
      overflow: hidden;
      position: absolute;
      margin: auto;
      top: 42%;
      left: 0;
      right: 0;
      transform: translateY(-50%);
      width: 5rem;
      height: 5.4rem;
      border-radius: 0.24rem;
      background-color: #ffffff;
      .actions {
        display: flex;
        justify-content: left;
        align-items: center;
        position: relative;
        margin: 0 auto;
        padding-left: 0.14rem;
        width: 100%;
        height: 0.6rem;
        border-bottom: solid 0.02rem #d6d6d6;
        .action {
          position: relative;
          margin: 0 0.06rem;
          width: 0.26rem;
          height: 0.26rem;
          border-radius: 50%;
          background-color: #000000;
        }
      }
    }
  }
  .ui-camerascan {
  }
}
</style>

<template>
  <section class="qrscanner">
    <div class="ui-serverdecode" v-if="type == ETYPE.eServerDecode">
      <div class="txt-tips">Sorry, your device is unsupport yet.</div>
    </div>
    <div class="ui-localreader" v-else-if="type == ETYPE.eLocalReader">
      <div class="wrapper">
        <a class="actions" href="javascript:;" @click="OnCloseClick()">
          <div class="action" style="background-color: #ef1910"></div>
          <div class="action" style="background-color: #ffc54a"></div>
          <div class="action" style="background-color: #00a584"></div>
        </a>
      </div>
    </div>
    <div class="ui-camerascan" v-else></div>
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
