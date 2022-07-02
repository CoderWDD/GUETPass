"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      item: []
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_Dialogue2 = common_vendor.resolveComponent("Dialogue");
  _easycom_Dialogue2();
}
const _easycom_Dialogue = () => "../../components/Dialogue/Dialogue.js";
if (!Math) {
  _easycom_Dialogue();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/Projects/MiniProject/GUETPass/pages/HomePage/HomePage.vue"]]);
wx.createPage(MiniProgramPage);
