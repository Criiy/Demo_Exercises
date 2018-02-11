<template>
    <div class="chooser-main clearfix">
      <ul>
        <li v-for="(item,index) in selections" class="chooser-item"
            @click="toggleChosenItem(index)" :class="{active: checkActive(index)}">
          {{item.label}}
        </li>
      </ul>
    </div>
</template>

<!-------------------------------script--------------------------->

<script>
  import _ from 'lodash';
    export default {
      props: {
        selections:{
          type: Array,
          default: [{
            label: 'test',
            value: 0
          }]
        }
      },
        component: {},
        data() {
            return {
              nowIndexes: [0]
            }
        },
        methods: {
          toggleChosenItem(index){
            if(this.nowIndexes.indexOf(index) === -1){
              this.nowIndexes.push(index);
            } else {
              this.nowIndexes = _.remove(this.nowIndexes, (idx) => {return idx !== index})
            }
            this.$emit('on-change',this.nowIndexes);
          },
          checkActive(index){
            return this.nowIndexes.indexOf(index) !== -1;
          }
        }
    }
</script>

<!--------------------------------style--------------------------->

<style scoped>
  .chooser-item{
    float: left;
    height: 30px;
    padding: 5px;
    margin: 0 5px;
    background: aliceblue;
    border: solid 1px gainsboro;
    border-radius: 4px;
    line-height: 17px;
    cursor: pointer;
  }
  .chooser-item:hover{
    background: #01a992;
    border: solid 1px #01a992;
    color: white;
  }
  .active{
    background: #01a992;
    border: solid 1px #01a992;
    color: white;
  }
</style>
