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
  .wrapper {
    overflow: hidden;
    position: absolute;
    margin: auto;
    top: 42%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    width: 5rem;
    height: 5.4rem;
    border-radius: 0.24rem;
    background-color: #ffffff;
    .actions {
      display: flex;
      justify-content: left;
      align-items: center;
      position: relative;
      margin: 0 auto;
      padding-left: 0.14rem;
      width: 100%;
      height: 0.6rem;
      border-bottom: solid 0.02rem #d6d6d6;
      .action {
        position: relative;
        margin: 0 0.06rem;
        width: 0.26rem;
        height: 0.26rem;
        border-radius: 50%;
        background-color: #000000;
      }
    }
    .panels {
      position: relative;
      margin: 0 auto;
      width: 100%;
      .mys {
        position: relative;
        margin: 0 auto;
        width: 100%;
        .label {
          position: relative;
          margin: 0.2rem auto;
          width: 100%;
          line-height: 0.32rem;
          letter-spacing: 0;
          font-size: 0.3rem;
          font-weight: 400;
          text-align: center;
          color: #000000;
        }
        .txt-uid {
          position: relative;
          margin: 0 auto;
          padding: 0.1rem;
          width: fit-content;
          background-color: #ffbdbd;
          line-height: 0.8rem;
          letter-spacing: 0;
          font-size: 0.8rem;
          font-weight: 600;
          text-align: center;
          color: #ff0000;
        }
      }
      .others {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin: 0.4rem auto;
        width: 100%;
        .ipt-uid {
          flex-grow: 1;
          display: block;
          position: relative;
          margin: 0 0.1rem 0 0.4rem;
          width: auto;
          height: 0.6rem;
          border: solid 0.01rem #666666;
          border-radius: 0;
          background-color: #e6e6e6;
          line-height: normal;
          letter-spacing: 0;
          font-size: 0.26rem;
          font-weight: 400;
          text-align: left;
          color: #000000;
          &::-webkit-input-placeholder {
            color: #999999;
          }
        }
        .btn-connect {
          flex-shrink: 0;
          position: relative;
          margin: 0 0.2rem 0 0.1rem;
          width: 0.6rem;
          height: 0.6rem;
          background-color: #cccccc;
        }
      }
    }
  }
}
</style>

<template>
  <section class="landrop">
    <div class="wrapper">
      <a class="actions" href="javascript:;" @click="OnCloseClick()">
        <div class="action" style="background-color: #ef1910"></div>
        <div class="action" style="background-color: #ffc54a"></div>
        <div class="action" style="background-color: #00a584"></div>
      </a>
      <div class="panels">
        <div class="mys">
          <div class="label">My LAN Unique ID Number</div>
          <div class="txt-uid">{{ uid }}</div>
        </div>
        <div class="others">
          <input class="ipt-uid" type="text" placeholder="Enter other's 4 digits uid" v-model="oid" ref="refOid" @click="$refs.refOid.focus()" @input="OnUIDInput()" />
          <a class="btn-connect" href="javascript:;" @click="OnConnectClick()"></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LANDrop",
  data() {
    return {
      uid: "0000",
      oid: ""
    };
  },
  created() {
    document.title = "LAN Drop Transfer";
    this.uid = !!this.$route.query.uid ? (parseInt(this.$route.query.uid) >= 1000 && parseInt(this.$route.query.uid) <= 9999 ? parseInt(this.$route.query.uid) : "0000") : "0000";
  },
  methods: {
    OnCloseClick() {
      this.$router.go(-1);
    },
    OnUIDInput() {
      console.log(this.oid);
    },
    OnConnectClick() {}
  }
};
</script>
