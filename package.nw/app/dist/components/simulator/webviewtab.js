"use strict";function init(){var e=require("../../lib/react.js"),r=require("../../cssStr/cssStr.js"),t=(require("../../weapp/utils/projectManager.js"),require("../../stores/webviewStores.js"),require("../../stores/windowStores.js"),require("../../config/config.js"),require("../../stores/projectStores.js"),require("../../weapp/utils/tools.js")),a=require("../../config/weappConfig.js"),o=(a.default_backgroundColor,a.default_tabBarBorderBlackColor),s=a.default_tabBarBorderWhiteColor,i=(require("url"),e.createClass({displayName:"Tab",getInitialState:function(){var e=t.getBaseURL(this.props.project);return{href:e}},clickTab:function(e){if(this.props.webviewReady){var r=e.currentTarget,t=r.dataset,a=t.index,o=this.props.tabBar,s=o.list||[],i=this.props._openNewWindowWebview,l=""+s[a].pagePath;i({url:l})}},render:function(){var t=this,a=this.props,i=a.tabBar,l=a.tabPageIndex,c=i.position||"bottom",n=i.list||[],b={};b.backgroundColor=i.backgroundColor,b.borderColor="white"===i.borderStyle?s:o,b.color=i.color;var p=n.map(function(a,o){var s=o===l&&i.selectedColor?{color:i.selectedColor}:{color:i.color},n=o===l?a.selectedIconPath:a.iconPath,b=n?{}:r.displayNone;return n=n?""+t.state.href+n+"?r="+Math.random():"",e.createElement("a",{className:"tabbar-item "+(o===l?"tabbar-item-selected":""),href:"javascript:;","data-index":o,onClick:t.clickTab,key:o},"bottom"===c?e.createElement("img",{className:"tabbar-icon",style:b,src:n}):null,e.createElement("p",{className:"tabbar-label",style:s},a.text,"top"===c?e.createElement("i",{className:"tabbar-label-indicator"}):""))}),u="tabbar tabbar-"+c;return e.createElement("div",{className:u,style:b},p)}}));_exports=i}var _exports;init(),module.exports=_exports;