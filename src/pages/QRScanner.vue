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
  background-color: #cccccc;
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
  .ui-camerascan {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    .vdo-scanner {
      display: block;
      position: absolute;
      margin: auto;
      top: 42%;
      left: 0;
      right: 0;
      transform: translateY(-50%);
      width: 100%;
    }
  }
  .ui-localreader {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    background-color: #cccccc;
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
      .panels {
        position: relative;
        margin: 0 auto;
        width: 100%;
        .ui-uploadeds {
          position: relative;
          margin: 0 auto;
          width: 100%;
          height: 4.8rem;
          background-color: transparent;
          .uploaded {
            position: absolute;
            margin: auto;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: fit-content;
            height: fit-content;
            .marks {
              position: relative;
              margin: 0 auto;
              width: 3rem;
            }
            .txt-messages {
              overflow: hidden;
              display: -webkit-box;
              -moz-box-orient: vertical;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              word-break: break-all;
              position: relative;
              margin: 0.24rem auto;
              padding: 0 0.4rem;
              width: 100%;
              max-height: 0.64rem;
              line-height: 0.32rem;
              letter-spacing: 0;
              font-size: 0.3rem;
              font-weight: 600;
              text-align: center;
              color: #ffffff;
            }
          }
        }
        .ui-uploadings {
          position: relative;
          margin: 0.46rem auto;
          width: 3.6rem;
          .preview {
            position: relative;
            margin: 0 auto;
            width: fit-content;
            height: 3rem;
            .img-preview {
              display: block;
              position: relative;
              margin: 0 auto;
              max-width: 3rem;
              height: 3rem;
            }
            .btn-delete {
              display: block;
              position: absolute;
              margin: 0;
              padding: 0.05rem;
              top: -0.2rem;
              right: -0.3rem;
              width: 0.6rem;
              height: 0.6rem;
              border: solid 0.02rem #d6d6d6;
              border-radius: 50%;
              background-color: #ffffff;
              &:hover {
                cursor: pointer;
              }
            }
          }
          .file {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            margin: 0.2rem auto 0.1rem;
            width: 100%;
            .txt-name {
              overflow: hidden;
              white-space: nowrap;
              position: relative;
              margin: 0;
              line-height: 0.28rem;
              letter-spacing: 0;
              font-size: 0.26rem;
              font-weight: 500;
              text-align: right;
              text-overflow: ellipsis;
              color: #d6d6d6;
            }
            .txt-extension {
              position: relative;
              margin: 0;
              width: fit-content;
              line-height: 0.28rem;
              letter-spacing: 0;
              font-size: 0.26rem;
              font-weight: 500;
              text-align: left;
              text-overflow: ellipsis;
              color: #d6d6d6;
              .highlight {
                margin: 0 0.05rem;
              }
            }
          }
          .progress {
            position: relative;
            margin: 0 auto;
            width: 100%;
            height: 0.3rem;
            border-radius: 0.15rem;
            border: solid 0.02rem #f7b043;
            background-color: #ffffff;
            .pb-bar1 {
              float: right;
              position: relative;
              margin: 0;
              left: -50%;
              width: 0;
              height: 100%;
              border-radius: 0.15rem 0 0 0.15rem;
              background-color: #f7b043;
            }
            .pb-bar2 {
              float: left;
              position: relative;
              margin: 0;
              left: 50%;
              width: 0;
              height: 100%;
              border-radius: 0 0.15rem 0.15rem 0;
              background-color: #f7b043;
            }
          }
        }
        .ui-uploads {
          position: relative;
          margin: 0.5rem auto 0.65rem auto;
          width: 3.6rem;
          border: dashed 0.06rem #d6d6d6;
          border-radius: 0.24rem;
          .control {
            display: block;
            position: absolute;
            margin: auto;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 0, 0, 0.5);
            opacity: 0;
            z-index: 1;
            &:hover {
              cursor: pointer;
            }
          }
          .icon {
            position: relative;
            margin: 0 auto;
            top: 0.15rem;
            left: 0.15rem;
            width: 2.5rem;
            height: 2.5rem;
          }
          .txt-tips {
            position: relative;
            margin: 0.24rem auto;
            width: 100%;
            line-height: 0.28rem;
            letter-spacing: 0;
            font-size: 0.26rem;
            font-weight: 500;
            text-align: center;
            color: #d6d6d6;
            .highlight {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <section class="qrscanner">
    <div class="ui-serverdecode" v-if="type == ETYPE.eServerDecode">
      <div class="txt-tips">Sorry, your device is unsupport yet.</div>
    </div>
    <div class="ui-camerascan" v-else-if="type == ETYPE.eCameraScan">
      <video class="vdo-scanner" id="video"></video>
    </div>
    <div class="ui-localreader" v-else>
      <div class="wrapper">
        <a class="actions" href="javascript:;" @click="OnCloseClick()">
          <div class="action" style="background-color: #ef1910"></div>
          <div class="action" style="background-color: #ffc54a"></div>
          <div class="action" style="background-color: #00a584"></div>
        </a>
        <div class="panels">
          <div class="ui-uploadeds" :style="`background-color: ${stage == 2 ? '#0fbc00' : '#ff2028'}`" v-if="stage >= 2">
            <div class="uploaded">
              <div class="marks" :style="`left: ${stage == 2 ? '0.2rem' : '0'}`">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 170 156" v-if="stage == 2">
                  <path
                    fill="#ffffff"
                    d="M159.73,0.03c4.4-0.16,7.25,0.29,9.72,1.8c0.12,0.24,0.24,0.48,0.36,0.72c-0.12,0.84-0.24,1.68-0.36,2.52
                c-2.47,5.85-10.91,8.03-15.84,11.52c-5.64,4.68-11.28,9.36-16.92,14.04c-20.07,17.77-33.17,43.08-47.16,66.96
                c-4.06,6.92-10.57,32.5-22.32,29.52c-6.75-1.71-7.65-11.07-10.08-17.28c-4.12-10.51-12.82-35.94-23.76-38.16
                c-2.88,0.48-5.76,0.96-8.64,1.44c2.52-2.64,5.04-5.28,7.56-7.92c4.48-2.1,7.72-5.94,13.32-7.2c12.02-2.7,22.17,18.32,24.48,25.92
                c0.12-0.24,0.24-0.48,0.36-0.72c2.16-3.48,4.32-6.96,6.48-10.44c5.88-7.92,11.76-15.84,17.64-23.76
                C111.71,27.47,133.46,12.7,159.73,0.03z M108.97,25.59c-0.12,0.24-0.24,0.48-0.36,0.72c-3.48,3.24-6.96,6.48-10.44,9.72
                c-8.21-3.29-11.28-7.25-31.68-7.2c-32.02,3.44-61.66,32.06-49.32,71.64c2.38,7.64,6.35,14.46,10.8,20.16
                c25.05,32.11,74.95,22.31,91.8-9.36c5.17-8.8,8.79-25.3,5.4-38.88c-1.56-4.56-3.12-9.12-4.68-13.68c3.24-3.84,6.48-7.68,9.72-11.52
                c0.24,0.12,0.48,0.24,0.72,0.36c4.78,12.01,9.77,22.93,10.44,39.6c-3.9,50.15-51.8,82.07-98.28,62.64
                C9.53,135.76-14.71,88.4,10.33,47.55c12.92-20.34,29.49-26.46,37.08-29.88S84.98,8.74,108.97,25.59z"
                  />
                </svg>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 142 142" v-else>
                  <path
                    fill="#ffffff"
                    d="M65.6,0.2c48.05-3.71,92.9,45.96,70.2,98.64c-10.17,23.61-29.92,37.92-59.4,42.48
                C23.97,144.9-13.7,92.66,4.76,45.56c7.62-19.45,22.55-33.86,42.12-41.4C52.5,1.99,54,1.52,65.6,0.2z M68.12,14.96
                c-3.36,0.48-6.72,0.96-10.08,1.44c-7.32,1.85-14.32,5.1-19.8,9c-22.77,16.2-32.8,57.26-9.72,81.36
                c-5.18,12.98,3.77,24.15,14.4,12.24c5.53,2.75,11.42,5.43,18.36,6.84c38.98,7.92,75.22-30.98,63.36-70.2
                C117.56,32.24,98.72,14.8,68.12,14.96z M44,29.72C54.17,29.85,62.82,44.3,68.84,54.2c1.8-1.8,3.6-3.6,5.4-5.4
                c5.08-3.69,22.71-22.94,38.88-5.4c0.07,1.46,0.26,2.35-1.08,3.24c-8.52-0.03-24.12,12.32-34.56,21.96
                c5.53,10.01,10.23,15.48,18.36,26.64c2.87,3.66,9.96,9.01,9.36,11.88c-0.5,1.32-1.85,1.68-2.52,1.8c-20.82-2.83-32.09-25.9-36-29.52
                c-0.75,0.81-1.68,1.44-2.52,2.16c-3.24,3.96-6.48,7.92-9.72,11.88c-6.26,8.29-11.26,18.1-18.72,25.2c-0.84-0.12-1.68-0.24-2.52-0.36
                c-0.12-0.36-0.24-0.72-0.36-1.08c-2.35-4.7,2.23-11.74,3.96-15.12c6.44-12.59,13.76-23.62,21.24-34.92
                C51.25,57.12,39.98,42.78,34.28,41.6c-0.9-0.08-3.24,0.12-3.24,0c-0.19-0.49,0.24-1.2,0.36-1.44C35.72,36.12,38.5,32.89,44,29.72z"
                  />
                </svg>
              </div>
              <div class="txt-messages">{{ message }}</div>
            </div>
          </div>
          <div class="ui-uploadings" v-else-if="stage == 1">
            <div class="preview">
              <img class="img-preview" ref="uiPreview" />
              <a class="btn-delete" href="javascript:;" @click="OnDeleteClick()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="#ff0000"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0
            00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </a>
            </div>
            <div class="file">
              <div class="txt-name">{{ file }}</div>
              <div class="txt-extension" v-if="!!extension"><span class="highlight">|</span>{{ extension.toUpperCase() }}</div>
            </div>
            <div class="progress">
              <div class="pb-bar1" :style="`width: ${progress * 50}%`"></div>
              <div class="pb-bar2" :style="`width: ${progress * 50}%`"></div>
            </div>
          </div>
          <div class="ui-uploads" v-else>
            <input class="control" type="file" accept="image/*" @change="OnUploadClick" />
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g id="Upload_Image" data-name="Upload Image">
                  <g id="_Group_" data-name="&lt;Group&gt;">
                    <g id="_Group_2" data-name="&lt;Group&gt;">
                      <g id="_Group_3" data-name="&lt;Group&gt;">
                        <circle id="_Path_" data-name="&lt;Path&gt;" cx="18.5" cy="16.5" r="5" style="fill: none; stroke: #303c42; stroke-linecap: round; stroke-linejoin: round" />
                      </g>
                      <polyline id="_Path_2" data-name="&lt;Path&gt;" points="16.5 15.5 18.5 13.5 20.5 15.5" style="fill: none; stroke: #303c42; stroke-linecap: round; stroke-linejoin: round" />
                      <line id="_Path_3" data-name="&lt;Path&gt;" x1="18.5" y1="13.5" x2="18.5" y2="19.5" style="fill: none; stroke: #303c42; stroke-linecap: round; stroke-linejoin: round" />
                    </g>
                    <g id="_Group_4" data-name="&lt;Group&gt;">
                      <polyline id="_Path_4" data-name="&lt;Path&gt;" points="0.6 15.42 6 10.02 8.98 13" style="fill: none; stroke: #303c42; stroke-linecap: round; stroke-linejoin: round" />
                      <polyline id="_Path_5" data-name="&lt;Path&gt;" points="17.16 11.68 12.5 7.02 7.77 11.79" style="fill: none; stroke: #303c42; stroke-linecap: round; stroke-linejoin: round" />
                      <circle id="_Path_6" data-name="&lt;Path&gt;" cx="8" cy="6.02" r="1.5" style="fill: none; stroke: #303c42; stroke-linecap: round; stroke-linejoin: round" />
                      <path
                        id="_Path_7"
                        data-name="&lt;Path&gt;"
                        d="M19.5,11.6V4A1.5,1.5,0,0,0,18,2.5H2A1.5,1.5,0,0,0,.5,4V15A1.5,1.5,0,0,0,2,16.5H13.5"
                        style="fill: none; stroke: #303c42; stroke-linecap: round; stroke-linejoin: round"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div class="txt-tips"><span class="highlight">Click here</span> to decode your image QRCode</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const ETYPE = {
  eLocalReader: 0, //Decode local image : iOS | iPadOS < 14.0 or all android.
  eCameraScan: 1, //Use camera to scan: default or iOS | iPadOS >= 14.0.
  eServerDecode: 2 //Upload image to sever decode: old device or system, unsupport yet.
};
import { ref } from "vue";
import { Versions } from "@lib/util/compare.js";
import { Image } from "@lib/util/images.js";
import { File } from "@lib/core/io.js";
import { BrowserMultiFormatReader } from "@zxing/library";
import { BrowserQRCodeReader } from "@zxing/browser";
export default {
  name: "QRScanner",
  data() {
    return {
      type: ETYPE.eLocalReader,
      stage: 0, //ui stage: 0-upload; 1-uploading; 2-uploaded success; 3-uploaded fail.
      file: "",
      extension: "",
      progress: 0,
      message: "",
      scanner: null,
      result: ""
    };
  },
  setup() {
    let uiPreview = ref(null);
    return {
      uiPreview
    };
  },
  created() {
    document.title = "QR Code Scanner";
    this.type = Versions.Compare(this.iOSVersion, "14.0", ">=") == true || Versions.Compare(this.iPadOSVersion, "14.0", ">=") == true ? ETYPE.eCameraScan : ETYPE.eLocalReader;
  },
  mounted() {
    if (this.type == ETYPE.eCameraScan) {
      if (this.scanner == null) {
        this.scanner = new BrowserMultiFormatReader();
      }
      this.scanner
        .listVideoInputDevices()
        .then((devices) => {
          if (devices.length > 0) {
            this.scanner
              .decodeFromInputVideoDeviceContinuously(0, "video", (result) => {
                if (!!result && !!result.text && this.result != result.text) {
                  this.result = result.text;
                  this.$alert.present({
                    title: "Success",
                    message: this.result,
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
                          window.location.href = this.result;
                        }
                      }
                    ]
                  });
                }
              })
              .catch(() => {
                this.$alert.present({
                  title: "<span style='color: #ff0000'>Error</span>",
                  message: "Please aim camera at QRCode!",
                  actions: [{ name: "OK" }]
                });
              });
          } else {
            this.$alert.present({
              title: "<span style='color: #ff0000'>Error</span>",
              message: "No camera found!",
              actions: [
                {
                  name: "Quit",
                  callback: (id) => {
                    this.$alert.dismiss(id);
                    this.$router.go(-1);
                  }
                }
              ]
            });
          }
        })
        .catch(() => {
          this.$alert.present({
            title: "<span style='color: #ff0000'>Error</span>",
            message: "Your device is unsupport yet.",
            actions: [
              {
                name: "Quit",
                callback: (id) => {
                  this.$alert.dismiss(id);
                  this.$router.go(-1);
                }
              }
            ]
          });
        });
    }
  },
  computed: {
    ETYPE: {
      get() {
        return ETYPE;
      },
      set() {}
    }
  },
  methods: {
    OnUploadClick(event) {
      let file = event.currentTarget.files[0];
      let reader = new FileReader();
      let _this = this;
      reader.onload = function () {
        _this.file = File.Parse(file.name).name;
        _this.extension = File.Parse(file.name).ext;
        _this.stage = 1;
        _this.$nextTick(() => {
          let preview = _this.uiPreview;
          if (!!preview) {
            preview.src = reader.result;
            preview.onload = function () {
              let image = Image.Resize(preview, 200, 200, _this.extension);
              let time = Math.floor(Math.random() * (20 - 5)) + 5;
              let itimer = setInterval(() => {
                _this.progress += 0.01;
                if (_this.progress >= 1) {
                  _this.progress = 1;
                  clearInterval(itimer);
                  if (!!image) {
                    if (_this.scanner == null) {
                      _this.scanner = new BrowserQRCodeReader();
                    }
                    _this.scanner
                      .decodeFromImageUrl(image)
                      .then((result) => {
                        _this.stage = 2;
                        _this.result = result.text;
                        _this.message = _this.result;
                        let ttimer = setTimeout(() => {
                          clearInterval(ttimer);
                          window.location.href = _this.result;
                        }, 1000);
                      })
                      .catch(() => {
                        _this.stage = 3;
                        _this.message = "Image decode error!";
                      });
                  } else {
                    _this.stage = 3;
                    _this.message = "Null image!";
                  }
                }
              }, time);
            };
            preview.onerror = function () {
              _this.stage = 3;
              _this.message = "Invalid image!";
            };
          } else {
            _this.stage = 3;
            _this.message = "Image error!";
          }
        });
      };
      reader.onerror = function () {
        _this.stage = 3;
        _this.message = "File error!";
      };
      if (!!file) {
        reader.readAsDataURL(file);
      } else {
        this.stage = 3;
        this.message = "Invalid file!";
      }
    },
    OnDeleteClick() {
      this.file = "";
      this.extension = "";
      this.stage = 0;
    },
    OnCloseClick() {
      this.$router.go(-1);
    }
  }
};
</script>
