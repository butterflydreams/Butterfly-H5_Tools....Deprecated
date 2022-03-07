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
  .tabs {
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    width: 100%;
    .list-tabs {
      position: relative;
      margin: 0 auto;
      padding-top: 0.2rem;
      width: 100%;
      background-color: #e6e6e6;
      .item-tab {
        overflow: hidden;
        position: relative;
        margin: 0 auto;
        width: 100%;
        border-radius: 0.2rem 0.2rem 0 0;
        background-color: transparent;
        transform: scale(0.75);
        &.swiper-slide-active {
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
  }
  .pages {
    position: relative;
    margin: 0 auto;
    width: 100%;
    .list-pages {
      position: relative;
      margin: 0 auto;
      width: 100%;
      .item-page {
        overflow: hidden;
        position: relative;
        margin: 0 auto;
        padding: 0 0.5rem;
        width: 100%;
        background-color: #e6e6e6;
        transform: scale(0.9);
        &.swiper-slide-active {
          background-color: #ffffff;
          transform: scale(1);
        }
        .inputs {
          position: relative;
          margin: 0.2rem auto;
          width: 100%;
          .ui-text {
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
            font-weight: normal;
            text-align: left;
            color: #000000;
            resize: vertical;
            &::-webkit-input-placeholder {
              color: #999999;
            }
          }
          .ui-string {
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
            font-weight: normal;
            text-align: left;
            color: #000000;
            &::-webkit-input-placeholder {
              color: #999999;
            }
          }
          .ui-number {
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
            font-weight: normal;
            text-align: left;
            color: #000000;
            &::-webkit-input-placeholder {
              color: #999999;
            }
          }
        }
        .settings {
          position: relative;
          margin: 0 auto;
          width: 100%;
        }
        .outputs {
          position: relative;
          margin: 0.2rem auto;
          width: 100%;
          .qrcode {
            position: relative;
            margin: 0 auto;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>

<template>
  <section class="qrgenerator">
    <div class="tabs">
      <div class="swiper list-tabs tswiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide item-tab" v-for="(value, key, index) in typeList" :key="index">
            <div class="txt-name">{{ key }}</div>
            <div class="ico-pagination"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="pages">
      <div class="swiper list-pages pswiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide item-page" v-for="(value, key, index) in typeList" :key="index">
            <div class="inputs">
              <textarea class="ui-text" rows="3" :placeholder="value.tip" v-model="value.data" :ref="key" @click="$refs[key].focus()" v-if="value.ui == 'text'"></textarea>
              <input class="ui-string" type="text" :placeholder="value.tip" v-model="value.data" :ref="key" @click="$refs[key].focus()" v-else-if="value.ui == 'string'" />
              <input
                class="ui-number"
                type="text"
                :placeholder="value.tip"
                v-model="value.data"
                :ref="key"
                @click="$refs[key].focus()"
                @input="value.data = value.data.replace(/[^\d+-]/g, '')"
                v-else-if="value.ui == 'number'"
              />
            </div>
            <div class="settings"></div>
            <div class="outputs">
              <div class="qrcode">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48">
                  <path
                    d="M283.8,384v-5.4a4.8,4.8,0,0,1,4.8-4.8H294a.9.9,0,0,0,0-1.8h-6a6,6,0,0,0-6,6v6A.9.9,0,0,0,283.8,384Zm46.2,0v-6a6,6,0,0,0-6-6h-6a.9.9,0,0,0,0,1.8h5.4a4.8,4.8,0,0,1,4.8,4.8V384A.9.9,0,0,0,330,384Zm0,24v6a6,6,0,0,1-6,6h-6a.9.9,0,0,1,0-1.8h5.4a4.8,4.8,0,0,0,4.8-4.8V408A.9.9,0,1,1,330,408Zm-36,12h-6a6,6,0,0,1-6-6v-6a.9.9,0,1,1,1.8,0v5.4a4.8,4.8,0,0,0,4.8,4.8H294A.9.9,0,1,1,294,420Z"
                    transform="translate(-282 -372)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from "swiper/swiper-bundle.esm.js";
import "swiper/swiper-bundle.css";
export default {
  name: "QRGenerator",
  data() {
    return {
      tabSwiper: null,
      pageSwiper: null,
      typeList: {
        URL: {
          ui: "text",
          tip: "http(s)://",
          data: ""
        },
        TEXT: {
          ui: "text",
          tip: "some text...",
          data: ""
        },
        EMAIL: {
          ui: "string",
          tip: "name@mail.com",
          data: ""
        },
        PHONE: {
          ui: "number",
          tip: "+86-138-xxxx-xxxx...",
          data: ""
        },
        WIFI: {},
        CONTACTS: {}
      }
    };
  },
  created() {
    document.title = "QR Code Generator";
  },
  mounted() {
    let _this = this;
    if (this.tabSwiper == null) {
      this.$nextTick(() => {
        this.tabSwiper = new Swiper(".tswiper", {
          loop: true,
          loopedSlides: Object.keys(this.typeList).length,
          slidesPerView: 4,
          slideToClickedSlide: true,
          centeredSlides: true,
          grabCursor: true,
          on: {
            slideChange: function () {
              if (!!_this.pageSwiper) {
                _this.pageSwiper.slideToLoop(this.realIndex, 1000, false);
              }
            },
            touchEnd: function () {
              if (!!_this.pageSwiper) {
                _this.pageSwiper.slideToLoop(this.realIndex, 1000, false);
              }
            }
          }
        });
      });
    }
    if (this.pageSwiper == null) {
      this.$nextTick(() => {
        this.pageSwiper = new Swiper(".pswiper", {
          loop: true,
          loopedSlides: Object.keys(this.typeList).length,
          slidesPerView: 1.2,
          slideToClickedSlide: true,
          centeredSlides: true,
          grabCursor: true,
          on: {
            slideChange: function () {
              if (!!_this.tabSwiper) {
                _this.tabSwiper.slideToLoop(this.realIndex, 1000, false);
              }
            },
            touchEnd: function () {
              if (!!_this.tabSwiper) {
                _this.tabSwiper.slideToLoop(this.realIndex, 1000, false);
              }
            }
          }
        });
      });
    }
  },
  beforeUnmount() {
    if (this.tabSwiper != null) {
      this.tabSwiper.destroy(true, true);
      this.tabSwiper = null;
    }
    if (this.pageSwiper != null) {
      this.pageSwiper.destroy(true, true);
      this.pageSwiper = null;
    }
  },
  methods: {}
};
</script>
