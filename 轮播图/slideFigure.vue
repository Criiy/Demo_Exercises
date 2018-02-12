<template>
  <div class="slide-box" @mouseover="clearSlide" @mouseout="autoSlide">
    <div class="slide-figure-box">
      <span class="my-arrow left-arrow" @click="goto(prev)">&lt;</span>
      <span class="my-arrow right-arrow" @click="goto(next)">&gt;</span>
      <a :href="slides[curIndex].href">
        <transition name="sliding">
          <img v-if="isShow" :src="slides[curIndex].src" class="slide-figure" />
        </transition>
        <transition name="sliding-old">
          <img v-if="!isShow" :src="slides[curIndex].src" class="slide-figure" />
        </transition>
      </a>

    </div>
    <div class="icon-box">
      <div>
        <span class="icon" v-for="(item,index) in slides" @click="goto(index)" :class="{on: index === curIndex}"></span>
      </div>
    </div>
  </div>

</template>

<!-------------------------------script--------------------------->

<script>
export default {
  props: {
    slides: {
      type: Array,
      default: []
    }
  },
  computed: {
    prev () {
      if (this.curIndex === 0) {
        return this.slides.length - 1;
      }
      else {
        return this.curIndex - 1;
      }
    },
    next () {
      if (this.curIndex === this.slides.length - 1) {
        return 0;
      }
      else {
        return this.curIndex + 1;
      }
    }
  },
  methods: {
    goto (index) {
      this.isShow = false;
      setTimeout(() => {
        this.isShow = true;
        this.curIndex = index;
      },20);
    },
    autoSlide(){
      this.invID = setInterval(() => {
        this.goto(this.next);
      }, 3000);
    },
    clearSlide(){
      clearInterval(this.invID);
    }
  },
  mounted() {
    this.autoSlide();
  },
  data() {
    return {
      curIndex: 0,
      isShow: true
    }
  }
}
</script>

<!--------------------------------style--------------------------->

<style scoped>
  img{
    width: 1065px;
    height: 330px;
  }
  .slide-box{
    z-index: 0;
  }
.slide-figure-box {
  margin: -70px auto 20px;
  box-shadow: 0 8px 30px black;
  position: relative;
  width: 1065px;
  height: 330px;
  overflow: hidden;
}
.slide-figure{
  width: 1065px;
 position: absolute;
}
  .my-arrow{
    z-index: 1;
    display: block;
    text-align: center;
    position: absolute;
    font-size: 30px;
    line-height: 45px;
    width: 40px;
    height: 50px;
    border-radius: 4px;
    background-color: gray;
    cursor: pointer;
  }
  .left-arrow{
    color: white;
    top: 160px;
    left: -70px;
    opacity: 0;
    transition:  .3s ease-out;
  }
  .right-arrow{
    color: white;
    top: 160px;
    right: -70px;
    opacity: 0;
    transition: .3s ease-in;
  }
  .slide-box:hover .right-arrow{
    right: 15px;
    opacity: .7;
  }
  .slide-box:hover .left-arrow{
    left: 15px;
    opacity: .7;
  }
  .icon-box{
    height: 20px;
    width: 85px;
    margin: -20px auto 10px;
    opacity: 0;
    transition: .5s;
  }
  .slide-box:hover .icon-box{
    margin: 0 auto;
    opacity: 1;
  }
  .icon{
    cursor: pointer;
    float: left;
    border: 2px solid black;
    border-radius: 50px;
    background: #333333;
    width: 15px;
    height: 15px;
    margin: 0 4px 0 2px;
    z-index: 3;
  }
  .on{
    background: white;
  }
  .sliding-enter-active{
    transition: all .5s;
  }
  .sliding-enter{
    transform: translateX(1065px);
  }
  .sliding-old-leave-active{
    transition: all .5s;
    transform: translateX(-1065px);
  }
</style>
