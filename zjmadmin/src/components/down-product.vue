<template>
  <div>
    <Table :columns="columns10" :data="productList"></Table>
    <Page :total="pageNum" show-elevator @on-change="pageChange" class="page-box"></Page>
  </div>
</template>

<script>
  import expandRow from './down-extend.vue';
  import {_get, _post} from "../common/request";

  export default {
    name: "down-product",
    created(){
      _get('showProduct?status=0&page=1').then((res) => {
        this.productList = res.body;
      }, (rej) => {
        this.productList = [];
      });
      _get('getProductNum?num=0').then((res) => {
        this.pageNum = (res.body) * 10;
      }, (rej) => {
        this.productList = [];
      })
    },
    methods: {
      pageChange(e) {
        this.currentPage = e;
        _get(`showProduct?status=0&page=${e}`).then((res) => {
          this.productList = res.body;
        }, (rej) => {
          this.productList = [];
        })
      },
      groundingProduct(id,index){
        let sendData = {};
        sendData.pid = id;
        _post("grounding",sendData).then((res) => {
          this.$Message.success('上架成功');
          this.productList.splice(index,1);
        }, (rej) => {
          this.productList = [];
        })
      }
    },
    data(){
      return {
        productList: [],
        pageNum: 100,
        columns10: [
          {
            type: 'expand',
            width: 50,
            render: (h, params) => {
              return h(expandRow, {
                props: {
                  row: params.row
                }
              })
            }
          },
          {
            title: '商品id',
            key: 'id',
          },
          {
            title: '商品名称',
            key: 'product',
          },
          {
            title: '规格及价格 ',
            key: 'specification',
            render: (h, params) => {
              return h('Select', {
                  props: {},
                  on: {
                    // 'on-change': (value) => {
                    //   this.data[params.index].volumeType = value;
                    // }
                  },
                },
                this.productList[params.index].specification.map(function (type) {
                  return h('Option', {
                    props: {"value": type}
                  });
                })
              );
            },
          },
          {
            title: '当前剩余库存',
            key: 'stock',
          },
          {
            title: '重新上架该商品',
            key: '',

            render: (h, params) => {
              return h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.groundingProduct(params.row.id, params.index)
                  }
                }
              }, '上架')

            }
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .page-box {
    margin-top: 40px;
  }
</style>
