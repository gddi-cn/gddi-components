(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/Button.stories.tsx":"./src/stories/Button.stories.tsx","./stories/ModelSizeViz2D.stories.tsx":"./src/stories/ModelSizeViz2D.stories.tsx","./stories/ModelSizeViz3D.stories.tsx":"./src/stories/ModelSizeViz3D.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/components/ModelSizeViz.hooks.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useGraphData}));var react=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.fill.js"),__webpack_require__("./node_modules/core-js/modules/es.array.splice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js");var calNNSize=function calNNSize(){var numChannels=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,fpsPerChannel=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,fps=numChannels*fpsPerChannel,widthBinSize=10,widthBinCnt=Math.floor(250/widthBinSize+1),fpsBinSize1=Math.floor(960/widthBinCnt),layerWidth=350-Math.floor(fps/fpsBinSize1)*widthBinSize,fpsBinSize2=Math.floor(100),numLayers=4;return fps<595&&(numLayers=8-Math.floor(fps/fpsBinSize2)),{layerWidth:layerWidth,numLayers:numLayers}},calNetworkSize=function calNetworkSize(){var numChannels=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,fpsPerChannel=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,k=-1740/959,b=1800-k,fps=numChannels*fpsPerChannel;return Math.floor(k*fps+b)};function useGraphData(vizGraphType,channels,fpsPerChannel,calNetworkSize1,calNNSize1){var graphData=Object(react.useMemo)((function(){var channels1=function validateChannel(channels){return channels<1?1:channels>32?32:channels}(channels),fpsPerChannel1=function validateFPS(fps){return fps<1?1:fps>30?30:fps}(fpsPerChannel);if("NN"===vizGraphType){var myCalNNSize=calNNSize;calNNSize1&&(myCalNNSize=calNNSize1);var _myCalNNSize=myCalNNSize(channels1,fpsPerChannel1),layerWidth=_myCalNNSize.layerWidth,numLayers=_myCalNNSize.numLayers;return console.log("layerWidth: "+layerWidth+" - numLayers: "+numLayers),function genNN(){for(var maxWidth=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200,numLayers=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,minRatio=.6,res={nodes:[],links:[]},layerNodes=[],_loop2=function _loop2(l){var curWidth=Math.floor(maxWidth*(Math.random()*(1-minRatio)+minRatio));0===l&&(curWidth=Math.floor(.3*maxWidth)),l===numLayers-1&&(curWidth=Math.floor(.2*maxWidth));var layerType=l;if(l>0&&l<numLayers-1&&(layerType=-1),layerNodes.push(new Array(curWidth).fill(0).map((function(){return{id:self.crypto.randomUUID(),nodeType:layerType,description:"neuron"}}))),layerNodes[layerNodes.length-1].forEach((function(node){res.nodes.push(node)})),layerNodes.length>1)for(var lastLayerNodes=layerNodes[layerNodes.length-2],thisLayerNodes=layerNodes[layerNodes.length-1],srcIdx=0;srcIdx<lastLayerNodes.length;srcIdx+=1){var maxNumConnect=Math.floor(3*Math.random()+1);1!==l&&l!==numLayers-1||(maxNumConnect=8);for(var n=0;n<maxNumConnect;n+=1){var dstIdx=Math.floor(Math.random()*thisLayerNodes.length);res.links.push({source:lastLayerNodes[srcIdx].id,target:thisLayerNodes[dstIdx].id})}}},l=0;l<numLayers;l+=1)_loop2(l);return res}(layerWidth,numLayers)}var myCalNetworkSize=calNetworkSize;calNetworkSize1&&(myCalNetworkSize=calNetworkSize1);var N=myCalNetworkSize(channels1,fpsPerChannel1);return console.log("N: "+N),function genNetwork(){for(var N=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300,res={nodes:new Array(N).fill(0).map((function(val,idx){return{id:idx,nodeType:1,description:"neuron"}})),links:[]},i=0;i<N;i+=1)for(var j=0;j<2;j+=1)res.links.push({source:i,target:Math.floor(Math.random()*(N-i)+i)});return res}(N)}),[channels,fpsPerChannel,vizGraphType,calNetworkSize1,calNNSize1]);return graphData}},"./src/components/ModelSizeViz.types.ts":function(module,exports){},"./src/components/ModelSizeViz2D/index.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ModelSizeViz2D}));__webpack_require__("./node_modules/react/index.js");var react_force_graph_module=__webpack_require__("./node_modules/react-force-graph/dist/react-force-graph.module.js"),ModelSizeViz_hooks=__webpack_require__("./src/components/ModelSizeViz.hooks.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ModelSizeViz2D(_ref){var channels=_ref.channels,fpsPerChannel=_ref.fpsPerChannel,calNNSize=_ref.calNNSize,calNetworksize=_ref.calNetworksize,vizGraphType=_ref.vizGraphType,width=_ref.width,height=_ref.height,backgroundColor=_ref.backgroundColor,_linkColor=_ref.linkColor,graphData=Object(ModelSizeViz_hooks.a)(vizGraphType,channels,fpsPerChannel,calNetworksize,calNNSize);return Object(jsx_runtime.jsx)(react_force_graph_module.a,{width:width,height:height,backgroundColor:backgroundColor,graphData:graphData,d3AlphaDecay:0,d3VelocityDecay:.08,cooldownTime:6e3,nodeAutoColorBy:"nodeType",linkColor:function linkColor(){return _linkColor||"rgba(0, 0, 0, 0.08 )"},enablePointerInteraction:!1})}ModelSizeViz2D.displayName="ModelSizeViz2D";try{ModelSizeViz2D.displayName="ModelSizeViz2D",ModelSizeViz2D.__docgenInfo={description:"",displayName:"ModelSizeViz2D",props:{channels:{defaultValue:null,description:"",name:"channels",required:!0,type:{name:"number"}},fpsPerChannel:{defaultValue:null,description:"",name:"fpsPerChannel",required:!0,type:{name:"number"}},calNNSize:{defaultValue:null,description:"The function to calculate the NN size based on inputs.\n@returns layerWidth - the max number of nodes in all layers. numLayers -\nnumLayers - number of layers.\n@param channels Number of channels (min = 1, max = 32)\n@param fpsPerChannel FPS per channel (min = 1, max = 30)",name:"calNNSize",required:!1,type:{name:"CalNNSizeFunc"}},calNetworksize:{defaultValue:null,description:"The function to calculate the network size based on inputs.\nReturns the number of nodes in the network.\n@param channels Number of channels (min = 1, max = 32)\n@param fpsPerChannel FPS per channel (min = 1, max = 30)",name:"calNetworksize",required:!1,type:{name:"CalNetworkSizeFunc"}},vizGraphType:{defaultValue:null,description:"The 2 types of graph shapes you can chosse from.\n'NN' -- neural network with layers; relatively large; default;\n'Network' -- random network; relatively small;",name:"vizGraphType",required:!1,type:{name:"enum",value:[{value:'"Network"'},{value:'"NN"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},linkColor:{defaultValue:null,description:"",name:"linkColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ModelSizeViz2D/ModelSizeViz2D.tsx#ModelSizeViz2D"]={docgenInfo:ModelSizeViz2D.__docgenInfo,name:"ModelSizeViz2D",path:"src/components/ModelSizeViz2D/ModelSizeViz2D.tsx#ModelSizeViz2D"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ModelSizeViz3D/index.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ModelSizeViz3D}));__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/react/index.js");var react_force_graph_module=__webpack_require__("./node_modules/react-force-graph/dist/react-force-graph.module.js"),ModelSizeViz_hooks=__webpack_require__("./src/components/ModelSizeViz.hooks.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ModelSizeViz3D(_ref){var channels=_ref.channels,fpsPerChannel=_ref.fpsPerChannel,calNNSize=_ref.calNNSize,calNetworksize=_ref.calNetworksize,vizGraphType=_ref.vizGraphType,width=_ref.width,height=_ref.height,backgroundColor=_ref.backgroundColor,_linkColor=_ref.linkColor,graphData=Object(ModelSizeViz_hooks.a)(vizGraphType,channels,fpsPerChannel,calNetworksize,calNNSize);return Object(jsx_runtime.jsx)(react_force_graph_module.b,{width:width,height:height,backgroundColor:backgroundColor,graphData:graphData,nodeLabel:function nodeLabel(node){return node.nodeType+": "+node.description},nodeAutoColorBy:"nodeType",nodeOpacity:1,linkColor:function linkColor(){return _linkColor||"rgba(0, 0, 0, 0.08 )"},linkOpacity:1,showNavInfo:!1,nodeRelSize:6,enablePointerInteraction:!1})}ModelSizeViz3D.displayName="ModelSizeViz3D";try{ModelSizeViz3D.displayName="ModelSizeViz3D",ModelSizeViz3D.__docgenInfo={description:"",displayName:"ModelSizeViz3D",props:{channels:{defaultValue:null,description:"",name:"channels",required:!0,type:{name:"number"}},fpsPerChannel:{defaultValue:null,description:"",name:"fpsPerChannel",required:!0,type:{name:"number"}},calNNSize:{defaultValue:null,description:"The function to calculate the NN size based on inputs.\n@returns layerWidth - the max number of nodes in all layers. numLayers -\nnumLayers - number of layers.\n@param channels Number of channels (min = 1, max = 32)\n@param fpsPerChannel FPS per channel (min = 1, max = 30)",name:"calNNSize",required:!1,type:{name:"CalNNSizeFunc"}},calNetworksize:{defaultValue:null,description:"The function to calculate the network size based on inputs.\nReturns the number of nodes in the network.\n@param channels Number of channels (min = 1, max = 32)\n@param fpsPerChannel FPS per channel (min = 1, max = 30)",name:"calNetworksize",required:!1,type:{name:"CalNetworkSizeFunc"}},vizGraphType:{defaultValue:null,description:"The 2 types of graph shapes you can chosse from.\n'NN' -- neural network with layers; relatively large; default;\n'Network' -- random network; relatively small;",name:"vizGraphType",required:!1,type:{name:"enum",value:[{value:'"Network"'},{value:'"NN"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},linkColor:{defaultValue:null,description:"",name:"linkColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ModelSizeViz3D/ModelSizeViz3D.tsx#ModelSizeViz3D"]={docgenInfo:ModelSizeViz3D.__docgenInfo,name:"ModelSizeViz3D",path:"src/components/ModelSizeViz3D/ModelSizeViz3D.tsx#ModelSizeViz3D"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/index.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";var _ModelSizeViz3D__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ModelSizeViz3D/index.ts");__webpack_require__.d(__webpack_exports__,"ModelSizeViz3D",(function(){return _ModelSizeViz3D__WEBPACK_IMPORTED_MODULE_0__.a}));var _ModelSizeViz2D__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ModelSizeViz2D/index.ts");__webpack_require__.d(__webpack_exports__,"ModelSizeViz2D",(function(){return _ModelSizeViz2D__WEBPACK_IMPORTED_MODULE_1__.a}));__webpack_require__("./src/components/ModelSizeViz.types.ts")},"./src/stories/Button.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Disabled",(function(){return Disabled})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small})),__webpack_require__.d(__webpack_exports__,"Medium",(function(){return Medium})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js");var _templateObject,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["size","primary","disabled","text","onClick"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var StyledButton=styled_components_browser_esm.a.button(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  border: 0;\n  line-height: 1;\n  font-size: 15px;\n  cursor: pointer;\n  font-weight: 700;\n  font-weight: bold;\n  border-radius: 3px;\n  display: inline-block;>\n  padding: ",";\n  color: ",";\n  background-color: ",";\n  opacity: ",";\n  &:hover {\n    background-color: ",";\n  }\n  &:active {\n    border: solid 2px #1b116e;\n    padding: ",";\n  }\n"])),(function(props){return"small"===props.size?"7px 25px 8px":"medium"===props.size?"9px 30px 11px":"14px 30px 16px"}),(function(props){return props.primary?"#1b116e":"#ffffff"}),(function(props){return props.primary?"#6bedb5":"#1b116e"}),(function(props){return props.disabled?.5:1}),(function(props){return props.primary?"#55bd90":"#6bedb5"}),(function(props){return"small"===props.size?"5px 23px 6px":"medium"===props.size?"7px 28px 9px":"12px 28px 14px"}));function Button(_ref){var size=_ref.size,primary=_ref.primary,disabled=_ref.disabled,text=_ref.text,onClick=_ref.onClick,props=_objectWithoutProperties(_ref,_excluded);return Object(jsx_runtime.jsx)(StyledButton,Object.assign({type:"button",onClick:onClick,primary:primary,disabled:disabled,size:size},props,{children:text}))}Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Example/Button",component:Button,argTypes:{}};var Button_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Button,Object.assign({},args))};Button_stories_Template.displayName="Template";var Primary=Button_stories_Template.bind({});Primary.args={primary:!0,disabled:!1,text:"Primary"};var Secondary=Button_stories_Template.bind({});Secondary.args={primary:!1,disabled:!1,text:"Secondary"};var Disabled=Button_stories_Template.bind({});Disabled.args={primary:!1,disabled:!0,text:"Disabled"};var Small=Button_stories_Template.bind({});Small.args={primary:!0,disabled:!1,size:"small",text:"Small"};var Medium=Button_stories_Template.bind({});Medium.args={primary:!0,disabled:!1,size:"medium",text:"Medium"};var Large=Button_stories_Template.bind({});Large.args={primary:!0,disabled:!1,size:"large",text:"Large"},Primary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Secondary.parameters),Disabled.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Disabled.parameters),Small.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Small.parameters),Medium.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Medium.parameters),Large.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Large.parameters)},"./src/stories/ModelSizeViz2D.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"BasicUsage",(function(){return BasicUsage}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var _components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Example/ModelSizeViz2D",component:_components__WEBPACK_IMPORTED_MODULE_3__.ModelSizeViz2D,argTypes:{channels:{control:{type:"range",min:1,max:32,step:1}},fpsPerChannel:{control:{type:"range",min:1,max:30,step:1}}}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components__WEBPACK_IMPORTED_MODULE_3__.ModelSizeViz2D,Object.assign({},args))};Template.displayName="Template";var BasicUsage=Template.bind({});BasicUsage.args={width:600,height:600,channels:8,fpsPerChannel:15,backgroundColor:"#ffffff",linkColor:void 0,calNetworksize:function calNetworkSizeFunc(c,f){var k=-570/959,fps=c*f;return Math.floor(k*fps+600.5943691345151)},calNNSize:function calNNSizeFunc(numChannels,fpsPerChannel){var fps=numChannels*fpsPerChannel,kL=-3/959,kW=-220/959,numLayers=Math.round(kL*fps+7.003128258602711);return{layerWidth:Math.round(kW*fps+300.2294056308655),numLayers:numLayers}}},BasicUsage.storyName="ModelSizeViz2D",BasicUsage.parameters=Object.assign({storySource:{source:"(args) => (\n  <ModelSizeViz2D {...args} />\n)"}},BasicUsage.parameters)},"./src/stories/ModelSizeViz3D.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"BasicUsage",(function(){return BasicUsage}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var _components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Example/ModelSizeViz3D",component:_components__WEBPACK_IMPORTED_MODULE_3__.ModelSizeViz3D,argTypes:{channels:{control:{type:"range",min:1,max:32,step:1}},fpsPerChannel:{control:{type:"range",min:1,max:30,step:1}}}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components__WEBPACK_IMPORTED_MODULE_3__.ModelSizeViz3D,Object.assign({},args))};Template.displayName="Template";var BasicUsage=Template.bind({});BasicUsage.args={width:600,height:600,channels:8,fpsPerChannel:15,backgroundColor:"#ffffff",linkColor:void 0},BasicUsage.storyName="ModelSizeViz3D",BasicUsage.parameters=Object.assign({storySource:{source:"(args) => (\n  <ModelSizeViz3D {...args} />\n)"}},BasicUsage.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);