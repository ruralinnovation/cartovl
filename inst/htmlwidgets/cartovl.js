!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=5)}([function(e,t,o){"use strict";t.a=function(e,t){const o=t.longitude||"lng",r=t.latitude||"lat",a={type:"FeatureCollection",features:[]},c=Object.keys(e)[0],i=Object.keys(e).filter(e=>e!=o&&e!=r),u=e[c].length;for(let t=0;t<u;t++){let c={type:"Feature",geometry:{type:"Point",coordinates:[e[o][t],e[r][t]]},properties:n(i,e,t)};a.features.push(c)}return a};const n=function(e,t,o){const n={};return e.forEach(e=>n[e]=t[e][o]),n}},function(e,t,o){"use strict";(function(e){var n=o(2),r=o(3),a=o(4);const c=e._cartoVLWidget={},i=c.methods={};i.addLayer=a.a,i.addControl=function(e,t,o){this.addControl(new mapboxgl[e](t),o||"top-left")},i.addMapboxSource=function(e,t){let o=this;o.on("load",()=>o.addSource(t,{type:"geojson",data:e}))},i.addMapboxLayer=function(e){let t=this;t.on("load",()=>t.addLayer(e))},t.a=function(e,t,o){const n={};var a=null;return n.renderValue=function(t){console.log(t),u(),mapboxgl.accessToken=t.mapProperties.mapboxAccessToken,a=c.map=s(e.id,t.mapProperties),(c.layers=Object(r.a)(a,t.layers)).forEach(e=>e.addTo(a)),t.calls.forEach(e=>i[e.name].apply(a,e.args))},n.resize=function(e,t){},n};const u=function(){console.log("carto-vl "+carto.version),console.log("mapbox-gl "+mapboxgl.version)},s=function(e,t){return new mapboxgl.Map({container:e,style:t.style||Object(n.a)("black"),center:t.center||[0,30],zoom:t.zoom||2})}}).call(this,o(6))},function(e,t,o){"use strict";t.a=function(e){return{version:8,sources:{},layers:[{id:"background",type:"background",paint:{"background-color":e}}]}}},function(e,t,o){"use strict";var n=o(0);t.a=function(e,t){return t.map(t=>{t.props.df&&(t.data=Object(n.a)(t.data,t.props));const o=new carto.source.GeoJSON(t.data);t.vizDef=t.vizDef||[];const a=new carto.Viz(t.vizDef.join("\n")),c=new carto.Layer(t.id,o,a);if(t.props.popup){new carto.Interactivity(c).on("featureClick",t=>{const o=t.features[0];if(!o)return;const n=o.variables.popup?[o.variables.popup.value]:r(o);console.log(n);const a=t.coordinates;(new mapboxgl.Popup).setLngLat([a.lng,a.lat]).setHTML(n.join("\n")).addTo(e)})}return c})};const r=function(e){return Object.keys(e.variables).map(t=>`<h1>${t}</h1><p>${e.variables[t].value}</p>`)}},function(e,t,o){"use strict";var n=o(0);t.a=function(e,t,o,r){let a=this;r.df&&(e=Object(n.a)(e,r));const c=new carto.source.GeoJSON(e),i=new carto.Viz(t.join("\n")),u=new carto.Layer(o,c,i);if(r.popup){new carto.Interactivity(u).on("featureClick",e=>{const t=e.features[0];if(!t)return;const o=t.variables.popup?[t.variables.popup.value]:function(e){return Object.keys(e.variables).map(t=>`<h1>${t}</h1><p>${e.variables[t].value}</p>`)}(t);console.log(o);const n=e.coordinates;(new mapboxgl.Popup).setLngLat([n.lng,n.lat]).setHTML(o.join("\n")).addTo(a)})}a.on("load",()=>a.addLayer(u))}},function(e,t,o){"use strict";o.r(t);var n=o(1);HTMLWidgets.widget({name:"cartovl",type:"output",factory:n.a})},function(e,t){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"==typeof window&&(o=window)}e.exports=o}]);