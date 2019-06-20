//同步引入模块

// var element = document.createElement('div');
// element.innerHTML = _.join(['Dell', 'Lee'], '-');
// document.body.appendChild(element)


//异步引入模块

// async function getComponent() {
//     const { default: _ } = await import(/*webpackChunkName:"lodash"*/'lodash');
//     const element = document.createElement('div');
//     element.innerHTML = _.join(['Dell', 'Lee'], '-');
//     return element;
// }

// getComponent().then((element) => {
//     document.body.appendChild(element)
// })

document.addEventListener('click', () => {
    import("./click").then(({default:func}) => {
        func();
    })
})

