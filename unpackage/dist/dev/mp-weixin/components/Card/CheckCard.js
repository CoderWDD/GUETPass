"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: [
    "firstText",
    "secondText",
    "thirdText",
    "iconUrl"
  ]
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.firstText),
    b: $props.iconUrl,
    c: common_vendor.t($props.secondText),
    d: common_vendor.t($props.thirdText)
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/Projects/UniappProjects/GUETPass/components/Card/CheckCard.vue"]]);
wx.createComponent(Component);
