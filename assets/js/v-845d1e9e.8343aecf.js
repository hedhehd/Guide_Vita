"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[900],{8614:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-845d1e9e",path:"/yamt.html",title:"YAMT (SD2Vita)",lang:"en-US",frontmatter:{title:"YAMT (SD2Vita)",description:"Guide on installing the YAMT plugin for SD2Vita.",sidebar:!1},excerpt:"",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What You Need",slug:"what-you-need",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],filePathRelative:"yamt.md",git:{updatedTime:1635957452e3,contributors:[{name:"emiyl",email:"me@emiyl.com",commits:2}]}}},2513:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var i=o(6252);const a=(0,i.uE)('<h3 id="required-reading" tabindex="-1"><a class="header-anchor" href="#required-reading" aria-hidden="true">#</a> Required Reading</h3><p>YAMT (Yet Another Mount Tool) is a multi-purpose kernel plugin for the PS Vita (TV) which allows for the use of a microSD card as a storage device via an SD2Vita adapter. The SD2Vita is a microSD to game card adapter which is inserted into the game-card slot in your device.</p><p>By using the YAMT kernel plugin, the USB drive or microSD card you use will be mounted to <code>ux0:</code> just like a Sony memory card. This is very useful because microSD cards are significantly cheaper than Sony memory cards (especially at higher capacities).</p><p>This will use FTP (File Transfer Protocol) to transfer the files, so your Vita and PC must be connected to the same network.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you&#39;re using a USB drive or psvsd adapter, or if this method doesn&#39;t work for you, follow the <a href="storagemgr">StorageMgr</a> guide.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>YAMT is only compatible with firmware versions 3.60 and 3.65 on HENkaku Ensō.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Red Samsung Evo cards are not compatible with YAMT. If you have a Red Samsung Evo MicroSD card please follow the <a href="storagemgr">StorageMgr</a> guide.</p></div><h3 id="what-you-need" tabindex="-1"><a class="header-anchor" href="#what-you-need" aria-hidden="true">#</a> What You Need</h3>',8),r=(0,i._)("li",null,[(0,i.Uk)("A storage device compatible with your system "),(0,i._)("ul",null,[(0,i._)("li",null,"This can be a microSD card to use in an SD2Vita or psvsd adapter, or a USB device for a PS TV console")])],-1),l=(0,i.Uk)("An FTP Client such as "),n={href:"https://winscp.net/",target:"_blank",rel:"noopener noreferrer"},s=(0,i.Uk)("WinSCP"),c=(0,i.Uk)(" or "),d={href:"https://cyberduck.io/",target:"_blank",rel:"noopener noreferrer"},u=(0,i.Uk)("CyberDuck"),h=(0,i._)("ul",null,[(0,i._)("li",null,"Alternatively, you can also use the USB transfer feature of VitaShell")],-1),p=(0,i.Uk)("The latest release of "),m={href:"https://github.com/SKGleba/yamt-vita/releases",target:"_blank",rel:"noopener noreferrer"},g=(0,i.Uk)("yamt-vita"),f=(0,i.Uk)("The latest release of "),y={href:"https://github.com/SKGleba/VitaTools/raw/main/storageFormat/build/storageFormat.vpk",target:"_blank",rel:"noopener noreferrer"},v=(0,i.Uk)("storageFormat"),S=(0,i.uE)('<h3 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions" aria-hidden="true">#</a> Instructions</h3><h4 id="section-i-prep-work" tabindex="-1"><a class="header-anchor" href="#section-i-prep-work" aria-hidden="true">#</a> Section I - Prep Work</h4><ol><li>Launch the VitaShell application</li><li>Press (Select) to enable FTP access on your device</li><li>Open your FTP client on your computer</li><li>Enter the IP Address and Port displayed on your device</li><li>Using your FTP client, navigate to <code>ux0:</code> -&gt; <code>data/</code></li><li>Transfer <code>yamt.vpk</code> to the <code>data</code> folder</li><li>Transfer <code>storageFormat.vpk</code> to the <code>data</code> folder</li><li>Press (Circle) on your device to close the FTP connection</li></ol><h4 id="section-ii-installing-vpks" tabindex="-1"><a class="header-anchor" href="#section-ii-installing-vpks" aria-hidden="true">#</a> Section II - Installing VPKs</h4><ol><li>On your device, navigate to <code>ux0:</code> -&gt; <code>data/</code></li><li>Press (Square) on each of the <code>.vpk</code> files to mark them</li><li>Press (Triangle) to open the menu, then select &quot;More&quot; -&gt; &quot;Install all&quot; to install the marked files</li><li>Press (Cross) to confirm the install</li><li>Press (Cross) to continue the install each time you are prompted about extended permissions</li><li>Press (Triangle) to open the menu, then select &quot;Delete&quot; to delete the marked files</li><li>Press (Cross) to confirm the deletion</li><li>Close the VitaShell application</li></ol><h4 id="section-iii-formatting-the-microsd" tabindex="-1"><a class="header-anchor" href="#section-iii-formatting-the-microsd" aria-hidden="true">#</a> Section III - Formatting the microSD</h4><ol><li>Insert your SD2Vita with the microSD card into your PS Vita or PS TV device</li><li>Launch the storageFormat application</li><li>Ensure <code>Target</code> is set to &quot;SD2Vita&quot; and <code>Filesystem</code> is set to &quot;TexFAT&quot;</li><li>Press (Cross) on &quot;Format target storage&quot; <ul><li>If this fails, ensure the adapter is inserted properly and is undamaged - then reboot and try again</li><li>If it still fails, follow the <a href="storagemgr">StorageMgr</a> guide</li></ul></li><li>Press (Cross) on &quot;Reboot your device&quot;</li></ol><h4 id="section-iv-installing-yamt-vita" tabindex="-1"><a class="header-anchor" href="#section-iv-installing-yamt-vita" aria-hidden="true">#</a> Section IV - Installing yamt-vita</h4><p>If you previously installed StorageMgr or another storage plugin, please remove it from your <code>ux0:tai/</code> or <code>ur0:tai/</code> folder before continuing. {: .notice--info}</p><ol><li>Power on your device to reboot</li><li>Launch the YAMT Installer application</li><li>Press (Cross) on <code>-&gt; Install the lite version</code><ul><li>Once finished, your device will reboot</li></ul></li><li>Open the Settings application</li><li>Navigate to <code>Devices</code> -&gt; <code>Storage Devices</code></li><li>Enable &quot;Use YAMT&quot; to enable the YAMT driver</li><li>Set <code>ux0:</code> to &quot;Memory Card&quot; <ul><li>If you&#39;re not using a memory card, select &quot;Internal Storage&quot;</li></ul></li><li>Set <code>uma0:</code> to &quot;SD2Vita&quot;</li><li>Hold the power button and select &quot;Power Off&quot;</li></ol><h4 id="section-v-restoring-data" tabindex="-1"><a class="header-anchor" href="#section-v-restoring-data" aria-hidden="true">#</a> Section V - Restoring Data</h4><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This section will copy the data from your old Sony memory card to your new storage device.</p></div><ol><li>Power on your device to reboot</li><li>Open the VitaShell application</li><li>Navigate to the <code>ux0:</code> partition <ul><li>This is currently your official memory card or internal storage</li></ul></li><li>Press down on the D-Pad to highlight a folder or file</li><li>Press (Triangle) to bring up the menu</li><li>Press (Cross) on &quot;Mark all&quot; to select all folders and files in the <code>ux0:</code> partition</li><li>Press (Triangle) again to bring up the menu</li><li>Press (Cross) on &quot;Copy&quot;</li><li>Press (Cross) again when prompted</li><li>Navigate out of the <code>ux0:</code> partition and enter the <code>uma0:</code> partition <ul><li>This is your unofficial storage device&#39;s memory</li></ul></li><li>Press (Triangle) to bring up the menu</li><li>Press (Cross) on paste and wait for it to finish</li><li>Once done, exit VitaShell and open the Settings application</li><li>Navigate to <code>Devices</code> -&gt; <code>Storage Devices</code></li><li>Set <code>ux0:</code> to &quot;SD2Vita&quot;</li><li>Set <code>uma0:</code> to &quot;Memory Card&quot; <ul><li>If you&#39;re not using a memory card, select &quot;Internal Storage&quot;</li></ul></li><li>Hold the power button and select &quot;Power Off&quot;</li><li>Power on your device to reboot</li></ol><hr><p>If you want to reclaim the space on your memory card (to use for storing PSP games for instance), you can delete the contents of <code>uma0:</code> (the new memory card mount point) and / or <code>imc0:</code> (if you have a PS Vita 2000 or PS TV).</p><p>If you decide to do this, you must <em>not</em> delete these folders if they exist:</p><ul><li><code>uma0:data/bootstrap.self</code></li><li><code>uma0:app/PCSG90096</code></li><li><code>uma0:appmeta/PCSG90096</code></li><li><code>uma0:appmeta/VITASHELL</code></li><li><code>uma0:license/app/PCSG90096</code></li><li><code>uma0:license/app/VITASHELL</code></li><li><code>uma0:user/00/savedata/PCSG90096</code></li><li><code>uma0:user/00/savedata/VITASHELL</code></li></ul><p>This is because you must keep h-encore installed to the memory card so you can enable HENkaku (and therefore YAMT) after a reboot.</p>',18),P={},b=(0,o(3744).Z)(P,[["render",function(e,t){const o=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,(0,i._)("ul",null,[r,(0,i._)("li",null,[l,(0,i._)("a",n,[s,(0,i.Wm)(o)]),c,(0,i._)("a",d,[u,(0,i.Wm)(o)]),h]),(0,i._)("li",null,[p,(0,i._)("a",m,[g,(0,i.Wm)(o)])]),(0,i._)("li",null,[f,(0,i._)("a",y,[v,(0,i.Wm)(o)])])]),S],64)}]])},3744:(e,t)=>{t.Z=(e,t)=>{const o=e.__vccOpts||e;for(const[e,i]of t)o[e]=i;return o}}}]);