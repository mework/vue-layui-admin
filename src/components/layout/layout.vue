<template>
  <div class="layui-layout layui-layout-admin">
    <div class="layui-header">
      <div class="layui-logo">layui 后台布局</div>
      <!-- 头部区域（可配合layui已有的水平导航） -->
      <ul class="layui-nav layui-layout-left">
        <li class="layui-nav-item">
          <a href>控制台</a>
        </li>
        <li class="layui-nav-item">
          <a href>商品管理</a>
        </li>
        <li class="layui-nav-item">
          <a href>用户</a>
        </li>
        <li class="layui-nav-item">
          <a href="javascript:;">其它系统</a>
          <dl class="layui-nav-child">
            <dd>
              <a href>邮件管理</a>
            </dd>
            <dd>
              <a href>消息管理</a>
            </dd>
            <dd>
              <a href>授权管理</a>
            </dd>
          </dl>
        </li>
      </ul>
      <ul class="layui-nav layui-layout-right">
        <li class="layui-nav-item">
          <a href="javascript:;">
            <img src="http://t.cn/RCzsdCq" class="layui-nav-img" />
            贤心
          </a>
          <dl class="layui-nav-child">
            <dd>
              <a href>基本资料</a>
            </dd>
            <dd>
              <a href>安全设置</a>
            </dd>
          </dl>
        </li>
        <li class="layui-nav-item">
          <a href>退了</a>
        </li>
      </ul>
    </div>

    <div class="layui-side layui-bg-black">
      <div class="layui-side-scroll">
        <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
        <ul class="layui-nav layui-nav-tree" lay-filter="test" id="left-layui-nav">
          <li class="layui-nav-item">
            <a class href="javascript:;">所有商品</a>
            <dl class="layui-nav-child">
              <dd>
                <router-link to="/list1">列表一</router-link>
              </dd>
              <dd>
                <router-link to="/list2">列表二</router-link>
              </dd>
              <dd>
                <router-link to="/list3">列表三</router-link>
              </dd>
              <dd>
                <router-link to="/list4">列表四</router-link>
              </dd>
            </dl>
          </li>
          <li class="layui-nav-item">
            <a href="javascript:;">解决方案</a>
            <dl class="layui-nav-child">
              <dd>
                <router-link to="/list5">列表一</router-link>
              </dd>
              <dd>
                 <router-link to="/list6">列表二</router-link>
              </dd>
              <dd>
                <router-link to="/list7">列表三</router-link>
              </dd>
            </dl>
          </li>
          <li class="layui-nav-item">
            <a href>云市场</a>
          </li>
          <li class="layui-nav-item">
            <a href>发布商品</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="layui-body">
      <!-- 内容主体区域 -->
      <div style="padding: 15px;">
        <router-view></router-view>
      </div>
    </div>
    <!-- <div class="layui-footer">
      © layui.com - 底部固定区域
    </div>-->
  </div>
</template>

<script src="./layout.js"></script>

<style scoped>
.layui-body {
  bottom: 0px;
}
</style>
