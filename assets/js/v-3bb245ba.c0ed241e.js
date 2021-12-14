"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[710],{6792:(e,o,t)=>{t.r(o),t.d(o,{data:()=>i});const i={key:"v-3bb245ba",path:"/storagemgr.html",title:"StorageMgr",lang:"en-US",frontmatter:{title:"StorageMgr",sidebar:!1},excerpt:"",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What You Need",slug:"what-you-need",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],filePathRelative:"storagemgr.md",git:{updatedTime:1635953747e3,contributors:[{name:"emiyl",email:"me@emiyl.com",commits:1}]}}},9150:(e,o,t)=>{t.r(o),t.d(o,{default:()=>x});var i=t(6252);const a=(0,i.uE)('<h3 id="required-reading" tabindex="-1"><a class="header-anchor" href="#required-reading" aria-hidden="true">#</a> Required Reading</h3><p>StorageMgr is a multi-purpose kernel plugin for the PS Vita (TV) which allows for the use of alternative storage devices such as a USB drive, an SD2Vita, or a psvsd adapter.</p><p>The SD2Vita is a microSD to game card adapter which is inserted into the game-card slot in your device, while the psvsd is a microSD adapter which replaces the 3g modem on 3g PS Vita models.</p><p>By using the StorageMgr kernel plugin, the USB drive or microSD card you use will be mounted to <code>ux0:</code> just like a Sony memory card. This is very useful because microSD cards are significantly cheaper than Sony memory cards (especially at higher capacities).</p><p>This will use FTP (File Transfer Protocol) to transfer the files, so your Vita and PC must be connected to the same network.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You must have already installed VitaShell to use this.</p></div><h3 id="what-you-need" tabindex="-1"><a class="header-anchor" href="#what-you-need" aria-hidden="true">#</a> What You Need</h3>',7),r=(0,i._)("li",null,[(0,i.Uk)("A formatted storage device compatible with your system "),(0,i._)("ul",null,[(0,i._)("li",null,[(0,i.Uk)("To format your device, see "),(0,i._)("a",{href:"storage-format-(windows)"},"Storage Format (Windows)"),(0,i.Uk)(", "),(0,i._)("a",{href:"storage-format-(linux)"},"Storage Format (Linux)"),(0,i.Uk)(", or "),(0,i._)("a",{href:"storage-format-(mac)"},"Storage Format (Mac)")])])],-1),l=(0,i.Uk)("An FTP Client such as "),d={href:"https://winscp.net/",target:"_blank",rel:"noopener noreferrer"},n=(0,i.Uk)("WinSCP"),s=(0,i.Uk)(" or "),c={href:"https://cyberduck.io/",target:"_blank",rel:"noopener noreferrer"},u=(0,i.Uk)("CyberDuck"),h=(0,i._)("ul",null,[(0,i._)("li",null,"Alternatively, you can also use the USB transfer feature of VitaShell")],-1),m=(0,i.Uk)("The latest release of "),p={href:"https://github.com/CelesteBlue-dev/PSVita-StorageMgr/releases",target:"_blank",rel:"noopener noreferrer"},g=(0,i.Uk)("StorageMgr"),f=(0,i._)("code",null,"storage_config.txt",-1),y=(0,i.Uk)(" should be edited to fit your situation as instructed in the "),S={href:"https://github.com/CelesteBlue-dev/PSVita-StorageMgr/blob/master/README.md#how-to-configure-storagemgr-",target:"_blank",rel:"noopener noreferrer"},v=(0,i.Uk)("README"),k=(0,i.uE)("<li><code>MCD=uma0</code> should be kept as-is if you plan to keep a Sony memory card in your device, and removed otherwise</li><li><code>INT=imc0</code> should be kept as-is for PS Vita 2000 and PS TV users, and removed for PS Vita 1000 users</li><li><code>GCD=ux0</code> should be kept as-is for SD2Vita users, and edited to <code>UMA=ux0</code> for USB drive and psvsd users</li><li><code>UMA=grw0</code> should be removed unless you have multiple storage devices (in which case the device which is not assigned to <code>ux0:</code> should be assigned to <code>grw0:</code>)</li>",4),w=(0,i.uE)('<h3 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions" aria-hidden="true">#</a> Instructions</h3><h4 id="section-i-installing-plugins" tabindex="-1"><a class="header-anchor" href="#section-i-installing-plugins" aria-hidden="true">#</a> Section I - Installing Plugins</h4><ol><li>Launch the VitaShell application</li><li>Press (Select) to enable FTP access on your device</li><li>Open your FTP client on your computer</li><li>Enter the IP Address and Port displayed on your device</li><li>Using your FTP client, copy all files from <code>ux0:tai/</code> to <code>ur0:tai/</code><ul><li>Overwrite any existing files in the <code>ur0:tai/</code> folder</li><li>If you do not have a <code>ux0:tai/</code> folder, skip this step</li></ul></li><li>Transfer <code>storagemgr.skprx</code> to the <code>ur0:tai/</code> folder</li><li>Transfer <code>storage_config.txt</code> to the <code>ur0:tai/</code> folder</li><li>For any paths in <code>ur0:tai/config.txt</code> which contain <code>ux0:tai/</code>, replace <code>ux0:tai/</code> with <code>ur0:tai/</code><ul><li>If you did not have a <code>ux0:tai/</code> folder, skip this step</li></ul></li><li>Add the following line to <code>ur0:tai/config.txt</code> under the <code>*KERNEL</code> line: <ul><li><code>ur0:tai/storagemgr.skprx</code></li></ul></li><li>Delete the <code>ux0:tai/</code> folder <ul><li>This is an important step as HENkaku will not load plugins installed in <code>ur0:tai</code> if it detects that <code>ux0:tai</code> exists</li></ul></li></ol><h4 id="section-ii-restoring-data" tabindex="-1"><a class="header-anchor" href="#section-ii-restoring-data" aria-hidden="true">#</a> Section II - Restoring Data</h4><p>This section will copy the data from your old Sony memory card to your new storage device.</p><ol><li>Backup the contents of <code>ux0:</code> to a folder on your computer <ul><li>This may take some time if you have a large amount of data on your Sony memory card</li></ul></li><li>Insert your new storage device into your computer</li><li>Copy the contents of your <code>ux0:</code> folder to your new storage device <ul><li>This may take some time if you have a large amount of data on your Sony memory card</li><li>Do not copy the <code>ux0:</code> folder itself to your new storage device</li></ul></li><li>Insert your new storage device into your PS Vita (TV)</li><li>Press (Circle) on your device to close the FTP connection</li><li>Close the VitaShell application</li><li>Reboot your device <ul><li>If your device does not have Ensō, you will need to manually launch and exit h-encore to enable homebrew</li><li>This is required to load the new kernel plugins added to <code>ur0:tai/config.txt</code></li></ul></li></ol><p>Your new storage device is now configured and ready for use at the mount point specified in your <code>storage_config.txt</code>.</p><hr><p>If you want to reclaim the space on your memory card (to use for storing PSP games for instance), you can delete the contents of <code>uma0:</code> (the new memory card mount point) and / or <code>imc0:</code> (if you have a PS Vita 2000 or PS TV).</p><p>If you decide to do this, you must <em>not</em> delete these folders if they exist:</p><ul><li><code>uma0:data/bootstrap.self</code></li><li><code>uma0:app/PCSG90096</code></li><li><code>uma0:appmeta/PCSG90096</code></li><li><code>uma0:appmeta/VITASHELL</code></li><li><code>uma0:license/app/PCSG90096</code></li><li><code>uma0:license/app/VITASHELL</code></li><li><code>uma0:user/00/savedata/PCSG90096</code></li><li><code>uma0:user/00/savedata/VITASHELL</code></li></ul><p>This is because you must keep h-encore installed to the memory card so you can enable HENkaku (and therefore StorageMgr) after a reboot.</p>',12),b={},x=(0,t(3744).Z)(b,[["render",function(e,o){const t=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,(0,i._)("ul",null,[r,(0,i._)("li",null,[l,(0,i._)("a",d,[n,(0,i.Wm)(t)]),s,(0,i._)("a",c,[u,(0,i.Wm)(t)]),h]),(0,i._)("li",null,[m,(0,i._)("a",p,[g,(0,i.Wm)(t)]),(0,i._)("ul",null,[(0,i._)("li",null,[f,y,(0,i._)("a",S,[v,(0,i.Wm)(t)])]),k])])]),w],64)}]])},3744:(e,o)=>{o.Z=(e,o)=>{const t=e.__vccOpts||e;for(const[e,i]of o)t[e]=i;return t}}}]);