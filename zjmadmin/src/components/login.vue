<template>
  <div class="wrap">
    <div class="name-box">
      <span>登录账号</span>
      <Input v-model="name" type="text" placeholder="Enter your username"></Input>
    </div>

    <div class="psw-box">
      <span>登陆密码</span>
      <Input v-model="password" type="password" placeholder="Enter your password"></Input>
    </div>

    <span :class=" ifErr?'err':'hide'">账号或者密码错误</span>

    <input type="submit" @click="goLogin()" value="提交" class="submit-btn"/>


  </div>
</template>

<script>
  import {_get, _post} from "../common/request";

  export default {
    name: "login",
    data() {
      return {
        name: '',
        password: '',
        ifErr: false
      }
    },
    methods: {
      goLogin: function () {

        let loginData = {};
        loginData.name = this.name;
        loginData.password = this.password;

        _post('manageLogin', loginData).then((res) => {
          if (res.status === 200) {
            if (res.body.success) {
              console.log(res.body.success)
              this.ifErr = false;
              sessionStorage.setItem('token', res.body.data);
              this.$router.push({path: '/Main'});
            } else {
              this.ifErr = true;
            }
          }
        },(rej) => {
          this.ifErr = true;
        });

      }
    },
    mounted: function () {
      if(sessionStorage.getItem('token')){
        this.$router.push({path: '/main'});
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/global";

  .wrap {
    width: 350px;
    height: 400px;
    box-sizing: border-box;
    margin: 0 auto;
    padding-top: 100px;
    border: 1px solid $border;
    border-radius: 30px;
    margin-top: 60px;
  }

  .name-box, .psw-box {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: $title-color;
    font-size: $content-font;
    :nth-child(1) {
      margin-top: 3px;
    }
    :nth-child(2) {
      width: 150px;
      height: 22px;
      margin-left: 15px;
    }
  }

  .name-box {
    margin-bottom: 30px;
  }

  .submit-btn {
    display: block;
    width: 80px;
    height: 30px !important;
    margin: 50px auto;
  }

  .err {
    color: $zjm-color;
    font-size: 14px;
    display: block;
    margin-top: 30px;
    margin-left: 58px;
  }

  .hide {
    display: none;
  }
</style>
