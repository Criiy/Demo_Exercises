<template>
  <div>
    <div class="btn-box">
      <Button v-for="(item,index) in buttons"
              :key="index" :type="activeButton === index ? 'primary': 'ghost'"
              @click="changeOrder(item.type,item.e,item.active)">{{item.msg}}
      </Button>
    </div>

    <div class="print-box">
      <Button type="warning" @click="printOrder(4)">打印所有订单</Button>
      <Button type="warning" @click="printOrder(1)">打印1天订单</Button>
      <Button type="warning" @click="printOrder(2)">打印7天订单</Button>
      <Button type="warning" @click="printOrder(3)">打印30天订单</Button>
    </div>

    <Table :columns="columns10" :data="historyData"></Table>

    <Page :total="pageNum" show-elevator @on-change="pageChange" class="page-box" :current="currentPage"></Page>
  </div>

</template>
<script>
  import expandRow from './history-extend.vue';
  import {_get, _post} from "../common/request";
  import {baseUrl} from "../common/config";

  export default {
    components: {expandRow},
    created() {//页面初始化，获取所有订单和页面数量
      //获取虽有订单
      let initPage = 1;
      let orderPage = `showOldOrder?page=${initPage}`;
      _get(orderPage).then((res) => {
        this.historyData = res.body;
        this.currentPage = 1;
      }, (rej) => {
        this.historyData = [];
      });

      //获取所有订单的页面数
      let pageType = {};
      pageType.num = 4;
      _post('getPageNum', pageType).then((res) => {
        this.pageNum = (res.body) * 10;
        this.currentPage = 1;
      }, (rej) => {
        this.historyData = [];
      })
    },
    methods: {
      pageChange(e) {//页面切换的函数

        if (this.isAllOrder && !this.isDaysOrder) {
          let changedPage = `showOldOrder?page=${e}`;
          _get(changedPage).then((res) => {
            this.currentPage = e;
            this.historyData = res.body;
          }, (rej) => {//请求异常则无数据
            this.historyData = [];
          });
        } else {
          let type = this.nowOrderType;
          let orderType = `screen?num=${type}&page=${e}`;
          _get(orderType).then((res) => {
            this.historyData = res.body;
            this.currentPage = e;
          }, (rej) => {
            this.historyData = [];
          });
        }


      },
      changeOrder(type, e, active) {//切换订单类型，一天，七天，30天
        this.currentPage = 1;
        this.activeButton = active;

        if (type == 4) {
          let getPageArg = `getPageNum`;
          let getPageType = {};
          getPageType.num = 4;

          _post(getPageArg, getPageType).then((res) => {
            this.currentPage = 1;
            this.pageNum = (res.body) * 10;
          }, (rej) => {
            this.historyData = [];
            this.currentPage = 1;
          });

          _get('showOldOrder?page=1').then((res) => {
            this.currentPage = 1;
            this.isAllOrder = true;
            this.isDaysOrder = false;
            this.historyData = res.body;
          }, (rej) => {
            this.historyData = [];
            this.currentPage = 1;
          });
        } else {
          let getPageArg = `getPageNum`;
          let getPageType = {};
          getPageType.num = type;

          _post(getPageArg, getPageType).then((res) => {
            this.currentPage = 1;
            this.pageNum = (res.body) * 10;
          }, (rej) => {
            this.historyData = [];
            this.currentPage = 1;
          });


          let orderType = `screen?num=${type}&page=${e}`;
          _get(orderType).then((res) => {
            this.currentPage = 1;
            this.isAllOrder = false;
            this.isDaysOrder = true;
            this.nowOrderType = type;
            this.historyData = res.body;
          }, (rej) => {
            this.historyData = [];
            this.currentPage = 1;
          });
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
            key: 'product'
          },
          {
            title: '规格',
            key: 'specification'
          },
          {
            title: '数量',
            key: 'count'
          },
          {
            title: '用户',
            key: 'linkman'
          },
          {
            title: '时间',
            key: 'create_time'
          },
        ],
        historyData: [],
        pageNum: 100,
        currentPage: 1,
        //订单有两种状态，所有订单和按天数显示的订单
        //两个状态是用于分页按钮，分的是什么订单的页码
        //默认是所有订单的状态
        isAllOrder: true,
        isDaysOrder: false,
        nowOrderType: 0,
        activeButton: 0,
        buttons: [
          {
            type: 4,
            e: 1,
            active: 0,
            msg: '所有订单(默认)'
          },
          {
            type: 1,
            e: 1,
            active: 1,
            msg: '一天订单'
          },
          {
            type: 4,
            e: 2,
            active: 2,
            msg: '七天订单'
          },
          {
            type: 4,
            e: 3,
            active: 3,
            msg: '三十天订单'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .page-box {
    margin-top: 40px;
  }

  .btn-box {
    margin: 20px 10px 18px 20px;
    button {
      margin-right: 50px;
    }
  }

  .print-box {
    margin: 20px 10px 18px 20px;
    button {
      margin-right: 50px;
    }
  }

</style>
