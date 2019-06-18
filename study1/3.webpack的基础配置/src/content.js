function Content (){
    var dom = document.getElementById("root");
    var Content = document.createElement("div");
    Content.innerText = 'Content';
    dom.append(Content);
}
export default Content