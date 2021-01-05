import "./app2.css";
import $ from "jquery";

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");

$tabBar.on("click", "li", (e) => {
  const $li = $(e.currentTarget);

  // 背景色切换
  $li.addClass("selected").siblings().removeClass("selected");

  // 查看排行老几
  const index = $li.index();

  // .eq 就是等于第几个的意思
  // 永远不要用 css, show, hide, 而要用 .addClass 和 .removeClass
  // 代表了样式与行为分离, 即 js 只管功能, 不管你到底长什么样子; CSS 相反
  $tabContent
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

// 默认点第一个
$tabBar.children().eq(0).trigger("click");
