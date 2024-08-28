"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[94875],{36114:(e,a,t)=>{t.r(a),t.d(a,{comp:()=>r,data:()=>i});var n=t(86904);const o=[(0,n.Fv)('<h1 id="connect-to-a-remote-sonoff-zbbridge" tabindex="-1"><a class="header-anchor" href="#connect-to-a-remote-sonoff-zbbridge"><span>Connect to a remote Sonoff ZBBridge</span></a></h1><p>This how-to explains how to run Zigbee2MQTT with a comercial Sonoff ZBBridge Gateway. We will use a Sonoff ZBBridge Gateway with custom firmware to connect to a serial port over TCP. In this way you can use a simple premade Hub/Gateway flash it with custom firmware and then use it as your coordinator.</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>Keep in mind that the EZSP support is currently <strong>experimental</strong>.</p></div><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>WiFi-based Serial-to-IP bridges are <strong>not recommended</strong> as the serial protocol does not have enough fault-tolerance to handle packet loss or latency delays that can normally occur over WiFi connections.</p></div><h2 id="_1-flash-tasmota-zbbridge" tabindex="-1"><a class="header-anchor" href="#_1-flash-tasmota-zbbridge"><span>1. Flash Tasmota ZBBridge</span></a></h2><p>In order for the gateway to be useful for us we want it flashed with custom firmware (<a href="https://tasmota.github.io/docs/Zigbee/" target="_blank" rel="noopener noreferrer">tasmota-zbbridge</a>) so we can free ourselves from the cloud. For flashing procedure follow <a href="https://www.digiblur.com/2020/07/how-to-use-sonoff-zigbee-bridge-with.html" target="_blank" rel="noopener noreferrer">DigiBlurs guide</a> up until step 6.</p><h2 id="_2-configure" tabindex="-1"><a class="header-anchor" href="#_2-configure"><span>2. Configure</span></a></h2><p>Now edit the Zigbee2MQTT <code>configuration.yaml</code> accordingly, replace <code>192.168.2.13</code> with the IP or hostname of your system where the adapter is connected to. Also replace <code>20108</code> with the port you configured while flashing the Gateway (in step 6 from previous point).</p><p>Keep in mind that the EZSP support is currently <strong>experimental</strong>.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">serial</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token string">&#39;tcp://192.168.2.13:20108&#39;</span></span>\n<span class="line">    <span class="token key atrule">adapter</span><span class="token punctuation">:</span> ezsp</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Done! Now you can start Zigbee2MQTT.</p>',11)],s={},r=(0,t(22652).A)(s,[["render",function(e,a){return(0,n.uX)(),(0,n.CE)("div",null,o)}]]),i=JSON.parse('{"path":"/advanced/remote-adapter/connect_to_a_remote_sonoff_zbbridge.html","title":"Connect to a remote Sonoff ZBBridge","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":2,"title":"1. Flash Tasmota ZBBridge","slug":"_1-flash-tasmota-zbbridge","link":"#_1-flash-tasmota-zbbridge","children":[]},{"level":2,"title":"2. Configure","slug":"_2-configure","link":"#_2-configure","children":[]}],"git":{"updatedTime":1724870638000},"filePathRelative":"advanced/remote-adapter/connect_to_a_remote_sonoff_zbbridge.md"}')}}]);