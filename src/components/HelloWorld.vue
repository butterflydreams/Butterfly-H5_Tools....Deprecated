<style lang="less" scoped>
.com-helloworld {
  overflow-x: hidden;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
  margin: auto;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  .txt-message {
    position: relative;
    margin: 0 auto;
    width: 100%;
    line-height: 0.28rem;
    letter-spacing: 0;
    font-size: 0.22rem;
    font-weight: 600;
    text-align: center;
    color: #666666;
  }
}
</style>

<template>
  <div class="com-helloworld">
    <div class="txt-message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "COMHelloWorld",
  props: {
    message: {
      type: String,
      default: ""
    }
  }
};
</script>
