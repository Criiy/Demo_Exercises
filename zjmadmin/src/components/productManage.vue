<template>
  <div class="layout">
    <Layout>
      <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="" theme="dark" width="auto" :class="menuitemClasses" @on-select="routeTo">
          <MenuItem name="productList">
            <Icon type="folder"></Icon>
            <span>商品列表</span>
          </MenuItem>
          <MenuItem name="addNewProduct">
            <Icon type="ios-cart-outline"></Icon>
            <span>新增商品</span>
          </MenuItem>
          <MenuItem name="down-product">
            <Icon type="ios-cart-outline"></Icon>
            <span>已下架</span>
          </MenuItem>
        </Menu>
        <div slot="trigger"></div>
      </Sider>
      <Layout>
        <Header class="layout-header-bar">
          <div class="layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb-item style="color: #2d8cf0;">货品管理</Breadcrumb-item>
              <Breadcrumb-item>{{this.$route.name.replace('/','')}}</Breadcrumb-item>
            </Breadcrumb>
          </div>
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '220px'}">
          <transition mode="out-in" name="fade">
            <router-view></router-view>
          </transition>
        </Content>
      </Layout>


    </Layout>
  </div>
</template>

<script>
  export default {
    name: "productManage",
    data() {
      return {
        isCollapsed: false
      };
    },
    computed: {
      menuitemClasses: function () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    methods: {
      routeTo(e) {
        // console.log(e);
        this.$router.push(e);
      }
    }
  }
</script>

<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0px;
    transition: width .2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>
