(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ae39e78"],{"48bb":function(t,e,o){"use strict";var n=o("9cbb"),a=o.n(n);a.a},"9cbb":function(t,e,o){},ee90:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.showBackTop?o("div",{staticClass:"backTop",style:{right:t.right+"px",bottom:t.bottom+"px"}},[o("i",{staticClass:"iconfont icon-xsaaa",style:{fontSize:t.fontSize+"px"},on:{click:t.backTop}})]):t._e()},a=[],r={name:"BackTop",props:{right:{type:Number,default:50},bottom:{type:Number,default:50},fontSize:{type:Number,default:18}},data:function(){return{targetDom:null,showBackTop:!1,scrollY:0}},mounted:function(){window.addEventListener("scroll",this.handleScroll,!0)},methods:{handleScroll:function(t){this.scrollY=t.target.scrollTop,this.showBackTop=t.target.scrollTop>100,this.targetDom=t},backTop:function(){var t=this,e=requestAnimationFrame(function o(){var n=t.targetDom.target.scrollTop;if(n>0){var a=n+(0-n)/6;t.targetDom.target.scrollTop=a,e=requestAnimationFrame(o)}else cancelAnimationFrame(e)})}},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},c=r,i=(o("48bb"),o("2877")),l=Object(i["a"])(c,n,a,!1,null,"0541054e",null);e["default"]=l.exports}}]);