import img from "./2.jpg";
function createAvatar() {
    var image = new Image();
    image.src = img;
    image.classList.add('avatar')

    var root = document.getElementById("root")
    root.append(image)
}

export default createAvatar