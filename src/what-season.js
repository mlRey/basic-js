module.exports = function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  if (!date.getTime()) throw new Error();
  let month = date.getMonth()

  if (month > 1 && month < 5) {
    return 'spring';
  }
  else if (month > 4 && month < 8) {
    return 'summer';
  }
  else if (month > 7 && month < 11) {
    return 'autumn';
  }
  else { return 'winter'; }
};
