// import './style.css';    
import counter from "./counter";
import number from "./number"

// var button = document.createElement('button');
// button.innerHTML = '新增';
// document.body.appendChild(button);
// button.onclick = function(){
//     var div = document.createElement('div');
//     div.innerHTML = 'item';
//     document.body.appendChild(div)
// }

counter()
number()

if(module.hot){                         //如果number发生了变化则执行里面的代码
    module.hot.accept('./number', () => {
        var ele = document.getElementById('number');
        document.body.removeChild(ele);
        number();
    });
}