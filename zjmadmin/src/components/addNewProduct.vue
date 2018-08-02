<template>
  <div>
    <div class="img-btn">
      <Upload multiple type="drag" name="image"
              style="width: 350px;display: inline-block;margin-right: 50px;margin-left: 50px"
              action="http://localhost/Zhongjiemen/public/api/v1/upload">
        <div style="padding: 20px 0">
          <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
          <p>上传商品头图，命名为head.jpg</p>
        </div>
      </Upload>

      <Upload multiple type="drag" name="image" style="width: 350px;display: inline-block"
              action="http://localhost/Zhongjiemen/public/api/v1/upload">
        <div style="padding: 20px 0">
          <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
          <p>上传商品详情图，details.jpg</p>
        </div>
      </Upload>

    </div>
    <div class="" style="padding: 0 40px">
      <Form :model="baseInfo" :label-width="80">
        <FormItem label="商品名称">
          <Input v-model="baseInfo.name" placeholder="商品名称" style="width: 400px"></Input>
        </FormItem>
        <FormItem label="商品价格">
          <Input v-model="baseInfo.price" placeholder="商品价格" style="width: 200px" type="number"></Input>
        </FormItem>
        <FormItem label="商品类型">
          <Select v-model="baseInfo.type" style="width: 200px">
            <Option value="1">1 推荐</Option>
            <Option value="2">2 食品</Option>
            <Option value="3">3 生活</Option>
            <Option value="4">4 酒水</Option>
            <Option value="5">5 美容</Option>
            <Option value="6">6 电子</Option>
            <Option value="7">7 创新</Option>
            <Option value="8">8 其他</Option>
          </Select>
        </FormItem>
        <FormItem label="商品权重">
          <Select v-model="baseInfo.weight" style="width: 200px">
            <Option value="1">1 一般般</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5 很牛逼</Option>
          </Select>
        </FormItem>
        <FormItem label="进度条1数目" style="margin-left: 30px">
          <Input v-model="baseInfo.rowGiven" placeholder="进度条1" style="width: 200px" type="number"></Input>
        </FormItem>
        <FormItem label="进度条2数目" style="margin-left: 30px">
          <Input v-model="baseInfo.rowBuy" placeholder="进度条2" style="width: 200px" type="number"></Input>
        </FormItem>
        <FormItem label="商品库存">
          <Input v-model="baseInfo.stock" placeholder="商品库存" style="width: 400px" type="number"></Input>
        </FormItem>

        <!--<FormItem>-->
        <!--<Button type="primary" @click="">Signin</Button>-->
        <!--</FormItem>-->
      </Form>
      <Form :model="specification" :label-width="80" style="width: 100%">
        <FormItem
          v-for="(item, index) in specification.items"
          :key="index"
          label="添加子规格"
          :prop="'items.' + index + '.value'"
          style="width: 100%"
        >

          <Upload multiple type="drag" name="image"
                  style="width: 80px;display: inline-block;vertical-align: middle;margin-right: 15px"
                  action="http://localhost/Zhongjiemen/public/api/v1/upload" class="small-up">
            <div style="padding: 20px 0">
              <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
              <p>上传规格头图，命名以s开头</p>
            </div>
          </Upload>

          <Input type="text" v-model="item.s" placeholder="具体规格" style="width: 200px"></Input>

          <Input type="text" v-model="item.p" placeholder="对应价格" style="width: 200px;margin: 0 20px"></Input>

          <Button @click="handleRemove(index)">删除此条</Button>

        </FormItem>
        <FormItem>
          <Row>
            <Col span="">
              <Button type="dashed" long @click="handleAdd" icon="md-add">增加规格</Button>
            </Col>
          </Row>
        </FormItem>
      </Form>
    </div>
    <Button type="primary" style="margin: 30px 60px;" @click="exhibit">保存，请慎重检查</Button>
  </div>
</template>

<script>
  import {_get, _post} from "../common/request";
  export default {
    name: "addNewProduct",
    methods: {
      handleAdd() {
        this.specification.items.push({
          s: '',
          p: ''
        });
      },
      handleRemove(index) {
        this.specification.items.splice(index, 1)
      },
      exhibit() {
        let sendData = this.baseInfo;
        let specifications = this.specification.items
        sendData.specification = specifications;
        for (let i = 0; i < specifications.length; i++) {
          for (let j in specifications[i]) {
            if (!specifications[i][j]) {
              this.$Message.error('每一项都需要填写');
              return;
            } else {

            }
          }
        }

        for (let i in sendData) {
          if (!sendData[i]) {
            this.$Message.error('每一项都需要填写');
            return;
          } else {

          }
        }

        _post('exhibit',sendData).then((res) => {
          this.$Message.success('提交成功');
          for (let i in this.baseInfo) {
            this.baseInfo[i] = ''
          }

          this.specification.items = [{s:'',p:''}];

        }, (rej) => {
          this.$Message.error('网络错误');
        })
      }
    },
    data() {
      return {
        baseInfo: {
          name: '',
          price: '',
          type: '',
          weight: '',
          rowGiven: '',
          rowBuy: '',
          stock: ''
        },
        specification: {
          items: [
            {
              s: '',
              p: ''
            }
          ]
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .img-btn {
    padding: 40px 40px;
  }

  .ivu-form-item {
    display: inline-block;
  }

  .headImg {
    width: 300px;
    display: inline-block;

    input {
      width: 180px;
    }
  }

  .btn1 {
    width: 180px;
    height: 40px;
  }

  .s-form {
    width: 300px;
    display: inline-block;
  }

  .small-up{
    .ivu-upload{
      div{
        padding: 0 !important;
        i{
          font-size: 30px !important;
          margin-top: 6px;
        }
        p{
          font-size: 9px;
          line-height: 13px;
          margin-bottom: 5px;
          margin-top: -4px;
        }
      }
    }
  }
</style>
