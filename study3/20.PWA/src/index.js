
// import _ from "lodash";
// import $ from "jquery";
// import {ui} from "./jquery.ui";
// ui()
// const dom = $('<div></div>')
// dom.html(_.join(['dell', 'lee', 'hello']), '---');
// $('body').append(dom)

console.log('hello world !')

if('serviceWorker' in navigator) {
    console.log(123)
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then((registration) => {
            console.log("service-worker registed");
        }).catch(err => {
            console.log('service-worker register error')
        } )
    })
}