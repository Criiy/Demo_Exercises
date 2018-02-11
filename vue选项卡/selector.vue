<template>
    <div class="wrap">
      <div @click="toggleDrop" class="selected">
        <span class="selected-item">{{selections[nowIndex].label}}</span>
        <i class="fa fa-angle-down" v-if="downArrow"></i>
        <i class="fa fa-angle-up" v-else></i>
      </div>
      <div v-if="isDrop" class="drop-item-list">
        <ul>
          <li v-for="(item,index) in selections" @click="chooseOption(index)" class="drop-item">
            {{item.label}}
          </li>
        </ul>
      </div>
    </div>
</template>

<!-------------------------------script--------------------------->

<script>
    export default {
      props:{
        selections:{
          type: Array,
          default: [{
            label: 'test',
            value: 0
          }]
        }
      },
        data() {
            return {
              isDrop: false,
              nowIndex: 0,
              downArrow: true
            }
        },
        methods: {
        toggleDrop(){
          this.isDrop = !this.isDrop;
          this.downArrow = !this.downArrow;
        },
          chooseOption(index){
            this.isDrop = false;
            this.downArrow = true;
            this.nowIndex = index;
            this.$emit('on-change',this.nowIndex);
          }
        }
    }
</script>

<!--------------------------------style--------------------------->

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
.wrap{
  margin-top: 15px;
}
  .selected{
    width: 130px;
    background: aliceblue;
    border: solid 1px gainsboro;
  }
  .selected-item{

    display: inline-block;
    width: 110px;
    height: 30px;
    text-align:  center;
    line-height: 30px;
  }
  .drop-item-list{
    width: 130px;
    background: aliceblue;
    border: solid 1px gainsboro;
    border-top: none;
  }
  .drop-item{
    cursor: pointer;
    padding: 3px;
  }
</style>
