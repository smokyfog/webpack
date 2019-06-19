import img from "./2.jpg";
import style from "./index.scss";
import createAvatar from "./createAvatar";
createAvatar()

var image = new Image();
image.src = img;
image.classList.add(style.avatar)
var root = document.getElementById("root")

root.append(image)
