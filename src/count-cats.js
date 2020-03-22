module.exports = function countCats(mat) {
  return(String(mat).split(',').filter(word => word == '^^').length);
};
