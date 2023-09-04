"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[1960],{"./packages/components/src/base-control/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xp:()=>BaseControl,ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_visually_hidden__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/visually-hidden/component.tsx"),_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/base-control/styles/base-control-styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const BaseControl=({__nextHasNoMarginBottom=!1,id,label,hideLabelFromVision=!1,help,className,children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__.im,{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("components-base-control",className),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__.ob,{className:"components-base-control__field",__nextHasNoMarginBottom,children:[label&&id&&(hideLabelFromVision?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_visually_hidden__WEBPACK_IMPORTED_MODULE_3__.Z,{as:"label",htmlFor:id,children:label}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__.ar,{className:"components-base-control__label",htmlFor:id,children:label})),label&&!id&&(hideLabelFromVision?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_visually_hidden__WEBPACK_IMPORTED_MODULE_3__.Z,{as:"label",children:label}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BaseControl.VisualLabel,{children:label})),children]}),!!help&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__.vB,{id:id?id+"__help":void 0,className:"components-base-control__help",__nextHasNoMarginBottom,children:help})]});BaseControl.displayName="BaseControl";const VisualLabel=({className,children,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__.yF,{...props,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("components-base-control__label",className),children});VisualLabel.displayName="VisualLabel",BaseControl.VisualLabel=VisualLabel;const __WEBPACK_DEFAULT_EXPORT__=BaseControl;try{useBaseControlProps.displayName="useBaseControlProps",useBaseControlProps.__docgenInfo={description:"Generate props for the `BaseControl` and the inner control itself.\n\nNamely, it takes care of generating a unique `id`, properly associating it with the `label` and `help` elements.",displayName:"useBaseControlProps",props:{label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The HTML `id` of the control element (passed in as a child to `BaseControl`) to which labels and help text are being generated.\nThis is necessary to accessibly associate the label with that element.\n\nThe recommended way is to use the `useBaseControlProps` hook, which takes care of generating a unique `id` for you.\nOtherwise, if you choose to pass an explicit `id` to this prop, you are responsible for ensuring the uniqueness of the `id`.",name:"id",required:!1,type:{name:"string"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional description for the control.\n\nIt is preferable to use plain text for `help`, as it can be accessibly associated with the control using `aria-describedby`.\nWhen the `help` contains links, or otherwise non-plain text content, it will be associated with the control using `aria-details`.",name:"help",required:!1,type:{name:"ReactNode"}},__nextHasNoMarginBottom:{defaultValue:{value:"false"},description:"Start opting into the new margin-free styles that will become the default in a future version.",name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/base-control/index.tsx#useBaseControlProps"]={docgenInfo:useBaseControlProps.__docgenInfo,name:"useBaseControlProps",path:"packages/components/src/base-control/index.tsx#useBaseControlProps"})}catch(__react_docgen_typescript_loader_error){}try{BaseControl.displayName="BaseControl",BaseControl.__docgenInfo={description:"`BaseControl` is a component used to generate labels and help text for components handling user inputs.\n\n```jsx\nimport { BaseControl, useBaseControlProps } from '@wordpress/components';\n\n// Render a `BaseControl` for a textarea input\nconst MyCustomTextareaControl = ({ children, ...baseProps }) => (\n\t// `useBaseControlProps` is a convenience hook to get the props for the `BaseControl`\n\t// and the inner control itself. Namely, it takes care of generating a unique `id`,\n\t// properly associating it with the `label` and `help` elements.\n\tconst { baseControlProps, controlProps } = useBaseControlProps( baseProps );\n\n\treturn (\n\t\t<BaseControl { ...baseControlProps } __nextHasNoMarginBottom={ true }>\n\t\t\t<textarea { ...controlProps }>\n\t\t\t  { children }\n\t\t\t</textarea>\n\t\t</BaseControl>\n\t);\n);\n```",displayName:"BaseControl",props:{__nextHasNoMarginBottom:{defaultValue:{value:"false"},description:"Start opting into the new margin-free styles that will become the default in a future version.",name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The HTML `id` of the control element (passed in as a child to `BaseControl`) to which labels and help text are being generated.\nThis is necessary to accessibly associate the label with that element.\n\nThe recommended way is to use the `useBaseControlProps` hook, which takes care of generating a unique `id` for you.\nOtherwise, if you choose to pass an explicit `id` to this prop, you are responsible for ensuring the uniqueness of the `id`.",name:"id",required:!1,type:{name:"string"}},help:{defaultValue:null,description:"Additional description for the control.\n\nIt is preferable to use plain text for `help`, as it can be accessibly associated with the control using `aria-describedby`.\nWhen the `help` contains links, or otherwise non-plain text content, it will be associated with the control using `aria-details`.",name:"help",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The content to be displayed within the `BaseControl`.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/base-control/index.tsx#BaseControl"]={docgenInfo:BaseControl.__docgenInfo,name:"BaseControl",path:"packages/components/src/base-control/index.tsx#BaseControl"})}catch(__react_docgen_typescript_loader_error){}try{VisualLabel.displayName="BaseControl.VisualLabel",VisualLabel.__docgenInfo={description:"`BaseControl.VisualLabel` is used to render a purely visual label inside a `BaseControl` component.\n\nIt should only be used in cases where the children being rendered inside `BaseControl` are already accessibly labeled,\ne.g., a button, but we want an additional visual label for that section equivalent to the labels `BaseControl` would\notherwise use if the `label` prop was passed.",displayName:"BaseControl.VisualLabel",props:{as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/base-control/index.tsx#BaseControl.VisualLabel"]={docgenInfo:BaseControl.VisualLabel.__docgenInfo,name:"BaseControl.VisualLabel",path:"packages/components/src/base-control/index.tsx#BaseControl.VisualLabel"})}catch(__react_docgen_typescript_loader_error){}try{VisualLabel.displayName="VisualLabel",VisualLabel.__docgenInfo={description:"`BaseControl.VisualLabel` is used to render a purely visual label inside a `BaseControl` component.\n\nIt should only be used in cases where the children being rendered inside `BaseControl` are already accessibly labeled,\ne.g., a button, but we want an additional visual label for that section equivalent to the labels `BaseControl` would\notherwise use if the `label` prop was passed.",displayName:"VisualLabel",props:{as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/base-control/index.tsx#VisualLabel"]={docgenInfo:VisualLabel.__docgenInfo,name:"VisualLabel",path:"packages/components/src/base-control/index.tsx#VisualLabel"})}catch(__react_docgen_typescript_loader_error){}try{basecontrol.displayName="basecontrol",basecontrol.__docgenInfo={description:"`BaseControl` is a component used to generate labels and help text for components handling user inputs.\n\n```jsx\nimport { BaseControl, useBaseControlProps } from '@wordpress/components';\n\n// Render a `BaseControl` for a textarea input\nconst MyCustomTextareaControl = ({ children, ...baseProps }) => (\n\t// `useBaseControlProps` is a convenience hook to get the props for the `BaseControl`\n\t// and the inner control itself. Namely, it takes care of generating a unique `id`,\n\t// properly associating it with the `label` and `help` elements.\n\tconst { baseControlProps, controlProps } = useBaseControlProps( baseProps );\n\n\treturn (\n\t\t<BaseControl { ...baseControlProps } __nextHasNoMarginBottom={ true }>\n\t\t\t<textarea { ...controlProps }>\n\t\t\t  { children }\n\t\t\t</textarea>\n\t\t</BaseControl>\n\t);\n);\n```",displayName:"basecontrol",props:{__nextHasNoMarginBottom:{defaultValue:{value:"false"},description:"Start opting into the new margin-free styles that will become the default in a future version.",name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The HTML `id` of the control element (passed in as a child to `BaseControl`) to which labels and help text are being generated.\nThis is necessary to accessibly associate the label with that element.\n\nThe recommended way is to use the `useBaseControlProps` hook, which takes care of generating a unique `id` for you.\nOtherwise, if you choose to pass an explicit `id` to this prop, you are responsible for ensuring the uniqueness of the `id`.",name:"id",required:!1,type:{name:"string"}},help:{defaultValue:null,description:"Additional description for the control.\n\nIt is preferable to use plain text for `help`, as it can be accessibly associated with the control using `aria-describedby`.\nWhen the `help` contains links, or otherwise non-plain text content, it will be associated with the control using `aria-details`.",name:"help",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The content to be displayed within the `BaseControl`.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/base-control/index.tsx#basecontrol"]={docgenInfo:basecontrol.__docgenInfo,name:"basecontrol",path:"packages/components/src/base-control/index.tsx#basecontrol"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/ui/utils/space.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>space});const GRID_BASE="4px";function space(value){if(void 0===value)return;if(!value)return"0";const asInt="number"==typeof value?value:Number(value);return"undefined"!=typeof window&&window.CSS?.supports?.("margin",value.toString())||Number.isNaN(asInt)?value.toString():`calc(${GRID_BASE} * ${value})`}},"./packages/components/src/base-control/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithHelpText:()=>WithHelpText,WithVisualLabel:()=>WithVisualLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story});var use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),base_control=__webpack_require__("./packages/components/src/base-control/index.tsx");var src_button=__webpack_require__("./packages/components/src/button/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const index_story={title:"Components/BaseControl",component:base_control.ZP,argTypes:{children:{control:{type:null}},help:{control:{type:"text"}},label:{control:{type:"text"}}},parameters:{sourceLink:"packages/components/src/base-control",controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},BaseControlWithTextarea=props=>{const{baseControlProps,controlProps}=function useBaseControlProps(props){const{help,id:preferredId,...restProps}=props,uniqueId=(0,use_instance_id.Z)(base_control.ZP,"wp-components-base-control",preferredId);return{baseControlProps:{id:uniqueId,help,...restProps},controlProps:{id:uniqueId,...help?{["string"==typeof help?"aria-describedby":"aria-details"]:`${uniqueId}__help`}:{}}}}(props);return(0,jsx_runtime.jsx)(base_control.ZP,{...baseControlProps,children:(0,jsx_runtime.jsx)("textarea",{style:{display:"block"},...controlProps})})};BaseControlWithTextarea.displayName="BaseControlWithTextarea";const Default=BaseControlWithTextarea.bind({});Default.args={__nextHasNoMarginBottom:!0,label:"Label text"};const WithHelpText=BaseControlWithTextarea.bind({});WithHelpText.args={...Default.args,help:"Help text adds more explanation."};const WithVisualLabel=props=>(base_control.ZP.VisualLabel.displayName="BaseControl.VisualLabel",(0,jsx_runtime.jsxs)(base_control.ZP,{...props,children:[(0,jsx_runtime.jsx)(base_control.ZP.VisualLabel,{children:"Visual label"}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(src_button.ZP,{variant:"secondary",children:"Select an author"})})]}));WithVisualLabel.displayName="WithVisualLabel",WithVisualLabel.args={...Default.args,help:"This button is already accessibly labeled.",label:void 0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"props => {\n  const {\n    baseControlProps,\n    controlProps\n  } = useBaseControlProps(props);\n  return <BaseControl {...baseControlProps}>\n            <textarea style={{\n      display: 'block'\n    }} {...controlProps} />\n        </BaseControl>;\n}",...Default.parameters?.docs?.source}}},WithHelpText.parameters={...WithHelpText.parameters,docs:{...WithHelpText.parameters?.docs,source:{originalSource:"props => {\n  const {\n    baseControlProps,\n    controlProps\n  } = useBaseControlProps(props);\n  return <BaseControl {...baseControlProps}>\n            <textarea style={{\n      display: 'block'\n    }} {...controlProps} />\n        </BaseControl>;\n}",...WithHelpText.parameters?.docs?.source}}},WithVisualLabel.parameters={...WithVisualLabel.parameters,docs:{...WithVisualLabel.parameters?.docs,source:{originalSource:"props => {\n  // @ts-expect-error - Unclear how to fix, see also https://github.com/WordPress/gutenberg/pull/39468#discussion_r827150516\n  BaseControl.VisualLabel.displayName = 'BaseControl.VisualLabel';\n  return <BaseControl {...props}>\n            <BaseControl.VisualLabel>Visual label</BaseControl.VisualLabel>\n            <div>\n                <Button variant=\"secondary\">Select an author</Button>\n            </div>\n        </BaseControl>;\n}",...WithVisualLabel.parameters?.docs?.source},description:{story:"`BaseControl.VisualLabel` is used to render a purely visual label inside a `BaseControl` component.\n\nIt should only be used in cases where the children being rendered inside `BaseControl` are already accessibly labeled,\ne.g., a button, but we want an additional visual label for that section equivalent to the labels `BaseControl` would\notherwise use if the `label` prop was passed.",...WithVisualLabel.parameters?.docs?.description}}};const __namedExportsOrder=["Default","WithHelpText","WithVisualLabel"];try{WithVisualLabel.displayName="WithVisualLabel",WithVisualLabel.__docgenInfo={description:"`BaseControl.VisualLabel` is used to render a purely visual label inside a `BaseControl` component.\n\nIt should only be used in cases where the children being rendered inside `BaseControl` are already accessibly labeled,\ne.g., a button, but we want an additional visual label for that section equivalent to the labels `BaseControl` would\notherwise use if the `label` prop was passed.",displayName:"WithVisualLabel",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/base-control/stories/index.story.tsx#WithVisualLabel"]={docgenInfo:WithVisualLabel.__docgenInfo,name:"WithVisualLabel",path:"packages/components/src/base-control/stories/index.story.tsx#WithVisualLabel"})}catch(__react_docgen_typescript_loader_error){}}}]);