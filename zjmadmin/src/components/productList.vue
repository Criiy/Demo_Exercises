<template>
  <div>
    <Table :columns="columns10" :data="productList"></Table>
    <Page :total="pageNum" show-elevator @on-change="pageChange" class="page-box"></Page>
  </div>

</template>

<script>
  import expandRow from './product-extend.vue';
  import {_get, _post} from "../common/request";

  export default {
    name: "productList",
    created() {
      _get('showProduct?status=1&page=1').then((res) => {
        this.productList = res.body;
      }, (rej) => {
        this.productList = [];
      });
      _get('getProductNum?num=1').then((res) => {
        this.pageNum = (res.body) * 10;
      }, (rej) => {
        this.productList = [];
      })
    },
    methods: {
      pageChange(e) {
        this.currentPage = e;
        _get(`showProduct?status=1&page=${e}`).then((res) => {
          this.productList = res.body;
        }, (rej) => {
          this.productList = [];
        })
      },
      changeInfo(id) {
        let sendData = {};
        sendData.pid = id;
        sendData.given = this.value2;
        sendData.buy = this.value3;
        sendData.stock = this.value1;
        if (!this.value2 && !this.value1 && !this.value3) {
          this.$Message.error('请填写至少一项信息');
        } else {
          _post('change', sendData).then((res) => {
            this.$Message.success('保存成功');
            _get(`showProduct?status=1&page=${this.currentPage}`).then((res) => {
              this.productList = res.body;
            }, (rej) => {
              this.productList = [];
            });
          }, (rej) => {
            this.$Message.error('未知错误');
          })
        }
      },
      downProduct(id,index){
        let sendData = {};
        sendData.pid = id;
        _post("down",sendData).then((res) => {
          this.$Message.success('下架成功');
          this.productList.splice(index,1);
        }, (rej) => {
          this.productList = [];
        })
      }
    },
    data() {
      return {
        productList: [],
        currentPage: 1,
        pageNum: 10,
        value1: '',
        value2: '',
        value3: '',
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
            width: 80,
          },
          {
            title: '商品名称',
            key: 'product',
            width: 200,
          },
          {
            title: '规格及价格 ',
            key: 'specification',
            width: 230,
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
            width: 80,
          },
          {
            title: '修改库存',
            key: '',
            width: 120,
            render: (h, params) => {
              return h('Input',
                {
                  props: {
                    placeholder: '库存'
                  },
                  style: {},
                  on: {
                    'on-blur': (event) => {
                      this.value1 = event.target.value;
                      console.log(this.value1)
                    }
                  }
                }
              )

            }
          },
          {
            title: '修改进度条1剩余数',
            key: '',
            width: 120,
            render: (h, params) => {
              return h('Input',
                {
                  props: {
                    placeholder: '第一进度条'
                  },
                  style: {},
                  on: {
                    'on-blur': (event) => {
                      this.value2 = event.target.value;
                    }
                  }
                }
              )

            }
          },
          {
            title: '修改进度条2剩余数',
            key: '',
            width: 120,
            render: (h, params) => {
              return h('Input',
                {
                  props: {
                    type: 'text',
                    placeholder: '第二进度条'
                  },
                  on: {
                    'on-blur': (event) => {
                      this.value3 = event.target.value;
                    }
                  }
                }
              )

            }
          },
          {
            title: '保存',
            key: '',
            width: 80,
            render: (h, params) => {
              return h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.changeInfo(params.row.id)
                  }
                }
              }, '保存')

            }
          },
          {
            title: '是否要下架',
            key: '',

            render: (h, params) => {
              return h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.downProduct(params.row.id, params.index)
                  }
                }
              }, '下架该商品')

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
