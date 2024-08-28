"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[4296],{89744:(e,a,i)=>{i.r(a),i.d(a,{comp:()=>p,data:()=>b});var t=i(86904);const n=(0,t.Lk)("h1",{id:"tuya-lcz030",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#tuya-lcz030"},[(0,t.Lk)("span",null,"Tuya LCZ030")])],-1),l=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th"),(0,t.Lk)("th")])],-1),r=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Model"),(0,t.Lk)("td",null,"LCZ030")],-1),u=(0,t.Lk)("td",null,"Vendor",-1),o=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Description"),(0,t.Lk)("td",null,"Temperature & humidity & illuminance sensor with display")],-1),d=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Exposes"),(0,t.Lk)("td",null,"temperature, humidity, battery, illuminance, illuminance_lux, alarm_temperature_max, alarm_temperature_min, alarm_humidity_max, alarm_humidity_min, alarm_humidity, alarm_temperature, linkquality")],-1),c=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Picture"),(0,t.Lk)("td",null,[(0,t.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/LCZ030.png",alt:"Tuya LCZ030"})])],-1),m=(0,t.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="warning" tabindex="-1"><a class="header-anchor" href="#warning"><span>Warning</span></a></h3><p>For full functionality of this device you will need to pair it to a TuYa Gateway prior use.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',4),s=(0,t.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric"><span>Illuminance (lux) (numeric)</span></a></h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="alarm-temperature-max-numeric" tabindex="-1"><a class="header-anchor" href="#alarm-temperature-max-numeric"><span>Alarm temperature max (numeric)</span></a></h3><p>Alarm temperature max. Value can be found in the published state on the <code>alarm_temperature_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_temperature_max&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>80</code>. The unit of this value is <code>°C</code>.</p><h3 id="alarm-temperature-min-numeric" tabindex="-1"><a class="header-anchor" href="#alarm-temperature-min-numeric"><span>Alarm temperature min (numeric)</span></a></h3><p>Alarm temperature min. Value can be found in the published state on the <code>alarm_temperature_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_temperature_min&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>80</code>. The unit of this value is <code>°C</code>.</p><h3 id="alarm-humidity-max-numeric" tabindex="-1"><a class="header-anchor" href="#alarm-humidity-max-numeric"><span>Alarm humidity max (numeric)</span></a></h3><p>Alarm humidity max. Value can be found in the published state on the <code>alarm_humidity_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_humidity_max&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="alarm-humidity-min-numeric" tabindex="-1"><a class="header-anchor" href="#alarm-humidity-min-numeric"><span>Alarm humidity min (numeric)</span></a></h3><p>Alarm humidity min. Value can be found in the published state on the <code>alarm_humidity_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_humidity_min&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="alarm-humidity-enum" tabindex="-1"><a class="header-anchor" href="#alarm-humidity-enum"><span>Alarm humidity (enum)</span></a></h3><p>Alarm humidity status. Value can be found in the published state on the <code>alarm_humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>below_min_humdity</code>, <code>over_humidity</code>, <code>off</code>.</p><h3 id="alarm-temperature-enum" tabindex="-1"><a class="header-anchor" href="#alarm-temperature-enum"><span>Alarm temperature (enum)</span></a></h3><p>Alarm temperature status. Value can be found in the published state on the <code>alarm_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>below_min_temperature</code>, <code>over_temperature</code>, <code>off</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',26),h={},p=(0,i(22652).A)(h,[["render",function(e,a){const i=(0,t.g2)("RouteLink");return(0,t.uX)(),(0,t.CE)("div",null,[n,(0,t.Lk)("table",null,[l,(0,t.Lk)("tbody",null,[r,(0,t.Lk)("tr",null,[u,(0,t.Lk)("td",null,[(0,t.bF)(i,{to:"/supported-devices/#v=Tuya"},{default:(0,t.k6)((()=>[(0,t.eW)("Tuya")])),_:1})])]),o,d,c])]),m,(0,t.Lk)("p",null,[(0,t.Lk)("em",null,[(0,t.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,t.k6)((()=>[(0,t.eW)("How to use device type specific configuration")])),_:1})])]),s])}]]),b=JSON.parse('{"path":"/devices/LCZ030.html","title":"Tuya LCZ030 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya LCZ030 control via MQTT","description":"Integrate your Tuya LCZ030 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-01T17:18:02.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Warning","slug":"warning","link":"#warning","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Illuminance (lux) (numeric)","slug":"illuminance-lux-numeric","link":"#illuminance-lux-numeric","children":[]},{"level":3,"title":"Alarm temperature max (numeric)","slug":"alarm-temperature-max-numeric","link":"#alarm-temperature-max-numeric","children":[]},{"level":3,"title":"Alarm temperature min (numeric)","slug":"alarm-temperature-min-numeric","link":"#alarm-temperature-min-numeric","children":[]},{"level":3,"title":"Alarm humidity max (numeric)","slug":"alarm-humidity-max-numeric","link":"#alarm-humidity-max-numeric","children":[]},{"level":3,"title":"Alarm humidity min (numeric)","slug":"alarm-humidity-min-numeric","link":"#alarm-humidity-min-numeric","children":[]},{"level":3,"title":"Alarm humidity (enum)","slug":"alarm-humidity-enum","link":"#alarm-humidity-enum","children":[]},{"level":3,"title":"Alarm temperature (enum)","slug":"alarm-temperature-enum","link":"#alarm-temperature-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1724870638000},"filePathRelative":"devices/LCZ030.md"}')}}]);