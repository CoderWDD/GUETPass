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
    let ori = option.substring(0, option.length - 1);
    this.name = option.replace(ori, "*".repeat(option.length - 1));
  }
};
if (!Array) {
  const _component_PassCard = common_vendor.resolveComponent("PassCard");
  const _component_CheckCar = common_vendor.resolveComponent("CheckCar");
  const _component_AntiScamCard = common_vendor.resolveComponent("AntiScamCard");
  const _component_AgreeCard = common_vendor.resolveComponent("AgreeCard");
  const _component_BottomCard = common_vendor.resolveComponent("BottomCard");
  (_component_PassCard + _component_CheckCar + _component_AntiScamCard + _component_AgreeCard + _component_BottomCard)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: $data.name
    }),
    b: common_vendor.p({
      firstText: "\u6838\u9178\u68C0\u6D4B >",
      secondText: "\u8FD148\u5C0F\u65F6\u65E0\u6838\u9178\u8BB0\u5F55",
      thirdText: "\u8FD14\u5929\u672A\u68C0\u6D4B",
      iconUrl: "/static/test-tube.png"
    }),
    c: common_vendor.p({
      firstText: "\u884C\u7A0B\u8BB0\u5F55 >",
      secondText: "\u672A\u6838\u9A8C\u884C\u7A0B\u5361",
      thirdText: "\u8FD14\u5929\u672A\u6838\u9A8C",
      iconUrl: "/static/location-history.png"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/Projects/UniappProjects/GUETPass/pages/HuaJiangPage/HuaJiangPage.vue"]]);
wx.createPage(MiniProgramPage);
