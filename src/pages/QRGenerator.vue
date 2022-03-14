<style lang="less" scoped>
.qrgenerator {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
  margin: auto;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #cccccc;
  .list-tabs {
    position: relative;
    margin: 0 auto;
    padding-top: 0.2rem;
    width: 100%;
    background-color: #e6e6e6;
    :deep(.swiper-slide-active .item-tab) {
      background-color: #ffffff;
      transform: scale(1);
      .txt-name {
        font-size: 0.26rem;
        color: #000000;
      }
      .ico-pagination {
        background-color: #000000;
      }
    }
    .item-tab {
      overflow: hidden;
      position: relative;
      margin: 0 auto;
      width: 100%;
      border-radius: 0.2rem 0.2rem 0 0;
      background-color: transparent;
      transform: scale(0.75);
      .txt-name {
        position: relative;
        margin: 0.24rem auto 0.12rem auto;
        width: 100%;
        line-height: 0.28rem;
        letter-spacing: 0;
        font-size: 0.22rem;
        font-weight: 600;
        text-align: center;
        color: #666666;
      }
      .ico-pagination {
        position: relative;
        margin: 0.12rem auto;
        width: 1rem;
        height: 0.08rem;
        border-radius: 0.2rem;
        background-color: #666666;
      }
    }
  }
  .list-pages {
    position: relative;
    margin: 0 auto;
    width: 100%;
    :deep(.swiper-slide-active .item-page) {
      background-color: #ffffff;
      transform: scale(1);
    }
    .item-page {
      overflow: hidden;
      position: relative;
      margin: 0 auto;
      padding: 0 0.5rem;
      width: 100%;
      background-color: #e6e6e6;
      transform: scale(0.9);
      .inputs {
        position: relative;
        margin: 0.2rem auto;
        width: 100%;
        .ui-textarea {
          position: relative;
          margin: 0 auto;
          width: 100%;
          height: 1.2rem;
          border: solid 0.01rem #666666;
          border-radius: 0;
          background-color: #e6e6e6;
          line-height: 0.4rem;
          letter-spacing: 0;
          font-size: 0.28rem;
          font-weight: 400;
          text-align: left;
          color: #000000;
          resize: vertical;
          &::-webkit-input-placeholder {
            color: #999999;
          }
        }
        .ui-input {
          display: block;
          position: relative;
          margin: 0 auto;
          width: 100%;
          height: 0.6rem;
          border: solid 0.01rem #666666;
          border-radius: 0;
          background-color: #e6e6e6;
          line-height: normal;
          letter-spacing: 0;
          font-size: 0.28rem;
          font-weight: 400;
          text-align: left;
          color: #000000;
          &::-webkit-input-placeholder {
            color: #999999;
          }
        }
      }
      .settings {
        position: relative;
        margin: 0.4rem auto;
        width: 100%;
        .setting {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          margin: 0.1rem auto;
          width: 100%;
          .label {
            flex-shrink: 0;
            position: relative;
            margin: 0 auto;
            width: 1.8rem;
            line-height: 0.32rem;
            letter-spacing: 0;
            font-size: 0.22rem;
            font-weight: 400;
            text-align: left;
            color: #000000;
          }
          .input {
            flex-grow: 1;
            display: block;
            position: relative;
            margin: 0 auto;
            width: auto;
            height: 0.4rem;
            border: solid 0.01rem #666666;
            border-radius: 0;
            background-color: #e6e6e6;
            line-height: normal;
            letter-spacing: 0;
            font-size: 0.22rem;
            font-weight: 400;
            text-align: left;
            color: #000000;
            &::-webkit-input-placeholder {
              color: #999999;
            }
          }
        }
      }
      .outputs {
        position: relative;
        margin: 0.2rem auto;
        width: 100%;
        .ico-frame {
          position: relative;
          margin: 0 auto;
          width: 100%;
          z-index: 20;
        }
        .ui-qrcode {
          position: absolute;
          margin: auto;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 10;
          .ico-qrcode {
            display: block;
            position: absolute;
            margin: auto;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 80%;
            height: 80%;
          }
        }
        .ui-null {
          position: absolute;
          margin: auto;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 10;
          .nullcode {
            position: absolute;
            margin: auto;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 75%;
            height: 75%;
          }
          .magicwand {
            position: absolute;
            margin: 0;
            bottom: 0.45rem;
            right: 0.45rem;
            width: 35%;
            height: 35%;
          }
        }
      }
      .btn-download {
        display: block;
        position: relative;
        margin: 0.4rem auto;
        width: 100%;
        height: 0.8rem;
        background-color: #cccccc;
        line-height: 0.8rem;
        letter-spacing: 0;
        font-size: 0.3rem;
        font-weight: 600;
        text-align: center;
        color: #000000;
      }
    }
  }
}
</style>

