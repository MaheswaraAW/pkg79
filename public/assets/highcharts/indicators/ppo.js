!/**
 * Highstock JS v11.4.6 (2024-07-08)
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Wojciech Chmiel
 *
 * License: www.highcharts.com/license
 */function(e){"object"==typeof module&&module.exports?(e.default=e,module.exports=e):"function"==typeof define&&define.amd?define("highcharts/indicators/ppo",["highcharts","highcharts/modules/stock"],function(t){return e(t),e.Highcharts=t,e}):e("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(e){"use strict";var t=e?e._modules:{};function s(t,s,o,r){t.hasOwnProperty(s)||(t[s]=r.apply(null,o),"function"==typeof CustomEvent&&e.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:s,module:t[s]}})))}s(t,"Stock/Indicators/PPO/PPOIndicator.js",[t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"]],function(e,t){let{ema:s}=e.seriesTypes,{correctFloat:o,extend:r,merge:i,error:a}=t;class n extends s{getValues(e,t){let s,r;let i=t.periods,n=t.index,d=[],u=[],p=[];if(2!==i.length||i[1]<=i[0]){a('Error: "PPO requires two periods. Notice, first period should be lower than the second one."');return}let l=super.getValues.call(this,e,{index:n,period:i[0]}),c=super.getValues.call(this,e,{index:n,period:i[1]});if(!l||!c)return;let h=i[1]-i[0];for(r=0;r<c.yData.length;r++)s=o((l.yData[r+h]-c.yData[r])/c.yData[r]*100),d.push([c.xData[r],s]),u.push(c.xData[r]),p.push(s);return{values:d,xData:u,yData:p}}}return n.defaultOptions=i(s.defaultOptions,{params:{period:void 0,periods:[12,26]}}),r(n.prototype,{nameBase:"PPO",nameComponents:["periods"]}),e.registerSeriesType("ppo",n),n}),s(t,"masters/indicators/ppo.src.js",[t["Core/Globals.js"]],function(e){return e})});