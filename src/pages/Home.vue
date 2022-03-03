<style lang="less" scoped>
.home {
  overflow-x: hidden;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
  margin: auto;
  padding: 0.3rem 0 0.16rem 0;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  background-image: url("~@/assets/common/img_wallpaper.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .list-pages {
    position: relative;
    margin: 0 auto;
    width: 100%;
    .item-page {
      position: relative;
      margin: 0 auto;
      width: 100%;
      height: calc(~"100vh - 0.3rem  - 0.16rem - 1.88rem - 0.58rem");
      .list-apps {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        position: relative;
        margin: 0 auto;
        padding: 0 0.27rem;
        width: 100%;
        .item-app {
          display: block;
          position: relative;
          margin: 0;
          width: 1.74rem;
          height: 1.76rem;
          .img-icon {
            display: block;
            position: relative;
            margin: 0 auto;
            width: 1.2rem;
            height: 1.2rem;
            border-radius: 0.3rem;
          }
          .txt-name {
            overflow: hidden;
            white-space: nowrap;
            position: relative;
            margin: 0 auto;
            width: 100%;
            height: 0.5rem;
            line-height: 0.5rem;
            letter-spacing: 0;
            font-size: 0.26rem;
            font-weight: 500;
            text-align: center;
            text-overflow: ellipsis;
            color: #ffffff;
          }
        }
      }
    }
    .paginations {
      position: relative;
      margin: 0 auto;
      bottom: 0;
      left: auto;
      right: auto;
      width: fit-content;
      height: 0.58rem;
      :deep(.swiper-pagination-bullet) {
        position: relative;
        margin: 0;
        width: 0.32rem;
        height: 100%;
        background-color: transparent;
        opacity: 0.4;
        cursor: auto;
        &.swiper-pagination-bullet-active {
          opacity: 1;
          outline: none;
        }
        .pagination {
          display: inline-block;
          position: absolute;
          margin: auto;
          top: 0.08rem;
          right: 0;
          bottom: 0;
          left: 0;
          width: 0.16rem;
          height: 0.16rem;
          border-radius: 50%;
          background-color: #ffffff;
        }
      }
    }
  }
  .dock {
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    width: 7.1rem;
    height: 1.88rem;
    border-radius: 0.48rem;
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(0.22rem);
    .list-apps {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      position: relative;
      margin: 0 auto;
      width: 100%;
      height: 100%;
      .item-app {
        display: block;
        position: relative;
        margin: 0;
        width: 1.74rem;
        height: 1.2rem;
        .img-icon {
          display: block;
          position: relative;
          margin: 0 auto;
          width: 1.2rem;
          height: 1.2rem;
          border-radius: 0.3rem;
        }
      }
    }
  }
}
</style>

<template>
  <section class="home">
    <div class="swiper list-pages pswiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide item-page" v-for="(pitem, pindex) in pageList" :key="pindex">
          <div class="list-apps">
            <a class="item-app" href="javascript:;" @click="OnAppClick(aitem.route)" v-for="(aitem, aindex) in pitem.appList" :key="aindex">
              <img class="img-icon" :src="require(`@assets/apps/${aitem.icon}.png`)" />
              <div class="txt-name">{{ aitem.name }}</div>
            </a>
          </div>
        </div>
      </div>
      <div class="paginations"></div>
    </div>
    <div class="dock">
      <div class="list-apps">
        <a class="item-app" href="javascript:;" @click="OnAppClick()" v-for="index in 4" :key="index">
          <img class="img-icon" :src="require('@assets/apps/ico_system.png')" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from "swiper/swiper-bundle.esm.js";
import "swiper/swiper-bundle.css";
export default {
  name: "Home",
  data() {
    return {
      swiper: null,
      pageList: [
        {
          appList: [
            {
              name: "iOS 15",
              icon: "ico_system",
              route: "System"
            },
            {
              name: "Settings",
              icon: "ico_settings",
              route: "Settings"
            },
            {
              name: "QR Scanner",
              icon: "ico_qrscanner",
              route: "QRScanner"
            },
            {
              name: "QR Generator",
              icon: "ico_qrgenerator",
              route: "QRGenerator"
            },
            {
              name: "Test",
              icon: "ico_test",
              route: "Test"
            }
          ]
        },
        {}
      ]
    };
  },
  created() {
    document.title = "Compilation Tools";
  },
  mounted() {
    if (this.swiper == null) {
      this.$nextTick(() => {
        this.swiper = new Swiper(".pswiper", {
          pagination: {
            el: ".paginations",
            clickable: true,
            renderBullet: function () {
              //! To increase the paginations click area.
              return `<span class="dot swiper-pagination-bullet"><span class='pagination'></span></span>`;
            }
          }
        });
      });
    }
  },
  beforeUnmount() {
    if (this.swiper != null) {
      this.swiper.destroy(true, true);
      this.swiper = null;
    }
  },
  methods: {
    OnAppClick(route) {
      if (route == "Test") {
        this.$alert.present({
          title: "Tips",
          message: "This tool is not available, coming soon...",
          actions: [
            {
              name: "Cancel",
              style: "font-weight: 500; color: #ff0000",
              callback: (id) => {
                this.$alert.dismiss(id);
              }
            },
            {
              name: "OK",
              callback: (id) => {
                this.$alert.dismiss(id);
              }
            }
          ]
        });
      } else if (route == "System") {
        this.$toast.present({ message: "Hi, are you OK?", duration: 3000 });
      } else if (route == "Settings") {
        this.$alert.present({
          title: "<span style='color: #ff0000'>Error</span>",
          message: "Oops! Something is wrong...",
          actions: [
            {
              name: "OK"
            }
          ]
        });
      } else {
        this.$router.push({ name: route });
      }
    }
  }
};
</script>
