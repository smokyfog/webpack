//同步引入模块

// import _ from "lodash";

// console.log(_.join(['a', 'b', 'c'], '***'));

// console.log(_.join(['a', 'b', 'c'], '***'));

/*
    main.js被拆分为loadsh.js和main.js
    当业务逻辑发生变化的时候，只要加载main.js即可

    code splitting
*/



//异步引入模块

function getComponent() {
    return import('lodash').then(({ default: _ }) => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['Dell', 'Lee'], '-');
        return element;
    })
}

getComponent().then((element) => {
    document.body.appendChild(element)
})