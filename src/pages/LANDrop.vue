<style lang="less" scoped>
.landrop {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
  margin: auto;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #cccccc;
}
</style>

<template>
  <section class="landrop"></section>
</template>

<script>
export default {
  name: "LANDrop",
  data() {
    return {};
  },
  created() {
    document.title = "LAN Drop Transfer";
  },
  mounted() {},
  beforeUnmount() {},
  methods: {}
};
</script>
