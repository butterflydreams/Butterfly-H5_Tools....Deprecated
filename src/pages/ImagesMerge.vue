<style lang="less" scoped>
.imagesmerge {
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
  <section class="imagesmerge"></section>
</template>

<script>
export default {
  name: "ImageMerge",
  data() {
    return {};
  },
  created() {
    document.title = "Images Merge";
  },
  methods: {}
};
</script>
