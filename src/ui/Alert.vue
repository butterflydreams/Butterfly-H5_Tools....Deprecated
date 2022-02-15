<style lang="less" scoped>
.ui-alert {
  @keyframes ani-fadein {
    0% {
      transform: scale(0.75);
    }
    80% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes ani-fadeout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  overflow: hidden;
  position: fixed;
  margin: auto;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 0;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
  z-index: 9998;
  .wrapper {
    overflow: hidden;
    position: absolute;
    margin: auto;
    top: 34%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    width: 5.4rem;
    height: fit-content;
    border-radius: 0.24rem;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(0.2rem);
    &.ani-fadein {
      transform: scale(0.75);
      opacity: 1;
      animation: ani-fadein 120ms linear forwards;
    }
    &.ani-fadeout {
      transform: scale(1);
      opacity: 1;
      animation: ani-fadeout 120ms linear forwards;
    }
    .data {
      position: relative;
      margin: 0 auto;
      padding: 0.3rem 0.5rem;
      width: 100%;
      .txt-title {
        position: relative;
        margin: 0 auto;
        width: 100%;
        line-height: 0.6rem;
        letter-spacing: 0;
        font-size: 0.34rem;
        font-weight: 600;
        text-align: center;
        color: #000000;
      }
      .txt-message {
        position: relative;
        margin: 0 auto;
        width: 100%;
        line-height: 0.34rem;
        letter-spacing: 0;
        font-size: 0.28rem;
        font-weight: 400;
        text-align: center;
        color: #000000;
      }
    }
    .list-actions {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin: 0 auto;
      width: 100%;
      height: 0.88rem;
      border-top: solid 0.01rem #8e8e8e;
      .btn-action {
        display: block;
        position: relative;
        margin: 0 auto;
        width: 100%;
        height: auto;
        border-right: solid 0.01rem #8e8e8e;
        line-height: 0.88rem;
        letter-spacing: 0;
        font-size: 0.34rem;
        font-weight: 400;
        text-align: center;
        color: #007aff;
        &:last-child {
          border-right: none;
        }
        &:active {
          background-color: rgba(205, 205, 205, 0.5);
          outline: none;
        }
      }
    }
  }
}
</style>

<template>
  <section class="ui-alert">
    <div :class="`wrapper ${isVisible == true ? 'ani-fadein' : 'ani-fadeout'}`">
      <div class="data">
        <div class="txt-title" v-html="title"></div>
        <div class="txt-message" v-html="message"></div>
      </div>
      <div class="list-actions">
        <a class="btn-action" :style="item.style" href="javascript:;" @click="OnActionClick(item)" v-for="(item, index) in actions" :key="index">{{ item.name }}</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "UIAlert",
  props: {
    _myself: {
      type: Object,
      default: {}
    },
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    },
    actions: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      isVisible: false
    };
  },
  created() {},
  mounted() {
    this.isVisible = true;
  },
  methods: {
    OnActionClick(action) {
      if (typeof action.callback == "function") {
        action.callback(this.id);
      } else {
        this.isVisible = false;
        setTimeout(() => {
          this._myself.dismiss(this.id);
        }, 120);
      }
    }
  }
};
</script>