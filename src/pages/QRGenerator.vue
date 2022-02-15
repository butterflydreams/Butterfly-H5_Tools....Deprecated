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
  background-color: #ffffff;
}
</style>

<template>
  <section class="qrgenerator"></section>
</template>

<script>
export default {
  name: "QRGenerator",
  data() {
    return {};
  },
  created() {
    document.title = "QR Code Generator";
  },
  methods: {}
};
</script>
