<template>
    <div class="chooser-main">
      <ul>
        <li v-for="(item,index) in selections" class="chooser-item"
            @click="toggleChosenItem(index)" :class="{active: checkActive(index)}">
          {{item.edit}}
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
            let nowArrayObj = _.map(this.nowIndexes, (idx) => {
              return this.selections[idx];
            });
            this.$emit('on-change',nowArrayObj);
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
    display: inline-block;
    height: 30px;
    padding: 5px;
    margin-right: 10px;
    background: aliceblue;
    border: solid 1px gainsboro;
    border-radius: 3px;
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
