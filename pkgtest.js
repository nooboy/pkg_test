/**
 * pkgtestpkg - description
 *
 * @param  {type} name description
 * @return {type}      description
 */
// function pkgtestpkg(name) {
//     console.log('hello ',name||'default name');
// }
// exports.default = pkgtestpkg;

module.exports = {
    sum: function(a, b) {
        return a+b
    },
    sub: function(a, b) {
        return a-b
    }
}

