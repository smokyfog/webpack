const loaderUtils = require("loader-utils");

//loaderUtils
// module.exports = function(source){
//     const options = loaderUtils.getOptions(this);
//     return source.replace("dell", options.name)
// }

// module.exports = function(source){
//     const options = loaderUtils.getOptions(this);
//     const result = source.replace("dell", options.name)
//     this.callback(null, result)
// }

//异步loder
module.exports = function(source){
    const options = loaderUtils.getOptions(this);
    const callback = this.async();
    setTimeout(() => {
        const result = source.replace("dell", options.name)
        callback(null, result);
    },1000)
}
