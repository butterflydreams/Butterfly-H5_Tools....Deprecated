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
          margin: 0.2rem auto 0.4rem auto;
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
        margin: 0.6rem auto 0 auto;
        width: 92%;
        border: solid 0.01rem #666666;
        background-color: #e6e6e6;
        .oid {
          flex-grow: 1;
          position: relative;
          margin: 0 auto;
          width: auto;
          .lbl-oid {
            position: relative;
            margin: 0.1rem auto 0 0.1rem;
            width: 100%;
            line-height: 0.24rem;
            letter-spacing: 0;
            font-size: 0.18rem;
            font-weight: 400;
            text-align: left;
            color: #85c3f5;
          }
          .ipt-oid {
            display: block;
            position: relative;
            margin: 0 0.07rem 0;
            width: 100%;
            height: 0.8rem;
            border-radius: 0;
            background-color: transparent;
            line-height: normal;
            letter-spacing: 0;
            font-size: 0.24rem;
            font-weight: 400;
            text-align: center;
            color: #000000;
            &::-webkit-input-placeholder {
              color: #999999;
            }
          }
        }
        .btn-connect {
          flex-shrink: 0;
          position: relative;
          margin: 0;
          width: 0.6rem;
          height: 0.8rem;
          .icon {
            position: absolute;
            margin: auto 0;
            top: 0;
            right: auto;
            bottom: 0;
            left: 0;
            width: 0.48rem;
            height: 0.18rem;
          }
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
          <div class="oid">
            <div class="lbl-oid" v-if="!!oid">Enter other's 4 digits to connect.</div>
            <input class="ipt-oid" type="text" placeholder="Enter other's 4 digits to connect." v-model="oid" maxlength="4" ref="uiOid" @click="OnOidClick()" @input="OnOidInput()" />
          </div>
          <a class="btn-connect" href="javascript:;" @click="OnConnectClick()">
            <div class="icon">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 19">
                <path
                  fill="#1898ff"
                  d="M326.14,386.58c5.25,3.44,6.1,15-2.17,17.66-8.83.15-13.13.65-16-2.54a2,2,0,0,1,.73-2.32,2.8,2.8,0,0,1,2.67.51c1,.51,5.21.06,7.48.27,3.86.37,7.42-1.08,6.95-6.06a5,5,0,0,0-3.12-4c-2.08-.2-11-.57-11.38.07-1.38,1.43-4.38.89-3.43-1.76,1.12-2.07,4.53-2.76,8-2.86C323.07,385.2,324.86,385.83,326.14,386.58Z"
                  transform="translate(-282.14 -385.43)"
                />
                <path fill="#1898ff" d="M316.1,392.74c3.61-.07,2.93,4.5.67,4.49-7.1,0-13.46.13-20.56.13-3.35.05-3.37-4.41-.35-4.49Z" transform="translate(-282.14 -385.43)" />
                <path
                  fill="#1898ff"
                  d="M300.24,385.62c1.12,0,2.89,1.49,3.59,2.29,1.18,1.1,0,2.28-.31,2.6-1.34.93-1.95-.3-3.09-.46a45.1,45.1,0,0,0-10.08.07c-4.52.56-5.12,7.32-1.57,9.75,3.13.83,6.79.47,10.58.43a10.23,10.23,0,0,0,2.92-1c2.26-.29,2.79,2.58,1.64,3.61-2.5,1.87-3.68,1.53-7.14,1.67-9,.38-13.19-1.43-14.56-7.91-.55-3.55,1.37-11.61,11.19-11C294.39,385.74,299.08,385.61,300.24,385.62Z"
                  transform="translate(-282.14 -385.43)"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  name: "LANDrop",
  data() {
    return {
      uid: "0000",
      oid: ""
    };
  },
  setup() {
    let uiOid = ref(null);
    return {
      uiOid
    };
  },
  created() {
    document.title = "LAN Drop Transfer";
    this.uid = !!this.$route.query.uid ? (parseInt(this.$route.query.uid) >= 1000 && parseInt(this.$route.query.uid) <= 9999 ? this.$route.query.uid : "0000") : "0000";
  },
  methods: {
    OnCloseClick() {
      this.$router.go(-1);
    },
    OnOidClick() {
      this.uiOid.focus();
    },
    OnOidInput() {
      this.oid = this.oid.replace(/[^\d+-]/g, "");
      this.uiOid.style.letterSpacing = !!this.oid ? "0.1rem" : "0";
      this.uiOid.style.fontSize = !!this.oid ? "0.6rem" : "0.24rem";
      this.uiOid.style.fontWeight = !!this.oid ? "600" : "400";
    },
    OnConnectClick() {}
  }
};
</script>
