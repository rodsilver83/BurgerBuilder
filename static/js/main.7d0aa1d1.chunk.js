(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={breadTop:"BurgerIngredient_breadTop__2_r0K",breadBottom:"BurgerIngredient_breadBottom__2jGjU",meat:"BurgerIngredient_meat__1oXMz",onion:"BurgerIngredient_onion__3qo7h",tomato:"BurgerIngredient_tomato__wWsi2",lettuce:"BurgerIngredient_lettuce__3EYw_",cheese:"BurgerIngredient_cheese__3Zd5F",bacon:"BurgerIngredient_bacon__3mIes"}},,,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__b_bIv",Label:"BuildControl_Label__10iUW",Less:"BuildControl_Less__20jsZ",More:"BuildControl_More__1j5pS",quantity:"BuildControl_quantity__2dPOe",ButtonWrapper:"BuildControl_ButtonWrapper__1O93U"}},,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__mBwT_",Open:"SideDrawer_Open__2YCRM",Close:"SideDrawer_Close__1KiEK",Logo:"SideDrawer_Logo__3Cl7O"}},function(e,t,n){e.exports={Price:"BuildControls_Price__1fwn_",BuildControls:"BuildControls_BuildControls__2s5MW",OrderButton:"BuildControls_OrderButton__1p9QS",enable:"BuildControls_enable__3CJAn",Controls:"BuildControls_Controls__xS7Em"}},function(e,t,n){e.exports={Input:"Input_Input__3cBI6",Label:"Input_Label__1v3Uc",InputElement:"Input_InputElement__3rTLZ"}},,function(e,t,n){e.exports={Order:"Order_Order__3YZwO",Ingredient:"Order_Ingredient__2Rf6A",Price:"Order_Price__1Iquq"}},,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__24NhD",Logo:"Toolbar_Logo__3AGXq",DesktopOnly:"Toolbar_DesktopOnly__CitsQ"}},function(e,t,n){e.exports={NavigationItem:"Navigationitem_NavigationItem__3b0sO",active:"Navigationitem_active__34V5w"}},,,function(e,t,n){e.exports={Button:"Button_Button__1ouAX",Success:"Button_Success__1BGa4",Danger:"Button_Danger__18hgc"}},function(e,t,n){e.exports={OrderSummary:"OrderSummary_OrderSummary__1q2gm",IngredientsList:"OrderSummary_IngredientsList__I_oVx"}},function(e,t,n){e.exports={LoaderContainer:"Spinner_LoaderContainer__3yAer",Loader:"Spinner_Loader__2C0iS",load8:"Spinner_load8__d1jaO"}},,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/burgerIcon.3f37c71e.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__yqy_8"}},function(e,t,n){e.exports={NavigationItems:"Navigationitems_NavigationItems__Kp1SB"}},,,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__2h9XM"}},function(e,t,n){e.exports={Content:"Layout_Content__XAS1y"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3cPEq"}},function(e,t,n){e.exports={burger:"Burger_burger__1Fkgz"}},function(e,t,n){e.exports={Modal:"Modal_Modal__-GjUy"}},,,function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3m-xX"}},function(e,t,n){e.exports={ContactData:"ContactData_ContactData__39De1"}},function(e,t,n){e.exports={Orders:"Orders_Orders__1NofG"}},,function(e,t,n){e.exports=n(83)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(38),c=n.n(o),i=n(10),l=(n(60),n(1)),s=n(2),u=n(3),d=n(4),m=function(e){return e.children},p=n(21),h=n.n(p),g=n(39),_=n.n(g),b=n(40),f=n.n(b),v=function(e){return r.a.createElement("div",{onClick:e.toggle,className:f.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:_.a,alt:"My Burger"}))},E=n(41),y=n.n(E),C=n(22),O=n.n(C),k=function(e){return r.a.createElement("li",{className:O.a.NavigationItem},r.a.createElement(i.b,{to:e.link,exact:!0,activeClassName:O.a.active},e.children))},S=function(){return r.a.createElement("ul",{className:y.a.NavigationItems},r.a.createElement(k,{link:"/"},"Burger Builder"),r.a.createElement(k,{link:"/orders"},"Orders"))},j=n(44),w=n.n(j),N=function(e){return r.a.createElement("div",{className:w.a.DrawerToggle,onClick:e.toggle},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},B=function(e){return r.a.createElement("header",{className:h.a.Toolbar},r.a.createElement(N,{toggle:e.toggle}),r.a.createElement(v,null),r.a.createElement("nav",{className:h.a.DesktopOnly},r.a.createElement(S,null)))},I=n(45),D=n.n(I),x=n(15),L=n.n(x),P=n(46),T=n.n(P),H=function(e){return e.show?r.a.createElement("div",{className:T.a.Backdrop,onClick:e.clicked},e.children):null},M=function(e){var t=[L.a.SideDrawer];return e.open?t.push(L.a.Open):t.push(L.a.Close),r.a.createElement(m,null,r.a.createElement(H,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:L.a.Logo},r.a.createElement(v,{toggle:e.toggle})),r.a.createElement("nav",null,r.a.createElement(S,null))))},q=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).sideDrawerClosedHandler=function(){a.setState({showSideDrawer:!1})},a.toggleSideDrawerHandler=function(){a.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},a.state={showSideDrawer:!1},a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(B,{toggle:this.toggleSideDrawerHandler}),r.a.createElement(M,{toggle:this.toggleSideDrawerHandler,closed:this.sideDrawerClosedHandler,open:this.state.showSideDrawer}),r.a.createElement("main",{className:D.a.Content},this.props.children))}}]),n}(a.Component),A=n(13),U=n(54),W=n(47),R=n.n(W),F=n(8),X=n.n(F),Y=n(11),z=n.n(Y),G=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:X.a.breadBottom});break;case"bread-top":e=r.a.createElement("div",{className:X.a.breadTop});break;case"meat":e=r.a.createElement("div",{className:X.a.meat});break;case"cheese":e=r.a.createElement("div",{className:X.a.cheese});break;case"bacon":e=r.a.createElement("div",{className:X.a.bacon});break;case"lettuce":e=r.a.createElement("div",{className:X.a.lettuce});break;case"tomato":e=r.a.createElement("div",{className:X.a.tomato});break;case"onion":e=r.a.createElement("div",{className:X.a.onion})}return e}}]),n}(a.Component);G.propType={type:z.a.string.isRequired};var Z=G,K=n(9),$={onion:0,tomato:1,lettuce:2,bacon:3,cheese:4,meat:5},J=Object(K.f)((function(e){var t=Object.keys(e.ingredients).filter((function(t){return e.ingredients[t]>0})).sort((function(e,t){return $[e]-$[t]})).map((function(t){return Object(U.a)(Array(e.ingredients[t])).map((function(e,n){return r.a.createElement(Z,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return r.a.createElement("div",{className:R.a.burger},r.a.createElement(Z,{type:"bread-top"}),0===t.length?r.a.createElement("p",null,"Start adding some ingredients"):t,r.a.createElement(Z,{type:"bread-bottom"}))})),Q=n(16),V=n.n(Q),ee=n(12),te=n.n(ee),ne=function(e){return r.a.createElement("div",{className:te.a.BuildControl},r.a.createElement("div",{className:te.a.Label},e.label),r.a.createElement("div",{className:te.a.ButtonWrapper},r.a.createElement("button",{className:te.a.Less,onClick:e.remove,disabled:e.disabled},"-"),r.a.createElement("span",{className:te.a.quantity},e.quantity),r.a.createElement("button",{className:te.a.More,onClick:e.add},"+")))},ae=n(25),re=n.n(ae),oe=function(e){return r.a.createElement("button",{onClick:e.clicked,className:[re.a.Button,re.a[e.buttonType]].join(" "),disabled:e.disabled},e.children)},ce=[{label:"Lettuce",type:"lettuce"},{label:"Tomato",type:"tomato"},{label:"Onion",type:"onion"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],ie=function(e){return r.a.createElement("div",{className:V.a.BuildControls},r.a.createElement("p",{className:V.a.Price},"Current Price: ",r.a.createElement("strong",null,"$",e.price.toFixed(2))),r.a.createElement("div",{className:V.a.Controls},ce.map((function(t){return r.a.createElement(ne,{key:t.label,label:t.label,quantity:e.ingredients[t.type],add:function(){return e.ingredientAdd(t.type)},remove:function(){return e.ingredientRemove(t.type)},disabled:e.disabledInfo[t.type]})}))),r.a.createElement(oe,{buttonType:"Success",clicked:e.ordered,disabled:!e.purchasable,className:V.a.OrderButton},"Order now"))},le=n(48),se=n.n(le),ue=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(H,{show:this.props.show,clicked:this.props.modalClosed},r.a.createElement("div",{className:se.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-200vh)",opacity:this.props.show?"1":"0"}},this.props.children)))}}]),n}(a.Component),de=n(26),me=n.n(de),pe=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(){console.log("OrderSummary: ")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return r.a.createElement("span",{key:t,style:{textTransform:"capitalize"}},t,": ",e.props.ingredients[t])}));return r.a.createElement("div",{className:me.a.OrderSummary},r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("div",{className:me.a.IngredientsList},t),r.a.createElement("p",null,"Total Price: ",r.a.createElement("strong",null,"$",this.props.price.toFixed(2))),r.a.createElement("p",null,"Continue to checkout?"),r.a.createElement("div",null,r.a.createElement(oe,{clicked:this.props.cancel,buttonType:"Danger"},"Cancel"),r.a.createElement(oe,{clicked:this.props.continue,buttonType:"Success"},"Continue")))}}]),n}(a.Component),he=n(49),ge=n.n(he).a.create({baseURL:"https://reactburgerbuilder-31ed5.firebaseio.com/"}),_e=n(27),be=n.n(_e),fe=function(){return r.a.createElement("div",{className:be.a.LoaderContainer},r.a.createElement("div",{className:be.a.Loader},"Loading..."))},ve=function(e,t){return function(n){Object(d.a)(o,n);var a=Object(u.a)(o);function o(){var e;Object(l.a)(this,o);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(s.a)(o,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(ue,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),o}(a.Component)},Ee={onion:.25,tomato:.35,lettuce:.3,bacon:1.25,cheese:1,meat:2.5},ye=ve(function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){ge.get("https://reactburgerbuilder-31ed5.firebaseio.com/ingredients.json").then((function(e){var t=Object.keys(e.data).reduce((function(t,n){return t+e.data[n]*Ee[n]}),4),n=t>4;a.setState({ingredients:e.data,purchasable:n,totalPrice:t})})).catch((function(e){a.setState({error:e}),console.log(e)}))},a.addIngredientHandler=function(e){var t=Number.parseInt(a.state.ingredients[e])+1,n=Object(A.a)({},a.state.ingredients);n[e]=t;var r=Ee[e],o=a.state.totalPrice+r;a.setState({ingredients:n,totalPrice:o}),a.updatePurchaseState(n)},a.removeIngredientHandler=function(e){var t=Number.parseInt(a.state.ingredients[e]);if(!(t<=0)){var n=t-1,r=Object(A.a)({},a.state.ingredients);r[e]=n;var o=Ee[e],c=a.state.totalPrice-o;a.setState({ingredients:r,totalPrice:c}),a.updatePurchaseState(r)}},a.purchasingHandler=function(){a.setState({purchasing:!0})},a.purchaseCancelHandler=function(){a.setState({purchasing:!1})},a.continuePurchaseHandler=function(){var e=[];for(var t in a.state.ingredients)e.push(encodeURIComponent(t)+"="+encodeURIComponent(a.state.ingredients[t]));e.push("price="+a.state.totalPrice);var n=e.join("&");a.props.history.push({pathname:"/checkout",search:"?"+n})},a.state={ingredients:null,totalPrice:4,purchasable:!1,purchasing:!1,loading:!1,error:null},a}return Object(s.a)(n,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).reduce((function(t,n){return t+e[n]}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=this,t=Object(A.a)({},this.state.ingredients);for(var n in t)t[n]=t[n]<=0;var a=r.a.createElement(pe,{ingredients:this.state.ingredients,cancel:this.purchaseCancelHandler,continue:function(t){t.stopPropagation(),e.continuePurchaseHandler()},price:this.state.totalPrice});this.state.loading&&(a=r.a.createElement(fe,null));var o=r.a.createElement(m,null,r.a.createElement(J,{ingredients:this.state.ingredients}),r.a.createElement(ie,{ingredients:this.state.ingredients,ingredientAdd:this.addIngredientHandler,ingredientRemove:this.removeIngredientHandler,disabledInfo:t,price:this.state.totalPrice,purchasable:this.state.purchasable,ordered:this.purchasingHandler}));return this.state.ingredients||(o=this.state.error?r.a.createElement("p",null,"Ingredients can't be loaded"):r.a.createElement(fe,null)),r.a.createElement(m,null,r.a.createElement(ue,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},a),o)}}]),n}(a.Component),ge),Ce=n(50),Oe=n(51),ke=n.n(Oe),Se=function(e){return r.a.createElement("div",{className:ke.a.CheckoutSummary},r.a.createElement("h1",null,"We hope it tastes well"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(J,{ingredients:e.ingredients})),r.a.createElement("div",{style:{margin:"20px"}},r.a.createElement(oe,{buttonType:"Danger",clicked:e.checkoutCancelled},"Cancel"),r.a.createElement(oe,{buttonType:"Success",clicked:e.checkoutContinued},"Continue")))},je=n(52),we=n.n(je),Ne=n(17),Be=n.n(Ne),Ie=function(e){var t=null;switch(e.type){case"text":default:t=r.a.createElement("input",Object.assign({className:Be.a.InputElement,type:"text"},e))}return r.a.createElement("div",{className:Be.a.Input},r.a.createElement("label",{className:Be.a.Label},e.label),t)},De=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",address:{street:"",zipCode:""},loading:!1},e.orderHandler=function(t){console.log(e.props),t.preventDefault(),e.setState({loading:!0});var n={ingredients:e.props.ingredients,price:e.props.price,cutomer:{name:"Lalo Landa",address:{street:"Test Street",zipCode:"00001",country:"London"},email:"123@test.com",deliveryMethod:"Fastest"}};ge.post("/order.json",n).then((function(t){e.setState({loading:!1}),e.props.history.push("/")})).catch((function(t){e.setState({loading:!1})}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=r.a.createElement("form",null,r.a.createElement(Ie,{placeholder:"Name",type:"text"}),r.a.createElement(Ie,{placeholder:"Email",type:"email"}),r.a.createElement(Ie,{placeholder:"Street",type:"text"}),r.a.createElement(Ie,{placeholder:"ZipCode",type:"text"}),r.a.createElement(oe,{buttonType:"Success",clicked:function(t){return e.orderHandler(t)}},"Order"));return this.state.loading&&(t=r.a.createElement(fe,null)),r.a.createElement("div",{className:we.a.ContactData},r.a.createElement("h4",null,"Entry your Contact Data"),t)}}]),n}(a.Component),xe=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){var e,t,n=new URLSearchParams(a.props.location.search),r={},o=Object(Ce.a)(n.entries());try{for(o.s();!(t=o.n()).done;){var c=t.value;"price"===c[0]?e=c[1]:r[c[0]]=c[1]}}catch(i){o.e(i)}finally{o.f()}a.setState({ingredients:r,price:e})},a.checkoutContinuedHandler=function(){a.props.history.replace("/checkout/contact-data")},a.checkoutCancelledHandler=function(){a.props.history.goBack()},a.state={ingredients:{meat:1,cheese:1,lettuce:1},price:0},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(a.Fragment,null,r.a.createElement(Se,{ingredients:this.state.ingredients,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),r.a.createElement(K.a,{path:this.props.match.path+"/contact-data",render:function(){return r.a.createElement(De,Object.assign({ingredients:e.state.ingredients,price:e.state.price},e.props))}}))}}]),n}(a.Component),Le=n(19),Pe=n.n(Le),Te=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var a=t.map((function(e,t){return e.amount>0?r.a.createElement("span",{key:t,className:Pe.a.Ingredient},e.name,": ",e.amount):null}));return r.a.createElement("div",{className:Pe.a.Order},r.a.createElement("p",null,"Ingredients:"),a,r.a.createElement("p",{className:Pe.a.Price},"Price: ",r.a.createElement("strong",null,"USD $",Number.parseFloat(e.price).toFixed(2))))},He=n(53),Me=n.n(He),qe=ve(function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={orders:[],loading:!0},e.componentDidMount=function(){ge.get("/order.json").then((function(t){var n=[];for(var a in t.data)n.push(Object(A.a)({},t.data[a],{id:a}));e.setState({loading:!1,orders:n})})).catch((function(t){e.setState({loading:!1})}))},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:Me.a.Orders},this.state.loading?r.a.createElement(fe,null):this.state.orders.map((function(e){return r.a.createElement(Te,Object.assign({},e,{key:e.id}))})))}}]),n}(a.Component),ge);var Ae=function(){return r.a.createElement("div",null,r.a.createElement(q,null,r.a.createElement(K.c,null,r.a.createElement(K.a,{path:"/checkout",component:xe}),r.a.createElement(K.a,{path:"/orders",component:qe}),r.a.createElement(K.a,{path:"/",exact:!0,component:ye}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(i.a,{basename:"BurgerBuilder"},r.a.createElement(Ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[55,1,2]]]);
//# sourceMappingURL=main.7d0aa1d1.chunk.js.map