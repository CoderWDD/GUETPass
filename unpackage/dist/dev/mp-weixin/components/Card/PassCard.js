"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: [
    "name"
  ],
  data() {
    return {
      time: "asasdd"
    };
  },
  created() {
  },
  mounted() {
    setInterval(() => {
      this.time = common_vendor.hooks().format("HH:mm:ss:SS");
    }, 10);
  },
  methods: []
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.time),
    b: common_vendor.t($props.name)
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/Projects/MiniProject/GUETPass/components/Card/PassCard.vue"]]);
wx.createComponent(Component);
