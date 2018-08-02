<style scoped>
  .expand-row{
    margin-bottom: 10px;
  }
</style>
<template>
  <div>
    <Row class="expand-row">
      <Col span="8">
        <span class="expand-key">商品名称: </span>
        <span class="expand-value">{{ row.product }}</span>
      </Col>
      <Col span="8">
        <span class="expand-key">总参与孵化数量: </span>
        <span class="expand-value">{{ row.totalHatch }}</span>
      </Col>
    </Row>


    <Row class="expand-row">
      <Col span="6">
        <span class="expand-key">第一进度条总数: </span>
        <span class="expand-value">{{ row.rowgiven }}</span>
      </Col>
      <Col span="6">
        <span class="expand-key">第一进度条当前购买数: </span>
        <span class="expand-value">{{ row.progress2 }}</span>
      </Col>
      <Col span="6">
        <span class="expand-key">第一进度条当前剩余数: </span>
        <span class="expand-value">{{ row.given }}</span>
      </Col>
      <Col span="6">
        <span class="expand-key">第一进度条当前孵化比例: </span>
        <span class="expand-value">{{ row.givenPercent }}%</span>
      </Col>
    </Row>


    <Row class="expand-row">
      <Col span="6">
        <span class="expand-key">第二进度条总数: </span>
        <span class="expand-value">{{ row.rowbuy }}</span>
      </Col>
      <Col span="6">
        <span class="expand-key">第二进度条当前购买数: </span>
        <span class="expand-value">{{ row.progress1 }}</span>
      </Col>
      <Col span="6">
        <span class="expand-key">第二进度条当前剩余数: </span>
        <span class="expand-value">{{ row.buy }}</span>
      </Col>
      <Col span="6">
        <span class="expand-key">第二进度条当前孵化比例: </span>
        <span class="expand-value">{{ row.buyPercent }}%</span>
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

