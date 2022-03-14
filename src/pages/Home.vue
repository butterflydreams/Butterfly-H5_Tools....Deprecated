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
          .ico-image {
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
  }
  .list-paginations {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 0.58rem;
    .item-pagination {
      position: relative;
      margin: 0;
      width: 0.32rem;
      height: 0.58rem;
      .button {
        position: relative;
        margin: 0.08rem auto 0 auto;
        width: 0.16rem;
        height: 0.16rem;
        border-radius: 50%;
        &.normal {
          background-color: rgba(255, 255, 255, 0.4);
        }
        &.active {
          background-color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
  .list-docks {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0 auto;
    width: 7.1rem;
    height: 1.88rem;
    border-radius: 0.48rem;
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(0.22rem);
    .item-dock {
      display: block;
      position: relative;
      margin: 0;
      width: 1.74rem;
      height: 1.2rem;
      .ico-app {
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
</style>

<template>
  <section class="home">
    <div class="list-pages">
      <swipers @swiper="OnSwiper" @slideChange="OnPageSlide">
        <slide v-for="(pitem, pindex) in pageList" :key="pindex">
          <div class="item-page">
            <div class="list-apps">
              <a class="item-app" href="javascript:;" @click="OnAppClick(aitem.route)" v-for="(aitem, aindex) in pitem.appList" :key="aindex">
                <img class="ico-image" :src="require(`@assets/apps/${aitem.icon}.png`)" />
                <div class="txt-name">{{ aitem.name }}</div>
              </a>
            </div>
          </div>
        </slide>
      </swipers>
    </div>
    <div class="list-paginations">
      <a class="item-pagination" href="javascript:;" @click="OnPaginationClick(index)" v-for="(item, index) in pageList" :key="index">
        <div :class="`button ${pageIndex == index ? 'active' : 'normal'}`"></div>
      </a>
    </div>
    <div class="list-docks">
      <a class="item-dock" href="javascript:;" @click="OnAppClick()" v-for="index in 4" :key="index">
        <img class="ico-app" :src="require('@assets/apps/ico_system.png')" />
      </a>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/less";
export default {
  name: "Home",
  data() {
    return {
      pageIndex: 0,
      pageList: [
        {
          appList: [
            {
              name: "iOS 15",
              icon: "ico_system",
              route: {
                name: "System"
              }
            },
            {
              name: "Settings",
              icon: "ico_settings",
              route: {
                name: "Settings"
              }
            },
            {
              name: "QR Scanner",
              icon: "ico_qrscanner",
              route: {
                name: "QRScanner"
              }
            },
            {
              name: "QR Generator",
              icon: "ico_qrgenerator",
              route: {
                name: "QRGenerator"
              }
            },
            {
              name: "LAN Drop",
              icon: "ico_landrop",
              route: {
                name: "LANDrop",
                query: {
                  uid: (function () {
                    return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
                  })()
                }
              }
            },
            {
              name: "Test",
              icon: "ico_test",
              route: {
                name: "Test"
              }
            }
          ]
        },
        {},
        {},
        {}
      ]
    };
  },
  setup() {
    let uiSwiper = ref(null);
    let OnSwiper = (swiper) => {
      uiSwiper.value = swiper;
    };
    return {
      uiSwiper,
      OnSwiper
    };
  },
  created() {
    document.title = "Compilation Tools";
  },
  components: {
    swipers: Swiper,
    slide: SwiperSlide
  },
  methods: {
    OnPageSlide(swiper) {
      this.pageIndex = swiper.realIndex;
    },
    OnAppClick(route) {
      if (route.name == "Test") {
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
      } else if (route.name == "System") {
        this.$toast.present({ message: "Hi, are you OK?", duration: 3000 });
      } else if (route.name == "Settings") {
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
        this.$router.push(route);
      }
    },
    OnPaginationClick(id) {
      this.pageIndex = id;
      this.uiSwiper.slideTo(this.pageIndex, 500, false);
    }
  }
};
</script>