<template>
  <section class="qrgenerator">
    <div class="list-tabs">
      <swipers
        loop
        :looped-slides="Object.keys(qrcodes).length"
        slides-per-view="4"
        slide-to-clicked-slide
        centered-slides
        grab-cursor
        @swiper="OnTabsSwiper"
        @slideChange="OnTabChange"
        @touchEnd="OnTabChange"
      >
        <slide v-for="(value, key, index) in qrcodes" :key="index">
          <div class="item-tab">
            <div class="txt-name">{{ key }}</div>
            <div class="ico-pagination"></div>
          </div>
        </slide>
      </swipers>
    </div>
    <div class="list-pages">
      <swipers
        loop
        :looped-slides="Object.keys(qrcodes).length"
        slides-per-view="1.2"
        slide-to-clicked-slide
        centered-slides
        grab-cursor
        @swiper="OnPagesSwiper"
        @slideChange="OnPageChange"
        @touchEnd="OnPageChange"
      >
        <slide v-for="(value, key, index) in qrcodes" :key="index">
          <div class="item-page">
            <div class="inputs">
              <textarea class="ui-textarea" rows="3" :placeholder="value.tip" v-model="value.data" @input="OnInputsInput(value)" v-if="value.ui == 'text'"></textarea>
              <input class="ui-input" type="text" :placeholder="value.tip" v-model="value.data" @input="OnInputsInput(value)" v-else-if="value.ui == 'string'" />
              <input class="ui-input" type="text" :placeholder="value.tip" v-model="value.data" @input="OnInputsInput(value)" v-else-if="value.ui == 'number'" />
            </div>
            <div class="settings">
              <div class="setting" v-for="(svalue, skey, sindex) in value.settings" :key="sindex">
                <div class="label">{{ svalue.label }}:</div>
                <input class="input" type="text" :placeholder="svalue.tip" v-model="svalue.data" />
              </div>
            </div>
            <div class="outputs">
              <div class="ico-frame">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48">
                  <path
                    :fill="`${!!value.result ? '#d9d9d9' : '#000000'}`"
                    d="M283.8,384v-5.4a4.8,4.8,0,0,1,4.8-4.8H294a.9.9,0,0,0,0-1.8h-6a6,6,0,0,0-6,6v6A.9.9,0,0,0,283.8,384Zm46.2,0v-6a6,6,0,0,0-6-6h-6a.9.9,0,0,0,0,1.8h5.4a4.8,4.8,0,0,1,4.8,4.8V384A.9.9,0,0,0,330,384Zm0,24v6a6,6,0,0,1-6,6h-6a.9.9,0,0,1,0-1.8h5.4a4.8,4.8,0,0,0,4.8-4.8V408A.9.9,0,1,1,330,408Zm-36,12h-6a6,6,0,0,1-6-6v-6a.9.9,0,1,1,1.8,0v5.4a4.8,4.8,0,0,0,4.8,4.8H294A.9.9,0,1,1,294,420Z"
                    transform="translate(-282 -372)"
                  />
                </svg>
              </div>
              <div class="ui-qrcode" v-if="!!value.result">
                <div class="ico-qrcode" v-html="value.result"></div>
              </div>
              <div class="ui-null" v-else>
                <div class="nullcode">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 36">
                    <path fill="#d9d9d9" d="M288.17,377.93l13.58.13-.12,13.45-13.46-.12Z" transform="translate(-288.17 -377.93)" />
                    <path fill="#d9d9d9" d="M324.31,377.93q-.07,6.79-.13,13.58l-13.45-.12.12-13.46Z" transform="translate(-288.17 -377.93)" />
                    <path fill="#ffffff" d="M292.66,382.42v4.49h4.49v-4.49Z" transform="translate(-288.17 -377.93)" />
                    <path fill="#d9d9d9" d="M304,382.42h4.48l-.12,9.09-4.36-.12Z" transform="translate(-288.17 -377.93)" />
                    <path fill="#ffffff" d="M315.33,382.42v4.49h4.49v-4.49Z" transform="translate(-288.17 -377.93)" />
                    <path fill="#d9d9d9" d="M288.17,393.76h4.49v4.48h-4.49Z" transform="translate(-288.17 -377.93)" />
                    <path fill="#d9d9d9" d="M308.48,393.76v2h-2.12v7H304c0-1.5-.09-3-.13-4.49h-4.36l-.12-.37.12-4.11Z" transform="translate(-288.17 -377.93)" />
                    <path fill="#d9d9d9" d="M315.33,395.75h-4.6l.12-2,4.48.12Z" transform="translate(-288.17 -377.93)" />
                    <path fill="#d9d9d9" d="M319.82,393.76h4.49v2h-4.49Z" transform="translate(-288.17 -377.93)" />
                    <path fill="#d9d9d9" d="M288.17,414.07q.07-6.79.13-13.58l13.45.12-.12,13.46Z" transform="translate(-288.17 -377.93)" />
                    <path fill="#ffffff" d="M292.66,405.09v4.49h4.49v-4.49Z" transform="translate(-288.17 -377.93)" />
                    <path fill="#d9d9d9" d="M304,405.09h2.36v9H304Z" transform="translate(-288.17 -377.93)" />
                  </svg>
                </div>
                <div class="magicwand">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16">
                    <path
                      fill="#d9d9d9"
                      d="M321,407.65a4.59,4.59,0,0,0-3.61,3q-1,2.49-2.27.15a4.6,4.6,0,0,0-4-2.51c-1.78-.1-2.06-.81-.84-2.11a4.6,4.6,0,0,0,1.15-4.56c-.45-1.72.13-2.21,1.75-1.45a4.62,4.62,0,0,0,4.69-.31c1.5-1,2.15-.56,1.93,1.21a4.58,4.58,0,0,0,1.74,4.36C323,406.58,322.78,407.31,321,407.65Z"
                      transform="translate(-309.58 -399.36)"
                    />
                    <path
                      fill="#d9d9d9"
                      d="M323,403a1.5,1.5,0,0,0-1.27-1.08c-.64-.11-.65-.27,0-.47a1.5,1.5,0,0,0,1.08-1.27c.11-.64.27-.65.47,0a1.53,1.53,0,0,0,1.27,1.08c.64.11.65.26,0,.47a1.5,1.5,0,0,0-1.08,1.27C323.37,403.61,323.21,403.62,323,403Z"
                      transform="translate(-309.58 -399.36)"
                    />
                    <path
                      fill="#d9d9d9"
                      d="M312.85,412.86a1.11,1.11,0,0,0-1.12-.5c-.48.06-.52-.05-.13-.33a1.12,1.12,0,0,0,.51-1.12c-.06-.48.05-.52.32-.13a1.13,1.13,0,0,0,1.13.51c.48-.06.52,0,.12.32a1.13,1.13,0,0,0-.5,1.13Q313.27,413.46,312.85,412.86Z"
                      transform="translate(-309.58 -399.36)"
                    />
                    <path fill="#d9d9d9" d="M320.72,409.16l5.13,4.75a.86.86,0,0,1-.11,1.19.84.84,0,0,1-1.17.19l-5.13-4.75a1,1,0,0,1,1.28-1.38Z" transform="translate(-309.58 -399.36)" />
                  </svg>
                </div>
              </div>
            </div>
            <a class="btn-download" href="javascript:;" @click="OnDownloadClick(value)" v-if="!!value.result">Download (size:{{ value.settings.width.data }}x{{ value.settings.height.data }})</a>
          </div>
        </slide>
      </swipers>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { File } from "@lib/core/io.js";
