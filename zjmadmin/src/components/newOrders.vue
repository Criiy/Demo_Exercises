<template>
  <div>
    <Button type="warning" @click="printOrder(5)"
            style="margin: 40px 40px">打印新订单</Button>
    <Table :columns="columns10" :data="newOrderData"></Table>
    <Page :total="pageNum" show-elevator @on-change="pageChange" class="page-box"></Page>
  </div>

</template>
<script>
  import expandRow from './new-extend.vue';
  import {_get, _post} from "../common/request";
  import {baseUrl} from "../common/config";

  export default {

    components: {expandRow},
    created() {
      let newOrderUrl = `showNewOrder?page=1`;
      _get(newOrderUrl).then((res) => {
        this.newOrderData = res.body;
      }, (rej) => {
        this.newOrderData = [];
      });

      let pageType = {};
      pageType.num = 5;
      _post('getPageNum', pageType).then((res) => {
        this.pageNum = (res.body) * 10;
      }, (rej) => {
        this.newOrderData = [];
      })
    },
    methods: {
      pageChange(e) {
        let pageUrl = `showNewOrder?page=${e}`;
        _get(pageUrl).then((res) => {
          this.newOrderData = res.body;
        }, (rej) => {
          this.newOrderData = [];
        })
      },
      sendDeliveryNo(id, index) {
        let formData = {};
        formData.orderId = id;
        formData.deliveryNo = this.value2;
        formData.deliveryCompany = this.value1;
        if (!this.value1 || !this.value2) {
          this.$Message.error('请完整填写信息');
        } else {
          _post('changeOrderStatus', formData).then((res) => {
            if (res.body.success) {
              this.$Message.success('输入成功');
              this.newOrderData.splice(index, 1);
              this.value1 = '';
              this.value2 = '';
            } else {
              this.$Message.erroe('未知错误');
            }

          }, (rej) => {
            this.$Message.error('未知错误');
          })


        }

      },
      printOrder(id) {
        _get(`judegeOrder?num=${id}`).then((res) => {
          if (res.body.success == 0) {
            this.$Message.error('暂无订单');
            return;
          } else {
            window.open(`${baseUrl}excel?num=${id}`)
          }
        },(rej) => {
          this.$Message.error('网络错误');
        })
      }
    },
    data() {
      return {
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
            title: '商品名称',
            key: 'product',
            width: 200
          },
          {
            title: '规格',
            key: 'specification',
            width: 130
          },
          {
            title: '数量',
            key: 'count',
            width: 80
          },
          {
            title: '用户',
            key: 'linkman',
            width: 80
          },
          {
            title: '时间',
            key: 'create_time',
            width: 160
          },
          {
            title: '操作',
            key: 'action',
            render: (h, params) => {
              return h('div', [
                h('Input', {
                  props: {
                    placeholder: '快递公司'
                  },
                  style: {
                    marginRight: '8px',
                    width: '130px'
                  },
                  on: {
                    'on-blur': (event) => {
                      this.value1 = event.target.value;
                    }
                  }
                }),
                h('Input', {
                  props: {
                    placeholder: '快递单号'
                  },
                  style: {
                    marginRight: '20px',
                    width: '210px'
                  },
                  on: {
                    'on-blur': (event) => {
                      this.value2 = event.target.value;
                    }
                  }
                }),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.sendDeliveryNo(params.row.id, params.index)
                    }
                  }
                }, '确认发货')
              ]);
            }
          }
        ],
        newOrderData: [],
        pageNum: 100,
        value1: '',
        value2: ''
      }
    }
  }
</script>

<style scoped>
  .page-box {
    margin-top: 40px;
  }
</style>
