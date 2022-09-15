"use strict";
var common_vendor = require("../../common/vendor.js");
const PassCard = () => "../../components/Card/PassCard.js";
const CheckCar = () => "../../components/Card/CheckCard.js";
const AntiScamCard = () => "../../components/Card/AntiScamCard.js";
const AgreeCard = () => "../../components/Card/AgreeCard.js";
const BottomCard = () => "../../components/Card/BottomCard.js";
const _sfc_main = {
  data() {
    return {
      name: "\u5F6D\u4E8E\u664F"
    };
  },
  methods: {},
  components: {
    PassCard,
    CheckCar,
    AntiScamCard,
    AgreeCard,
    BottomCard
  },
  onLoad(option) {
    let ori = option.name.substring(0, option.name.length - 1);
    this.name = option.name.replace(ori, "*".repeat(option.name.length - 1));
  }
};
if (!Array) {
  const _component_PassCard = common_vendor.resolveComponent("PassCard");
  const _component_AntiScamCard = common_vendor.resolveComponent("AntiScamCard");
  const _component_AgreeCard = common_vendor.resolveComponent("AgreeCard");
  const _component_BottomCard = common_vendor.resolveComponent("BottomCard");
  (_component_PassCard + _component_AntiScamCard + _component_AgreeCard + _component_BottomCard)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: $data.name
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/xiaoyao/Desktop/\u5927\u4E09\u4E0A/MiniProgram/GUETPass/pages/HuaJiangPage/HuaJiangPage.vue"]]);
wx.createPage(MiniProgramPage);
