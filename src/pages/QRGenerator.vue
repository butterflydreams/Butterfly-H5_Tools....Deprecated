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
  .ui-types {
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    width: 100%;
    .list-types {
      position: relative;
      margin: 0 auto;
      width: 100%;
      background-color: #ffffff;
      .item-type {
        overflow: hidden;
        position: relative;
        margin: 0 auto;
        width: 100%;
        border-radius: 0.2rem 0.2rem 0 0;
        background-color: transparent;
        transform: scale(0.75);
        &.swiper-slide-active {
          background-color: #d6d6d6;
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
          color: #d6d6d6;
        }
        .ico-pagination {
          position: relative;
          margin: 0.12rem auto;
          width: 1rem;
          height: 0.08rem;
          border-radius: 0.2rem;
          background-color: #d6d6d6;
        }
      }
    }
  }
  .ui-inputs {
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    width: 100%;
    .list-inputs {
      position: relative;
      margin: 0 auto;
      width: 100%;
      background-color: transparent;
      .item-input {
        position: relative;
        margin: 0 auto;
        width: 100%;
        height: 4rem;
        background-color: red;
      }
    }
  }
  .ui-settings {
    position: relative;
    margin: 0 auto;
    width: 100%;
  }
  .ui-qrcode {
    position: relative;
    margin: 0 auto;
    width: 100%;
  }
}
</style>

<template>
  <section class="qrgenerator">
    <div class="ui-types">
      <div class="swiper list-types tswiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide item-type" v-for="(item, index) in typeList" :key="index">
            <div class="txt-name">{{ item.name }}</div>
            <div class="ico-pagination"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="ui-inputs">
      <div class="swiper list-inputs iswiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide item-input" v-for="(item, index) in typeList" :key="index">
            <div class="txt-name">{{ item.name }}</div>
            <div class="ico-pagination"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="ui-settings"></div>
    <div class="ui-qrcode"></div>
  </section>
</template>

<script>
import Swiper from "swiper/swiper-bundle.esm.js";
import "swiper/swiper-bundle.css";
export default {
  name: "QRGenerator",
  data() {
    return {
      typeSwiper: null,
      inputSwiper: null,
      typeList: [
        {
          name: "URL",
          tip: "http(s)://"
        },
        {
          name: "TEXT",
          tip: "some text..."
        },
        {
          name: "EMAIL",
          tip: "name@mail.com"
        },
        {
          name: "PHONE",
          tip: "+86 138xxxx..."
        },
        {
          name: "WIFI"
        },
        {
          name: "CONTACTS"
        }
      ]
    };
  },
  created() {
    document.title = "QR Code Generator";
  },
  mounted() {
    if (this.typeSwiper == null) {
      this.$nextTick(() => {
        this.typeSwiper = new Swiper(".tswiper", {
          slidesPerView: 4,
          slideToClickedSlide: true,
          centeredSlides: true,
          grabCursor: true
        });
      });
    }
    if (this.inputSwiper == null) {
      this.$nextTick(() => {
        this.inputSwiper = new Swiper(".iswiper", {
          slidesPerView: 1.5,
          slideToClickedSlide: true,
          centeredSlides: true,
          grabCursor: true
        });
      });
    }
  },
  beforeUnmount() {
    if (this.typeSwiper != null) {
      this.typeSwiper.destroy(true, true);
      this.typeSwiper = null;
    }
    if (this.inputSwiper != null) {
      this.inputSwiper.destroy(true, true);
      this.inputSwiper = null;
    }
  },
  methods: {}
};
</script>
