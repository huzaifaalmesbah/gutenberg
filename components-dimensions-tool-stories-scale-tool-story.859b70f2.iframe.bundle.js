(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[869],{"./packages/block-editor/src/components/dimensions-tool/scale-tool.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>ScaleTool});var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/tools-panel/tools-panel-item/component.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/toggle-group-control/toggle-group-control/component.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/build-module/toggle-group-control/toggle-group-control-option/component.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/i18n/build-module/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DEFAULT_SCALE_OPTIONS=[{value:"fill",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Fill","Scale option for dimensions control"),help:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fill the space by stretching the content.")},{value:"contain",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Contain","Scale option for dimensions control"),help:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fit the content to the space without clipping.")},{value:"cover",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Cover","Scale option for dimensions control"),help:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fill the space by clipping what doesn't fit.")},{value:"none",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("None","Scale option for dimensions control"),help:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Do not adjust the sizing of the content. Content that is too large will be clipped, and content that is too small will have additional padding.")},{value:"scale-down",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Scale down","Scale option for dimensions control"),help:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scale down the content to fit the space if it is too big. Content that is too small will have additional padding.")}];function ScaleTool({panelId,value,onChange,options=DEFAULT_SCALE_OPTIONS,defaultValue=DEFAULT_SCALE_OPTIONS[0].value,isShownByDefault=!0}){const displayValue=null!=value?value:"fill",scaleHelp=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>options.reduce(((acc,option)=>(acc[option.value]=option.help,acc)),{})),[options]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Z,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scale"),isShownByDefault,hasValue:()=>displayValue!==defaultValue,onDeselect:()=>onChange(defaultValue),panelId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Z,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scale"),isBlock:!0,help:scaleHelp[displayValue],value:displayValue,onChange,__nextHasNoMarginBottom:!0,children:options.map((option=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Z,{...option},option.value)))})})}ScaleTool.displayName="ScaleTool",ScaleTool.__docgenInfo={description:"A tool to select the CSS object-fit property for the image.\n\n@param {ScaleToolProps} props\n\n@return {import('@wordpress/element').WPElement} The scale tool.",methods:[],displayName:"ScaleTool",props:{options:{defaultValue:{value:"[\n\t{\n\t\tvalue: 'fill',\n\t\tlabel: _x( 'Fill', 'Scale option for dimensions control' ),\n\t\thelp: __( 'Fill the space by stretching the content.' ),\n\t},\n\t{\n\t\tvalue: 'contain',\n\t\tlabel: _x( 'Contain', 'Scale option for dimensions control' ),\n\t\thelp: __( 'Fit the content to the space without clipping.' ),\n\t},\n\t{\n\t\tvalue: 'cover',\n\t\tlabel: _x( 'Cover', 'Scale option for dimensions control' ),\n\t\thelp: __( \"Fill the space by clipping what doesn't fit.\" ),\n\t},\n\t{\n\t\tvalue: 'none',\n\t\tlabel: _x( 'None', 'Scale option for dimensions control' ),\n\t\thelp: __(\n\t\t\t'Do not adjust the sizing of the content. Content that is too large will be clipped, and content that is too small will have additional padding.'\n\t\t),\n\t},\n\t{\n\t\tvalue: 'scale-down',\n\t\tlabel: _x( 'Scale down', 'Scale option for dimensions control' ),\n\t\thelp: __(\n\t\t\t'Scale down the content to fit the space if it is too big. Content that is too small will have additional padding.'\n\t\t),\n\t},\n]",computed:!1},required:!1},defaultValue:{defaultValue:{value:"DEFAULT_SCALE_OPTIONS[ 0 ].value",computed:!0},required:!1},isShownByDefault:{defaultValue:{value:"true",computed:!1},required:!1}}}},"./packages/components/build-module/panel/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>panel});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const panel_header=function PanelHeader({label,children}){return(0,react.createElement)("div",{className:"components-panel__header"},label&&(0,react.createElement)("h2",null,label),children)};const panel=(0,react.forwardRef)((function UnforwardedPanel({header,className,children},ref){const classNames=classnames_default()(className,"components-panel");return(0,react.createElement)("div",{className:classNames,ref},header&&(0,react.createElement)(panel_header,{label:header}),children)}))},"./packages/components/build-module/toggle-group-control/toggle-group-control-option/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/build-module/toggle-group-control/toggle-group-control-option-base/component.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function UnforwardedToggleGroupControlOption(props,ref){const{label,...restProps}=props,optionLabel=restProps["aria-label"]||label;return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_1__.Z,{...restProps,"aria-label":optionLabel,ref},label)}))},"./node_modules/highlight-words-core/dist/index.js":module=>{module.exports=function(modules){var installedModules={};function __nested_webpack_require_187__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__nested_webpack_require_187__),module.loaded=!0,module.exports}return __nested_webpack_require_187__.m=modules,__nested_webpack_require_187__.c=installedModules,__nested_webpack_require_187__.p="",__nested_webpack_require_187__(0)}([function(module,exports,__nested_webpack_require_1468__){module.exports=__nested_webpack_require_1468__(1)},function(module,exports,__nested_webpack_require_1587__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _utils=__nested_webpack_require_1587__(2);Object.defineProperty(exports,"combineChunks",{enumerable:!0,get:function get(){return _utils.combineChunks}}),Object.defineProperty(exports,"fillInChunks",{enumerable:!0,get:function get(){return _utils.fillInChunks}}),Object.defineProperty(exports,"findAll",{enumerable:!0,get:function get(){return _utils.findAll}}),Object.defineProperty(exports,"findChunks",{enumerable:!0,get:function get(){return _utils.findChunks}})},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.findAll=function findAll(_ref){var autoEscape=_ref.autoEscape,_ref$caseSensitive=_ref.caseSensitive,caseSensitive=void 0!==_ref$caseSensitive&&_ref$caseSensitive,_ref$findChunks=_ref.findChunks,findChunks=void 0===_ref$findChunks?defaultFindChunks:_ref$findChunks,sanitize=_ref.sanitize,searchWords=_ref.searchWords,textToHighlight=_ref.textToHighlight;return fillInChunks({chunksToHighlight:combineChunks({chunks:findChunks({autoEscape,caseSensitive,sanitize,searchWords,textToHighlight})}),totalLength:textToHighlight?textToHighlight.length:0})};var combineChunks=exports.combineChunks=function combineChunks(_ref2){var chunks=_ref2.chunks;return chunks=chunks.sort((function(first,second){return first.start-second.start})).reduce((function(processedChunks,nextChunk){if(0===processedChunks.length)return[nextChunk];var prevChunk=processedChunks.pop();if(nextChunk.start<=prevChunk.end){var endIndex=Math.max(prevChunk.end,nextChunk.end);processedChunks.push({highlight:!1,start:prevChunk.start,end:endIndex})}else processedChunks.push(prevChunk,nextChunk);return processedChunks}),[])},defaultFindChunks=function defaultFindChunks(_ref3){var autoEscape=_ref3.autoEscape,caseSensitive=_ref3.caseSensitive,_ref3$sanitize=_ref3.sanitize,sanitize=void 0===_ref3$sanitize?defaultSanitize:_ref3$sanitize,searchWords=_ref3.searchWords,textToHighlight=_ref3.textToHighlight;return textToHighlight=sanitize(textToHighlight),searchWords.filter((function(searchWord){return searchWord})).reduce((function(chunks,searchWord){searchWord=sanitize(searchWord),autoEscape&&(searchWord=function escapeRegExpFn(string){return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}(searchWord));for(var regex=new RegExp(searchWord,caseSensitive?"g":"gi"),match=void 0;match=regex.exec(textToHighlight);){var _start=match.index,_end=regex.lastIndex;_end>_start&&chunks.push({highlight:!1,start:_start,end:_end}),match.index===regex.lastIndex&&regex.lastIndex++}return chunks}),[])};exports.findChunks=defaultFindChunks;var fillInChunks=exports.fillInChunks=function fillInChunks(_ref4){var chunksToHighlight=_ref4.chunksToHighlight,totalLength=_ref4.totalLength,allChunks=[],append=function append(start,end,highlight){end-start>0&&allChunks.push({start,end,highlight})};if(0===chunksToHighlight.length)append(0,totalLength,!1);else{var lastIndex=0;chunksToHighlight.forEach((function(chunk){append(lastIndex,chunk.start,!1),append(chunk.start,chunk.end,!0),lastIndex=chunk.end})),append(lastIndex,totalLength,!1)}return allChunks};function defaultSanitize(string){return string}}])},"./node_modules/reakit/es/Radio/Radio.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>Radio});var _rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/reakit/es/_rollupPluginBabelHelpers-1f0bf8c2.js"),reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/reakit-system/es/createComponent.js"),reakit_system_createHook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/reakit-system/es/createHook.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),reakit_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/reakit-utils/es/useForkRef.js"),reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__("./node_modules/reakit-warning/es/index.js"),__webpack_require__("./node_modules/reakit-utils/es/useLiveRef.js")),reakit_utils_createEvent__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/reakit-utils/es/createEvent.js"),_Composite_CompositeItem_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/reakit/es/Composite/CompositeItem.js"),_keys_d251e56b_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/reakit/es/__keys-d251e56b.js");function getChecked(options){return void 0!==options.checked?options.checked:void 0!==options.value&&options.state===options.value}function fireChange(element,onChange){var event=(0,reakit_utils_createEvent__WEBPACK_IMPORTED_MODULE_2__.y)(element,"change");Object.defineProperties(event,{type:{value:"change"},target:{value:element},currentTarget:{value:element}}),null==onChange||onChange(event)}var useRadio=(0,reakit_system_createHook__WEBPACK_IMPORTED_MODULE_3__.B)({name:"Radio",compose:_Composite_CompositeItem_js__WEBPACK_IMPORTED_MODULE_4__.E,keys:_keys_d251e56b_js__WEBPACK_IMPORTED_MODULE_5__.R,useOptions:function useOptions(_ref,_ref2){var _options$value,value=_ref2.value,checked=_ref2.checked,_ref$unstable_clickOn=_ref.unstable_clickOnEnter,unstable_clickOnEnter=void 0!==_ref$unstable_clickOn&&_ref$unstable_clickOn,_ref$unstable_checkOn=_ref.unstable_checkOnFocus,unstable_checkOnFocus=void 0===_ref$unstable_checkOn||_ref$unstable_checkOn,options=(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_6__._)(_ref,["unstable_clickOnEnter","unstable_checkOnFocus"]);return(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_6__.a)((0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_6__.a)({checked,unstable_clickOnEnter,unstable_checkOnFocus},options),{},{value:null!=(_options$value=options.value)?_options$value:value})},useProps:function useProps(options,_ref3){var htmlRef=_ref3.ref,htmlOnChange=_ref3.onChange,htmlOnClick=_ref3.onClick,htmlProps=(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_6__._)(_ref3,["ref","onChange","onClick"]),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),_React$useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),isNativeRadio=_React$useState3[0],setIsNativeRadio=_React$useState3[1],checked=getChecked(options),isCurrentItemRef=(0,reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_7__.c)(options.currentId===options.id),onChangeRef=(0,reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_7__.c)(htmlOnChange),onClickRef=(0,reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_7__.c)(htmlOnClick);!function useInitialChecked(options){var initialChecked=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((function(){return getChecked(options)}))[0],initialCurrentId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(options.currentId)[0],id=options.id,setCurrentId=options.setCurrentId;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){initialChecked&&id&&initialCurrentId!==id&&(null==setCurrentId||setCurrentId(id))}),[initialChecked,id,setCurrentId,initialCurrentId])}(options),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var element=ref.current;element&&("INPUT"===element.tagName&&"radio"===element.type||setIsNativeRadio(!1))}),[]);var onChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(event){var _onChangeRef$current,_options$setState;null===(_onChangeRef$current=onChangeRef.current)||void 0===_onChangeRef$current||_onChangeRef$current.call(onChangeRef,event),event.defaultPrevented||options.disabled||null===(_options$setState=options.setState)||void 0===_options$setState||_options$setState.call(options,options.value)}),[options.disabled,options.setState,options.value]),onClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(event){var _onClickRef$current;null===(_onClickRef$current=onClickRef.current)||void 0===_onClickRef$current||_onClickRef$current.call(onClickRef,event),event.defaultPrevented||isNativeRadio||fireChange(event.currentTarget,onChange)}),[onChange,isNativeRadio]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var element=ref.current;element&&options.unstable_moves&&isCurrentItemRef.current&&options.unstable_checkOnFocus&&fireChange(element,onChange)}),[options.unstable_moves,options.unstable_checkOnFocus,onChange]),(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_6__.a)({ref:(0,reakit_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__.c)(ref,htmlRef),role:isNativeRadio?void 0:"radio",type:isNativeRadio?"radio":void 0,value:isNativeRadio?options.value:void 0,name:isNativeRadio?options.baseId:void 0,"aria-checked":checked,checked,onChange,onClick},htmlProps)}}),Radio=(0,reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_9__.L)({as:"input",memo:!0,useHook:useRadio})},"./node_modules/reakit/es/Radio/RadioGroup.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>RadioGroup});var _rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/reakit/es/_rollupPluginBabelHelpers-1f0bf8c2.js"),reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/reakit-system/es/createComponent.js"),reakit_system_createHook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/reakit-system/es/createHook.js"),reakit_system_useCreateElement__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/reakit-warning/es/index.js"),__webpack_require__("./node_modules/reakit-system/es/useCreateElement.js")),_Composite_Composite_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/reakit/es/Composite/Composite.js"),_keys_d251e56b_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/reakit/es/__keys-d251e56b.js"),useRadioGroup=(0,reakit_system_createHook__WEBPACK_IMPORTED_MODULE_2__.B)({name:"RadioGroup",compose:_Composite_Composite_js__WEBPACK_IMPORTED_MODULE_3__.Q,keys:_keys_d251e56b_js__WEBPACK_IMPORTED_MODULE_4__.a,useProps:function useProps(_,htmlProps){return(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_5__.a)({role:"radiogroup"},htmlProps)}}),RadioGroup=(0,reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_6__.L)({as:"div",useHook:useRadioGroup,useCreateElement:function useCreateElement$1(type,props,children){return(0,reakit_system_useCreateElement__WEBPACK_IMPORTED_MODULE_7__.C)(type,props,children)}})},"./node_modules/reakit/es/Radio/RadioState.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>useRadioState});var _rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/reakit/es/_rollupPluginBabelHelpers-1f0bf8c2.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),reakit_utils_useSealedState__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/reakit-utils/es/useSealedState.js"),_Composite_CompositeState_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/reakit/es/Composite/CompositeState.js");function useRadioState(initialState){void 0===initialState&&(initialState={});var _useSealedState=(0,reakit_utils_useSealedState__WEBPACK_IMPORTED_MODULE_1__.T)(initialState),initialValue=_useSealedState.state,_useSealedState$loop=_useSealedState.loop,loop=void 0===_useSealedState$loop||_useSealedState$loop,sealed=(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_2__._)(_useSealedState,["state","loop"]),_React$useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue),state=_React$useState[0],setState=_React$useState[1],composite=(0,_Composite_CompositeState_js__WEBPACK_IMPORTED_MODULE_3__.u)((0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_2__.a)((0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_2__.a)({},sealed),{},{loop}));return(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_2__.a)((0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_2__.a)({},composite),{},{state,setState})}},"./node_modules/reakit/es/__keys-d251e56b.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>RADIO_KEYS,a:()=>RADIO_GROUP_KEYS});var RADIO_STATE_KEYS=["baseId","unstable_idCountRef","unstable_virtual","rtl","orientation","items","groups","currentId","loop","wrap","shift","unstable_moves","unstable_hasActiveWidget","unstable_includesBaseElement","state","setBaseId","registerItem","unregisterItem","registerGroup","unregisterGroup","move","next","previous","up","down","first","last","sort","unstable_setVirtual","setRTL","setOrientation","setCurrentId","setLoop","setWrap","setShift","reset","unstable_setIncludesBaseElement","unstable_setHasActiveWidget","setState"],RADIO_KEYS=[].concat(RADIO_STATE_KEYS,["value","checked","unstable_checkOnFocus"]),RADIO_GROUP_KEYS=RADIO_STATE_KEYS},"./packages/block-editor/src/components/dimensions-tool/stories/scale-tool.story.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/panel/index.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/tools-panel/tools-panel/component.js"),_scale_tool__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/block-editor/src/components/dimensions-tool/scale-tool.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"BlockEditor (Private APIs)/DimensionsTool/ScaleTool",component:_scale_tool__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{panelId:{control:{type:null}},onChange:{action:"changed"}},parameters:{sourceLink:"packages/block-editor/src/components/dimensions-tool"}},Default=({panelId,onChange:onChangeProp,...props})=>{const[value,setValue]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(void 0);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Z,{label:"Scale",panelId,resetAll:()=>{setValue(void 0),onChangeProp(void 0)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_scale_tool__WEBPACK_IMPORTED_MODULE_1__.Z,{panelId,onChange:nextValue=>{setValue(nextValue),onChangeProp(nextValue)},value,...props})})})};Default.displayName="Default",Default.args={panelId:"panel-id"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'({\n  panelId,\n  onChange: onChangeProp,\n  ...props\n}) => {\n  const [value, setValue] = useState(undefined);\n  const resetAll = () => {\n    setValue(undefined);\n    onChangeProp(undefined);\n  };\n  return <Panel>\n            <ToolsPanel label="Scale" panelId={panelId} resetAll={resetAll}>\n                <ScaleTool panelId={panelId} onChange={nextValue => {\n        setValue(nextValue);\n        onChangeProp(nextValue);\n      }} value={value} {...props} />\n            </ToolsPanel>\n        </Panel>;\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"];Default.__docgenInfo={description:"",methods:[],displayName:"Default"}}}]);