import { EncodeHintType } from "@zxing/library";
import { BrowserQRCodeSvgWriter } from "@zxing/browser";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/less";
export default {
  name: "QRGenerator",
  data() {
    return {
      qrcodes: {
        URL: {
          ui: "text",
          tip: "http(s)://",
          data: "",
          settings: {
            width: {
              ui: "number",
              label: "Width",
              tip: "QRCode's width.",
              data: 500
            },
            height: {
              ui: "number",
              label: "Height",
              tip: "QRCode's height.",
              data: 500
            },
            margin: {
              ui: "number",
              label: "Margin",
              tip: "QRCode's margin.",
              data: 0
            },
            errorlevel: {
              ui: "number",
              label: "Error Correction",
              tip: "QRCode's error correction level.",
              data: 0
            },
            filename: {
              ui: "string",
              label: "File Name",
              tip: "The save file name.",
              data: "MyQRCode.svg"
            }
          },
          result: ""
        },
        TEXT: {
          ui: "text",
          tip: "some text...",
          data: "",
          settings: {
            width: {
              ui: "number",
              label: "Width",
              tip: "QRCode's width.",
              data: 500
            },
            height: {
              ui: "number",
              label: "Height",
              tip: "QRCode's height.",
              data: 500
            },
            margin: {
              ui: "number",
              label: "Margin",
              tip: "QRCode's margin.",
              data: 0
            },
            errorlevel: {
              ui: "number",
              label: "Error Correction",
              tip: "QRCode's error correction level.",
              data: 0
            },
            filename: {
              ui: "string",
              label: "File Name",
              tip: "The save file name.",
              data: "MyQRCode.svg"
            }
          },
          result: ""
        },
        EMAIL: {
          ui: "string",
          tip: "name@mail.com",
          data: "",
          settings: {
            width: {
              ui: "number",
              label: "Width",
              tip: "QRCode's width.",
              data: 500
            },
            height: {
              ui: "number",
              label: "Height",
              tip: "QRCode's height.",
              data: 500
            },
            margin: {
              ui: "number",
              label: "Margin",
              tip: "QRCode's margin.",
              data: 0
            },
            errorlevel: {
              ui: "number",
              label: "Error Correction",
              tip: "QRCode's error correction level.",
              data: 0
            },
            filename: {
              ui: "string",
              label: "File Name",
              tip: "The save file name.",
              data: "MyQRCode.svg"
            }
          },
          result: ""
        },
        PHONE: {
          ui: "number",
          tip: "+86-138-xxxx-xxxx...",
          data: "",
          settings: {
            width: {
              ui: "number",
              label: "Width",
              tip: "QRCode's width.",
              data: 500
            },
            height: {
              ui: "number",
              label: "Height",
              tip: "QRCode's height.",
              data: 500
            },
            margin: {
              ui: "number",
              label: "Margin",
              tip: "QRCode's margin.",
              data: 0
            },
            errorlevel: {
              ui: "number",
              label: "Error Correction",
              tip: "QRCode's error correction level.",
              data: 0
            },
            filename: {
              ui: "string",
              label: "File Name",
              tip: "The save file name.",
              data: "MyQRCode.svg"
            }
          },
          result: ""
        },
        WIFI: {},
        CONTACTS: {}
      },
      generator: null
    };
  },
  setup() {
    let uiTabsSwiper = ref(null);
    let OnTabsSwiper = (swiper) => {
      uiTabsSwiper.value = swiper;
    };
    let uiPagesSwiper = ref(null);
    let OnPagesSwiper = (swiper) => {
      uiPagesSwiper.value = swiper;
    };
    return {
      uiTabsSwiper,
      OnTabsSwiper,
      uiPagesSwiper,
      OnPagesSwiper
    };
  },
  created() {
    document.title = "QR Code Generator";
  },
  mounted() {
    if (this.generator == null) {
      this.generator = new BrowserQRCodeSvgWriter();
    }
  },
  components: {
    swipers: Swiper,
    slide: SwiperSlide
  },
  methods: {
    OnTabChange(swiper) {
      if (!!this.uiPagesSwiper) {
        this.uiPagesSwiper.slideToLoop(swiper.realIndex, 1000, false);
      }
    },
    OnPageChange(swiper) {
      if (!!this.uiTabsSwiper) {
        this.uiTabsSwiper.slideToLoop(swiper.realIndex, 1000, false);
      }
    },
    OnInputsInput(qrcode) {
      if (qrcode.ui == "number") {
        qrcode.data = qrcode.data.replace(/[^\d+-]/g, "");
      }
      if (!!qrcode.data) {
        let options = new Map();
        //* ErrorCorrectionLevel: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel.
        // options.set(EncodeHintType.ERROR_CORRECTION, qrcode.settings.errorlevel.data);
        options.set(EncodeHintType.MARGIN, qrcode.settings.margin.data);
        let data = this.generator.write(qrcode.data, qrcode.settings.width.data, qrcode.settings.height.data, options);
        data.setAttribute("width", "100%");
        data.setAttribute("height", "100%");
        qrcode.result = new XMLSerializer().serializeToString(data);
      } else {
        qrcode.result = "";
      }
    },
    OnDownloadClick(qrcode) {
      File.Save(new Blob([qrcode.result]), qrcode.settings.filename.data);
    }
  }
};
</script>
