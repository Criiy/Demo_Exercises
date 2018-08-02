<style scoped>
  .expand-row{
    margin-bottom: 5px;
  }
</style>
<template>
  <div>
    <Row class="expand-row">
      <Col span="8">
        <span class="expand-key">产品名称: </span>
        <span class="expand-value">{{ row.product }}</span>
      </Col>
      <Col span="8">
        <span class="expand-key">规格: </span>
        <span class="expand-value">{{ row.specification }}</span>
      </Col>
      <Col span="8">
        <span class="expand-key">数量: </span>
        <span class="expand-value">{{ row.count }}</span>
      </Col>
    </Row>


    <Row class="expand-row">
      <Col span="8">
        <span class="expand-key">用户: </span>
        <span class="expand-value">{{ row.username }}</span>
      </Col>
      <Col span="8">
        <span class="expand-key">时间: </span>
        <span class="expand-value">{{ row.create_time }}</span>
      </Col>
      <Col span="8">
        <span class="expand-key">消耗兑兑: </span>
        <span class="expand-value">{{ row.fragConsume }}</span>
      </Col>
    </Row>


    <Row class="expand-row">
      <Col span="8">
        <span class="expand-key">消耗人民币 </span>
        <span class="expand-value">{{ row.totalRMB }}</span>
      </Col>
      <Col span="8">
        <span class="expand-key">订单编号: </span>
        <span class="expand-value">{{ row.order_no }}</span>
      </Col>
      <Col span="8">
        <span class="expand-key">联系人: </span>
        <span class="expand-value">{{ row.linkman }}</span>
      </Col>
    </Row>


    <Row class="expand-row">
      <Col span="8">
        <span class="expand-key">电话: </span>
        <span class="expand-value">{{ row.phone }}</span>
      </Col>
      <Col span="8">
        <span class="expand-key">地址: </span>
        <span class="expand-value">{{ row.address }}</span>
      </Col>
      <Col span="8">
        <span class="expand-key">备注: </span>
        <span class="expand-value">{{ row.message }}</span>
      </Col>
    </Row>


    <Row class="expand-row">
      <Col span="8">
        <span class="expand-key">快递单号: </span>
        <span class="expand-value">{{ row.delivery_no }}</span>
      </Col>
    </Row>
  </div>
</template>
<script>
  export default {
    props: {
      row: Object
    }
  };
</script>

