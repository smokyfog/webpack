//同步引入模块


// import _ from "lodash";
// import jquery from "jquery";

// console.log(_.join(['a', 'b', 'c'], '***'));

// console.log(_.join(['a', 'b', 'c'], '***'));

// import test from "./test"
// console.log(test.name)

/*
    main.js被拆分为loadsh.js和main.js
    当业务逻辑发生变化的时候，只要加载main.js即可

    code splitting
*/



//异步引入模块

// function getComponent() {
//     return import(/*webpackChunkName:"lodash"*/'lodash').then(({ default: _ }) => {
//         var element = document.createElement('div');
//         element.innerHTML = _.join(['Dell', 'Lee'], '-');
//         return element;
//     })
// }

// getComponent().then((element) => {
//     document.body.appendChild(element)
// })