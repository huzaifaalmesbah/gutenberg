(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){chunkIds=deferred[i][0],fn=deferred[i][1],priority=deferred[i][2];for(var fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({81:"components-inserter-stories-index-story",139:"guide-stories-index-story",204:"heading-stories-index-story",243:"scroll-lock-stories-index-story",309:"toggle-group-control-stories-index-story",408:"popover-stories-index-story",698:"navigation-stories-index-story",772:"date-time-stories-time-story",869:"components-dimensions-tool-stories-scale-tool-story",951:"components-block-mover-stories-index-story",970:"angle-picker-control-stories-index-story",983:"components-dimensions-tool-stories-index-story",1057:"visually-hidden-stories-index-story",1101:"palette-edit-stories-index-story",1638:"placeholder-stories-index-story",1656:"components-block-draggable-stories-index-story",1791:"search-control-stories-index-story",1802:"form-toggle-stories-index-story",1821:"sandbox-stories-index-story",1960:"base-control-stories-index-story",1998:"gradient-picker-stories-index-story",2057:"docs-introduction-mdx",2211:"dropdown-menu-stories-index-story",2419:"text-highlight-stories-index-story",2900:"tooltip-stories-index-story",3218:"components-url-popover-stories-index-story",3267:"item-group-stories-index-story",3417:"icon-stories-index-story",3421:"combobox-control-stories-index-story",3517:"dropdown-menu-v2-stories-index-story",3614:"navigator-stories-index-story",3732:"date-time-stories-date-story",3754:"truncate-stories-index-story",3772:"view-stories-index-story",3788:"radio-group-stories-index-story",3813:"components-text-decoration-control-stories-index-story",3933:"tab-panel-stories-index-story",3953:"border-box-control-stories-index-story",4317:"alignment-matrix-control-stories-index-story",4325:"number-control-stories-index-story",4349:"ui-tooltip-stories-index-story",4355:"text-control-stories-index-story",4520:"docs-components-contributing-mdx",4593:"resizable-box-stories-index-story",4595:"components-global-styles-stories-index-story",4662:"draggable-stories-index-story",4706:"select-control-stories-index-story",4770:"components-dimensions-tool-stories-width-height-tool-story",4831:"navigable-container-stories-navigable-menu-story",4836:"drop-zone-stories-index-story",4895:"unit-control-stories-index-story",4972:"components-dimensions-tool-stories-aspect-ratio-tool-story",5008:"button-stories-index-story",5100:"toggle-control-stories-index-story",5106:"menu-items-choice-stories-index-story",5151:"scrollable-stories-index-story",5175:"custom-gradient-picker-stories-index-story",5194:"components-text-transform-control-stories-index-story",5309:"font-size-picker-stories-index-story",5367:"h-stack-stories-index-story",5619:"menu-group-stories-index-story",5735:"dropdown-stories-index-story",5739:"menu-item-stories-index-story",5745:"tip-stories-index-story",5825:"components-resolution-tool-stories-index-story",5891:"animate-stories-index-story",6180:"box-control-stories-index-story",6246:"spinner-stories-index-story",6265:"components-height-control-stories-index-story",6510:"query-controls-stories-index-story",6605:"card-stories-index-story",6610:"icon-stories-index-story-tsx",6758:"form-file-upload-stories-index-story",6764:"modal-stories-index-story",6869:"flex-stories-index-story",6883:"surface-stories-index-story",6932:"form-token-field-stories-index-story",6939:"border-control-stories-index-story",7131:"spacer-stories-index-story",7137:"elevation-stories-index-story",7152:"input-control-stories-index-story",7196:"duotone-picker-stories-duotone-picker-story",7306:"color-indicator-stories-index-story",7351:"radio-control-stories-index-story",7552:"dimension-control-stories-index-story",7577:"color-palette-stories-index-story",7637:"tree-select-stories-index-story",7707:"button-group-stories-index-story",7716:"textarea-control-stories-index-story",7752:"snackbar-stories-index-story",7844:"color-picker-stories-index-story",7875:"tree-grid-stories-index-story",8035:"range-control-stories-index-story",8067:"shortcut-stories-index-story",8108:"v-stack-stories-index-story",8147:"duotone-picker-stories-duotone-swatch-story",8297:"checkbox-control-stories-index-story",8518:"tools-panel-stories-index-story",8628:"snackbar-stories-list-story",8633:"date-time-stories-date-time-story",8673:"confirm-dialog-stories-index-story",8748:"components-line-height-control-stories-index-story",8751:"focal-point-picker-stories-index-story",8768:"external-link-stories-index-story",8772:"playground-index-story",8773:"custom-select-control-stories-index-story",8821:"icon-stories-index-story-js",8917:"slot-fill-stories-index-story",8930:"circular-option-picker-stories-index-story",8953:"keyboard-shortcuts-stories-index-story",8958:"toolbar-stories-index-story",8971:"z-stack-stories-index-story",9003:"disabled-stories-index-story",9170:"progress-bar-stories-index-story",9189:"notice-stories-index-story",9379:"divider-stories-index-story",9475:"text-stories-index-story",9501:"docs-components-readme-mdx",9696:"navigable-container-stories-tabbable-container-story",9812:"grid-stories-index-story",9828:"theme-stories-index-story",9901:"responsive-wrapper-stories-index-story",9943:"panel-stories-index-story"}[chunkId]||chunkId)+"."+{1:"1a476b9a",81:"2110af6e",139:"fa102e5b",204:"91517712",238:"b25c3949",243:"6930f58e",257:"148722d4",309:"ad741c63",404:"18b95c7b",408:"415bebb8",652:"adb19a79",698:"62ae3947",762:"e2613d7c",772:"fca63bcd",869:"859b70f2",951:"01a94cc1",970:"e09f967e",983:"2d800c44",1057:"c3b30be7",1101:"b18e925e",1162:"e7f12919",1230:"8a26d0d1",1613:"408e3c83",1638:"b8f346bc",1656:"f7d8b7b2",1781:"a81ed9c8",1791:"528b1dfb",1802:"a6bcc8e4",1821:"37c86926",1960:"1cbe0589",1998:"7b66dd80",2014:"63e873e4",2033:"5ceacb9b",2057:"ec7afcdb",2077:"d6ad7d23",2169:"5eceddc5",2211:"8d75d966",2218:"077d9368",2394:"63bebe0c",2419:"61d1c67d",2420:"df0fde5b",2493:"45e53888",2520:"d231dfa2",2769:"ccc6b99f",2900:"771f03d8",3043:"635f180b",3149:"16303643",3218:"3ae85d2e",3267:"5737fdec",3317:"4340907e",3417:"480ccd42",3421:"953eae3c",3423:"ad8d1c48",3517:"e6f7b319",3528:"897c4007",3614:"a983e3d7",3622:"99306b07",3732:"491f93af",3754:"914884f4",3760:"3a30b918",3772:"d69be4e7",3788:"a0a9f985",3813:"f1f96ec3",3933:"ba0046cc",3953:"6dfdf600",3965:"364021a5",4033:"15be1b31",4068:"0014e3fd",4074:"381763fe",4092:"6fa22be6",4095:"521790e2",4210:"dd0178b1",4215:"f5748a23",4285:"08aaf44d",4317:"9dbb140c",4325:"23ec7f1f",4349:"07e313a6",4355:"1107a6bf",4368:"067e21b5",4520:"779ba9e0",4535:"b5dacb93",4578:"20d1e43d",4593:"4d2ce24c",4595:"2a1912dc",4662:"d38d87ff",4706:"24e04ccd",4712:"be9219ce",4760:"de4c068d",4768:"2665745c",4770:"771ca64f",4831:"2765b92b",4836:"59f8c6a6",4837:"3f843f21",4875:"2339a24e",4895:"85204016",4928:"75bc1a00",4972:"fe83fc94",5008:"5b299f6a",5100:"13bef260",5106:"cb56d1ac",5150:"924a6662",5151:"557e97e6",5175:"c59d05ae",5194:"f956edd6",5253:"3ef2cb16",5309:"7700800f",5353:"9d92eb20",5364:"20e5fd28",5367:"e5d00888",5434:"dbe6af5f",5473:"fe3244df",5619:"d4acd02d",5699:"9666dcd3",5723:"a0c933da",5735:"8397e21a",5737:"067ba9be",5739:"bb8343ae",5745:"050c2f77",5800:"3347cc12",5825:"029bca03",5841:"eae8661c",5891:"8411a136",6118:"03613f26",6180:"69c1ce63",6191:"1bb9e66d",6246:"7dff9644",6260:"f2bb72ee",6265:"878acede",6414:"49c2e9f2",6418:"96a75cb2",6447:"2e426b9b",6476:"f3df2397",6503:"2bf8e91a",6510:"fc881516",6605:"3ba94ac0",6610:"e2f0afa7",6615:"9f825724",6758:"9a3ae975",6764:"b4b889c7",6809:"a5edb550",6869:"be3e7898",6883:"58cb8f1f",6932:"dae9104a",6939:"fee4c05a",6966:"cd640774",6983:"ac09c5be",7131:"21c2c54f",7137:"9ba04cbb",7140:"1989f433",7143:"7b2da4b2",7152:"302f7a32",7196:"046915fd",7306:"f8a15e3e",7328:"52799521",7351:"3f46c191",7355:"9e9885ea",7435:"6719abff",7513:"1bc9fea9",7552:"ef3e2285",7577:"29d57d6d",7637:"862004a7",7689:"4eec47ca",7707:"7547769a",7716:"c169b18c",7752:"5c11a6d2",7844:"971e8227",7875:"a7ddcc31",7886:"f5013be2",8035:"c310b3cf",8067:"3e4b1006",8102:"ca2f0050",8108:"4a37e622",8147:"8c4cdecc",8169:"12b2fde6",8270:"4ef544b9",8297:"51c4be70",8431:"478e2d9a",8518:"520c3de0",8628:"d33a1db7",8633:"ceb17bc4",8673:"fe88116b",8692:"a75ef34d",8693:"821f2212",8738:"076dfeaa",8748:"1c6d706a",8751:"75a5cecd",8752:"8afdb402",8768:"18a0ba7e",8772:"07b051fa",8773:"ed64284b",8794:"54f6706d",8821:"641cb99e",8889:"417539c2",8917:"f8264129",8930:"de367373",8938:"5a6324a7",8953:"baa83b66",8958:"cd5c11b9",8971:"fc71e09d",9003:"2134e07c",9115:"705ced78",9119:"eec9e4ba",9121:"724eacde",9170:"b7671cdb",9189:"0515deae",9213:"01128e3d",9379:"5b33f66f",9433:"cbe21a16",9475:"e0e6cf4b",9496:"f3d88582",9501:"d7d8d6b3",9631:"86593d2a",9696:"119780bc",9744:"2645ca70",9812:"d525638e",9828:"4cb205a0",9901:"008ea0e9",9943:"fbf829f2"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="gutenberg:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","gutenberg:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],runtime=data[2],i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkIds[i]]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkgutenberg=self.webpackChunkgutenberg||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})()})();