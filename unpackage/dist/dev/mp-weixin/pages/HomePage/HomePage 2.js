"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      item: []
    };
  },
  methods: {},
  onNavigationBarButtonTap(e) {
    if (e.float == "left") {
      common_vendor.index.scanCode({
        success: function(res) {
          console.log("\u6761\u7801\u7C7B\u578B" + res.scanType);
          console.log("\u6761\u7801\u5185\u5BB9" + res.result);
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_Dialogue2 = common_vendor.resolveComponent("Dialogue");
  (_easycom_uni_icons2 + _easycom_Dialogue2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_Dialogue = () => "../../components/Dialogue/Dialogue.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_Dialogue)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "scan"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/xiaoyao/Desktop/\u5927\u4E09\u4E0A/MiniProgram/GUETPass/pages/HomePage/HomePage.vue"]]);
wx.createPage(MiniProgramPage);
