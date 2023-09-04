"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[1998],{"./packages/components/src/gradient-picker/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/i18n/build-module/index.js"),_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/deprecated/build-module/index.js"),_circular_option_picker__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/circular-option-picker/index.tsx"),_custom_gradient_picker__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/components/src/custom-gradient-picker/index.tsx"),_v_stack__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/src/v-stack/component.tsx"),_color_palette_styles__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/src/color-palette/styles.ts"),_spacer__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/components/src/spacer/component.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const isMultipleOriginArray=arr=>arr.length>0&&arr.every((gradientObj=>{return obj=gradientObj,Array.isArray(obj.gradients)&&!("gradient"in obj);var obj}));function SingleOrigin({className,clearGradient,gradients,onChange,value,...otherProps}){const gradientOptions=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>gradients.map((({gradient,name},index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_circular_option_picker__WEBPACK_IMPORTED_MODULE_3__.ZP.Option,{value:gradient,isSelected:value===gradient,tooltipText:name||(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.gB)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gradient code: %s"),gradient),style:{color:"rgba( 0,0,0,0 )",background:gradient},onClick:value===gradient?clearGradient:()=>onChange(gradient,index),"aria-label":name?(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.gB)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gradient: %s"),name):(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.gB)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gradient code: %s"),gradient)},gradient)))),[gradients,value,onChange,clearGradient]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_circular_option_picker__WEBPACK_IMPORTED_MODULE_3__.ZP.OptionGroup,{className,options:gradientOptions,...otherProps})}function MultipleOrigin({className,clearGradient,gradients,onChange,value,headingLevel}){const instanceId=(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.Z)(MultipleOrigin);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_v_stack__WEBPACK_IMPORTED_MODULE_5__.Z,{spacing:3,className,children:gradients.map((({name,gradients:gradientSet},index)=>{const id=`color-palette-${instanceId}-${index}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_v_stack__WEBPACK_IMPORTED_MODULE_5__.Z,{spacing:2,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_color_palette_styles__WEBPACK_IMPORTED_MODULE_6__.A,{level:headingLevel,id,children:name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SingleOrigin,{clearGradient,gradients:gradientSet,onChange:gradient=>onChange(gradient,index),value,"aria-labelledby":id})]},index)}))})}function Component(props){const{actions,headingLevel,"aria-label":ariaLabel,"aria-labelledby":ariaLabelledby,...otherProps}=props,options=isMultipleOriginArray(props.gradients)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MultipleOrigin,{headingLevel,...otherProps}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SingleOrigin,{...otherProps});let ariaProps;return ariaProps=ariaLabel?{"aria-label":ariaLabel}:ariaLabelledby?{"aria-labelledby":ariaLabelledby}:{"aria-label":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Custom gradient picker.")},(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_circular_option_picker__WEBPACK_IMPORTED_MODULE_3__.ZP,{...ariaProps,actions,options})}function GradientPicker({__nextHasNoMargin=!1,className,gradients=[],onChange,value,clearable=!0,disableCustomGradients=!1,__experimentalIsRenderedInSidebar,headingLevel=2}){const clearGradient=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)((()=>onChange(void 0)),[onChange]);__nextHasNoMargin||(0,_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_7__.Z)("Outer margin styles for wp.components.GradientPicker",{since:"6.1",version:"6.4",hint:"Set the `__nextHasNoMargin` prop to true to start opting into the new styles, which will become the default in a future version"});const deprecatedMarginSpacerProps=__nextHasNoMargin?{}:{marginTop:gradients.length?void 0:3,marginBottom:clearable?0:6};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_spacer__WEBPACK_IMPORTED_MODULE_8__.Z,{marginBottom:0,...deprecatedMarginSpacerProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_v_stack__WEBPACK_IMPORTED_MODULE_5__.Z,{spacing:gradients.length?4:0,children:[!disableCustomGradients&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_custom_gradient_picker__WEBPACK_IMPORTED_MODULE_9__.Z,{__nextHasNoMargin:!0,__experimentalIsRenderedInSidebar,value,onChange}),(gradients.length||clearable)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{className,clearGradient,gradients,onChange,value,actions:clearable&&!disableCustomGradients&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_circular_option_picker__WEBPACK_IMPORTED_MODULE_3__.ZP.ButtonAction,{onClick:clearGradient,children:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Clear")}),headingLevel})]})})}SingleOrigin.displayName="SingleOrigin",MultipleOrigin.displayName="MultipleOrigin",Component.displayName="Component",GradientPicker.displayName="GradientPicker";const __WEBPACK_DEFAULT_EXPORT__=GradientPicker;try{GradientPicker.displayName="GradientPicker",GradientPicker.__docgenInfo={description:"GradientPicker is a React component that renders a color gradient picker to\ndefine a multi step gradient. There's either a _linear_ or a _radial_ type\navailable.\n\n```jsx\nimport { GradientPicker } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst myGradientPicker = () => {\nconst [ gradient, setGradient ] = useState( null );\n\nreturn (\n<GradientPicker\n\t__nextHasNoMargin\n\tvalue={ gradient }\n\tonChange={ ( currentGradient ) => setGradient( currentGradient ) }\n\tgradients={ [\n\t\t{\n\t\t\tname: 'JShine',\n\t\t\tgradient:\n\t\t\t\t'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',\n\t\t\tslug: 'jshine',\n\t\t},\n\t\t{\n\t\t\tname: 'Moonlit Asteroid',\n\t\t\tgradient:\n\t\t\t\t'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',\n\t\t\tslug: 'moonlit-asteroid',\n\t\t},\n\t\t{\n\t\t\tname: 'Rastafarie',\n\t\t\tgradient:\n\t\t\t\t'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',\n\t\t\tslug: 'rastafari',\n\t\t},\n\t] }\n/>\n);\n};\n```",displayName:"GradientPicker",props:{className:{defaultValue:null,description:"The class name added to the wrapper.",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"The function called when a new gradient has been defined. It is passed to\nthe `currentGradient` as an argument.",name:"onChange",required:!0,type:{name:"(currentGradient: string) => void"}},value:{defaultValue:{value:"'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)'"},description:"The current value of the gradient. Pass a css gradient string (See default value for example).\nOptionally pass in a `null` value to specify no gradient is currently selected.",name:"value",required:!1,type:{name:"string"}},clearable:{defaultValue:{value:"true"},description:"Whether the palette should have a clearing button or not.",name:"clearable",required:!1,type:{name:"boolean"}},headingLevel:{defaultValue:{value:"2"},description:"The heading level. Only applies in cases where gradients are provided\nfrom multiple origins (ie. when the array passed as the `gradients` prop\ncontains two or more items).",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:"2"},{value:"1"},{value:'"1"'},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'}]}},"aria-label":{defaultValue:null,description:"A label to identify the purpose of the control.\n@todo [#54055] Either this or `aria-labelledby` should be required",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"An ID of an element to provide a label for the control.\n@todo [#54055] Either this or `aria-label` should be required",name:"aria-labelledby",required:!1,type:{name:"string"}},gradients:{defaultValue:{value:"[]"},description:"An array of objects as predefined gradients displayed above the gradient\nselector. Alternatively, if there are multiple sets (or 'origins') of\ngradients, you can pass an array of objects each with a `name` and a\n`gradients` array which will in turn contain the predefined gradient objects.",name:"gradients",required:!1,type:{name:"GradientsProp"}},__nextHasNoMargin:{defaultValue:{value:"false"},description:"Start opting in to the new margin-free styles that will become the default\nin a future version, currently scheduled to be WordPress 6.4. (The prop\ncan be safely removed once this happens.)",name:"__nextHasNoMargin",required:!1,type:{name:"boolean"}},disableCustomGradients:{defaultValue:{value:"false"},description:"If true, the gradient picker will not be displayed and only defined\ngradients from `gradients` will be shown.",name:"disableCustomGradients",required:!1,type:{name:"boolean"}},__experimentalIsRenderedInSidebar:{defaultValue:{value:"false"},description:"Whether this is rendered in the sidebar.",name:"__experimentalIsRenderedInSidebar",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/gradient-picker/index.tsx#GradientPicker"]={docgenInfo:GradientPicker.__docgenInfo,name:"GradientPicker",path:"packages/components/src/gradient-picker/index.tsx#GradientPicker"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/gradient-picker/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,Default:()=>Default,WithNoExistingGradients:()=>WithNoExistingGradients,MultipleOrigins:()=>MultipleOrigins,__namedExportsOrder:()=>__namedExportsOrder});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/gradient-picker/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/GradientPicker",component:___WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{sourceLink:"packages/components/src/gradient-picker",controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}},actions:{argTypesRegex:"^on.*"}},argTypes:{value:{control:{type:null}}}},GRADIENTS=[{name:"Vivid cyan blue to vivid purple",gradient:"linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",slug:"vivid-cyan-blue-to-vivid-purple"},{name:"Light green cyan to vivid green cyan",gradient:"linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)",slug:"light-green-cyan-to-vivid-green-cyan"},{name:"Luminous vivid amber to luminous vivid orange",gradient:"linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)",slug:"luminous-vivid-amber-to-luminous-vivid-orange"},{name:"Luminous vivid orange to vivid red",gradient:"linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)",slug:"luminous-vivid-orange-to-vivid-red"},{name:"Very light gray to cyan bluish gray",gradient:"linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)",slug:"very-light-gray-to-cyan-bluish-gray"},{name:"Cool to warm spectrum",gradient:"linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)",slug:"cool-to-warm-spectrum"}],Template=({onChange,...props})=>{const[gradient,setGradient]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...props,value:gradient,onChange:(...changeArgs)=>{setGradient(...changeArgs),onChange?.(...changeArgs)}})};Template.displayName="Template";const Default=Template.bind({});Default.args={__nextHasNoMargin:!0,gradients:GRADIENTS};const WithNoExistingGradients=Template.bind({});WithNoExistingGradients.args={...Default.args,gradients:[]};const MultipleOrigins=Template.bind({});MultipleOrigins.args={...Default.args,gradients:[{name:"Origin 1",gradients:GRADIENTS},{name:"Origin 2",gradients:GRADIENTS}]},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  onChange,\n  ...props\n}) => {\n  const [gradient, setGradient] = useState<(typeof props)['value']>(null);\n  return <GradientPicker {...props} value={gradient} onChange={(...changeArgs) => {\n    setGradient(...changeArgs);\n    onChange?.(...changeArgs);\n  }} />;\n}",...Default.parameters?.docs?.source}}},WithNoExistingGradients.parameters={...WithNoExistingGradients.parameters,docs:{...WithNoExistingGradients.parameters?.docs,source:{originalSource:"({\n  onChange,\n  ...props\n}) => {\n  const [gradient, setGradient] = useState<(typeof props)['value']>(null);\n  return <GradientPicker {...props} value={gradient} onChange={(...changeArgs) => {\n    setGradient(...changeArgs);\n    onChange?.(...changeArgs);\n  }} />;\n}",...WithNoExistingGradients.parameters?.docs?.source}}},MultipleOrigins.parameters={...MultipleOrigins.parameters,docs:{...MultipleOrigins.parameters?.docs,source:{originalSource:"({\n  onChange,\n  ...props\n}) => {\n  const [gradient, setGradient] = useState<(typeof props)['value']>(null);\n  return <GradientPicker {...props} value={gradient} onChange={(...changeArgs) => {\n    setGradient(...changeArgs);\n    onChange?.(...changeArgs);\n  }} />;\n}",...MultipleOrigins.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithNoExistingGradients","MultipleOrigins"]}}]);