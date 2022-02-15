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
}
</style>

<template>
  <section class="qrscanner">
    <ui-upload tips="<span style='text-decoration: underline'>Click here</span> to decode your image QRCode" @OnCallback="OnUploadCallback" @OnClose="OnUploadClose"></ui-upload>
  </section>
</template>

<script>
const ETYPE = {
  eCameraScan: 0, //Use camera to scan: default or iOS | iPadOS >= 14.0.
  eLocalReader: 1, //Decode local image : iOS | iPadOS < 14.0 or all android.
  eServerDecode: 2 //Upload image to sever decode: old device or system, unsupport yet.
};
import UIUpload from "@ui/Upload.vue";
import { Versions } from "@lib/util/compare.js";
import { BrowserQRCodeReader } from "@zxing/browser";
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
  components: {
    "ui-upload": UIUpload
  },
  methods: {
    OnUploadCallback(_, reuslt) {
      if (!!reuslt) {
        let scanner = new BrowserQRCodeReader();
        if (!!scanner) {
          scanner
            .decodeFromImageUrl(reuslt)
            .then((data) => {
              this.$alert.present({
                title: "Success",
                message: data.text,
                actions: [
                  {
                    name: "Cancel",
                    callback: (id) => {
                      this.$alert.dismiss(id);
                    }
                  },
                  {
                    name: "To Website",
                    style: "font-weight: 500; color: #ff0000",
                    callback: (id) => {
                      this.$alert.dismiss(id);
                      window.location.href = data.text;
                    }
                  }
                ]
              });
            })
            .catch(() => {
              this.$alert.present({
                title: "<span style='color: #ff0000'>Fail</span>",
                message: "Image decode error!",
                actions: [
                  {
                    name: "OK"
                  }
                ]
              });
            });
        }
      }
    },
    OnUploadClose() {
      this.$router.go(-1);
    }
  }
};
</script>
