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
    return {
      uid: 0
    };
  },
  created() {
    document.title = "LAN Drop Transfer";
    this.uid = !!this.$route.query.uid ? parseInt(this.$route.query.uid) : 0;
    console.log("your uid is: ", this.uid);
  },
  mounted() {},
  beforeUnmount() {},
  methods: {}
};
</script>
