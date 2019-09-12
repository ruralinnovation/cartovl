!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){"use strict";e.a=function(t,e){const n=e.longitude||"lng",r=e.latitude||"lat",a={type:"FeatureCollection",features:[]},c=Object.keys(t)[0],i=Object.keys(t).filter(t=>t!=n&&t!=r),u=t[c].length;for(let e=0;e<u;e++){let c={type:"Feature",geometry:{type:"Point",coordinates:[t[n][e],t[r][e]]},properties:o(i,t,e)};a.features.push(c)}return a};const o=function(t,e,n){const o={};return t.forEach(t=>o[t]=e[t][n]),o}},function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"b",function(){return a}),n.d(e,"a",function(){return c});var o=n(0);function r(t,e){let n=this;e.df&&(t=Object(o.a)(t,e)),n.on("load",()=>n.addSource(e.id,{type:"geojson",data:t}))}function a(t){let e=this;e.on("load",()=>e.addLayer(t))}function c(t,e){let n=this;n.on("load",()=>{e.df?t=Object(o.a)(t,e):"string"==typeof t&&(t=n.getSource(t)._data),i(n,t,e).addTo(n)})}const i=function(t,e,n){const o=new carto.source.GeoJSON(e),r=new carto.Viz(n.vizDef.join("\n")),a=new carto.Layer(n.id,o,r);if(n.popup){new carto.Interactivity(a).on("featureClick",e=>{const n=e.features[0];if(!n)return;const o=n.variables.popup?[n.variables.popup.value]:function(t){return Object.keys(t.variables).map(e=>`<h1>${e}</h1><p>${t.variables[e].value}</p>`)}(n);console.log(o);const r=e.coordinates;(new mapboxgl.Popup).setLngLat([r.lng,r.lat]).setHTML(o.join("\n")).addTo(t)})}return a}},function(t,e,n){"use strict";(function(t){var o=n(3),r=n(4),a=n(1);const c=t._cartoVLWidget={},i=c.methods={addLayer:a.a,addMapboxSource:a.c,addMapboxLayer:a.b};i.addControl=function(t,e,n){this.addControl(new mapboxgl[t](e),n||"top-left")},e.a=function(t,e,n){const o={};var a=null;return o.renderValue=function(e){console.log(e),u(),mapboxgl.accessToken=e.mapProperties.mapboxAccessToken,a=c.map=s(t.id,e.mapProperties),(c.layers=Object(r.a)(a,e.layers)).forEach(t=>t.addTo(a)),e.calls.forEach(t=>i[t.name].apply(a,t.args))},o.resize=function(t,e){},o};const u=function(){console.log("carto-vl "+carto.version),console.log("mapbox-gl "+mapboxgl.version)},s=function(t,e){return new mapboxgl.Map({container:t,style:e.style||Object(o.a)("black"),center:e.center||[0,30],zoom:e.zoom||2})}}).call(this,n(6))},function(t,e,n){"use strict";e.a=function(t){return{version:8,sources:{},layers:[{id:"background",type:"background",paint:{"background-color":t}}]}}},function(t,e,n){"use strict";var o=n(0);e.a=function(t,e){return e.map(e=>{e.props.df&&(e.data=Object(o.a)(e.data,e.props));const n=new carto.source.GeoJSON(e.data);e.vizDef=e.vizDef||[];const a=new carto.Viz(e.vizDef.join("\n")),c=new carto.Layer(e.id,n,a);if(e.props.popup){new carto.Interactivity(c).on("featureClick",e=>{const n=e.features[0];if(!n)return;const o=n.variables.popup?[n.variables.popup.value]:r(n);console.log(o);const a=e.coordinates;(new mapboxgl.Popup).setLngLat([a.lng,a.lat]).setHTML(o.join("\n")).addTo(t)})}return c})};const r=function(t){return Object.keys(t.variables).map(e=>`<h1>${e}</h1><p>${t.variables[e].value}</p>`)}},function(t,e,n){"use strict";n.r(e);var o=n(2);HTMLWidgets.widget({name:"cartovl",type:"output",factory:o.a})},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n}]);