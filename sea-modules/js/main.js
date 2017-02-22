
define(function(require) {
	//消息
  var Spinning = require('./show');
  var data = new Spinning;
  data.show('#messagebox','#this-news');
  //console.log(111);
  //搜索
  var Spinning1 = require('./index');
  var input = new Spinning1;
  input.show2('.search-text','.search-btn','.hot-words');
  //导航效果
  var Spinning2 = require('./hoverShow');
  var navMeum = new Spinning2;
  navMeum.hoverShow('.navbox','.navpanel','.navbox a','.panel-item','.angle');
  //左边菜单
  var Spinning3 = require('./leftMeun');
  var navLeftMeum = new Spinning3;
  navLeftMeum.hoverShow2('.lesson-classfiy-nav ul li div','.lesson-list-show');
  navLeftMeum.hoverShow2('.start-list .nextmeun','.move-list');
  //右边效果
  var Spinning = require('./recommend');
  var navredMeum = new Spinning;
  navredMeum.hoverShowred('.recommend','.move-list','.recommend .start-list');
  //标签效果
  var Spinning = require('./Tab');
  var navredMeum2 = new Spinning;
  navredMeum2.tabMeunShow('.move-list ul li','.content','.recommendWiki');
  var tabMeumData = new Spinning;
  tabMeumData.tabMeunShow('.livebox ul li','.livebox-lesson','.livebox-lesson-list');
  var tabMeumHot = new Spinning;
  tabMeumHot.tabMeunShow('.hot-lesson ul li','.hottj','.lesson-list');
  //更多显示
  var Spinning = require('./moreShow');
  var moreShowa = new Spinning;
  moreShowa.moreShowAll('.lesson-list ul li','.lessonplay','.lesson-shoucang','.lesson-infor','.lesson-infor p');
  //提示效果
  var Spinning = require('./explainShow');
  var explainShowa = new Spinning;
  explainShowa.explainPrompta('#learnwaya .index-public-title .way','.zylj','.way-infor');
  var explainShowb = new Spinning;
  explainShowb.explainPrompta('#system .index-public-title .way','.zstx','.way-infor');
  var explainShowc = new Spinning;
  explainShowc.explainPrompta('#excellent .index-public-title .way','.jpxl','.way-infor');
  var explainShowd = new Spinning;
  explainShowd.explainPrompta('#wiki .index-public-title .way','.wiki','.way-infor');
  
  //幻灯片
  /*var Spinning = require('./clickSlide');
  var clickSlideList = new Spinning;
  clickSlideList.clickSlideAll('#slideall','.focuswork-wrap ul','#slideall .arrow');*/
  
  //返回顶部
  var Spinning = require('./scrollTop');
  var clickScrollTopbb = new Spinning;
  clickScrollTopbb.clickScrollTopa('#gototop .top');
});



