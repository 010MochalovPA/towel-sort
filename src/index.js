module.exports = function towelSort (matrix) {
  let result = new Array();
    if (!matrix || matrix.length === 0){
        return result;
    }
    matrix.forEach((item,index) => {
        if (index === 0 || index % 2 === 0){
            item
                .forEach(item => result.push(item));
        } else {
            item
                .reverse()
                .forEach(item => result.push(item));
        }
    });
    return result;
}
