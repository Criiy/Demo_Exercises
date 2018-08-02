<template>
  <div>
    <div class="nav-box">
      <header>
        <router-link v-for="(item,index) in buttons" :key="index" :class="index === nowActiveBtn? 'active': ''"
                     tag="Button" :to="item.path"  @click.native="toggleBtn(index)">{{item.msg}}
        </router-link>
      </header>
    </div>

    <div>
      <transition mode="out-in" name="fade">
        <router-view></router-view>
      </transition>
    </div>

  </div>
</template>

<script>

  export default {
    name: "Main",
    data() {
      return {
        buttons: [
          {
            path: '/main/orderManage',
            msg: '订单管理'
          },
          {
            path: '/main/productManage',
            msg: '货品管理'
          }
        ],
        nowActiveBtn: 3
      }
    },
    methods: {
      toggleBtn(index) {
        this.nowActiveBtn = index;
      }
    }
  }
</script>

<style scoped lang="scss">
  .nav-box {
    width: 290px;
    height: 80px;
    margin: 40px auto 10px auto;
    button {
      width: 120px;
      height: 60px;
      font-size: 15px;
    }
    button:nth-of-type(1) {
      margin-right: 20px;
    }
    button:nth-of-type(2) {
      margin-left: 20px;
    }
  }

  .active {
    color: #fff !important;
    background-color: #2d8cf0 !important;
    border-color: #2d8cf0 !important;
  }

</style>
