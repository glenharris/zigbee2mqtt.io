"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[8039],{62176:(e,n,l)=>{l.r(n),l.d(n,{comp:()=>m,data:()=>k});var i=l(86904);const a=(0,i.Lk)("h1",{id:"leedarson-5aa-ss-za-h0",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#leedarson-5aa-ss-za-h0"},[(0,i.Lk)("span",null,"Leedarson 5AA-SS-ZA-H0")])],-1),t=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1),c=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"5AA-SS-ZA-H0")],-1),o=(0,i.Lk)("td",null,"Vendor",-1),u=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Motion sensor")],-1),s=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"occupancy, illuminance, illuminance_lux, linkquality")],-1),d=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/5AA-SS-ZA-H0.png",alt:"Leedarson 5AA-SS-ZA-H0"})])],-1),r=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1),p=(0,i.Fv)('<ul><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>no_occupancy_since</code>: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be send after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of [object Object].</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary"><span>Occupancy (binary)</span></a></h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric"><span>Illuminance (lux) (numeric)</span></a></h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),h={},m=(0,l(22652).A)(h,[["render",function(e,n){const l=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[a,(0,i.Lk)("table",null,[t,(0,i.Lk)("tbody",null,[c,(0,i.Lk)("tr",null,[o,(0,i.Lk)("td",null,[(0,i.bF)(l,{to:"/supported-devices/#v=Leedarson"},{default:(0,i.k6)((()=>[(0,i.eW)("Leedarson")])),_:1})])]),u,s,d])]),r,(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(l,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>[(0,i.eW)("How to use device type specific configuration")])),_:1})])]),p])}]]),k=JSON.parse('{"path":"/devices/5AA-SS-ZA-H0.html","title":"Leedarson 5AA-SS-ZA-H0 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Leedarson 5AA-SS-ZA-H0 control via MQTT","description":"Integrate your Leedarson 5AA-SS-ZA-H0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-04-29T17:11:59.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Illuminance (lux) (numeric)","slug":"illuminance-lux-numeric","link":"#illuminance-lux-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1724870638000},"filePathRelative":"devices/5AA-SS-ZA-H0.md"}')}}]);