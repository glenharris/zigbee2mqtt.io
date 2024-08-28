"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[9566],{28243:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>q,data:()=>f});var n=o(86904);const a=(0,n.Lk)("h1",{id:"hive-slr1",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#hive-slr1"},[(0,n.Lk)("span",null,"Hive SLR1")])],-1),s=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1),i=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"SLR1")],-1),l=(0,n.Lk)("td",null,"Vendor",-1),r=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Heating thermostat")],-1),d=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"climate (occupied_heating_setpoint, local_temperature, system_mode, running_state), temperature_setpoint_hold, temperature_setpoint_hold_duration, linkquality")],-1),c=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SLR1.png",alt:"Hive SLR1"})])],-1),p=(0,n.Lk)("h2",{id:"notes",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#notes"},[(0,n.Lk)("span",null,"Notes")])],-1),u=(0,n.Lk)("h3",{id:"pairing",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#pairing"},[(0,n.Lk)("span",null,"Pairing")])],-1),h=(0,n.Lk)("p",null,"To pair the thermostat with Zigbee2MQTT, follow these steps:",-1),m=(0,n.Lk)("li",null,"Temporarily disconnect any thermostat controllers connected to the thermostat by remove a battery from them.",-1),g=(0,n.Lk)("li",null,"Turn the thermostat and boiler off, then on again to ensure it is not trying to connect to any thermostat controllers.",-1),v=(0,n.Lk)("li",null,"Once the thermostat and boiler are on, hold down the Central heating button on the device until the Central heating'light turns white/ pink, then release the button. This will enable stand-alone mode on the thermostat.",-1),b=(0,n.Lk)("li",null,"Hold down the central heating button again until the Central heating light begins to flash amber. The device is now in pairing mode and should be found by Zigbee2MQTT.",-1),k=(0,n.Fv)('<h3 id="how-to-start-edit-native-boost" tabindex="-1"><a class="header-anchor" href="#how-to-start-edit-native-boost"><span>How to start/edit native boost</span></a></h3><p>The receiver has support for native Boost, which will allow to display the remaining time on a compatible remote.</p><p>To start one, or modify an already active one, send the following payload to the topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">   <span class="token string-property property">&quot;system_mode&quot;</span><span class="token operator">:</span><span class="token string">&quot;emergency_heating&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">   <span class="token string-property property">&quot;temperature_setpoint_hold_duration&quot;</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span>  <span class="token comment">// Replace with desired duration in minutes. Max 360. 0 to stop</span></span>\n<span class="line">   <span class="token string-property property">&quot;temperature_setpoint_hold&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span></span>\n<span class="line">   <span class="token string-property property">&quot;occupied_heating_setpoint&quot;</span><span class="token operator">:</span><span class="token number">18</span>  <span class="token comment">// Replace with desired temperature. Between 5 and 32 C</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: For device timing reasons, the payload needs to be sent as one single command. Sending individual commands or settings attributes manually using the Frontend will not work.</p><p>Also, the native boost can be used as a method to pause the heating too. To do so, set the temperature to a low value.</p><h3 id="set-heating-mode-to-on" tabindex="-1"><a class="header-anchor" href="#set-heating-mode-to-on"><span>Set heating mode to ON</span></a></h3><p>Send the following payload to the topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">   <span class="token string-property property">&quot;system_mode&quot;</span><span class="token operator">:</span><span class="token string">&quot;heat&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">   <span class="token string-property property">&quot;temperature_setpoint_hold&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span></span>\n<span class="line">   <span class="token string-property property">&quot;occupied_heating_setpoint&quot;</span><span class="token operator">:</span><span class="token number">20</span> <span class="token comment">// Replace with desired temperature. Between 5 and 32 C</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: You will also notice that <code>temperature_setpoint_hold_duration</code> automatically changes to <code>65535</code> which means <code>undefined</code> (indefinite).</p><p>This will also stop any native boosts that are currently active.</p><h3 id="set-heating-mode-to-off" tabindex="-1"><a class="header-anchor" href="#set-heating-mode-to-off"><span>Set heating mode to OFF</span></a></h3><p>Send the following payload to the topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">   <span class="token string-property property">&quot;system_mode&quot;</span><span class="token operator">:</span><span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">   <span class="token string-property property">&quot;temperature_setpoint_hold&quot;</span><span class="token operator">:</span><span class="token number">0</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: You will also notice that <code>temperature_setpoint_hold_duration</code> automatically changes to <code>0</code> which means <code>not set</code>. <code>occupied_heating_setpoint</code> automatically changes to <code>1</code> degree C.</p><p>This will also stop any native boosts that are currently active.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',17),y=(0,n.Fv)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>running_state</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>32</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li></ul><h3 id="temperature-setpoint-hold-binary" tabindex="-1"><a class="header-anchor" href="#temperature-setpoint-hold-binary"><span>Temperature setpoint hold (binary)</span></a></h3><p>Prevent changes. <code>false</code> = run normally. <code>true</code> = prevent from making changes. Must be set to <code>false</code> when system_mode = off or <code>true</code> for heat. Value can be found in the published state on the <code>temperature_setpoint_hold</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_setpoint_hold&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_setpoint_hold&quot;: NEW_VALUE}</code>. If value equals <code>true</code> temperature setpoint hold is ON, if <code>false</code> OFF.</p><h3 id="temperature-setpoint-hold-duration-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-setpoint-hold-duration-numeric"><span>Temperature setpoint hold duration (numeric)</span></a></h3><p>Period in minutes for which the setpoint hold will be active. 65535 = attribute not used. 0 to 360 to match the remote display. Value can be found in the published state on the <code>temperature_setpoint_hold_duration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_setpoint_hold_duration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_setpoint_hold_duration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),_={},q=(0,o(22652).A)(_,[["render",function(e,t){const o=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[a,(0,n.Lk)("table",null,[s,(0,n.Lk)("tbody",null,[i,(0,n.Lk)("tr",null,[l,(0,n.Lk)("td",null,[(0,n.bF)(o,{to:"/supported-devices/#v=Hive"},{default:(0,n.k6)((()=>[(0,n.eW)("Hive")])),_:1})])]),r,d,c])]),p,u,h,(0,n.Lk)("ol",null,[m,g,v,b,(0,n.Lk)("li",null,[(0,n.eW)("You can now re-insert the battery back into any thermostat controllers disconnected in step 1 and pair them to the boiler (and optionally Zigbee2MQTT). For information on pairing the thermostat controllers see the pairing instructions for the "),(0,n.bF)(o,{to:"/devices/SLT3.html"},{default:(0,n.k6)((()=>[(0,n.eW)("Hive SLT3B")])),_:1}),(0,n.eW)(". Note that the thermostat's Central heating light will remain amber until a controller is paired with the thermostat, however the thermostat will still function correctly.")])]),k,(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>[(0,n.eW)("How to use device type specific configuration")])),_:1})])]),y])}]]),f=JSON.parse('{"path":"/devices/SLR1.html","title":"Hive SLR1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Hive SLR1 control via MQTT","description":"Integrate your Hive SLR1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-09-01T18:11:17.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"How to start/edit native boost","slug":"how-to-start-edit-native-boost","link":"#how-to-start-edit-native-boost","children":[]},{"level":3,"title":"Set heating mode to ON","slug":"set-heating-mode-to-on","link":"#set-heating-mode-to-on","children":[]},{"level":3,"title":"Set heating mode to OFF","slug":"set-heating-mode-to-off","link":"#set-heating-mode-to-off","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Temperature setpoint hold (binary)","slug":"temperature-setpoint-hold-binary","link":"#temperature-setpoint-hold-binary","children":[]},{"level":3,"title":"Temperature setpoint hold duration (numeric)","slug":"temperature-setpoint-hold-duration-numeric","link":"#temperature-setpoint-hold-duration-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1724870638000},"filePathRelative":"devices/SLR1.md"}')}}]);