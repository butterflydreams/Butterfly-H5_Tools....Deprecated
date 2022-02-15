<style lang="less" scoped>
.ui-toast {
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
  top: 34%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  width: fit-content;
  font-size: 0;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
  z-index: 9999;
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
  .txt-message {
    display: block;
    position: relative;
    margin: 0 auto;
    padding: 0.2rem;
    width: fit-content;
    max-width: 5.4rem;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 0.12rem;
    line-height: 0.34rem;
    letter-spacing: 0;
    font-size: 0.28rem;
    font-weight: 400;
    text-align: center;
    color: #ffffff;
  }
}
</style>

<template>
  <section :class="`ui-toast ${isVisible == true ? 'ani-fadein' : 'ani-fadeout'}`">
    <a class="txt-message" href="javascript:;" @click="OnMessageClick()" v-html="message"></a>
  </section>
</template>

<script>
export default {
  name: "UIToast",
  props: {
    _myself: {
      type: Object,
      default: {}
    },
    id: {
      type: Number,
      default: 0
    },
    message: {
      type: String,
      default: ""
    },
    isClickable: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 3000
    } //display time: (0)-show forever; (>0)-show time.
  },
  data() {
    return {
      isVisible: false,
      timer: null
    };
  },
  created() {},
  mounted() {
    this.isVisible = true;

    if (this.duration > 0 && this.timer == null) {
      this.timer = setTimeout(() => {
        this.isVisible = false;
        if (this.timer != null) {
          clearTimeout(this.timer);
          this.timer = null;
        }
        setTimeout(() => {
          this._myself.dismiss(this.id);
        }, 120);
      }, this.duration);
    }
  },
  beforeUnmount() {
    if (this.timer != null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  },
  methods: {
    OnMessageClick() {
      if (this.isClickable == true) {
        this.isVisible = false;
        setTimeout(() => {
          this._myself.dismiss(this.id);
        }, 120);
      }
    }
  }
};
</script>